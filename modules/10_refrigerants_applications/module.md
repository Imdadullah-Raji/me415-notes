<!-- pagebreak -->
# Module 10: Refrigerants and applications of refrigeration

| | |
|---|---|
| **Where it appears** | Eight of eleven papers, 2011-12 to 2022-23 (not 2018-19, 2020-21, 2023-24): Q8(a), Q8(c) of Section B (2011-12); Q5(a) of Section B (2012-13); Q1(a) of Section A and Q7(a) of Section B (2013-14); **Q1(a) of Section A in 2015-16, 2017-18, 2021-22 and 2022-23**; Q6(b) of Section B (2016-17) |
| **Share of all marks** | 3.4% (105 of 3055 weighted marks, 10 parts). Refrigerants (RF1) 50 marks in 4 parts; applications and quick freezing (RF2) 55 marks in 6 parts. All theory: no numericals have been set. |
| **Time** | core 1.5 h (§10.2, §10.3, §10.7, §10.8, §10.10–10.12 and Solutions 10.1–10.5, 10.7, 10.8), full 2.5 h (all 10 solutions) |
| **Sources** | Aloke sir's slides pp.104–113 (refrigerants); Arif sir's slides pp.1–13 (definition, components, applications, quick freezing); Full note pp.70–76; Rifat vai's notes pp.1–3; Ameen, *Refrigeration and Air Conditioning* Ch. 1, 4, 7; Hundy, *Refrigeration, Air Conditioning and Heat Pumps* 5th ed. Ch. 3, 7, 12, 14 |

**How it has been asked:**

- **Quick freezing (the commonest question of the module, Section A Q1(a)):** "**What are the basic characteristics of quick freezing process? Classify quick freezing process**" (**2012-13 ≡ 2015-16 verbatim**, 5 marks); the same plus "**Briefly describe the Plate Freezing process with schematic diagram**" (2021-22, 15 marks); "What are the major applications of refrigeration system? **Briefly describe the Immersion Freezing process with schematic diagram**" (2022-23, 10 marks).
- **Applications of refrigeration:** "**What are the major applications of refrigeration system?**" (2013-14, 5 marks; repeated inside 2022-23); "**Define refrigeration system. With a schematic diagram show the key components of a refrigeration system.** What are the applications of refrigeration system?" (2017-18, 15 marks).
- **Desirable properties:** "What are the desirable properties of a refrigerant? **Explain the necessity of each particular property** for efficient running of a refrigeration system" (2016-17, 18 marks).
- **Numbering:** "Describe the **numbering system for Hydrocarbon, Zeotropic mixtures and Azeotropic mixtures** type of refrigerants with proper examples" (2013-14, 17 marks).
- **Saturation-curve slopes:** "Discuss the **desirable slopes of saturation curves (liquid and vapor)** of a refrigerant" (2011-12, 10 marks).
- **Water as a refrigerant:** "**Why is H$_2$O not used as a refrigerant in compression refrigeration system?** (Although it is used as a refrigerant in absorption refrigeration)" (2011-12, 5 marks).

> **KEY: Toolkit for this module**
>
> - **Refrigeration**: removing heat from a space or substance and rejecting it elsewhere, to bring its temperature below the surroundings and keep it there [Arif p.2b]. **Refrigerant**: the working fluid that absorbs heat by evaporating at low pressure and rejects it by condensing at high pressure. **Primary** refrigerant changes phase in the cycle; **secondary** refrigerant (chilled water, brine, glycol) only carries heat by sensible temperature change [Ameen §4].
> - **Four components of a VCR system:** compressor → condenser → expansion device → evaporator → compressor.
> - **Numbering rule (methane, ethane, propane series, saturated):** for $\mathrm{C}_c\mathrm{H}_h\mathrm{F}_f\mathrm{Cl}_x$, $$\text{R-}(c-1)(h+1)(f),\qquad x=2c+2-h-f$$ A zero first digit is dropped (R11, R22, R32). Lower-case **a, b** = more asymmetric isomer (R134a). Unsaturated (olefins): a fourth digit 1 in front (R1270, R1234yf).
> - **Series:** **400** zeotropes (R404A, R407C, R410A; upper-case letter = composition), **500** azeotropes (R502, R507A), **600** miscellaneous organics (R600 butane, R600a isobutane), **700** inorganics: **R = 700 + molar mass** (R717 NH$_3$, R718 H$_2$O, R729 air, R744 CO$_2$, R764 SO$_2$).
> - **Prefixes:** CFC (Cl, F, C), HCFC (H, Cl, F, C), HFC (H, F, C), HC (H, C), HFO (unsaturated HFC).
> - **Safety class (ASHRAE 34):** letter = toxicity (A lower, B higher); digit = flammability (1 no flame propagation, 2L/2 lower, 3 higher). R134a A1, R32 A2L, R290 A3, R123 B1, R717 B2L.
> - **ODP** relative to R11 = 1; **GWP** relative to CO$_2$ = 1 (100 years). Montreal Protocol 1987 (CFCs, HCFCs out); Kigali Amendment 2016 (HFCs phased down).
> - **Saturation-curve slopes on T–s:** desirable = both lines **steep** (narrow, tall dome, close to the Carnot rectangle). Vapour line leans left = **wet** fluid (hot discharge), vertical = **isentropic** (ideal), leans right = **dry** fluid (wet compression). Steep liquid line = low $c_{p,l}/h_{fg}$ = little flash gas.
> - **Glide** of a zeotrope $=T_{dew}-T_{bubble}$ at one pressure (R407C ≈ 7 K, R404A < 1 K, R410A ≈ 0.1 K).
> - **Quick freezing:** fast passage through the zone of maximum ice-crystal formation (−1 to −5 °C) → small crystals, little cell damage, little drip loss. Methods: **air blast**, **immersion/spray**, **indirect contact (plate)**, and **cryogenic** (LN$_2$, CO$_2$).

## 10.1 Refrigeration, the refrigeration system and the refrigerant

**Refrigeration** "is a process of reducing and maintaining low temperature of a space or material below the temperature of the surroundings" [Arif p.2b; Kanak p.70]. The longer definition: "the process of removing heat from an enclosed space, or from a substance, and rejecting it elsewhere for the purpose of lowering the temperature of the enclosed space or substance and then maintaining that lower temperature."

Heat does not flow by itself from cold to hot (second law). So refrigeration needs a **device** (pump or compressor) and a **working substance**, the **refrigerant**, "which absorbs heat from low temperature (objects/space) and releases heat to elsewhere at high temperature" [Arif p.3a]. The refrigerant usually works in two phases: it **boils** at a low pressure (and low temperature) to absorb heat, and **condenses** at a high pressure (and high temperature) to reject it.

A **refrigeration system** is the set of components that carries the refrigerant round this cycle continuously. The vapour-compression (VCR) system holds about **80% of the market** [Arif p.3b]. It has four key components (Fig. 1):

![Fig. 1: VCR system schematic. A compressor (work in, shaft at right) sends high-pressure vapour up to the condenser at the top, which rejects heat to ambient air or cooling water. High-pressure liquid flows down the left side to the expansion valve; a low-pressure liquid–vapour mixture enters the evaporator at the bottom, which takes heat from the refrigerated space; low-pressure vapour returns to the compressor. [Arif p.3b; Kanak p.70]](figures/001.jpg "w=0.6")

| Component | State in → out | Function |
|---|---|---|
| **Evaporator** | low-pressure liquid–vapour mixture → low-pressure vapour | absorbs heat from the space or product: the refrigerant boils at a temperature below the space [Arif p.4b] |
| **Compressor** (reciprocating, rotary, scroll …) | low-pressure vapour → high-pressure superheated vapour | sucks vapour away so the evaporator pressure stays low; raises pressure so the vapour can condense above ambient temperature [Arif p.5a] |
| **Condenser** | high-pressure vapour → high-pressure liquid | rejects the evaporator heat plus the compressor work to air or water. Keep at least ½ ft between a condenser coil and the wall, or the refrigerator's life falls [Rifat p.2] |
| **Expansion device** (valve or capillary tube) | high-pressure liquid → low-pressure mixture | throttles the liquid to the evaporator pressure and meters the flow [Arif p.6a] |

In a domestic refrigerator (Fig. 2) the evaporator sits in the freezer compartment (−18 °C), the fresh-food compartment is at 3 °C, the condenser coils are on the back in kitchen air at 25 °C, a **capillary tube** is the expansion device and a hermetic compressor sits at the bottom [Arif p.6b].

![Fig. 2: Household refrigerator schematic: kitchen air at 25 °C; freezer compartment at −18 °C containing the evaporator coils, which absorb Q_L; fresh-food compartment at 3 °C below it; a capillary tube; condenser coils on the back rejecting Q_H to the kitchen; compressor at the bottom. [Arif p.6b]](figures/002.png "w=0.45")

**Primary and secondary refrigerants** [Ameen §4]. A **primary refrigerant** circulates in the cycle and changes phase: it is compressed, condensed, expanded and evaporated (R134a, R22, NH$_3$). A **secondary refrigerant** is a heat-transfer medium that is cooled by the primary refrigerant and carries the cooling to the load **without a change of state**, only with a change of temperature: chilled water in a central AC plant, or **brine**. Below 0 °C a non-freezing liquid is needed: sodium or calcium chloride solutions (hence the name brine) and propylene or ethylene glycol–water mixtures; propylene glycol is permitted where it may touch food [Hundy §12.6]. Secondary systems keep the toxic or expensive primary charge small and inside the plant room.

## 10.2 Desirable properties of a refrigerant ★

"No single refrigerant satisfies all the attributes desired … for all operating conditions" [Ameen §4.2]. The choice is always a compromise for the given duty (temperature level, compressor type, size). The slide list [Aloke p.104] and Hundy's list [Hundy §3.2] are the core; Ameen explains each [Ameen §4.2].

| Group | Desirable property | Why it is needed (effect on the plant) |
|---|---|---|
| Thermodynamic | **High latent heat of vaporisation** at the evaporator temperature | Large refrigerating effect per kg ⇒ **less refrigerant mass flow** for a given load, smaller pipes and pump/compressor [Aloke p.104] |
| | **High suction-gas density** (low specific volume of the suction vapour) | Large refrigerating effect per m³ of suction vapour ⇒ **small, compact compressor** and smaller suction line. (Centrifugal machines are the exception: they need a large volume flow, so they suit low-density refrigerants) [Ameen §4.2] |
| | **Positive but not excessive pressures** at evaporating and condensing temperatures | Evaporator pressure above atmospheric ⇒ **no air or moisture leaks in**, leaks are easy to find. Condensing pressure not too high ⇒ **lighter compressor, piping and shells**, less leakage [Aloke p.104; Ameen §4.2] |
| | **Low compression ratio** $p_c/p_e$ | **Low power** and high volumetric efficiency of the compressor; lower discharge temperature [Aloke p.104] |
| | **High critical temperature** (well above the condensing temperature) | No vapour can be condensed above $T_{cr}$. Near $T_{cr}$, $h_{fg}$ falls and the throttling loss rises, so COP falls badly (CO$_2$, $T_{cr}$ = 31 °C, needs very high pressure or a transcritical cycle) [Ameen §4.2; Hundy §3.9.6] |
| | **Low freezing point** (and triple point) well below the evaporator temperature | The refrigerant must not solidify in the evaporator [Ameen §4.2; Hundy §3.2] |
| | **Low normal boiling point** | Avoids deep vacuum in the evaporator (low capacity, air leaks) [Ameen §4.2] |
| | **Steep saturated-liquid and vapour lines** on T–s (low liquid specific heat, near-isentropic vapour line) | Little flash gas at the expansion valve; dry compression with low discharge superheat (§10.7) |
| | **Low discharge temperature** (low index of compression) | Protects oil and valves; NH$_3$ needs water-jacketed cylinders [Ameen §4.3] |
| Transport | **High thermal conductivity**; **low viscosity** of liquid and vapour | Good heat transfer ⇒ **smaller evaporator and condenser**; low pressure drop in lines and coils [Aloke p.104; Ameen §4.2] |
| Chemical | **Chemically stable and inert** at all working temperatures | No decomposition into non-condensable gases, acids or sludge [Ameen §4.2] |
| | **Non-corrosive; compatible** with metals, gaskets, motor insulation | Long life; no leaks. NH$_3$ attacks copper and brass, so ammonia plant is steel [Ameen §4.3] |
| | **Miscible with lubricating oil**, without reacting with it | The refrigerant carries oil back to the compressor from the evaporator; no oil logging [Ameen §4.2] |
| | **High dielectric strength** | Needed in hermetic compressors, where the motor winding is bathed in refrigerant [Hundy §3.2; Ameen §4.2] |
| Safety | **Non-toxic, non-irritating, odourless in AC** | Leaks must not harm people; class A preferred for occupied spaces [Aloke p.112] |
| | **Non-flammable, non-explosive** in air or with oil | Fire and explosion risk; class 1 preferred [Aloke p.112] |
| | **No effect on stored products** if it leaks | Food in cold stores must not be tainted [Ameen §4.2] |
| | **Easy leak detection** (odour, halide torch, electronic, soap bubbles) | Leaks found before charge loss or harm [Aloke p.113] |
| Environmental | **Zero ODP** and **low GWP**; short atmospheric life | Ozone layer and climate; required by the Montreal Protocol and the Kigali Amendment [Aloke p.111; Hundy §3.3–3.4] |
| Economic | **Low cost, easy availability** | Large plants hold a large charge and lose some each year [Ameen §4.2] |

> **TIP: Leak detection** [Aloke p.113; Ameen §4.3]. **Halide torch**: air drawn over a copper element heated by a methanol (CH$_3$OH) flame; a halocarbon leak turns the flame **green** (small leak) or **bluish with a red tip** (large leak). **Electronic** detector: ionisation current between two charged electrodes changes. **Soap bubbles** at joints (the only method for CO$_2$). Ammonia: its smell, or a **sulphur candle** that gives dense white smoke.

## 10.3 Classification and the ASHRAE numbering system ★

### Families and prefixes

Refrigerants are grouped as **halocarbons** (CFC, HCFC, HFC, HFO), **hydrocarbons**, **inorganic compounds**, and **mixtures** (azeotropes and zeotropes) [Ameen §4.1, Fig. 4.2]. The prefix tells the atoms present [Aloke p.106]:

| Name | Prefix | Atoms | Example | Ozone | Climate |
|---|---|---|---|---|---|
| Chlorofluorocarbon | CFC | Cl, F, C | R11, R12, R502 (blend) | high ODP | very high GWP |
| Hydrochlorofluorocarbon | HCFC | H, Cl, F, C | R22, R123 | low ODP | high GWP |
| Hydrobromofluorocarbon | HBFC | H, Br, F, C | (fire suppressants) | | |
| Hydrofluorocarbon | HFC | H, F, C | R32, R134a, R404A, R410A | ODP 0 | high GWP |
| Hydrofluoro-olefin | HFO | H, F, C, one C=C bond | R1234yf, R1234ze | ODP 0 | GWP < 10 |
| Hydrocarbon | HC | H, C | R290, R600a, R1270 | ODP 0 | GWP ≈ 3 |
| Perfluorocarbon | PFC | F, C | R14, R116 | ODP 0 | very high GWP |
| Halon | Halon | Br, (Cl), F, (H), C | R13B1 | very high ODP | |

Halocarbons are made by replacing some or all of the hydrogen atoms of methane (CH$_4$) or ethane (C$_2$H$_6$) by chlorine, fluorine or bromine [Ameen §4.1]. Chlorine is what destroys ozone: a fully halogenated CFC lives long enough to reach the stratosphere; adding hydrogen (HCFC) shortens its life [Ameen §4.1].

### Rule for halocarbons and hydrocarbons of the methane, ethane and propane series

For a saturated compound $\mathrm{C}_c\mathrm{H}_h\mathrm{F}_f\mathrm{Cl}_x$ (Fig. 3) [Aloke p.107; Hundy §3.5]:

$$\boxed{\text{R-}(c-1)\,(h+1)\,(f)}$$

- **First digit** = number of carbon atoms − 1. It is **omitted when it is zero** (methane series: R11, R22, R50).
- **Second digit** = number of hydrogen atoms + 1.
- **Third digit** = number of fluorine atoms.
- **Chlorine** is not written; it fills the remaining bonds. A saturated molecule with $c$ carbons has $2c+2$ places for H, F and Cl, so $$x=2c+2-h-f$$
- **Lower-case suffix a, b, c** marks an **isomer**. Ethane derivatives can place the same atoms on the two carbons in different ways. The plain number is the most symmetrical form (smallest difference between the atomic masses on the two carbons); **a**, then **b**, are increasingly asymmetrical [Aloke p.107]. R134 is CHF$_2$–CHF$_2$ (39 + 39); **R134a is CH$_2$F–CF$_3$** (21 + 57).
- **B + digit** = bromine atoms replacing chlorine (R13B1 = CBrF$_3$). A prefix **C** marks a cyclic molecule (RC318).
- **Unsaturated** compounds (one C=C double bond, the olefins) carry a **fourth digit 1** in front: propylene C$_3$H$_6$ = **R1270**; HFO R1234yf = CF$_3$CF=CH$_2$ (1, 3−1 = 2, 2+1 = 3, 4 F). The letters yf describe where the atoms sit on the middle and end carbon [Hundy §3.5].

![Fig. 3: Numbering scheme of R134a: R = Refrigerant; first digit 1 = number of carbon atoms − 1 (omitted when zero); second digit 3 = number of hydrogen atoms + 1; third digit 4 = number of fluorine atoms; the lowercase letter a denotes the specific isomer. [Aloke p.107, from Hundy Fig. 3.3]](figures/003.jpg "w=0.6")

> **TIP: Reading a number backwards (the "add 90" trick).** Add 90 to the number: the three digits are then directly **C, H, F**. R134 + 90 = 224 → C = 2, H = 2, F = 4, Cl = 6 − 2 − 4 = 0 → C$_2$H$_2$F$_4$. R22 + 90 = 112 → C = 1, H = 1, F = 2, Cl = 4 − 1 − 2 = 1 → CHClF$_2$. R290 + 90 = 380 → C$_3$H$_8$.

**Hydrocarbons** follow the same rule up to propane: methane CH$_4$ → R50; ethane C$_2$H$_6$ → R170; propane C$_3$H$_8$ → R290 [Aloke p.107]. Butane would need a "first digit" of 3 and a "second digit" of 11, which no longer fits, so butane and the heavier organics go into the **600 series**: R600 = n-butane, **R600a = isobutane** (the a again marks the isomer) [Aloke p.109; Hundy §3.5].

### Mixtures: 400 and 500 series

- **Zeotropic mixtures: 400 series** (Fig. 4). The number is given in the **chronological order** of ASHRAE approval and identifies **which components** are in the blend, **not the percentages**. An **upper-case letter** gives the **composition**: R407A = R32/R125/R134a (20/40/40), R407B = (10/70/20), R407C = (23/25/52) by mass [Aloke p.108; Hundy §3.5].
- **Azeotropic mixtures: 500 series**, also in order of approval: R500 = R12/R152a (73.8/26.2), R502 = R22/R115 (48.8/51.2), R507A = R125/R143a (50/50) [Hundy §3.5; Ameen Table 4.4].

![Fig. 4: Numbering scheme of R404A: R = Refrigerant; 4 = 400 series, denotes a zeotropic mixture; the next two digits (04) = chronological numbering designating the components of the mixture, but not their percentage; the uppercase letter A denotes the specific composition, i.e. the percentage of each component. [Aloke p.108, from Hundy Fig. 3.4]](figures/004.jpg "w=0.6")

> **TRAP: R507 composition on the slide.** The slide gives "R507 (R125/R134a (50/50))" [Aloke p.109]. R507 (R507A) is **R125/R143a (50/50)** [Hundy §3.5]. Write R143a.

### Inorganic compounds: 700 series

The number is **700 + the relative molecular mass** (rounded to the nearest whole number) [Aloke p.109; Hundy §3.5]: ammonia NH$_3$ (M = 17.03) → **R717**; water H$_2$O (18.02) → **R718**; air (28.97) → **R729**; carbon dioxide CO$_2$ (44.01) → **R744**; sulphur dioxide SO$_2$ (64.06) → **R764**. Where two inorganics have the same molar mass a letter separates them (N$_2$O is R744A).

> **EXAMPLE 10.1** `[TUTOR-GENERATED]` Decode the numbers R11, R12, R22, R32, R134a, R123, R290, R600a, R717, R718, R744, R404A, R410A and R502: give the formula, type, ODP, GWP and safety class.

**[TUTOR-GENERATED]** For the single compounds, use $c$ = first digit + 1, $h$ = second digit − 1, $f$ = third digit, $x=2c+2-h-f$. ODP and GWP (100-year, IPCC AR4, as in Hundy Table 3.1) and safety class from Hundy Table 3.1 and ASHRAE 34.

| Number | Digits → C, H, F; Cl | Formula, name | Type | ODP | GWP | Safety |
|---|---|---|---|---|---|---|
| R11 | (0)11 → C1, H0, F1; Cl = 4−0−1 = 3 | CCl$_3$F, trichlorofluoromethane | CFC | 1 | 4750 | A1 |
| R12 | (0)12 → C1, H0, F2; Cl = 2 | CCl$_2$F$_2$, dichlorodifluoromethane | CFC | 1 | 10 900 | A1 |
| R22 | (0)22 → C1, H1, F2; Cl = 1 | CHClF$_2$, chlorodifluoromethane | HCFC | 0.055 | 1810 | A1 |
| R32 | (0)32 → C1, H2, F2; Cl = 0 | CH$_2$F$_2$, difluoromethane | HFC | 0 | 675 | A2L |
| R134a | 134 → C2, H2, F4; Cl = 0; a = asymmetric | CH$_2$FCF$_3$, 1,1,1,2-tetrafluoroethane | HFC | 0 | 1430 | A1 |
| R123 | 123 → C2, H1, F3; Cl = 6−1−3 = 2 | CHCl$_2$CF$_3$, dichlorotrifluoroethane | HCFC | 0.02 | 77 | B1 |
| R290 | 290 → C3, H8, F0; Cl = 0 | C$_3$H$_8$, propane | HC | 0 | 3 | A3 |
| R600a | 600 series, a = isomer | C$_4$H$_{10}$, isobutane (CH(CH$_3$)$_3$) | HC | 0 | 3 | A3 |
| R717 | 700 + 17 | NH$_3$, ammonia | inorganic, natural | 0 | 0 | B2L |
| R718 | 700 + 18 | H$_2$O, water | inorganic, natural | 0 | 0 | A1 |
| R744 | 700 + 44 | CO$_2$, carbon dioxide | inorganic, natural | 0 | 1 | A1 |
| R404A | 400 series, blend 04, composition A | R125/R143a/R134a (44/52/4) | HFC zeotrope (near-azeotrope, glide < 1 K) | 0 | 3922 | A1 |
| R410A | 400 series, blend 10, composition A | R32/R125 (50/50) | HFC zeotrope (near-azeotrope, glide ≈ 0.1 K) | 0 | 2088 | A1 |
| R502 | 500 series, blend 02 | R22/R115 (48.8/51.2); R115 = CClF$_2$CF$_3$ | CFC-containing azeotrope | 0.33 | 4657 | A1 |

The components decode the same way: R125 = C2, H1, F5 → CHF$_2$CF$_3$; R143a = C2, H3, F3 → CH$_3$CF$_3$; R115 = C2, H0, F5, Cl = 1 → CClF$_2$CF$_3$. Methane R50 = CH$_4$, ethane R170 = C$_2$H$_6$. The rule fails for butane (c − 1 = 3, h + 1 = 11), which is why butanes are R600 and R600a.

> **TRAP: GWP values differ between sources.** Aloke sir's table [Aloke p.110] is from Hundy's 4th edition (older IPCC values): R22 1500, R134a 1300, R404A 3260, R410A 1725, R407C 1525. Hundy 5th ed. (IPCC AR4) gives R22 1810, R134a 1430, R404A 3922, R410A 2088, R407C 1774. Either set earns the marks if you say which; the ODP of R22 is 0.05 on the slide and 0.055 in the Montreal Protocol.

## 10.4 Azeotropes, zeotropes and temperature glide ★

A **blend** is a mixture of two or more chemical compounds [Aloke p.105].

- An **azeotropic mixture** evaporates and condenses **as a single substance**: at a constant pressure it **does not change its composition or its saturation temperature** while it boils or condenses [Aloke p.105]. It "cannot be separated into its components by distillation" and has properties different from those of its constituents [Ameen §4.1]. On a T–x diagram the bubble and dew lines touch at the azeotropic composition (Fig. 5b). Strictly, it is azeotropic only at one pressure, but it can be treated as a pure substance [Hundy §3.6]. Examples: R500, R502, R507A.
- A **zeotropic mixture** **does change its composition and saturation temperature** as it evaporates or condenses at constant pressure. The more volatile component boils off first, so the remaining liquid becomes richer in the less volatile one and its boiling point rises. The difference between the **dew point** (last liquid boils away, or first drop condenses) and the **bubble point** (first bubble forms) at one pressure is the **temperature glide** (Fig. 5a) [Hundy §3.6].

> **TRAP: the slide's zeotrope definition.** The slide says zeotropic mixtures "evaporate & condense as a single substance & do change their … saturation temperature" [Aloke p.105]. The first clause is copied from the azeotrope definition and is wrong: a zeotrope does **not** behave as a single substance; it has a glide.

![Fig. 5: T–x diagrams of a binary mixture at constant pressure (schematic). (a) Zeotrope: the bubble line (blue, lower) and the dew line (red, upper) form a lens between the boiling points of pure A (more volatile, −52 °C) and pure B (less volatile, −26 °C); liquid below, vapour above, two-phase between. At the blend composition a vertical bar from the bubble point (−39 °C) to the dew point (−30 °C) is the temperature glide T_dew − T_bubble. (b) Azeotrope: the bubble and dew lines both dip to a minimum and touch at the azeotropic composition, where the mixture boils at one temperature (no glide) below either component.](figures/005.jpg "w=0.8")

Glides of real blends (EOS, CoolProp) at 1 atm: **R407C** bubble −43.6 °C, dew −36.6 °C, **glide 7.0 K**; **R404A** −46.2 / −45.5 °C, glide 0.8 K; **R410A** −51.4 / −51.4 °C, glide 0.1 K; **R507A** glide 0.0 K. In R407C's condenser, condensing starts at a dew point of 40 °C and ends at a bubble point of ≈ 34 °C [Hundy §3.6]. Blends with a glide below about 2 K (R404A, R410A) are **near-azeotropes** and are treated as single substances [Hundy §3.6].

**Consequences of glide** [Hundy §3.6]:

1. Constant-pressure lines in the dome are still horizontal on p–h, but **isotherms slope**: the evaporator and condenser no longer work at one temperature. Quote "dew-point" and "bubble-point" temperatures, or the mean.
2. With counter-flow heat exchangers the glide can be used to follow the temperature change of the air or water, which reduces the mean temperature difference loss.
3. **Charge from the liquid phase** only, or the composition charged will be wrong.
4. A leak from a two-phase region changes the composition slightly (the more volatile component escapes first).
5. Blends with glide above 5 K should not be used in **flooded** evaporators (the liquid left in the shell becomes rich in the heavy component).

## 10.5 Safety classification ★

Refrigerants may leak, so they "must be acceptably safe for humans and manufacturing processes, with little or no toxicity or flammability" [Aloke p.112]. ANSI/ASHRAE Standard 34 gives each a two-character group:

| | **No flame propagation (1)** | **Lower flammability (2; 2L = burning velocity ≤ 10 cm/s)** | **Higher flammability (3)** |
|---|---|---|---|
| **Lower toxicity (A)** | **A1**: R11, R12, R22, R134a, R404A, R407C, R410A, R502, R744, R718 | **A2**: R152a; **A2L**: R32, R1234yf, R1234ze | **A3**: R290, R600a, R1270 |
| **Higher toxicity (B)** | **B1**: R123, R764 (SO$_2$) | **B2**: R40 (methyl chloride); **B2L**: R717 | **B3**: (none in common use) |

- **Toxicity** A: no toxicity identified at concentrations up to 400 ppm (time-weighted average); B: evidence of toxicity below 400 ppm.
- **Flammability** 1: no flame propagation in air at 60 °C and 101.3 kPa; 2: lower flammability limit above 0.10 kg/m³ and heat of combustion below 19 MJ/kg; 3: lower flammability limit at or below 0.10 kg/m³ or heat of combustion 19 MJ/kg or more.
- In older lists (and in Hundy 5th ed. Table 3.1) ammonia is **B2**; the 2L subclass was added later [Hundy §3.11].

The six classes on the slide: A1 lower toxicity & no flame propagation; A2 lower toxicity & lower flammability; A3 lower toxicity & higher flammability; B1 higher toxicity & no flame propagation; B2 higher toxicity & lower flammability; B3 higher toxicity & higher flammability [Aloke p.112].

## 10.6 Environmental issues, phase-out and the common refrigerants

### ODP, GWP and TEWI

- **Ozone depletion potential (ODP)** "represents its effect on atmospheric ozone, and the reference point usually adopted is ODP = 1.0 for CFC R11" [Aloke p.111; Hundy §3.3]. Chlorine (and bromine) released in the stratosphere destroys ozone, which filters ultraviolet radiation. CFCs: ODP ≈ 1; HCFCs: 0.02–0.06; HFCs, HCs, HFOs, NH$_3$, CO$_2$: zero.
- **Global warming potential (GWP)**: "the index comparing the climate impact of its emission to that of emitting the same amount of carbon dioxide" over 100 years [Aloke p.111; Hundy §3.4]. GWP 1430 for R134a means 1 kg released is as bad as 1430 kg of CO$_2$.
- **Total equivalent warming impact** [Hundy §3.4]: $$\text{TEWI}=\underbrace{GWP\,(L\,n)+GWP\,m(1-a)}_{\text{direct: leakage + recovery loss}}+\underbrace{n\,E\,b}_{\text{indirect: power generation}}$$ with $L$ leakage (kg/yr), $n$ years of operation, $m$ charge (kg), $a$ recycling factor, $E$ energy use (kWh/yr), $b$ kg CO$_2$ per kWh. The **indirect (energy) term usually dominates**, so efficiency matters as much as the refrigerant.

### International agreements

| Agreement | Year | What it did |
|---|---|---|
| **Montreal Protocol** | 1987 | Phase-out of ozone-depleting substances: **CFCs** (R11, R12, R502) stopped in developed countries in the mid-1990s and in developing countries (including Bangladesh) by 2010; **HCFCs** (R22, R123) to be eliminated by 2030 (developed) and 2040 (developing) [Hundy §3.3] |
| **Kyoto Protocol** | 1997 | Lists HFCs among the greenhouse gases whose emissions must be cut [Hundy §3.1] |
| **Kigali Amendment** to the Montreal Protocol | 2016 | Phase-**down** of **HFCs** (R134a, R404A, R410A) by about 80–85% by the late 2040s; developing countries such as Bangladesh freeze in 2024 and cut 80% by 2045 |
| EU F-gas Regulation | 2014 | Bans high-GWP HFCs in new equipment (e.g. GWP > 150 in domestic refrigerators from 2015) [Hundy §3.7] |

So the sequence of replacements has been **CFC → HCFC → HFC → low-GWP HFO, HFC/HFO blends and natural refrigerants** (R12 → R134a → R1234yf/R600a; R22 → R410A/R407C → R32/R290; R502 → R404A → R744/R717/R448A) [Hundy §3.1, §3.9].

### Natural refrigerants and the common fluids

| Refrigerant | Good points | Bad points | Where used |
|---|---|---|---|
| **R717 ammonia** | Highest latent heat (1369 kJ/kg at 1 atm), large refrigeration per m³, cheap, ODP = GWP = 0, its smell warns of a leak, lighter than air, best COP | **Toxic and irritating**, flammable at 16–25% in air, **attacks copper** when wet (steel plant only), high discharge temperature (water-jacketed cylinders) | Ice plants, cold stores, fish freezing, breweries, dairies, industrial chillers [Ameen §4.3; Hundy §3.9.4] |
| **R744 CO$_2$** | Non-toxic, non-flammable, cheap, GWP = 1, very high pressure and density ⇒ tiny compressors and pipes | **Critical temperature only 31 °C**: high pressures (22 bar at −15 °C, 71 bar at 30 °C), poor COP in hot climates unless transcritical; triple point 5.2 bar | Supermarkets, cascade low stage, heat-pump water heaters, dry ice [Ameen §4.3; Hundy §3.9.6] |
| **R290, R600a hydrocarbons** | Good thermodynamics, ODP 0, GWP 3, oil-miscible, cheap | **Highly flammable (A3)**: only small charges | Domestic refrigerators (R600a), small AC and display cabinets (R290) [Hundy §3.9.5] |
| **R718 water** | Free, non-toxic, non-flammable, huge latent heat | Deep vacuum, enormous specific volume, freezes at 0 °C (§10.8) | LiBr–water absorption chillers, steam-jet systems [Ameen §4.3] |
| **R134a** (HFC) | A1, moderate pressure, replaced R12 | GWP 1430; ≈ 50% more displacement than R22 | Car AC (now R1234yf), domestic, screw and centrifugal chillers [Hundy §3.9.1] |
| **R22** (HCFC) | A1, good all-rounder, small displacement | ODP 0.055: being phased out | Former standard for packaged AC [Ameen §4.3] |
| **R410A** (HFC blend) | High pressure, small pipes, good DX performance | GWP 2088 | Split and VRF AC [Hundy §3.9.2] |
| **R32** (HFC) | GWP 675, high capacity, single component | Mildly flammable (A2L), high discharge temperature | New split AC (replaces R410A) [Hundy §3.9.2] |
| **R404A** (HFC blend) | Low discharge temperature, good at low temperature | GWP 3922: targeted for rapid phase-out | Commercial freezers, transport [Hundy §3.9.3] |

## 10.7 Slopes of the saturation curves ★

On a T–s diagram the saturation dome has two branches: the **saturated-liquid line** (left) and the **saturated-vapour line** (right), meeting at the critical point. Their slopes decide how far the real vapour-compression cycle departs from the Carnot (reversed) cycle, whose processes are two horizontal isotherms and two vertical isentropes. The steeper both lines are, the narrower and taller the dome, and the closer the VCR cycle comes to the Carnot rectangle [Ameen §3; Ameen §4.2].

### The saturated-vapour line and compression

The compressor takes in (nearly) saturated vapour at state 1 and compresses it isentropically (a **vertical** line on T–s) to the condenser pressure. Where state 2 lands depends on the slope of the vapour line (Fig. 6):

![Fig. 6: T–s schematics of three kinds of refrigerant, each with saturated-liquid line (blue), saturated-vapour line (red), critical point, evaporating temperature Te and condensing temperature Tc (dashed), and isentropic compression 1→2 (vertical black arrow) from saturated vapour at Te. (a) Wet fluid (water, NH3, R22, R32): the vapour line leans left (entropy of saturated vapour falls as T rises), so point 2 lies far to the right of the dome on the condenser isobar pc: highly superheated, hot discharge. (b) Isentropic fluid (R134a, R12, R290, R123): the vapour line is nearly vertical, so point 2 is just dry, slightly superheated. (c) Dry fluid (R600a, R113, R600): the vapour line leans right (overhangs), so the vertical line from 1 ends inside the dome: point 2 is wet, liquid in the compressor; a green path 1→1′ shows suction superheat, after which compression 1′→2′ ends dry.](figures/006.jpg "w=0.95")

| Vapour-line shape | Slope $ds_g/dT$ | End of isentropic compression from saturated vapour | Consequence | Examples |
|---|---|---|---|---|
| Leans **left** ("**wet**" fluid) | negative | **highly superheated** vapour | high discharge temperature: oil breakdown, valve damage, extra "superheat horn" work, large desuperheating load on the condenser; NH$_3$ cylinders need water jackets | water, NH$_3$, CO$_2$, R32, R22 |
| **Vertical** ("**isentropic**" fluid) | ≈ 0 | **just dry**, slightly superheated | **ideal**: compression follows the vapour line, low discharge temperature, smallest work, no liquid | R134a, R12, R290, R11, R123 |
| Leans **right** ("**dry**", overhanging) | positive | **inside the dome: wet** vapour | **wet compression**: liquid droplets in the cylinder (liquid slugging, washing oil off the cylinder walls, valve breakage), lower volumetric efficiency. Needs suction superheat or a liquid–suction heat exchanger | R600a, R600, R113, R245fa |

So the **desirable vapour line is steep, close to vertical** (or very slightly leaning left), so that compression of saturated vapour ends just in the superheated region: dry compression with the least superheat.

![Fig. 7: Real saturated-vapour lines from 5 to 60 °C computed with CoolProp, each plotted as s_g(T) − s_g(5 °C) (kJ/kg·K) against saturation temperature. Water leans furthest left (−1.0 kJ/kg·K by 53 °C), ammonia next (−0.6 by 60 °C), R22 slightly left, R134a almost on the dotted vertical (isentropic) line, while R113 and R600a isobutane lean slightly right (dry).](figures/007.png "w=0.7")

> **EXAMPLE 10.2** `[TUTOR-GENERATED]` For an AC duty with $T_e$ = 5 °C and $T_c$ = 40 °C, find for each refrigerant the change in entropy of saturated vapour between 5 °C and 40 °C, and the state reached by isentropic compression of saturated vapour at 5 °C to the saturation pressure at 40 °C. Classify each fluid.

**[TUTOR-GENERATED]** Equation of state (CoolProp); only entropy differences matter, so the datum does not.

| Fluid | $s_g(40)-s_g(5)$ (kJ/kg·K) | End of compression | Type |
|---|---|---|---|
| R718 water | −0.7693 | superheated, $T_2$ = 195.1 °C (155 K superheat) | very wet |
| R717 ammonia | −0.3997 | superheated, $T_2$ = 84.3 °C | wet |
| R32 | −0.1272 | superheated, $T_2$ = 66.0 °C | wet |
| R22 | −0.0451 | superheated, $T_2$ = 55.4 °C | wet |
| R290 propane | −0.0273 | superheated, $T_2$ = 43.8 °C | ≈ isentropic |
| R134a | −0.0134 | superheated, $T_2$ = 43.7 °C | ≈ isentropic |
| R12 | −0.0108 | superheated, $T_2$ = 44.5 °C | ≈ isentropic |
| R123 | +0.0018 | wet, $x_2$ = 0.997 | isentropic |
| R113 | +0.0115 | wet, $x_2$ = 0.975 | dry |
| R600a isobutane | +0.0228 | wet, $x_2$ = 0.977 | dry |

The data-book route gives the same for R134a (state 1: 349.8 kPa, $s_g$ = 1.7245 kJ/kg·K; at 1016.6 kPa and that entropy, $T_2$ = 43.7 °C) and for ammonia (516.3 kPa → 1554.9 kPa, $T_2$ = 84.3 °C).

### The saturated-liquid line and throttling

The expansion valve throttles saturated liquid at state 3 ($T_c$) to state 4 at $T_e$ at constant enthalpy. Part of the liquid flashes to vapour to cool the rest from $T_c$ to $T_e$. That flash gas gives no refrigeration, and the process is irreversible (the area under the liquid line between 3 and the evaporator temperature is lost refrigerating effect) (Fig. 8). The quality after throttling is

$$x_4=\frac{h_{f}(T_c)-h_f(T_e)}{h_{fg}(T_e)}\approx\frac{c_{p,l}\,(T_c-T_e)}{h_{fg}(T_e)}$$

The slope of the liquid line on T–s is $\left(\dfrac{dT}{ds}\right)_f=\dfrac{T}{c_{p,l}}$. A **steep liquid line** means a **low liquid specific heat** (relative to the latent heat), hence **little flash gas**, a larger refrigerating effect and a smaller throttling loss. In the limit of a vertical liquid line the throttling would be replaced by an isentropic expansion, as in the Carnot cycle.

![Fig. 8: T–s schematics comparing (a) a steep saturated-liquid line (low c_pl/h_fg) and (b) a flat one (high c_pl/h_fg). In each, saturated liquid at 3 (on the condensing line) is throttled along a dashed green line to 4 on the evaporating line 4–1; f is the saturated-liquid point at the evaporator temperature. The green shaded strip under f–4 is the refrigerating effect lost to flash gas: x4 ≈ 0.13 for the steep line and ≈ 0.39 for the flat line (schematic values).](figures/008.jpg "w=0.85")

At 5 °C / 40 °C (data book): water $x_4$ = (167.53 − 21.02)/2489.04 = **0.059**; ammonia (371.35 − 203.27)/1243.79 = **0.135**; R134a (256.41 − 206.76)/194.74 = **0.255**. The halocarbons have flatter liquid lines (large $c_{p,l}/h_{fg}$), which is why they gain most from liquid sub-cooling.

**Desirable slopes, in one line:** both saturation curves **as steep as possible**: the liquid line steep (small $c_{p,l}/h_{fg}$, little flash gas) and the vapour line nearly vertical (dry compression, little superheat). A vapour line that leans right (dry fluid) is undesirable for compression; one that leans strongly left (water, ammonia) gives hot discharge.

## 10.8 Why water is not used in vapour-compression plant ★

Water (R718) is free, non-toxic, non-flammable, chemically stable, ODP = GWP = 0, and has the largest latent heat of all (2257 kJ/kg at 100 °C) [Ameen §4.3]. Yet it is not used in ordinary compression plant: "the two disadvantages of water are its high freezing point and high vacuum required. The very large volume of water vapour at such low operating pressures makes the use of ordinary compression equipment impossible" [Ameen §4.3].

> **EXAMPLE 10.3** `[TUTOR-GENERATED]` Compare water, R134a and ammonia in an ideal VCR cycle at $T_e$ = 5 °C, $T_c$ = 40 °C (saturated vapour leaving the evaporator, saturated liquid leaving the condenser): pressures, pressure ratio, refrigerating effect, suction volume per kW of refrigeration, discharge temperature and COP.

**[TUTOR-GENERATED]** Data book: water Table 1 (R718) p.2; R134a pp.8–10; ammonia pp.12–16 (Moran & Shapiro). Refrigerating effect $q=h_g(5)-h_f(40)$; suction volume per kW $=v_g(5)/q$.

| | Water (R718) | R134a | Ammonia (R717) |
|---|---|---|---|
| $p_e$ at 5 °C (kPa) | **0.87** (deep vacuum) | 349.8 | 516.3 |
| $p_c$ at 40 °C (kPa) | 7.38 | 1016.6 | 1554.9 |
| Pressure ratio | **8.48** | 2.91 | 3.01 |
| $v_g$ at 5 °C (m³/kg) | **147.01** | 0.0584 | 0.2431 |
| $h_g(5)$, $h_f(40)$ (kJ/kg) | 2510.06, 167.53 | 401.49, 256.41 | 1447.06, 371.35 |
| Refrigerating effect $q$ (kJ/kg) | 2342.5 | 145.1 | 1075.7 |
| Volumetric effect $q/v_g$ (kJ/m³) | **15.9** | 2484 | 4425 |
| Suction volume per kW (L/s) | **62.76** | 0.403 | 0.226 |
| $T_2$ after isentropic compression (°C) | **195.1** (EOS) | 43.7 | 84.3 |
| Isentropic work $h_2-h_1$ (kJ/kg) | 360.2 | 22.19 | 156.68 |
| COP $=q/w$ | 6.50 | 6.54 | 6.87 |

The COP of water is as good as the others: the trouble is **not** thermodynamic efficiency but **volume and pressure**. A 100 TR (351.7 kW) water plant would have to compress **22.07 m³/s** of vapour, against 0.14 m³/s for R134a: about **156 times** the volume. (For water the data book's superheat tables jump from 6 kPa to 35 kPa, so the interpolated $T_2$ is ≈ 184 °C; the EOS value 195.1 °C is used.)

**Reasons** [Ameen §4.3; tutor]:

1. **Very low pressures (deep vacuum)**: $p_{sat}$ = 0.87 kPa at 5 °C, 7.38 kPa at 40 °C. Air and moisture leak in; the shell and seals must hold a near-perfect vacuum; non-condensables must be purged.
2. **Enormous specific volume** of the vapour (147 m³/kg at 5 °C; R134a 0.058): the refrigerating effect per m³ is only ≈ 16 kJ/m³, so a reciprocating, rotary or scroll compressor would be impossibly large. Only a huge centrifugal or a steam ejector can move such volumes.
3. **High pressure ratio** (≈ 8.5 for an AC duty) and a strongly **wet-type** vapour line (§10.7): very high discharge temperature (≈ 195 °C) and superheat.
4. **Freezing point 0 °C**: it cannot be used below about 3–5 °C evaporating; only air conditioning or water chilling is possible.
5. Large pipes and valves are needed because of the vapour volume, and the low pressure gives little pressure difference for pressure drop.

**Why it does work in absorption systems.** In a LiBr–water plant there is **no vapour compressor**. The low-pressure water vapour from the evaporator is **absorbed** into the LiBr solution in the absorber, a liquid solution is **pumped** to the generator (pumping a liquid takes very little work and a small pump), and heat drives the vapour out at the high pressure. The huge vapour volume only has to pass through short, wide openings between large shells (evaporator–absorber, generator–condenser), not through a compressor. Air conditioning (chilled water at 5–7 °C) keeps it above freezing [Ameen §4.3, §5.1]. Water is also used in steam-jet (ejector) refrigeration, where a steam jet entrains the large vapour volume [Ameen §4.3].

## 10.9 Secondary refrigerants and brines

A secondary refrigerant carries cooling from a central plant to many loads without changing phase [Ameen §4; Hundy §12.6]:

- **Water**: above 0 °C (chilled water at 5–7 °C in central AC).
- **Brines**: aqueous NaCl (eutectic −21 °C) and CaCl$_2$ (eutectic ≈ −55 °C), used in ice plants and older cold stores; corrosive.
- **Glycols**: propylene glycol–water (food-safe) and ethylene glycol–water; less corrosive.
- Solutions weaker than eutectic are used to save cost and reduce viscosity, provided no freezing occurs at the evaporator [Hundy §12.6].
- Reasons: a small primary charge kept in the machine room (important for NH$_3$ and flammable HCs), easy distribution to many loads, safety near food and people, thermal storage. Cost: an extra temperature difference and pump power.

## 10.10 Applications of refrigeration ★

Modern refrigeration is mostly applied in four general fields: **ice making, preservation and transportation of perishables, special industrial processes, and air conditioning** [Ameen §1.2]. The course groups them in six [Arif pp.6b–13b; Kanak pp.74–76; Rifat pp.2–3]:

1. **Domestic refrigeration**: household refrigerators and freezers (fresh food at about 3 °C, freezer at −18 °C) [Arif p.6b]; the last link of the cold chain [Ameen §1.2].
2. **Commercial refrigeration**: supermarket display cases, reach-in cabinets, bottle coolers, ice-cream cabinets; "meats, poultry and fish all must be kept in climate-controlled environments before being sold" [Arif p.7b]; restaurants and hotels.
3. **Industrial refrigeration**:
   - **Cold storage** of fruits, vegetables, meat and fish: **potato cold storage at 2–4 °C, 90% RH** [Arif p.8b]; **fish cold storage at −18 to −23 °C or below, 95% RH** [Arif p.9a];
   - **food freezing** (slow and quick freezing, §10.11–10.12);
   - **ice making**: cans of water in a tank of brine chilled by an NH$_3$ evaporator [Ameen §7.2]; ice storage for AC load shifting;
   - **dairy**: milk chilling and storage, butter, cheese and ice cream [Arif p.13b];
   - **liquefaction of gases** (oxygen, nitrogen, propane, methane) [Arif p.13b];
   - **oil refineries, chemical and petrochemical plants**: holding processes at low temperature, crystallising wax, separating light hydrocarbons [Arif p.13b; Ameen §7.1];
   - **metal working**: "to temper steel and cutlery", shrink fits, heat treatment [Arif p.13b];
   - **civil engineering**: freezing wet soil to prevent cave-ins, cooling concrete mixes with ice and chilled water [Ameen §7.1];
   - breweries, beverages, pharmaceuticals.
4. **Marine and transport refrigeration**: "transportation of temperature-sensitive foodstuffs and other materials by trucks, trains, airplanes and sea-going vessels" [Arif p.13a]; refrigerated trucks at 1.5–4 °C (chilled) or −18 °C (frozen); reefer ships and containers at −23.5 to 12.5 °C; cooled by water ice, dry ice, liquid nitrogen, eutectic plates or engine-driven mechanical units [Ameen §7.3].
5. **Comfort air conditioning**: "for human comfort … control of space temperature (cooling/heating), humidity, ventilation, air-motion and cleaning/filtering of air", and noise [Kanak p.76]: window, split, packaged and central systems.
6. **Industrial air conditioning**: conditions for processes and products: textile weaving mills (humidity and dust removal), printing, electronics clean rooms, pharmaceutical and laboratory spaces, data centres [Kanak p.76; Ameen §1.6].

Further applications: **medical** (blood banks and vaccines at 2–8 °C, plasma and tissue at −30 °C or below, cryosurgery, MRI magnet cooling); **cryogenics** (LNG, rocket propellants, superconductivity); **desalination** by freezing; **sports** (ice rinks); **agriculture** (controlled-atmosphere storage of fruit with 3–5% O$_2$ and 3–10% CO$_2$) [Ameen §7.4].

Why refrigeration preserves food: low temperature slows **microbial growth**, **oxidation**, **enzymatic and fermentation reactions** and **drying**, and slows the respiration of live produce [Ameen §1.2, §7.4]. Live produce (fruit, vegetables, eggs) is kept just above freezing; dead foods (meat, fish, dairy) are chilled for short storage or frozen (to −18 to −30 °C) for long storage [Ameen §7.4].

## 10.11 Slow freezing and quick freezing ★

**Slow freezing** "is accomplished by placing the product in a low temperature room and allowing it to freeze slowly, usually in still air" [Arif p.9b]. It is used for small amounts [Kanak p.71].

**Quick freezing** freezes the product rapidly, usually in a few minutes to about half an hour, by a cold fluid moving fast over the product, or by contact with cold metal or a cold liquid. 'Quick frozen' produce is generally frozen in 5–10 min in an air blast, quicker if immersed [Hundy §14.5].

### What happens when food freezes

Cells of animal and vegetable products contain a water solution of salts and sugars. As the product cools below about −1 °C, water freezes out of the solution, mostly between −1 and −5 °C (the **zone of maximum ice-crystal formation**), until the eutectic is reached [Hundy §14.4]. If the product passes through this zone slowly, **few, large ice crystals** grow, mainly between the cells; they draw water out of the cells and pierce the cell walls. When the product thaws, the cells leak ("**drip loss**"), the texture becomes soft and flavour and nutrients are lost. If it passes through quickly, **many small crystals** form inside and between the cells, and the structure is kept (Fig. 9).

![Fig. 9: Product centre temperature (°C) against time (min, schematic). Both curves start at +10 °C. The quick-freezing curve (blue) falls to −1 °C within a few minutes, crosses the shaded zone of maximum ice-crystal formation (−1 to −5 °C) in under 30 min, then sub-cools quickly to the storage temperature of −25 °C. The slow-freezing curve (red, still air in a cold room) takes about an hour to reach −1 °C and stays in the shaded zone for several hours, during which large ice crystals grow and cells rupture, before cooling on toward −20 °C.](figures/009.png "w=0.75")

### Basic characteristics of quick freezing [Arif p.10a; Kanak p.71]

1. **Smaller ice crystals are formed and there is less damage to the cells.**
2. **The freezing period is short, so less time is allowed for diffusion of salts and separation of water** (less dehydration of cells and concentration of solutes).
3. **The temperature is reduced quickly, so the growth of bacteria and yeasts is retarded**, preventing decomposition during freezing.
4. Hence better texture, colour, flavour and nutritive value after thawing, less drip and weight loss, and a longer storage life.
5. High throughput (continuous belts, IQF, bulk quantities) [Kanak p.71]; but higher capital cost and lower evaporating temperatures (−35 to −40 °C air, or cryogenic liquids).

| Aspect | Slow freezing | Quick freezing |
|---|---|---|
| Process | product placed in a cold room, freezes slowly in still air | rapid methods: air blast, plate contact, immersion, cryogenic |
| Freezing time | hours to days | minutes to about 30 min |
| Ice crystals | **large**, mainly between cells | **small**, inside and between cells |
| Cell damage, drip loss | high: cell walls pierced, juices lost on thawing | low |
| Salt diffusion, water separation | much | little |
| Microbial activity | may continue during freezing | retarded quickly |
| Product quality | texture and appearance degraded | texture and appearance kept |
| Cost | low | higher (plant, power, cryogen) |

[Kanak p.73; Hundy §14.4]

As a rule, products eaten raw or only briefly cooked (green peas, strawberries, beans) must be quick-frozen; meat, whose texture changes in cooking anyway, may be frozen more slowly [Hundy §14.4]. Very fast freezing in liquid nitrogen can crack large products mechanically [Ameen §7.6].

## 10.12 Classification of quick-freezing methods ★

The course lists **three** types of quick freezing system [Arif p.10a; Kanak p.71; Rifat p.3]:

1. **Air blast freezing**: cold air blown at high velocity over the product.
2. **Immersion freezing**: the product immersed in, or sprayed with, a cold liquid that stays liquid (brine, glycol) or boils (cryogen); gives **IQF** (individually quick frozen) product.
3. **Indirect contact freezing**: the product pressed against metal plates (or belts) cooled by refrigerant: the **plate freezer**.

Textbooks add **cryogenic freezing** (spraying or immersing in liquid nitrogen at −196 °C or CO$_2$ at −78.5 °C) as a fourth class, which the slides include under immersion [Hundy §14.6; Ameen §7.6]. Ameen gives "immersion and liquid spray cooling, plate contact freezing, air blast freezing" [Ameen §7.6].

| Method | Heat-transfer medium | Suits | Notes |
|---|---|---|---|
| Air blast (tunnel, spiral, fluidised bed, belt) | air at ≈ −35 to −40 °C, 3–5 m/s | any shape: most versatile | fan heat adds to the load [Hundy §14.5; Ameen §7.6] |
| Indirect contact (plate) | metal plates with boiling refrigerant inside | flat, regular packages and blocks (fish, prawns, ice cream) | cheapest to run, no fans [Hundy §14.6] |
| Immersion / spray in brine or glycol | liquid at −20 to −30 °C | wrapped or canned product, poultry | brine alone may pre-cool before a final air blast [Hundy §14.6] |
| Cryogenic | liquid N$_2$ (−196 °C) or CO$_2$ (−78.5 °C), consumed | small high-value items, IQF shrimp, berries | fastest; cryogen is costly [Ameen §7.6] |

### Air-blast freezing

Cold air is blown over the product at high speed. In a batch cold room the product is stacked on trolleys; in a **tunnel** the product passes on a belt or trolleys through an insulated tunnel with fans and an evaporator coil (Fig. 10) [Hundy §14.5]. Irregular shapes can only be frozen by a fluid that surrounds them, and air is the obvious choice: "economical, hygienic and relatively non-corrosive" [Hundy §14.5]. Variants: **fluidised bed** (cold air blown up through a mesh belt so that peas or diced carrots float and tumble, exposing every side), **flat belt** (fish fillets), **spiral** freezer (belt wound in a spiral in a cold room, compact for large items such as ice-cream tubs) [Hundy §14.5]. There is an optimum air speed: faster air freezes faster but needs more fan power, and the fan motor heat is added to the load.

![Fig. 10: Tunnel air-blast freezer, side section. An insulated tunnel (walls, roof and floor insulated) has a mesh/stainless-steel belt conveyor running through it from left (product in at +5 to +10 °C) to right (frozen product out at −18 °C core). Above a horizontal baffle are two axial fans and an evaporator coil fed with liquid refrigerant (NH3 or R404A) and returning vapour to the compressor. The fans push warmed air (red) through the coil; the cold air (blue, −35 to −40 °C) drops down at the far end and blows back over the product at 3–5 m/s, counter to the belt motion, then rises at the inlet end back to the fans.](figures/010.png "w=0.85")

### Immersion freezing

"Liquid immersion freezing is accomplished when a food product, either packaged or unpackaged, is frozen by **immersion in or by spraying with a refrigerant that remains liquid throughout the process**" [Arif p.11b; Kanak p.73]. Liquids used: aqueous solutions of **propylene glycol, glycerol, sodium chloride, and mixtures of salt and sugar**, and (as a cryogenic spray) **liquid nitrogen** [Arif p.11b].

**Process** (Fig. 11, Fig. 12):

1. The product (wrapped, canned or, with food-grade liquid, unwrapped) enters on an inlet conveyor and is carried down into an insulated tank of cold liquid, or under sprays of it.
2. The liquid surrounds the product completely, so the surface heat-transfer coefficient is very high and freezing is fast and uniform; individual pieces freeze separately (**IQF**).
3. The product leaves on a discharge conveyor, is drained (and rinsed if needed) and goes to frozen storage.
4. The liquid is pumped back through a **chiller** (the evaporator of a VCR plant) and returned to the sprays and the tank. In the cryogenic version the boiling cryogen vapour is recovered by a condenser or vented [Arif p.12a].
5. **Uses**: "canned citrus juice concentrate (cans of juice are passed continuously through a chamber containing liquid freezant); poultry, especially during the initial stages of freezing (to impart a uniform, white colour to the surface); occasionally fish and shrimp" [Arif p.11b]; packaged poultry in glycol [Ameen §7.6].
6. **Limits**: the liquid must be non-toxic, cheap and not taint the food; NaCl and glycol brines are not cold enough for full freezing, so they may only pre-cool before a final air blast [Hundy §14.6]; liquid nitrogen is costly [Ameen §7.6].

![Fig. 11: Brine (glycol) immersion freezer, schematic. Wrapped or canned product arrives on a conveyor at the left, which dips down into an insulated tank of chilled brine or propylene glycol at −20 to −30 °C; the product is fully immersed on the submerged conveyor, passes under a spray header that sprays brine on it, and rises out at the right as frozen product (drained, rinsed). Warm brine leaves the tank bottom (red) to a brine chiller (the evaporator of a VCR condensing unit below it); a pump returns cold brine (blue) up to the spray header.](figures/011.png "w=0.8")

![Fig. 12: Liquid (cryogenic) immersion and spray freezer for IQF product: product in on an inclined inlet conveyor, liquid spray for hardening the product on the belt conveyor, freezing conveyor through a reservoir of liquid refrigerant, refrigerant sprays, condenser for refrigerant recovery above, discharge conveyor, IQF product out at the right (printed "IOF" on the slide). [Arif p.12a]](figures/012.png "w=0.65")

### Plate (indirect contact) freezing

"Plate freezing refrigeration systems work by placing food products in **direct contact with large metal plates that are cooled by a circulating refrigerant**. The plates are arranged in a stack, with the food sandwiched between them to maximise surface contact and ensure uniform freezing" [Kanak p.74]. The first contact freezer was patented by Clarence Birdseye in 1929 [Hundy §14.6].

**Construction and process** (Fig. 13, Fig. 14) [Hundy §7.4, §14.6; Kanak p.74]:

1. A stack of **hollow, flat aluminium or steel plates** inside an insulated cabinet. Liquid refrigerant (usually ammonia, or R404A/R507A) evaporates inside channels in each plate at about −35 to −40 °C; it is pumped through at **5–12 times the evaporation rate** to keep the inner surface wetted [Hundy §7.4].
2. Each plate is connected to the supply and return headers by **flexible hoses**, so the plates can move.
3. **Loading**: a **hydraulic ram** opens the stack (separated plates); trays, cartons or packs of product are slid between the plates.
4. **Freezing**: the ram closes the plates, pressing them onto both faces of the packs (closed plates). Heat is conducted from the product straight into the refrigerant through the plate wall, so freezing of a 50–75 mm pack takes 1–2 h.
5. **Unloading**: the plates are opened (a short hot-gas defrost frees the packs) and the frozen blocks removed.
6. **Horizontal plate freezers** take regular packages (ice cream in flat cartons, fish fillets, prawns, meat). **Vertical plate freezers** have loose wet product (whole fish) packed into the gaps between vertical plates and give solid blocks 75–100 mm thick, which are pushed up and out after the surfaces are thawed [Hundy §7.4, §14.6].
7. **Advantages**: high heat transfer on two faces, fast and uniform freezing, flat regular blocks, compact, **no fans, so the cheapest to run**, little dehydration. **Limits**: only flat, regular packages of uniform thickness; batch loading [Hundy §14.6; Ameen §7.6].

![Fig. 13: Horizontal plate freezer, schematic. An insulated cabinet (door at front) holds a stack of five hollow freezing plates (refrigerant boils inside). Product packs (three per layer) are sandwiched between the plates with contact on both faces. A hydraulic ram on top presses the plates together. Each plate is connected by flexible hoses to a liquid supply header on the right (pumped NH3 or R404A at −35 to −40 °C) and to a wet return header on the left that leads to the separator and compressor.](figures/013.jpg "w=0.75")

![Fig. 14: Plate freezer as on the slide: a cabinet with horizontal freezing plates and blocks of product resting on them, moved by a hydraulic ram on top; left, separated plates (open for loading); right, closed plates pressing the product blocks between them. [Arif p.12b; Kanak p.74]](figures/014.png "w=0.6")

### Cryogenic freezing

Liquid nitrogen (boiling at −196 °C) or carbon dioxide (−78.5 °C, as liquid or snow) is sprayed onto the product on a belt, or the product is dipped in it [Hundy §14.6]. The cryogen boils on the product surface and is not recovered (or is partly recovered). It is the fastest method, the equipment is simple and cheap and the dehydration is minimal, but the cryogen is expensive, so it is used for small, high-value items (shrimp, berries, IQF products) [Ameen §7.6].

## 10.13 Term-final questions with solutions

The 10 parts fall into two archetypes:

| Archetype | What is asked | Parts | Solved in full |
|---|---|---|---|
| RF1 Refrigerants | water as a refrigerant, saturation-curve slopes, numbering, desirable properties | 4 | Solutions 10.1–10.4 |
| RF2 Applications and quick freezing | characteristics and classes of quick freezing, plate and immersion freezing, applications, components of a refrigeration system | 6 | Solutions 10.5, 10.7–10.10 |

Theory answers are sized to the marks (about one point per mark). Draw a labelled sketch wherever the question says "schematic" or "diagram"; for the slope question, the T–s sketch is the answer.

### RF1. Refrigerants

> **TRY 10.1** `[PP 11-12 Q8(a), 5]` Why is H$_2$O not used as a refrigerant in compression refrigeration system? (Although it is used as a refrigerant in absorption refrigeration).

**Solution 10.1** **[FROM SOURCE: Ameen §4.3; numbers from Example 10.3, data book Table 1]**

Water is cheap, safe and has a very high latent heat, but in a vapour-compression plant:

1. **Deep vacuum**: its saturation pressure is only 0.87 kPa at 5 °C and 7.38 kPa at 40 °C, so the whole plant runs far below atmospheric pressure; air and moisture leak in and must be purged.
2. **Enormous specific volume** of the vapour: 147 m³/kg at 5 °C (R134a: 0.058 m³/kg). The refrigerating effect per m³ of suction vapour is only ≈ 16 kJ/m³ against ≈ 2480 kJ/m³ for R134a, so ≈ 63 L/s must be compressed per kW of cooling: an ordinary reciprocating, rotary or scroll compressor would be impossibly large.
3. **High pressure ratio** (≈ 8.5 for an AC duty) and a strongly left-leaning (wet-type) vapour line: isentropic discharge temperature ≈ 195 °C.
4. **Freezes at 0 °C**, so it cannot evaporate below about 3–5 °C: no refrigeration below freezing.
5. Huge pipes and valves are needed for the vapour volume.

**In absorption systems** (LiBr–water) there is no vapour compressor: the low-pressure vapour is **absorbed** by the LiBr solution, the liquid is **pumped** (small pump, little work) and heat drives the vapour out at the condenser pressure. The large vapour volume only passes through wide openings between large shells, and the AC duty (chilled water at 5–7 °C) keeps it above freezing.

> **TRY 10.2** `[PP 11-12 Q8(c), 10]` Discuss the desirable slopes of saturation curves (liquid and vapor) of a refrigerant.

**Solution 10.2** **[TUTOR-GENERATED, from Ameen §3, §4.2; numbers from Example 10.2]** Sketch the three T–s diagrams of Fig. 6 (wet, isentropic, dry vapour lines with compression 1→2) and the throttling sketch of Fig. 8.

**General.** On T–s the reversed Carnot cycle is a rectangle: two isotherms and two vertical isentropes. The VCR cycle departs from it because (i) throttling 3→4 along the liquid side replaces isentropic expansion, and (ii) compression of vapour produces superheat. Both losses depend on the slopes of the saturation curves, so **both curves should be as steep (near-vertical) as possible**: a tall, narrow dome.

**Saturated-liquid line:**

1. Its slope is $(dT/ds)_f=T/c_{p,l}$; a steep line means a **low liquid specific heat** compared with the latent heat.
2. Throttling from saturated liquid at $T_c$ gives $x_4\approx c_{p,l}(T_c-T_e)/h_{fg}$; a steep liquid line gives **little flash gas**, a large refrigerating effect and a small throttling loss (at 5/40 °C: water 0.059, NH$_3$ 0.135, R134a 0.255).
3. A flat liquid line (high $c_{p,l}$) wastes much of the latent heat in cooling the liquid; such fluids need sub-cooling.

**Saturated-vapour line:**

4. If the vapour line **leans left** (wet fluid: water, NH$_3$, R22), isentropic compression of saturated vapour ends **highly superheated**: high discharge temperature (NH$_3$ 84 °C, water 195 °C at 5/40 °C), oil breakdown, valve damage, extra work ("superheat horn") and a large desuperheating load. NH$_3$ compressors need water-jacketed heads.
5. If it **leans right** (dry fluid: R600a, R113), compression from saturated vapour ends **inside the dome**: **wet compression**, liquid slugging, oil washed off the cylinder walls, broken valves, lower volumetric efficiency; suction superheat or a liquid–suction heat exchanger is then needed.
6. The **desirable** vapour line is **steep, nearly vertical** (isentropic fluid: R134a, R12, R290): compression of saturated vapour ends just superheated (R134a: 43.7 °C at a 40 °C condenser), the compression line runs close to the saturation line, work and discharge temperature are least and no liquid enters the compressor.
7. A steep vapour line also means a large latent heat compared with the vapour specific heat, i.e. a large refrigerating effect per kg.

So the desirable refrigerant has a **steep liquid line and a vertical (or very slightly left-leaning) vapour line**.

> **TRY 10.3** `[PP 13-14 Q7(a), 17]` Describe the numbering system for Hydrocarbon, Zeotropic mixtures and Azeotropic mixtures type of refrigerants with proper examples.

**Solution 10.3** **[FROM SOURCE: Aloke pp.106–109; Hundy §3.5; Ameen Table 4.4]** Refrigerants are numbered by ASHRAE Standard 34; "R" stands for refrigerant.

**(a) Hydrocarbons and halocarbons (methane, ethane, propane series)** (7 marks). For a saturated molecule C$_c$H$_h$F$_f$Cl$_x$ the number is **R-(c−1)(h+1)(f)**:

1. First digit = number of C atoms − 1 (omitted when zero).
2. Second digit = number of H atoms + 1.
3. Third digit = number of F atoms; the chlorine atoms fill the rest: $x=2c+2-h-f$.
4. A lower-case letter (a, b) marks an asymmetric isomer; B + n marks bromine; a leading fourth digit 1 marks an unsaturated (C=C) compound.

Sketch the R134a scheme (Fig. 3). Examples:

| Formula | C−1, H+1, F | Number |
|---|---|---|
| CH$_4$ methane | 0, 5, 0 | **R50** |
| C$_2$H$_6$ ethane | 1, 7, 0 | **R170** |
| C$_3$H$_8$ propane | 2, 9, 0 | **R290** |
| C$_3$H$_6$ propylene (one C=C) | 1 + 2, 7, 0 | **R1270** |
| CCl$_3$F | 0, 1, 1 | **R11** |
| CHClF$_2$ | 0, 2, 2 | **R22** |
| CHCl$_2$CF$_3$ | 1, 2, 3 | **R123** |
| CH$_2$FCF$_3$ (asymmetric isomer) | 1, 3, 4 | **R134a** |

Butane and heavier organics no longer fit the rule and are in the **600 series**, numbered in order: R600 n-butane, **R600a isobutane** (C$_4$H$_{10}$). (Inorganics are the 700 series: 700 + molar mass, R717 NH$_3$, R744 CO$_2$.)

**(b) Zeotropic mixtures** (5 marks). A zeotrope changes composition and saturation temperature as it boils or condenses at constant pressure (temperature glide). They are numbered in the **400 series**:

1. The number (R4xx) is given in **chronological order of ASHRAE approval** and identifies **which components** are in the blend, not their proportions.
2. An **upper-case letter** gives the **composition** (mass %).
3. Examples: **R404A** = R125/R143a/R134a (44/52/4); R407A = R32/R125/R134a (20/40/40); R407B = (10/70/20); **R407C** = (23/25/52), glide ≈ 7 K; **R410A** = R32/R125 (50/50).

Sketch the R404A scheme (Fig. 4): R = refrigerant; 4 = 400 series, zeotrope; 04 = chronological number designating the components; A = composition.

**(c) Azeotropic mixtures** (5 marks). An azeotrope boils and condenses at one temperature with no change of composition, like a pure substance, and cannot be separated by distillation. They are numbered in the **500 series**, also in order of approval; the components and their fixed proportions are part of the definition:

1. **R500** = R12/R152a (73.8/26.2).
2. **R502** = R22/R115 (48.8/51.2), the classic low-temperature refrigerant (now banned, CFC content).
3. **R507A** = R125/R143a (50/50), its HFC replacement.

> **TRY 10.4** `[PP 16-17 Q6(b), 18]` What are the desirable properties of a refrigerant? Explain the necessity of each particular property for efficient running of a refrigeration system.

**Solution 10.4** **[FROM SOURCE: Aloke p.104; Ameen §4.2; Hundy §3.2]** No refrigerant has every property; the choice is a compromise for the duty. The desirable properties and why each is needed:

*Thermodynamic*

1. **High latent heat of vaporisation**: large refrigerating effect per kg, so less refrigerant must be circulated; smaller compressor, pipes and expansion device.
2. **High suction-vapour density (low specific volume)**: more refrigeration per m³ swept, so a small, compact compressor and small suction line (for centrifugal compressors a larger volume flow is acceptable).
3. **Positive evaporator pressure**: above atmospheric, so air and moisture cannot leak in, and leaks are easily located.
4. **Moderate condensing pressure**: low enough for light compressor, piping and condenser, with less leakage tendency.
5. **Low pressure ratio**: low power per kW, high volumetric efficiency, lower discharge temperature.
6. **High critical temperature**: the vapour must condense at the condenser temperature; near the critical point the latent heat and COP fall (CO$_2$, 31 °C, is the bad case).
7. **Low freezing point** (and triple point): no solidification at the lowest evaporating temperature.
8. **Low normal boiling point**: avoids vacuum in the evaporator at low temperatures.
9. **Steep saturation curves** and low discharge temperature: little flash gas at the valve, dry compression with little superheat, oil and valves protected.

*Transport*

10. **High thermal conductivity**: high heat-transfer coefficients, smaller evaporator and condenser.
11. **Low viscosity** of liquid and vapour: low pressure drop in lines and coils, better heat transfer.

*Chemical*

12. **Chemically stable and inert**: does not break down into non-condensable gases, acids or sludge.
13. **Non-corrosive and compatible** with metals, gaskets and motor insulation (NH$_3$ attacks copper).
14. **Miscible with oil, without reacting**: oil returns from the evaporator to the compressor; lubrication is not impaired.
15. **High dielectric strength**: required in hermetic compressors where the motor winding is cooled by refrigerant.

*Safety*

16. **Non-toxic and non-flammable** (ASHRAE class A1 best): leaks must not endanger people; no odour in AC; no effect on stored food.
17. **Easy leak detection** (halide torch, electronic detector, soap bubbles, smell).

*Environmental and economic*

18. **Zero ODP and low GWP** (Montreal Protocol, Kigali Amendment), and **low cost and easy availability**, because large plants hold large charges and lose some every year.

### RF2. Applications of refrigeration and quick freezing

> **TRY 10.5** `[PP 12-13 Q5(a), 5]` What are the basic characteristics of quick freezing process? Classify quick freezing process.

**Solution 10.5** **[FROM SOURCE: Arif p.10a; Kanak pp.71, 73; Hundy §14.4–14.6]** This is the model answer for the quick-freezing family.

**Quick freezing** freezes the product in minutes (up to about 30 min), so that it passes rapidly through the zone of maximum ice-crystal formation (−1 to −5 °C). **Characteristics** (3 marks):

1. **Smaller ice crystals** are formed, inside and between the cells, so there is **less damage to the cells** and little drip loss on thawing.
2. The **freezing period is short**, so less time is allowed for **diffusion of salts and separation of water**.
3. The temperature is reduced quickly, so the **growth of bacteria and yeasts is retarded**, preventing decomposition during freezing; texture, colour and flavour are kept.

**Classification** (2 marks): (i) **air-blast freezing** (cold air at −35 to −40 °C blown at high speed over the product, in tunnels, spirals or fluidised beds); (ii) **immersion freezing** (product immersed in or sprayed with a cold liquid, brine, glycol or a cryogen such as liquid nitrogen); (iii) **indirect contact freezing** (product pressed between refrigerated metal plates: the plate freezer). Cryogenic freezing (LN$_2$, CO$_2$) is often listed as a fourth class.

> **TRY 10.6** `[PP 15-16 Q1(a), 5]` What are the basic characteristics of quick freezing process? Classify quick freezing process.

**Solution 10.6** **[FROM SOURCE: Arif p.10a; Kanak p.71]** Word for word TRY 10.5 (2012-13). Write Solution 10.5: small ice crystals and little cell damage; short freezing period, little salt diffusion and water separation; bacteria and yeast retarded. Classes: **air blast, immersion, indirect contact (plate)**, plus cryogenic.

> **TRY 10.7** `[PP 21-22 Q1(a), 15]` What are the basic characteristics of quick freezing process? Classify quick freezing process. Briefly describe the Plate Freezing process with schematic diagram.

**Solution 10.7** **[FROM SOURCE: Arif pp.10a, 12b; Kanak pp.71, 74; Hundy §7.4, §14.6]** Characteristics and classification as Solution 10.5 (5 marks), with the slow vs quick comparison (large vs small crystals, hours vs minutes) and the freezing-curve sketch of Fig. 9 if time allows.

**Plate freezing** (10 marks). Sketch Fig. 13 (or the slide sketch, Fig. 14): insulated cabinet, stack of hollow freezing plates, product packs between them, hydraulic ram on top, flexible hoses to the refrigerant supply and return headers; draw "separated plates" and "closed plates".

1. **Principle**: indirect contact freezing: the product is placed in **direct contact with flat metal plates cooled by a circulating refrigerant**; heat is conducted from both faces of the product straight to the boiling refrigerant.
2. **Plates**: hollow aluminium or steel plates with internal channels in which liquid refrigerant (NH$_3$, R404A or R507A) boils at about −35 to −40 °C; it is pumped at 5–12 times the evaporation rate to keep the channels wetted.
3. **Connections**: each plate is joined to the supply and wet-return headers by **flexible hoses**, so the plates can move; the return goes to a separator and the compressor.
4. **Loading**: the **hydraulic ram** opens the stack; trays, cartons or blocks of product are slid in between the plates.
5. **Freezing**: the ram closes the plates, pressing them on both faces of the packs to give close thermal contact; the packs freeze quickly and uniformly (a few cm thick in 1–2 h).
6. **Unloading**: the plates are opened (after a short hot-gas defrost to free the packs) and the frozen blocks removed.
7. **Types**: horizontal plate freezers for regular packages (fish fillets, prawns, meat, ice cream in flat cartons); vertical plate freezers for loose wet product such as whole fish, giving solid blocks 75–100 mm thick.
8. **Advantages**: high heat transfer, fast uniform freezing, compact, flat blocks for storage, little dehydration; **no fans, so lowest running cost**.
9. **Limitations**: only flat packages of uniform thickness; batch operation with labour for loading.

> **TRY 10.8** `[PP 13-14 Q1(a), 5]` What are the major applications of refrigeration system?

**Solution 10.8** **[FROM SOURCE: Arif pp.6b–13b; Kanak pp.74–76; Ameen §1.2]** This is the model answer for the applications family.

1. **Domestic refrigeration**: household refrigerators and freezers (fresh food ≈ 3 °C, freezer −18 °C).
2. **Commercial refrigeration**: supermarket display cases, reach-in cabinets, bottle coolers; meat, poultry and fish kept chilled before sale.
3. **Industrial refrigeration**: cold storage (potato 2–4 °C, 90% RH; fish −18 to −23 °C, 95% RH); food freezing; ice making; dairy products; liquefaction of gases (O$_2$, N$_2$, propane, methane); oil refineries, chemical and petrochemical processes; tempering of steel and cutlery.
4. **Marine and transport refrigeration**: refrigerated trucks, trains, aircraft, ships and containers for perishable goods.
5. **Comfort air conditioning** (temperature, humidity, ventilation, air motion, cleaning and noise for human comfort) and **industrial air conditioning** (textile mills, printing, electronics, pharmaceuticals, data centres). Also medical uses (vaccines, blood banks).

> **TRY 10.9** `[PP 17-18 Q1(a), 15]` Define refrigeration system. With a schematic diagram show the key components of a refrigeration system. What are the applications of refrigeration system?

**Solution 10.9** **[FROM SOURCE: Arif pp.2b–6a, 6b–13b; Kanak pp.70–76]**

**Definition** (3 marks). **Refrigeration** is the process of removing heat from an enclosed space or a substance and rejecting it elsewhere, to lower its temperature below that of the surroundings and then maintain that lower temperature. A **refrigeration system** is the set of components (with a mechanical device such as a compressor) that does this continuously by circulating a **refrigerant**, which absorbs heat at low temperature by evaporating at low pressure and releases it at high temperature by condensing at high pressure. The vapour-compression system holds about 80% of the market.

**Key components** (7 marks). Draw Fig. 1: a loop compressor → condenser → expansion valve → evaporator → compressor, labelled "high-pressure vapour", "high-pressure liquid", "low-pressure liquid–vapour mixture", "low-pressure vapour", "work in", "heat to ambient air or cooling water", "heat from refrigerated space".

1. **Evaporator**: the low-pressure liquid boils at a temperature below the space and absorbs heat from it (the refrigerating effect).
2. **Compressor**: draws vapour from the evaporator, keeping its pressure low, and compresses it to the condenser pressure so that it can condense above ambient temperature (work input).
3. **Condenser**: rejects the evaporator heat plus the compressor work to air or water; the vapour condenses to high-pressure liquid.
4. **Expansion valve or capillary tube**: throttles the liquid to the evaporator pressure and meters the flow into the evaporator.
5. Auxiliaries: receiver, filter-drier, sight glass, solenoid valve, controls.

**Applications** (5 marks). As Solution 10.8: domestic; commercial; industrial (cold storage, freezing, ice making, dairy, gas liquefaction, refineries and chemical plants, steel tempering); marine and transport; comfort and industrial air conditioning.

> **TRY 10.10** `[PP 22-23 Q1(a), 10]` What are the major applications of refrigeration system? Briefly describe the Immersion Freezing process with schematic diagram.

**Solution 10.10** **[FROM SOURCE: Arif pp.11b–12a; Kanak p.73; Hundy §14.6; Ameen §7.6]**

**Applications** (4 marks): as Solution 10.8: domestic, commercial, industrial (cold storage, food freezing, ice, dairy, gas liquefaction, chemical and refinery processes), marine and transport, comfort and industrial air conditioning.

**Immersion freezing** (6 marks). Sketch Fig. 11 (product in on a conveyor, tank of chilled brine or glycol, submerged conveyor, spray header, brine chiller with pump, frozen product out) or the slide sketch of Fig. 12 (inlet conveyor, liquid spray for hardening, freezing conveyor in a reservoir of liquid refrigerant, refrigerant sprays, condenser for refrigerant recovery, discharge conveyor, IQF product out).

1. **Principle**: the food product, packaged or unpackaged, is frozen by **immersion in, or spraying with, a refrigerant that remains liquid throughout the process**. The liquid surrounds every piece, so heat transfer is very high and freezing is fast and uniform; pieces freeze separately (IQF).
2. **Liquids**: aqueous solutions of propylene glycol, glycerol, sodium chloride and salt–sugar mixtures at about −20 to −30 °C; liquid nitrogen (−196 °C) in the cryogenic form.
3. **Process**: product enters on an inlet conveyor, is carried through the bath or under sprays on a freezing conveyor, leaves on a discharge conveyor, is drained (and rinsed) and goes to frozen storage.
4. **Liquid circuit**: the liquid drains to the tank and is pumped through a chiller (evaporator of a VCR plant) back to the sprays; in a cryogenic unit the boiled-off vapour is recovered by a condenser or vented.
5. **Uses**: canned citrus-juice concentrate passed continuously through a chamber of liquid freezant; poultry in the first stage of freezing (a uniform white surface colour); occasionally fish and shrimp.
6. **Limits**: liquid must be non-toxic and not taint the food (wrapped product with salt brines); brines may only pre-cool before a final air blast; cryogens are costly.

## 10.14 Summary sheet

> **KEY: Module 10 on one page**
>
> - **Refrigeration**: remove heat from a space or substance, reject it elsewhere, keep it below ambient. **VCR loop**: evaporator (boils, absorbs heat) → compressor (raises p) → condenser (rejects $Q_e+W$) → expansion valve (throttles, meters). Primary refrigerant changes phase; secondary (water, brine, glycol) only changes temperature.
> - **Desirable properties**: high $h_{fg}$; high suction density; positive but moderate pressures; low pressure ratio; high $T_{cr}$; low freezing point; steep saturation curves; high $k$, low $\mu$; stable, non-corrosive, oil-miscible, high dielectric strength; non-toxic, non-flammable, easy leak detection; ODP 0, low GWP; cheap.
> - **Numbering**: R-(c−1)(h+1)(f), Cl $=2c+2-h-f$; "add 90" → CHF. R11 CCl$_3$F, R12 CCl$_2$F$_2$, R22 CHClF$_2$, R32 CH$_2$F$_2$, R123 CHCl$_2$CF$_3$, R134a CH$_2$FCF$_3$, R50 CH$_4$, R170 C$_2$H$_6$, R290 C$_3$H$_8$, R1270 C$_3$H$_6$. Isomer a, b; olefin 1xxx. **400** zeotropes (chronological; letter = %): R404A, R407C (23/25/52), R410A (50/50). **500** azeotropes: R500, R502 (R22/R115), R507A (R125/R143a). **600**: R600, R600a isobutane. **700 + M**: R717, R718, R729, R744, R764.
> - **Azeotrope**: boils at one T, fixed composition, like a pure fluid. **Zeotrope**: glide $T_{dew}-T_{bubble}$ (R407C 7.0 K at 1 atm); charge as liquid; near-azeotropes < 2 K (R404A, R410A).
> - **Safety**: A/B toxicity (400 ppm), 1/2L/2/3 flammability. R134a, R22, R744 A1; R32 A2L; R290, R600a A3; R123 B1; R717 B2L.
> - **ODP** (R11 = 1), **GWP** (CO$_2$ = 1, 100 y): R22 0.055/1810, R134a 0/1430, R410A 0/2088, R404A 0/3922, R32 0/675, HCs 0/3, NH$_3$ 0/0, CO$_2$ 0/1. Montreal 1987 (CFC, HCFC out), Kigali 2016 (HFC down 80–85%). TEWI = direct (leak + recovery) + indirect (energy).
> - **Slopes**: both lines steep. Vapour line left (wet: water, NH$_3$, R22) → hot discharge (5/40 °C: water 195 °C, NH$_3$ 84 °C); vertical (R134a 43.7 °C, R12, R290) → ideal; right (dry: R600a, R113) → wet compression, needs suction superheat. Liquid line steep → low $c_{p,l}/h_{fg}$ → little flash ($x_4$: water 0.059, NH$_3$ 0.135, R134a 0.255).
> - **Water in VCR**: 0.87 kPa at 5 °C (vacuum), $v_g$ = 147 m³/kg, 15.9 kJ/m³ (R134a 2484), 62.76 L/s per kW, ratio 8.48, freezes at 0 °C. Fine in LiBr absorption: vapour absorbed, liquid pumped.
> - **Applications**: domestic, commercial, industrial (cold storage: potato 2–4 °C 90% RH, fish −18 to −23 °C 95% RH; freezing; ice; dairy; gas liquefaction; refineries; steel tempering), marine and transport, comfort AC, industrial AC; medical.
> - **Quick freezing**: small ice crystals, little cell damage; short period, little salt diffusion and water separation; bacteria/yeast retarded. Zone −1 to −5 °C crossed in ≤ 30 min. **Classes**: air blast, immersion (IQF), indirect contact (plate), cryogenic.
> - **Plate freezer**: hollow refrigerant-cooled plates in an insulated cabinet, packs between them, hydraulic ram closes plates, flexible hoses to headers; horizontal (packages) and vertical (fish blocks); no fans, cheapest to run.
> - **Immersion**: product immersed in or sprayed with a liquid that stays liquid (glycol, glycerol, NaCl, salt–sugar; LN$_2$ spray); conveyor through bath, chiller and pump; IQF; citrus concentrate cans, poultry, shrimp.

## 10.15 Self-test

1. Decode R152a and R143a into formulas.
2. What is the number of chlorodifluoromethane, and of CCl$_2$FCClF$_2$?
3. Why is isobutane R600a and not numbered by the (c−1)(h+1)(f) rule?
4. What does the letter in R407C mean, and what does it not mean in R404A's "04"?
5. Give the R-number of sulphur dioxide and explain it.
6. What is the temperature glide of a zeotrope?
7. What do the "B" and the "2L" in ammonia's safety class mean?
8. Which treaty phases down HFCs, and in which year was it agreed?
9. A refrigerant's saturated-vapour line leans right on T–s. What happens if the compressor takes in saturated vapour?
10. Why is a steep saturated-liquid line desirable?
11. Give two reasons why water is unsuitable for a reciprocating-compressor plant.
12. State the three characteristics of quick freezing and the three classes named in the course.

**Answers.**

1. R152a: 152 + 90 = 242 → C$_2$H$_4$F$_2$, CH$_3$CHF$_2$; R143a: 233 → C$_2$H$_3$F$_3$, CH$_3$CF$_3$.
2. CHClF$_2$ → (0)(1+1)(2) = **R22**; CCl$_2$FCClF$_2$: c = 2, h = 0, f = 3 → **R113**.
3. Butane has c − 1 = 3 and h + 1 = 11, which cannot be written as one digit, so butanes are in the 600 (miscellaneous organic) series; a marks the isomer.
4. C fixes the composition (R32/R125/R134a 23/25/52); "04" is only a chronological number for the set of components, not their percentages.
5. R764: 700 + molar mass 64 (S 32 + 2 × 16).
6. The difference between the dew-point and bubble-point temperatures at one pressure (R407C ≈ 7 K).
7. B: higher toxicity (toxic below 400 ppm); 2L: lower flammability with burning velocity ≤ 10 cm/s.
8. The Kigali Amendment to the Montreal Protocol, 2016.
9. Isentropic compression ends inside the dome: wet compression (liquid slugging), so the suction vapour must be superheated.
10. It means a low liquid specific heat, so throttling produces little flash gas and the refrigerating effect is large.
11. Deep vacuum (0.87 kPa at 5 °C) and huge specific volume (147 m³/kg, ≈ 63 L/s per kW); also freezing at 0 °C and a high pressure ratio.
12. Small ice crystals and less cell damage; short freezing period with little salt diffusion and water separation; quick temperature fall retards bacteria and yeasts. Classes: air blast, immersion, indirect contact (plate).
