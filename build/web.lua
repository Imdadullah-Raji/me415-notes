-- HTML filter for the web edition (build_web.py). The PDF counterpart is boxes.lua.
-- Steps become a title with two toggles (hint, step); boxes become styled divs; lookups become popover links.
local boxes = {KEY='key', EXAMPLE='example', TRY='try', TIP='tip', TRAP='trap', MOCK='mock', ASKED='asked', PRACTICE='practice'}

local function html(s) return pandoc.RawBlock('html', s) end

local function escape(s)
  return (s:gsub('&', '&amp;'):gsub('<', '&lt;'):gsub('>', '&gt;'):gsub('"', '&quot;'))
end

function BlockQuote(el)
  local first = el.content[1]
  if first and first.t == 'Para' and first.content[1] and first.content[1].t == 'Strong' then
    local tag = pandoc.utils.stringify(first.content[1]):match('^(%u+)')
    local cls = tag and boxes[tag]
    if cls then
      return pandoc.Div(el.content, pandoc.Attr('', {'box', cls}))
    end
  end
end

function Div(el)
  local c = el.classes
  if c:includes('step') then
    local hint, body = nil, {}
    for _, b in ipairs(el.content) do
      if b.t == 'Div' and b.classes:includes('hint') then hint = b else table.insert(body, b) end
    end
    local out = {html('<div class="step"><div class="step-head"><span class="step-title">' ..
                      escape(el.attributes.title or '') .. '</span></div>')}
    if hint then
      table.insert(out, html('<details class="hint"><summary>Hint</summary>'))
      for _, b in ipairs(hint.content) do table.insert(out, b) end
      table.insert(out, html('</details>'))
    end
    table.insert(out, html('<details class="sol"><summary>Show this step</summary>'))
    for _, b in ipairs(body) do table.insert(out, b) end
    table.insert(out, html('</details></div>'))
    return out
  elseif c:includes('answer') then
    local out = {html('<details class="answer"><summary>' .. escape(el.attributes.label or 'Answer') .. '</summary>')}
    for _, b in ipairs(el.content) do table.insert(out, b) end
    table.insert(out, html('</details>'))
    return out
  elseif c:includes('liftdraw') then
    -- The written drawing directive becomes the stage-by-stage drawing (liftdraw.js); the text is kept for no-JS.
    local out = {html('<figure class="liftdraw" id="' .. el.identifier .. '" data-anim="lift" ' ..
                      'aria-label="Drawing the traction lift, stage by stage">' ..
                      (el.attributes.caption and ('<figcaption>' .. escape(el.attributes.caption) .. '</figcaption>') or '') ..
                      '</figure><noscript>')}
    for _, b in ipairs(el.content) do table.insert(out, b) end
    table.insert(out, html('</noscript>'))
    return out
  end
end

function Span(el)
  if el.classes:includes('aside') then
    -- An aside: a dagger that opens the note in place, inside the sentence (lookup.js toggles it).
    local out = {pandoc.RawInline('html', '<button type="button" class="dag" aria-expanded="false" ' ..
                                  'title="Show the note">†</button><span class="aside" hidden>')}
    for _, i in ipairs(el.content) do table.insert(out, i) end
    table.insert(out, pandoc.RawInline('html', '</span>'))
    return out
  end
  if el.classes:includes('lookup') then
    local a = el.attributes
    return pandoc.Link(el.content, '#', '', pandoc.Attr('', {'lookup'},
      {{'data-t', a.t or ''}, {'data-row', a.row or ''}, {'data-col', a.col or ''}}))
  end
end

-- "Table 18(a)" / "Table 20:" in running text -> a link that previews the whole table.
function Inlines(inl)
  local out, i = {}, 1
  while i <= #inl do
    local a, sp, b = inl[i], inl[i + 1], inl[i + 2]
    if a.t == 'Str' and (a.text == 'Table' or a.text == '(Table') and sp and sp.t == 'Space' and b and b.t == 'Str' then
      local num, sub, rest = b.text:match('^(%d+)%((%a)%)(.*)$')
      if not num then num, rest = b.text:match('^(%d+)(.*)$'); sub = '' end
      if num and not rest:match('^%d') then
        local id = num .. sub
        if a.text == '(Table' then table.insert(out, pandoc.Str('(')) end
        table.insert(out, pandoc.Link({pandoc.Str('Table ' .. num .. (sub ~= '' and '(' .. sub .. ')' or ''))}, '#', '',
          pandoc.Attr('', {'tref'}, {{'data-t', id}})))
        if rest ~= '' then table.insert(out, pandoc.Str(rest)) end
        i = i + 3
        goto continue
      end
    end
    table.insert(out, a)
    i = i + 1
    ::continue::
  end
  return out
end

-- "## 1.2 Design conditions ★": the module's first-read mark becomes a badge.
function Header(el)
  local last = el.content[#el.content]
  if last and last.t == 'Str' and last.text == '★' then
    el.content:remove(#el.content)
    if el.content[#el.content] and el.content[#el.content].t == 'Space' then el.content:remove(#el.content) end
    el.content:insert(pandoc.Space())
    el.content:insert(pandoc.Span({pandoc.Str('First read')}, pandoc.Attr('', {'firstread'})))
    return el
  end
end

function Image(el)
  local w = el.title:match('w=([%d%.]+)')
  if w then
    el.attributes.style = string.format('width:%d%%', math.floor(tonumber(w) * 100))
    el.title = el.title:gsub('w=[%d%.]+', '')
  end
  return el
end

function RawBlock(el)
  if el.format == 'html' and el.text:match('pagebreak') then return {} end
end

function Strong(el)
  local s = pandoc.utils.stringify(el)
  if s == '[TUTOR-GENERATED]' or s:match('^%[FROM SOURCE') then
    return pandoc.Span({pandoc.Str(s:sub(2, -2))}, pandoc.Attr('', {'srcflag'}))
  end
end

-- Table refs are not linked on the data-book pages themselves (-M databook=true).
local databook = false
local function Meta(m) databook = m.databook and true or false end
local function MaybeInlines(inl) if not databook then return Inlines(inl) end end

return {{Meta = Meta}, {Inlines = MaybeInlines},
        {Span = Span, Div = Div, BlockQuote = BlockQuote, Header = Header, Image = Image, RawBlock = RawBlock, Strong = Strong}}
