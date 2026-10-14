<!-- pagebreak -->
# Module 6: Psychrometry, comfort and air-conditioning systems

| | |
|---|---|
| **Where it appears** | 10 of 11 papers, 2011-12 to 2023-24 (not 2021-22). Almost always Q2 (and Q3 in 2011-12, 2012-13) of Section A; Q1(a) in 2020-21; Q7(b) (2013-14) and Q8(b)/(c) (2023-24) of Section B |
| **Share of all marks** | 11.3% (346 of 3055 weighted marks): 27 parts. AC system types (AC5) 125 marks; the window/split AC numerical (AC2) 75 marks; other psychrometric numericals (AC3) 60; processes and reheat/bypass systems (AC4) 49; comfort (AC1) 37. Up to 19% of a paper in 2011-12 to 2013-14, 5–12% since |
| **Time** | core 3 h (§6.1–6.4, §6.7–6.8 and Solutions 5.1, 5.6, 5.19), full 6 h (all 27 solutions) |
| **Sources** | Arif pp.14–17, 60–76, 94–106; Kanak pp.29–31, 118–128, 153–163; Ameen §12.1–12.5 (SHR, supply air, mixing); Data Book Table 1 (water) and Chart 8 (psychrometric chart), both at the end of this module |

**How it has been asked:**

- **The window/split AC numerical (AC2), 15–20 marks, four papers in a row.** "Air enters a window air conditioner at 1 atm., 35°C, and 70 percent relative humidity at a rate of 10 m³/min, and it leaves as saturated air at 15°C. Part of the moisture in the air that condenses during the process is also removed at 15°C. Determine the rates of heat and moisture removal from the air" (2013-14). **The same wording** with 35 °C/80 %/12 m³/min/12 °C (2016-17), "a split air conditioner" at 32 °C/80 %/15 m³/min/14 °C (2017-18) and 35 °C/80 %/15 m³/min/12.5 °C (2018-19). It is Çengel's Example 14-8, solved on Arif p.102 and Kanak pp.159–160 with 30 °C/80 %/14 °C.
- **AC system types (AC5), 5–20 marks, eight papers.** "Why the outdoor air is required in air conditioning system? Compare all air and all water system with schematic diagram. Make comparison between ducted split type, multiple split type and VRF … system with schematic diagram" (**2020-21 ≡ 2022-23 verbatim**; parts of it in 2015-16, 2017-18, 2018-19). "With schematic diagram, briefly explain the key components of a central air-conditioning system … (i) chiller (ii) cooling tower (iii) AHU (iv) FCU" (2011-12); "Briefly distinguish between (i) FCU and AHU (ii) split and window type a/c" (2012-13; window vs split also 2011-12); "Compare between Constant Air Volume (CAV) and Variable Air Volume (VAV) …" (2023-24).
- **Other psychrometric numericals (AC3), 2011-12 to 2015-16 only.** Supply-air state and volume from a sensible gain and a moisture gain (2012-13); "elementary summer A/C system" with outdoor air at 400 L/s (2011-12); mixing recirculated and outdoor air "three times the volume" (2012-13); "Atmosphere air at 30°C and 50% relative humidity is compressed isothermally to a pressure of 10 bar" (2012-13); simple heating, 14 °C/80 % to 25 °C (2015-16).
- **Processes and systems on the chart (AC4).** "Show all the Air-conditioning processes on a typical psychrometric chart" (2013-14); "Summer a/c system with bypass … with reheat" with schematics and charts (2011-12); "All-Air system with Reheat … advantages and disadvantages" (2013-14, 18 marks); "evaporative cooling psychrometric process with example" (2016-17).
- **Comfort (AC1).** "Briefly explain the factors affecting human comfort" (**2011-12 ≡ 2012-13 verbatim**; 2013-14, 2015-16); "differences between refrigeration and air-conditioning system" (2015-16, 2017-18); "Define 'Thermal Comfort'. Describe the concept of the 'Comfort Zone' on the psychometric chart" (2023-24).

> **KEY: Toolkit for this module**
>
> - **Symbols.** $P$ total (barometric) pressure, $P_v$ partial pressure of the vapour, $P_g=p_{sat}(T)$ saturation pressure at the dry-bulb temperature (Table 1), all in kPa. $\omega$ specific humidity (humidity ratio), kg water per kg **dry air**; $\phi$ relative humidity; $h$ enthalpy and $v$ specific volume, both per kg dry air. $T_{db}, T_{wb}, T_{dp}$ dry-bulb, wet-bulb, dew-point temperatures, °C. $\dot m_a$ dry-air mass flow, $\dot m_w$ water flow.
> - **The six equations** (dry air and vapour as ideal gases; $T$ in °C, $P$ in kPa):
> $$\omega=\frac{0.622\,P_v}{P-P_v}\qquad \phi=\frac{P_v}{P_g}\qquad h=1.005\,T+\omega(2501+1.82\,T)\qquad v=\frac{0.287\,(T+273.15)}{P-P_v}$$
> $$\text{wet bulb: }\ \omega_1=\frac{1.005(T_{wb}-T_1)+\omega^*\,h_{fg}(T_{wb})}{2501+1.82\,T_1-h_f(T_{wb})},\ \ \omega^*=\frac{0.622\,P_g(T_{wb})}{P-P_g(T_{wb})}\qquad \text{dew point: } T_{dp}=T_{sat}(P_v)$$
> - **Data.** $P_g$, $h_f$, $h_{fg}$ from Table 1 (water, end of this module), rows every 5 °C: interpolate linearly, and convert MPa to kPa (0.00425 MPa = 4.25 kPa). 1 atm = 101.325 kPa.
> - **Balances** (steady flow, per process): dry air $\sum\dot m_{a,in}=\sum\dot m_{a,out}$; water $\sum\dot m_a\omega_{in}+\dot m_{w,in}=\sum\dot m_a\omega_{out}+\dot m_{w,out}$; energy $\dot Q_{in}+\sum\dot m_ah_{in}+\dot m_wh_w=\dot Q_{out}+\sum\dot m_ah_{out}$.
> - **Volume to mass:** $\dot m_a=\dot V/v$ at the state where $\dot V$ is measured.
> - **Condensate:** $h_w=h_f$ at the condensate temperature (Table 1). **Cooling coil:** $\dot Q_{out}=\dot m_a(h_1-h_2)-\dot m_wh_w$, $\dot m_w=\dot m_a(\omega_1-\omega_2)$.
> - **Room loads:** sensible $\dot Q_s=\dot m_a(1.005+1.82\,\omega_s)(T_r-T_s)$, moisture $\dot m_{w}=\dot m_a(\omega_r-\omega_s)$, latent $\dot Q_l=\dot m_a(\omega_r-\omega_s)(2501+1.82\,T_r)$; $SHR=\dot Q_s/(\dot Q_s+\dot Q_l)$.
> - **Mixing:** $\omega_3$ and $h_3$ are dry-air-mass weighted averages; 3 lies on the straight line 1–2 of the chart.
> - **Chart:** the psychrometric chart at the end of this module is drawn for **101.325 kPa** (sea level). At any other pressure use the equations.
> - **Units.** 1 TR = 3.517 kW = 211 kJ/min; kJ/min ÷ 60 = kW.

## 6.1 Comfort, air conditioning and refrigeration ★

### What air conditioning is

**Air conditioning** is the simultaneous control of the temperature, humidity, cleanliness (filtering), air motion and distribution of the air in a space, to suit the people in it (comfort air conditioning) or a process (industrial air conditioning) [Arif p.14a; Ameen §11.1]. Modern systems can heat, cool, humidify, dehumidify, clean and deodorize the air [Arif p.94b; Kanak p.153]. **Comfort air conditioning** controls space temperature (cooling or heating), humidity, ventilation, air motion, filtering and noise [Arif p.14a]. **Industrial air conditioning** controls the moisture of hygroscopic materials, reaction rates, the size of precision parts (thermal expansion), clean air for products such as pharmaceuticals, and the space conditions a process needs [Arif p.17b].

**Refrigeration** is the removal of heat from a substance or space to bring it below the temperature of its surroundings and keep it there. A refrigeration system is one *part* of a summer air-conditioning system (it cools the coil), but air conditioning does much more.

| Point | Refrigeration | Air conditioning |
|---|---|---|
| Aim | lower and hold the **temperature** of a product or space below ambient | control the **whole state of the air**: temperature, humidity, purity, motion, distribution (and noise) |
| What is treated | a product (food, ice, chemicals) or a closed cabinet or cold room | the air of an occupied or process space |
| Temperature range | usually well below 0 °C up to about 10 °C (freezing, cold storage, ice) | close to room temperature: 20–27 °C; coil 7–14 °C |
| Humidity | not controlled for its own sake (only to protect a product) | controlled: dehumidified in summer, humidified in winter |
| Ventilation, filtering, air motion | not needed | essential parts of the system (outdoor air, filters, fans, ducts, diffusers) |
| Heating | never | yes, in winter (heat pump, heating coil) |
| Load | product and transmission load | sensible + latent load of people, sun, walls, equipment and outdoor air |
| Equipment | refrigeration cycle only | refrigeration plant plus air handling (fans, coils, ducts, humidifiers, filters, controls) |
| Main users | food preservation, ice making, chemical and process industry | people (comfort) and processes (textile, pharmaceutical, printing, computer rooms) |

### Human comfort

The human body is a heat engine: it converts food to work and **waste heat**, and must reject that heat continuously to stay at about 37 °C. The rate depends on activity: about 87 W asleep, 115 W resting or at office work, 440 W in heavy work (Arif p.94b); the table on Arif p.95a gives 70 W (min., sleeping) to 580–700 W (hard sustained work). In light work about half of it leaves as **latent heat** (evaporation of perspiration and moisture of breathing) and half as **sensible heat** (convection and radiation). **A body feels comfortable when it can freely dissipate its waste heat, and no more** [Arif p.94b]. If it loses heat too fast it feels cold; if too slowly, warm.

**Thermal comfort** is "that condition of mind which expresses satisfaction with the thermal environment" (ASHRAE Standard 55). It is reached when the body is in heat balance without strain: skin temperature and sweat rate in a narrow comfortable range, and no local discomfort (draughts, cold floors, radiant asymmetry) [Ameen §9.1].

![Fig. 1: Thermal-comfort factors around a standing man: human heat loss by convection, evaporation and radiation; insulating factor, clothing; physiological factors, activity, age and health; thermal-comfort factors, air temperature, surface temperature, air motion, relative humidity [Arif p.95b]](figures/001.png "w=0.55")

**Seven factors influencing thermal comfort** [Arif p.95b; Kanak p.153]. The first three belong to the person, the last four to the environment:

1. **Activity level** (metabolic rate): more activity, more heat to reject, so a cooler room is preferred.
2. **Clothing** (insulation, measured in clo): more clothing, lower comfortable temperature.
3. **Expectation** (and adaptation, age, health, sex): people used to a hot climate accept warmer rooms; elderly and sick people prefer warmer rooms.
4. **Air temperature** (dry bulb): sets the convective heat loss. The single most important factor.
5. **Radiant temperature** (mean temperature of the surrounding surfaces): hot roofs, sunlit glass or cold walls change the radiant loss; a room at 24 °C with a hot ceiling feels warm.
6. **Humidity** (relative humidity): sets the evaporation of sweat. High humidity in summer prevents evaporative cooling and feels sticky; very low humidity dries the skin, eyes and throat and causes static.
7. **Air speed** (air motion): raises convective and evaporative loss. About 0.1–0.25 m/s is comfortable; higher speeds are draughts, still air feels stuffy.

Air **purity** (odour, dust, CO₂) and **noise** also affect comfort, which is why outdoor air and filters are part of every system.

### The comfort zone

The **comfort zone** is the region of the psychrometric chart (dry-bulb temperature on the horizontal axis, humidity on the vertical) inside which most people (at least 80%, ASHRAE 55) with normal clothing and sedentary activity feel thermally comfortable. It is bounded on the left and right by the lowest and highest acceptable temperatures (strictly by lines of operative temperature, which slope slightly), and at the top and bottom by the highest and lowest acceptable humidity. There are two zones, because people wear more clothing in winter:

| Indoor design conditions (ASHRAE 55-1992 and 90.1-1999) | $T$ (°C) | $\phi$ (%) |
|---|---|---|
| Summer | 23.5 to 26.0 | 30 to 65 |
| Winter, commercial and public buildings | 20.5 to 23.5 | 20 to 65 |
| Winter, health-care buildings | 20.5 to 23.5 | 30 to 65 |

(Arif p.96b.) A design point such as 25 °C, 50 % sits in the middle of the summer zone. Outside the zone the occupant is too cold (left), too warm (right), too humid (top) or too dry (bottom); far to the right lie "impaired efficiency", "work becomes difficult", "acute distress" and the lethal limit (Arif p.96a). The job of the air-conditioning system is to bring the room air from the outdoor state into this zone and to hold it there against the loads.

![Fig. 2: Comfort zones on the psychrometric chart (T_db 10–40 °C horizontal, ω vertical, φ curves 20–80 %): the summer zone (red) between 23.5 and 26 °C and between the 30 % and 65 % RH curves; the winter zone (blue) between 20.5 and 23.5 °C and between 20 % and 65 % RH; outside: too cold (left), too warm (right), too humid (top), too dry (bottom)](figures/002.png "w=0.65")

![Fig. 3: Arif sir's climate chart: psychrometric chart (dry bulb −10 to 60 °C, moisture content 0–0.030 kg/kg) with a Comfort zone near 20–27 °C, regions Too cold, Too warm, Impaired efficiency, Work becomes difficult, Acute distress, Approximate lethal limit, and the climates of cities from Reykjavik to Wadi Halfa marked [Arif p.96a]](figures/003.jpg "w=0.6")

### Why outdoor air is needed (ventilation)

Outdoor air is required in an air-conditioning system [Arif p.97a; Kanak p.127]:

1. to meet the **metabolic requirements** of the occupants (oxygen);
2. to **dilute indoor contaminants**, odours and pollutants (CO₂, body odour, smoke, VOCs from furniture) and keep an acceptable air quality;
3. to **support combustion** or **replace air exhausted** from laboratories, kitchens, manufacturing processes and rest rooms;
4. to **make up the air that exfiltrates** when the space is kept at a slight positive pressure (which keeps dust and unconditioned air out);
5. to **add or remove heat and moisture** (free cooling when the outdoor air is cool and dry).

Minimum outdoor air (ASHRAE 62-1992) [Arif p.97b]: offices, dining and conference rooms, lounges 10 L/s per person; retail stores, waiting rooms, classrooms 7 L/s; hospital patient rooms and residences 15 L/s; smoking lounges 30 L/s. (Module 1 uses Ameen's 8 L/s per student for classrooms; state which you use.) Outdoor air is a large part of the cooling load in a hot humid climate (Solution 6.6), so it is never more than needed.

## 6.2 Moist air and its properties ★

Atmospheric air is a mixture of **dry air** (N₂, O₂, Ar, CO₂, constant composition) and **water vapour**, whose amount varies. At air-conditioning temperatures (−10 to 50 °C) both behave as ideal gases. By **Dalton's law** the total pressure is the sum of the partial pressures: $P=P_a+P_v$ [Ameen §12.1]. Because the water content changes in AC processes while the dry air does not, every property is expressed **per kg of dry air**.

**Saturation.** At temperature $T$ the vapour pressure cannot exceed the saturation pressure of water $P_g=p_{sat}(T)$, read from the water table. Air holding this much vapour is **saturated**; any more condenses as fog or dew.

**Specific humidity** (humidity ratio, moisture content), the mass of water vapour per kg dry air:

$$\omega=\frac{m_v}{m_a}=\frac{P_vV/(R_vT)}{P_aV/(R_aT)}=\frac{R_a}{R_v}\frac{P_v}{P-P_v}=\frac{0.287}{0.4615}\frac{P_v}{P-P_v}=\frac{0.622\,P_v}{P-P_v}\quad\text{kg/kg dry air}$$

**Relative humidity**, the vapour actually present compared with the maximum the air can hold at the same temperature:

$$\phi=\frac{m_v}{m_g}=\frac{P_v}{P_g}\qquad(0\le\phi\le1)$$

Heating air at constant $\omega$ raises $P_g$ and so lowers $\phi$; cooling raises $\phi$ until it reaches 100 %. Combining the two: $\omega=\dfrac{0.622\,\phi P_g}{P-\phi P_g}$, or $\phi=\dfrac{\omega P}{(0.622+\omega)P_g}$.

**Enthalpy** per kg dry air, with the datum $h=0$ for dry air at 0 °C and for liquid water at 0 °C:

$$h=h_a+\omega h_g=c_{pa}T+\omega\,(h_{g0}+c_{pv}T)=1.005\,T+\omega\,(2501+1.82\,T)\quad\text{kJ/kg dry air}$$

Here 2501 kJ/kg is $h_g$ at 0 °C (Table 1: 2500.9) and 1.82 kJ/kg·K the $c_p$ of the vapour. $1.005\,T$ is the **sensible** part, $\omega(2501+1.82T)$ the **latent** part (the energy locked in the vapour).

**Specific volume** per kg dry air (the dry air occupies the whole volume at its partial pressure $P_a=P-P_v$):

$$v=\frac{R_aT}{P_a}=\frac{0.287\,(T+273.15)}{P-P_v}\quad\text{m}^3/\text{kg dry air}$$

Use it to convert a measured volume flow to the dry-air mass flow, $\dot m_a=\dot V/v$. It depends on $P$: at 100 kPa it is 1.3 % larger than at 101.325 kPa.

**Dry-bulb temperature** $T_{db}$: the ordinary temperature, read by a thermometer with a dry bulb shielded from radiation.

**Dew-point temperature** $T_{dp}$: the temperature at which condensation begins when the air is cooled at constant pressure and constant $\omega$ (so constant $P_v$): $T_{dp}=T_{sat}(P_v)$. A cold-drink glass sweats because its surface is below the dew point of the room air. A cooling coil dehumidifies only if its surface is below the dew point.

**Wet-bulb temperature** $T_{wb}$: the temperature read by a thermometer whose bulb is covered by a wet wick in a stream of air (sling psychrometer, aspirated psychrometer). Water evaporates from the wick, drawing heat from it, until the heat convected in from the air balances the latent heat carried away. The drier the air, the faster the evaporation and the lower $T_{wb}$; for saturated air $T_{wb}=T_{db}$. For air-water mixtures it is practically equal to the **adiabatic saturation temperature**, so it can be calculated from the adiabatic saturator below [Ameen §12.2].

**The adiabatic saturator.** Air at $T_1,\omega_1$ flows over a long pool of water in an insulated channel and leaves saturated at $T_2$; water at $T_2$ is added to keep the level constant (Fig. 4). With no heat or work, the energy balance per kg dry air is $h_1+(\omega_2-\omega_1)h_f(T_2)=h_2$, which gives

$$\omega_1=\frac{c_{pa}(T_2-T_1)+\omega_2h_{fg2}}{h_{g1}-h_{f2}}=\frac{1.005(T_2-T_1)+\omega_2h_{fg}(T_2)}{2501+1.82\,T_1-h_f(T_2)},\qquad \omega_2=\frac{0.622\,P_g(T_2)}{P-P_g(T_2)}$$

with $T_2=T_{wb}$. Given $T_{db}$ and $T_{wb}$ (sling psychrometer), this gives $\omega$ directly. Given $\omega$, find $T_{wb}$ by trial: guess $T_{wb}$, compute $\omega_1$, adjust, and interpolate between two guesses.

![Fig. 4: The adiabatic saturator: unsaturated air 1 (T1, ω1) enters a long insulated channel over a pool of water at T2 and leaves as saturated air 2 at T2 with ω2 = ω_sat(T2); make-up water at T2 is added at the rate ṁa(ω2 − ω1). T2 is the adiabatic saturation temperature, practically equal to the wet-bulb temperature](figures/004.png "w=0.65")

**Degree of saturation** $\mu=\omega/\omega_s$ (the "percentage saturation" of British charts) is close to $\phi$ at room temperatures.

> **EXAMPLE 6.1** `[Arif pp.101–102; Kanak p.159; state 1 of the window AC problem]` Air is at 1 atm, 30 °C and 80 % relative humidity. Find $\omega$, $h$, $v$, the dew point and the wet-bulb temperature.
>
> **[TUTOR-GENERATED]** Table 1, row 30 °C: $P_g=0.00425$ MPa $=4.25$ kPa.
>
> $P_v=\phi P_g=0.8\times4.25=3.40$ kPa
>
> $\omega=\dfrac{0.622\times3.40}{101.325-3.40}=\mathbf{0.0216}$ kg/kg dry air
>
> $h=1.005(30)+0.0216(2501+1.82\times30)=30.15+55.19=\mathbf{85.34}$ kJ/kg dry air
>
> $v=\dfrac{0.287\times303.15}{101.325-3.40}=\mathbf{0.8885}$ m³/kg dry air
>
> *Dew point:* $T_{sat}$ at 3.40 kPa. Table 1 rows 25 °C (3.17 kPa) and 30 °C (4.25 kPa): $T_{dp}=25+5\,\dfrac{3.40-3.17}{4.25-3.17}=\mathbf{26.06}$ °C.
>
> *Wet bulb by trial.* Try $T_{wb}=27$ °C: Table 1 between 25 and 30 °C gives $P_g=3.602$ kPa, $h_{fg}=2436.94$, $h_f=113.19$ kJ/kg; $\omega^*=0.622\times3.602/(101.325-3.602)=0.02293$;
> $\omega_1=\dfrac{1.005(27-30)+0.02293\times2436.94}{2501+1.82\times30-113.19}=0.02164$ (slightly above 0.0216, so $T_{wb}$ is a little below 27). Try 26 °C: $\omega_1=0.01980$. Interpolating, $T_{wb}=26+\dfrac{0.0216-0.01980}{0.02164-0.01980}=\mathbf{26.98}$ °C $\approx27.0$ °C.
>
> *Chart check* (sea-level chart, end of this module): $\omega\approx21.7$ g/kg, $h\approx85.5$ kJ/kg, $v\approx0.889$ m³/kg, $T_{wb}\approx27$ °C, $T_{dp}\approx26$ °C. CoolProp: 0.02168, 85.56 kJ/kg, 0.8884 m³/kg. The table route is within 0.4 % of the exact values; the small difference comes from interpolating $P_g$ linearly over 5 K.

## 6.3 The psychrometric chart ★

The **psychrometric chart** plots the properties of moist air at one total pressure, so that any state can be fixed by two properties and all the others read off, and every AC process can be seen as a path [Arif p.98b; Kanak p.153; Ameen §12.3]. Fig. 5 shows its anatomy:

- **Horizontal axis:** dry-bulb temperature. Vertical lines are constant $T_{db}$.
- **Vertical axis** (on the right): specific humidity $\omega$ (often in g/kg). Horizontal lines are constant $\omega$, hence constant $P_v$ and constant dew point. Some charts add a vapour-pressure or dew-point scale beside it.
- **Saturation curve** (φ = 100 %), the upper-left boundary. On it $T_{db}=T_{wb}=T_{dp}$, and the saturation temperatures are marked along it.
- **Constant-φ curves** (10 %…90 %) below and parallel to the saturation curve; each is the saturation curve scaled down vertically.
- **Constant-wet-bulb lines**, straight, sloping down to the right from the saturation curve.
- **Constant-enthalpy lines**, almost parallel to the wet-bulb lines (they differ by the tiny $(\omega_2-\omega_1)h_f$ term); read $h$ on the diagonal scale outside the saturation curve.
- **Constant-specific-volume lines**, steeper, sloping down to the right.
- A **protractor** (sensible heat ratio, $\Delta H_s/\Delta H_t$, and $\Delta h/\Delta\omega$) at the upper left, used to draw a room condition line of known SHR.

**Reading a state.** Locate the point from any two independent properties (e.g. $T_{db}$ and φ, or $T_{db}$ and $T_{wb}$). Then: go horizontally right for $\omega$; horizontally left to the saturation curve for $T_{dp}$; along the wet-bulb line up-left to the saturation curve for $T_{wb}$; along the enthalpy line to the $h$ scale; interpolate between the volume lines for $v$.

![Fig. 5: Anatomy of the psychrometric chart at 101.325 kPa (T_db 0–45 °C horizontal, ω 0–0.030 kg/kg on the right): saturation curve φ = 100 % at the upper left; grey constant-φ curves 20, 40, 60, 80 %; green dashed constant-T_wb lines; orange dash-dot constant-h lines labelled h = 40, 60, 80; blue dotted constant-v lines 0.85 and 0.90. State 1 at 30 °C, φ = 80 % (Example 6.1): a red dashed vertical down to T_db = 30 °C, a red horizontal to the right axis at ω1 = 0.0216, the same horizontal to the left meets the saturation curve at the dew point 26.1 °C; a green line up-left along the wet-bulb line meets the saturation curve at T_wb = 27.0 °C](figures/005.jpg "w=0.85")

**The chart at the end of this module** is ASHRAE chart No. 1 (Data Book Chart 8), normal temperature, **sea level, 101.325 kPa**, with a clean print of the same chart. The chart pasted in the slides and the Note (Arif p.99a, Kanak p.154) is ASHRAE chart **No. 5 for 750 m (92.634 kPa)**: do not read numbers from it. The UIG chart on Kanak p.155 is for 760 mm Hg (sea level) and agrees with Chart 8.

**Equations or chart?** The equations of §6.2 with Table 1 are exact (to the interpolation in Table 1) at **any** pressure; the chart is quicker but good to about ±0.5 kJ/kg and ±0.0003 in $\omega$, and only at its own pressure. This guide solves every numerical with the equations and quotes the chart reading as a check. In the exam either route earns full marks if the steps are shown; draw the process on a sketch of the chart in both cases.

> **TRAP: The chart is for one pressure only**
>
> At 1 atm the chart and the equations agree. At any other pressure the chart is wrong, and $\omega$ and $v$ must be computed: for the same $T$ and φ, $\omega$ and $v$ grow as $P$ falls ($\omega\propto P_v/(P-P_v)$, $v\propto1/(P-P_v)$). The Note's heating-with-humidification problem at **100 kPa** (pp.161–162) reads $v_1=0.80$ m³/kg off the sea-level chart; at 100 kPa it is 0.8157 (Example 6.3), so its heat input 703 kJ/min should be **668 kJ/min**. Whenever a problem states a pressure other than 1 atm (100 kPa, or a plant at altitude), use the equations.

## 6.4 Air-conditioning processes ★

**Every AC process is a steady-flow process** analysed with three balances [Arif p.100a; Kanak p.156]:

- dry air: $\sum_{in}\dot m_a=\sum_{out}\dot m_a$ (the dry air passes through unchanged);
- water: $\sum_{in}\dot m_a\omega+\dot m_{w,in}=\sum_{out}\dot m_a\omega+\dot m_{w,out}$, where $\dot m_w$ is liquid or steam added or condensate removed;
- energy: $\dot Q_{in}+\dot W_{in}+\sum_{in}\dot m h=\dot Q_{out}+\dot W_{out}+\sum_{out}\dot m h$. The fan work is small and usually neglected, kinetic and potential energy changes too.

**The basic processes on the chart** (Fig. 6) [Arif p.99b; Kanak p.154; Ameen §12.4]. From a state O:

| No. | Process | Direction on the chart | ω | φ | Equipment, example |
|---|---|---|---|---|---|
| 1 | Sensible heating | horizontal, to the right | const. | falls | heating coil (hot water, steam, electric), heat-pump condenser; winter |
| 2 | Sensible cooling | horizontal, to the left (not past the dew point) | const. | rises | cooling coil with surface above the dew point |
| 3 | Humidifying | vertically up (pure humidification at const. T) | rises | rises | steam humidifier with steam near the air temperature |
| 4 | Dehumidifying | vertically down | falls | falls | (idealized; in practice it is 6 or 8) |
| 5 | Heating and humidifying | up and to the right | rises | either | heating coil + steam or spray humidifier; winter AC |
| 6 | Cooling and dehumidifying | down and to the left, toward the saturation curve | falls | rises | cooling coil below the dew point (window, split, AHU coil); summer AC |
| 7 | Evaporative cooling | up-left along a wet-bulb line | rises | rises | air washer, desert cooler, cooling tower |
| 8 | Chemical dehumidification | down-right, near a constant-enthalpy line | falls | falls | silica gel, activated alumina, lithium chloride: the latent heat released heats the air |
| 9 | Adiabatic mixing | straight line between the two states | between | between | mixing box of an AHU (return + outdoor air) |

Air is commonly heated and humidified in winter and cooled and dehumidified in summer.

![Fig. 6: All air-conditioning processes from a state O at 24 °C, ω = 0.010 on the psychrometric chart (T_db horizontal, ω vertical, φ curves 20–80 %): 1 sensible heating to the right, 2 sensible cooling to the left, 3 humidifying straight up, 4 dehumidifying straight down, 5 heating and humidifying up-right, 6 cooling and dehumidifying down-left, 7 evaporative cooling up-left along the constant-wet-bulb line (green), 8 chemical dehumidification down-right along a constant-enthalpy line with the temperature rising (blue)](figures/006.png "w=0.8")

![Fig. 7: Arif sir's figure of the various air-conditioning processes: from a central state arrows radiate to Heating (right), Cooling (left), Humidifying (up), Dehumidifying (down), Heating and humidifying (up-right), Cooling and dehumidifying (down-left) [Arif p.99b]](figures/007.png "w=0.45")

### Sensible heating and cooling (ω = constant)

Air passes over a heating coil (hot water, steam, electric resistance, hot gas) or a cooling coil whose surface is above the dew point. No moisture is added or removed, so the process is a horizontal line [Arif p.100b; Kanak p.157]:

$$\dot m_{a1}=\dot m_{a2}=\dot m_a,\qquad \omega_1=\omega_2,\qquad \dot Q=\dot m_a(h_2-h_1)=\dot m_a(1.005+1.82\,\omega)(T_2-T_1)$$

During heating $\omega$ stays constant but $\phi$ falls ($P_v$ fixed, $P_g$ rises): winter heating alone gives uncomfortably dry air, so it is followed by humidification. During sensible cooling $\phi$ rises. Fig. 8 shows the heating case of Solution 6.5.

![Fig. 8: Simple heating. (a) Duct with a heating coil: state 1 at 14 °C, φ 80 %, 30 m³/min enters; heat $\dot Q_{in}$ is added; state 2 leaves at 25 °C with ω2 = ω1 and φ2 < φ1. (b) Chart: horizontal arrow from 1 (14 °C, 80 %) to 2 (25 °C, 41 %) at constant ω = 0.00803](figures/008.png "w=0.85")

### Cooling with dehumidification ★

If the air is cooled below its dew point, moisture condenses on the coil and drains away. This is what every window AC, split AC indoor unit and AHU cooling coil does in summer [Arif p.101a; Kanak p.158]. On the chart (Fig. 9) the air first cools at constant $\omega$ to the dew point x on the saturation curve, then follows the saturation curve down to the exit state 2 (in a real coil the path is a curve from 1 to 2 and the exit is 90–100 % saturated, but only the end states matter). Balances for the coil (control volume around the coil and its drain pan):

$$\text{dry air: }\dot m_{a1}=\dot m_{a2}=\dot m_a\qquad \text{water: }\dot m_a\omega_1=\dot m_a\omega_2+\dot m_w\Rightarrow \dot m_w=\dot m_a(\omega_1-\omega_2)$$
$$\text{energy: }\dot m_ah_1=\dot Q_{out}+\dot m_ah_2+\dot m_wh_w\Rightarrow \dot Q_{out}=\dot m_a(h_1-h_2)-\dot m_wh_w$$

with $h_w=h_f$ at the condensate temperature (Table 1). The condensate term is only 1–2 % of $\dot Q_{out}$.

![Fig. 9: Cooling with dehumidification in a window or split AC. (a) Duct with the cooling coil (evaporator) inside a dashed control volume: state 1 at 35 °C, φ 70 %, 10 m³/min enters at the left; heat $\dot Q_{out}$ leaves to the refrigerant; condensate ṁw at 15 °C (h_w = h_f) drips into a drain pan; state 2 leaves at 15 °C saturated. (b) Chart: from 1 (35 °C, ω1) horizontally left to x, the dew point 28.6 °C on the saturation curve, then down along the saturation curve to 2 (15 °C, ω2); the vertical gap ω1 − ω2 is the water condensed per kg dry air](figures/009.png "w=0.95")

> **EXAMPLE 6.2** `[Arif pp.101b–102a; Kanak pp.159–160; Çengel Ex. 14-8]` Air enters a window air conditioner at 1 atm, 30 °C and 80 percent relative humidity at a rate of 10 m³/min, and it leaves as saturated air at 14 °C. Part of the moisture in the air that condenses during the process is also removed at 14 °C. Determine the rates of heat and moisture removal from the air.
>
> **[FROM SOURCE: Arif pp.101–102, Kanak pp.159–160; equation route]** Sketch Fig. 9 with these numbers.
>
> *State 1* (Example 6.1): $\omega_1=0.0216$, $h_1=85.34$ kJ/kg, $v_1=0.8885$ m³/kg.
>
> *State 2* (14 °C, saturated): Table 1 rows 10 °C (0.00123 MPa) and 15 °C (0.00171 MPa): $P_g=1.23+0.8(1.71-1.23)=1.614$ kPa $=P_{v2}$;
> $\omega_2=\dfrac{0.622\times1.614}{101.325-1.614}=0.01007$; $h_2=1.005(14)+0.01007(2501+1.82\times14)=39.51$ kJ/kg.
>
> *Condensate:* $h_w=h_f(14\ °\text{C})=42.02+0.8(62.98-42.02)=58.79$ kJ/kg.
>
> $\dot m_a=\dfrac{\dot V_1}{v_1}=\dfrac{10}{0.8885}=11.26$ kg/min
>
> $\dot m_w=\dot m_a(\omega_1-\omega_2)=11.26(0.0216-0.01007)=\mathbf{0.130\ kg/min}$
>
> $\dot Q_{out}=\dot m_a(h_1-h_2)-\dot m_wh_w=515.9-7.6=\mathbf{508\ kJ/min}$ (8.5 kW)
>
> *Chart route* (Arif p.102a): $h_1=85.4$, $h_2=39.3$ kJ/kg, $\omega_1=0.0216$, $\omega_2=0.0100$, $v_1=0.889$ → 11.25 kg/min, **0.131 kg/min, 511 kJ/min**. CoolProp: 0.131 kg/min, 512 kJ/min. The table route is about 1 % low because linear interpolation of $P_g$ between 10 and 15 °C overestimates $P_g(14\ °\text{C})$ (1.614 against 1.599 kPa) and so $\omega_2$. Either answer is accepted.

> **TRAP: 0.135 kg/min in the Note (pp.159–160)**
>
> The Note reads $\omega_1=22$ g/kg off the chart (the true value is 21.6) and gets $\dot m_w=11.24\times(22-10)\times10^{-3}=0.135$ kg/min and $\dot Q_{out}=509.1$ kJ/min. A 0.4 g/kg rounding becomes a 3 % error in the moisture, because $\dot m_w$ depends on the small difference $\omega_1-\omega_2$. The correct answers are **0.131 kg/min and 511 kJ/min** (Arif p.102a). Always carry $\omega$ to three significant figures (four decimals) when you subtract.

### Heating with humidification

Heating alone lowers φ (dry winter air). The heated air is then humidified by steam injection or water sprays [Arif p.102b; Kanak p.161]:

- heating section 1 → 2: $\omega_2=\omega_1$, $\dot Q_{in}=\dot m_a(h_2-h_1)$;
- humidifying section 2 → 3: $\dot m_w=\dot m_a(\omega_3-\omega_2)$; energy $\dot m_ah_2+\dot m_wh_w=\dot m_ah_3$.

With **steam** humidification the temperature rises a little (2 → 3 slopes up-right); with **water spray** it falls (the line follows a wet-bulb line up-left, evaporative cooling), so the air must be heated beyond the final temperature first.

> **EXAMPLE 6.3** `[Arif p.103; Kanak pp.161–162; Çengel Ex. 14-9]` An air-conditioning system is to take in outdoor air at 10 °C and 30 % RH at a steady rate of 45 m³/min and to condition it to 25 °C and 60 percent relative humidity. The outdoor air is first heated to 22 °C in the heating section and then humidified by the injection of hot steam in the humidifying section. Assuming the entire process takes place at a pressure of 100 kPa, determine (a) the rate of heat supply in the heating section and (b) the mass flow rate of the steam required in the humidifying section.
>
> **[FROM SOURCE: Arif p.103, Kanak pp.161–162, corrected]** $P=100$ kPa, so use the equations, not the chart (Fig. 10).
>
> *State 1:* $P_g(10\ °\text{C})=1.23$ kPa; $P_{v1}=0.3\times1.23=0.369$ kPa; $\omega_1=\dfrac{0.622\times0.369}{100-0.369}=0.002304$; $h_1=1.005(10)+0.002304(2501+18.2)=15.85$ kJ/kg; $v_1=\dfrac{0.287\times283.15}{100-0.369}=0.8157$ m³/kg.
>
> *State 2:* $\omega_2=\omega_1$, $h_2=1.005(22)+0.002304(2501+40.04)=27.96$ kJ/kg.
>
> *State 3:* $P_g(25\ °\text{C})=3.17$ kPa; $P_{v3}=0.6\times3.17=1.902$ kPa; $\omega_3=\dfrac{0.622\times1.902}{100-1.902}=0.01206$.
>
> $\dot m_a=45/0.8157=55.17$ kg/min
>
> (a) $\dot Q_{in}=\dot m_a(h_2-h_1)=55.17(27.96-15.85)=\mathbf{668\ kJ/min}$ (11.1 kW)
>
> (b) $\dot m_w=\dot m_a(\omega_3-\omega_2)=55.17(0.01206-0.002304)=\mathbf{0.538\ kg/min}$
>
> CoolProp at 100 kPa: $v_1=0.8154$, 669 kJ/min, 0.541 kg/min. Çengel and Arif p.103b: 673 kJ/min, 0.539 kg/min.

> **TRAP: $v_1$ read off the sea-level chart (Kanak pp.161–162)**
>
> The Note takes $v_1=0.80$, $\omega_1=2.5\times10^{-3}$, $h_1=15.5$ from the 760 mm Hg chart and gets $\dot m_a=45/0.80=56.25$ kg/min, $\dot Q_{in}=56.25(28-15.5)=703.1$ kJ/min and $\dot m_w=0.534$ kg/min. At 1 atm the equations give $v_1=0.805$ (55.9 kg/min); at the stated **100 kPa** they give $v_1=0.8157$. The heat input is 5 % too high. The steam rate happens to be close only because the high $\dot m_a$ and the high $\omega_1$ partly cancel. Read the problem's pressure first.

![Fig. 10: Heating with humidification at 100 kPa (Example 6.3). (a) Duct: state 1 (10 °C, 30 %, 45 m³/min) enters the heating section with heating coils; state 2 (22 °C, ω2 = ω1) enters the humidifying section with steam injection; state 3 (25 °C, 60 %) leaves. (b) Chart: horizontal arrow 1 → 2 at ω = 0.0023, then a steep arrow up and slightly right 2 → 3 to ω = 0.0121](figures/010.png "w=0.95")

### Evaporative cooling

In **hot and dry** climates air can be cooled cheaply by evaporating water into it: **evaporative coolers** (swamp coolers, desert coolers, air washers) [Arif p.104a; Kanak p.162]. As water evaporates, its latent heat of vaporization is drawn from the air (and from the water), so both are cooled. A porous earthen jug (*kolshi*) keeps drinking water cool in the same way: water seeping through the wall evaporates in the breeze.

The air flows through wetted pads or a spray chamber in which the water is recirculated (only make-up water is added). No heat is exchanged with the surroundings, so the process is essentially **adiabatic saturation**:

$$T_{wb}\approx\text{constant},\qquad h\approx\text{constant}$$

The state moves up-left along the wet-bulb line through the inlet state (Fig. 11): $T_{db}$ falls, $\omega$ and φ rise. The lowest possible temperature is the inlet wet-bulb temperature (point 2′ on the saturation curve), reached only with an infinitely long pad. The method works well when the air is dry (large $T_{db}-T_{wb}$, e.g. 40 °C/20 % has $T_{wb}=21.9$ °C) and poorly in a humid climate like Dhaka's monsoon, where $T_{wb}$ is close to $T_{db}$.

*Example* (a desert cooler) **[TUTOR-GENERATED]**: air at 1 atm, 40 °C, 20 % leaves the pads at 90 %. $\omega_1=0.622(0.2\times7.38)/(101.325-1.476)=0.00919$, $h_1=63.87$ kJ/kg, $T_{wb}=21.9$ °C (trial, as in Example 6.1). Following the 21.9 °C wet-bulb line to φ = 90 % gives $T_2=\mathbf{23.1}$ °C, $\omega_2=0.01622$, so the air is cooled by 17 K and takes up $\omega_2-\omega_1=0.00703$ kg water per kg dry air. Check: $h_2=64.51$ kJ/kg $=h_1+(\omega_2-\omega_1)h_f(21.9\ °\text{C})=63.87+0.00703\times91.9$, so $h$ is constant to within 1 %.

Other applications: air washers in textile mills (which also need high humidity), pre-cooling of the condenser air, evaporative condensers and **cooling towers** (§6.6), which use the same process to cool water instead of air.

![Fig. 11: Evaporative cooling. (a) Evaporative (swamp) cooler: hot dry air 1 (40 °C, 20 %) passes through wetted pads or sprays with recirculated water and make-up water, leaving as cool moist air 2 (23.1 °C, 90 %). (b) Chart: arrow from 1 up-left along the green constant wet-bulb line T_wb = 21.9 °C (≈ constant h) to 2; continuing the line reaches 2′ on the saturation curve at 21.9 °C, the lowest attainable temperature](figures/011.jpg "w=0.95")

![Fig. 12: Arif sir's evaporative cooling slide: chart with process 1 → 2 along T_wb ≈ const., h ≈ const. toward 2′ on the saturation curve; liquid water sprayed into hot dry air 1 leaving as cool moist air 2 [Arif p.104a]](figures/012.png "w=0.5")

### Adiabatic mixing of two streams ★

In nearly every central system, return air from the room (1) is mixed with outdoor ventilation air (2) before the coil [Ameen §12.4]. Mixing is adiabatic and needs no work:

$$\dot m_{a3}=\dot m_{a1}+\dot m_{a2},\qquad \omega_3=\frac{\dot m_{a1}\omega_1+\dot m_{a2}\omega_2}{\dot m_{a1}+\dot m_{a2}},\qquad h_3=\frac{\dot m_{a1}h_1+\dot m_{a2}h_2}{\dot m_{a1}+\dot m_{a2}}$$

Eliminating the masses gives $\dfrac{\omega_2-\omega_3}{\omega_3-\omega_1}=\dfrac{h_2-h_3}{h_3-h_1}=\dfrac{\dot m_{a1}}{\dot m_{a2}}$: the mixed state lies **on the straight line 1–2** of the chart, and divides it in the inverse ratio of the dry-air masses (lever rule), nearer the larger stream (Fig. 13). Find $T_3$ from $h_3$ and $\omega_3$: $T_3=\dfrac{h_3-2501\,\omega_3}{1.005+1.82\,\omega_3}$; the mass-weighted average $T_3\approx\sum\dot m_aT/\sum\dot m_a$ is within 0.1 K [Ameen eq. 12.14].

Two points need care. (1) Volumes are given at different states: convert each stream with its own $v$ ($\dot m_a=\dot V/v$) before weighting; volume weighting is only approximate. (2) If the line 1–2 crosses the saturation curve (very cold and very humid air), the mixture is fogged and some vapour condenses.

![Fig. 13: Adiabatic mixing. (a) Mixing box: recirculated air 1 (ṁa1, ω1, h1) enters horizontally, outdoor air 2 (ṁa2, ω2, h2) enters from above; mixed air 3 (ṁa3, ω3, h3) leaves. (b) Chart: the mixed state 3 lies on the straight line from 1 (room, 25 °C, 50 %) to 2 (outdoor, 33 °C, 80 %), with 1–3 : 3–2 = ṁa2 : ṁa1, here close to 1 because three times as much room air is used (Solution 6.8)](figures/013.png "w=0.95")

### Chemical dehumidification

Air passed over a **sorbent** (silica gel, activated alumina, or sprayed lithium-chloride solution) loses moisture to it. The latent heat of condensation (plus the heat of adsorption) is released into the air, so the air leaves drier and hotter at almost constant enthalpy, and slightly higher, since the heat of adsorption adds to it (process 8 in Fig. 6) [Ameen §12.4]. Used where very dry air is needed (pharmaceuticals, storage of hygroscopic goods, low-dew-point rooms); the sorbent is regenerated by heating.

## 6.5 Room loads, SHR and summer air-conditioning systems ★

### Sensible and latent loads, SHR and the supply-air state

The space gains **sensible heat** $\dot Q_s$ (conduction through walls, roof and glass, solar radiation, people's sensible heat, lights, equipment), which raises its temperature, and **latent heat** $\dot Q_l$, the moisture added by people, cooking and infiltration, which raises its humidity (Module 1 calculates them). To hold the room at R, the system supplies air at a colder and drier state S whose mass flow $\dot m_a$ absorbs both [Ameen §12.5]:

$$\dot Q_s=\dot m_a(1.005+1.82\,\omega_s)(T_r-T_s)\qquad \dot m_{w,gain}=\dot m_a(\omega_r-\omega_s)\qquad \dot Q_l=\dot m_a(\omega_r-\omega_s)(2501+1.82\,T_r)$$

so that $\dot Q_s+\dot Q_l=\dot m_a(h_r-h_s)$. The **sensible heat ratio** (sensible heat factor) is

$$SHR=\frac{\dot Q_s}{\dot Q_s+\dot Q_l}=\frac{h_x-h_s}{h_r-h_s}$$

where x is the point at $T_r$ and $\omega_s$ [Ameen eq. 12.19–12.20]. The supply state S must lie on the straight line through R whose slope is fixed by the SHR: the **room condition line** (RSHR line). SHR = 1 is a horizontal line (no moisture); SHR = 0 is vertical. Typical values: about 0.8 in dry climates, 0.7 or lower in humid tropical climates such as Bangladesh [Ameen §12.5].

**Method** (a calculator, or the chart):

1. Room state R: $\omega_r$, $h_r$ from $T_r$ and φ_r.
2. Choose or read the supply temperature $T_s$. A difference $T_r-T_s$ of 8–12 K is usual (supply 13–17 °C); a larger difference means less air and smaller ducts but risks draughts and condensation on the diffusers.
3. Mass flow from the sensible load: $\dot m_a=\dot Q_s/[(1.005+1.82\,\omega_s)(T_r-T_s)]$. Start with $\omega_s=\omega_r$; one repeat is enough.
4. $\omega_s$ from the moisture (or latent) load: $\omega_s=\omega_r-\dot m_{w,gain}/\dot m_a$.
5. The rest of S from $T_s$ and $\omega_s$ (φ, $T_{wb}$ by trial, $h$, $v$); supply volume $\dot V=\dot m_av_s$.

*Chart route:* plot R; draw a line through R parallel to the protractor line of the SHR; S is where it crosses the vertical through $T_s$ [Ameen Ex. 12.11].

**Apparatus dew point and bypass factor.** A real cooling coil does not bring all the air into contact with its fins. The effective coil surface temperature is the **apparatus dew point** (ADP), the point where the coil process line meets the saturation curve. Air leaving the coil behaves as a mixture of air that touched the coil (leaving at the ADP) and air that **bypassed** it (unchanged). The **bypass factor** $BPF=\dfrac{T_{out}-T_{ADP}}{T_{in}-T_{ADP}}$ (typically 0.05–0.2); the contact factor is $1-BPF$ [Ameen §12.5]. A deeper coil (more rows) or lower face velocity gives a smaller BPF.

### The elementary summer AC system

The simplest summer system [Ameen §12.5; Arif p.60b]: outdoor air O (for ventilation) is mixed with recirculated room air R in the mixing box; the mixture M passes through the cooling and dehumidifying coil, which delivers it directly at the supply state S = C; S absorbs the room loads and becomes R; part of the room air is exhausted and the rest is returned (Fig. 14). Coil load:

$$\dot Q_{coil}=\dot m_a(h_m-h_s)-\dot m_w h_w=\underbrace{\dot m_a(h_r-h_s)}_{\text{room load}}+\underbrace{\dot m_{a,o}(h_o-h_r)}_{\text{outdoor-air load}}-\dot m_wh_w$$

It works if the coil line M–S can reach the room condition line, i.e. if the coil exit state demanded by the room SHR is attainable. With a high latent load (low SHR) the required S lies close to the saturation curve at a low temperature, and the ADP can become impossibly low: then bypass or reheat is used.

![Fig. 14: Elementary summer air conditioning. (a) Schematic: outdoor air O enters at the lower left, return air R comes back from the room along the top duct, part is exhausted and the rest drops into the mixing point M; the mixture passes the cooling coil to C and the fan to S, then up into the room R (sensible load Qs, latent load Ql). (b) Chart for Solution 6.6: outdoor state O (35 °C, ω 0.0195), room R (24 °C, 50 %), the mix M (26.0 °C) on the line R–O; the coil process M → S = C (16 °C, ω 0.00823, blue); the room condition line S → R (red dashed) whose slope is set by the room SHR](figures/014.png "w=0.95")

### Summer AC with bypass

Part of the air (either the **return air**, or the **mixed air**) is led around the cooling coil through a bypass duct with a damper and mixed with the cold air leaving the coil (Fig. 15) [Ameen §12.5; Arif p.74a]:

- The coil cools its share of the air to C, close to the ADP (cold and nearly saturated).
- The bypassed warm air R (or M) mixes with C; the mixture S lies on the straight line C–R (or C–M) and is chosen to lie on the room condition line.
- **Why:** the supply air is warmed to an acceptable supply temperature **without a reheater**, by the room's own air. Less air passes the coil, so the coil (and its fan pressure drop) is smaller, and the refrigeration load is lower than with reheat (no heat is added and then removed). The bypass damper also gives a simple capacity control at part load: opening it raises S without cycling the compressor, and the flow over a direct-expansion coil stays constant.
- **Limits:** control of humidity is weaker than with reheat, since S is fixed by mixing; the coil must run at a lower ADP; with mixed-air bypass the outdoor-air moisture also bypasses the coil.

![Fig. 15: Summer AC with bypass. (a) Schematic as Fig. 14, with a green bypass duct and damper taking part of the room air around the cooling coil to join the coil exit C. (b) Chart: mixed air M is cooled and dehumidified to C near the apparatus dew point (12 °C, about 95 % RH); C and the bypassed room air R mix along the green dash-dot line C–R; the supply S is the point of that line which also lies on the room condition line through R](figures/015.png "w=0.95")

### Summer AC with reheat

When the latent load is large (low SHR: crowded halls, kitchens, humid outdoor air, part load on a humid day) the coil must cool the air below the dew point required to remove the moisture, to C, which is colder than the room needs. A **reheater** (hot water, steam, electric, or a hot-gas condenser coil) then heats it at constant $\omega$ to the supply state S on the room condition line (Fig. 16) [Arif p.73a; Ameen §12.5]:

- M → C: cooling and dehumidification to the low dew point that gives the right $\omega_s$;
- C → S: sensible reheating, $\dot Q_{reheat}=\dot m_a(h_s-h_c)$;
- S → R: the supply absorbs the room loads.

**Why:** temperature and humidity are controlled independently: the coil controls $\omega$ (humidity), the reheater controls $T$. Precise control of both, even at part load or low SHR. **Cost:** energy is wasted twice: the coil removes heat that the reheater puts back, and the refrigeration load includes the reheat. Waste heat from the condenser (hot-gas reheat) reduces the penalty.

![Fig. 16: Summer AC with reheat. (a) Schematic as Fig. 14 with a red reheater coil after the cooling coil. (b) Chart: mixed air M is cooled and dehumidified to C (about 11 °C, near saturation, colder than needed); C → S is a horizontal reheat line (red) at constant ω to about 17.5 °C; S → R (dashed) is the room condition line](figures/016.png "w=0.95")

| | Elementary | With bypass | With reheat |
|---|---|---|---|
| Coil exit | S itself | C (near ADP), mixed with bypassed air | C (below the needed dew point) |
| Supply temperature set by | coil | mixing ratio (damper) | reheater |
| Humidity control | poor at part load | moderate | best (independent control of T and ω) |
| Energy | lowest | low (no reheat; reduced coil flow) | highest (cooling then reheating) |
| Use | high SHR, small systems | moderate SHR, packaged/DX units, small systems | low SHR, hospitals, labs, close control |

### Winter air conditioning

In winter the outdoor air is cold and dry. The mixture of outdoor and return air is **heated** (preheat coil), **humidified** (steam, or spray with its evaporative cooling), and if needed **reheated** to the supply state, which is warmer than the room (it carries the heat loss) [Arif p.102b]. Fig. 10 shows the heating and steam-humidification part.

## 6.6 Cooling towers

Power plants, large air-conditioning plants and industry reject large amounts of heat. Where river or lake water is limited, or thermal pollution must be avoided, the heat is rejected to the atmosphere, with the cooling water **recirculated** between the condenser and a **wet cooling tower** [Arif p.104b; Kanak p.163]. A wet cooling tower is **a semi-enclosed evaporative cooler**: warm condenser water (about 35 °C) is sprayed over a **fill** (packing of PVC sheets or splash bars that spreads the water into thin films and drops) while air flows through; a small part of the water (about 1 % for every 6–7 K of cooling) evaporates, and its latent heat cools the rest to about 30 °C. Water can be cooled **below the dry-bulb temperature** of the air, toward its **wet-bulb temperature**, which is why a water-cooled condenser runs at a lower condensing pressure and higher COP than an air-cooled one.

**Parts** (Arif p.71a, p.106b): fan and motor, sprinkler (rotating distributor) or spray header with nozzles, **drift eliminator** (zig-zag baffles that stop droplets escaping with the air), fill, casing (FRP), air-intake louvres or mesh, cold-water basin with outlet strainer, make-up connection with float valve (automatic filler), and drain/blow-down.

**Types** [Kanak pp.29–30; Arif pp.104–105]:

- **Mechanical draft:** a fan moves the air.
  - **Induced draft**: the fan at the top *pulls* air through (counter-flow: air up, water down; or cross-flow: air horizontal through the fill, water down at 90°). Uniform air flow, little recirculation of the moist exhaust; most common.
  - **Forced draft**: a fan at the bottom side *pushes* air in. The fan handles dry inlet air, but exhaust recirculation and uneven flow are larger.
- **Natural draft:** a tall hyperbolic chimney. The moist air inside is lighter than the outside air, rises, and draws fresh air in at the base; no fan. Used in large power plants.
- **Spray pond:** warm water sprayed into the air above a pond, cooled as it falls. **Cooling pond:** heat dumped into a large still pond open to the atmosphere.

**Terms** [Kanak p.31]:

- **Range** $=T_{water,in}-T_{water,out}$ (e.g. 35 − 30 = 5 K), set by the heat load and water flow.
- **Approach** $=T_{water,out}-T_{wb,air\,in}$ (e.g. 30 − 27 = 3 K), set by the size of the tower; it can never be zero.
- **Make-up** water replaces the losses by evaporation, drift and blow-down. **Blow-down** is water drained periodically to stop the build-up of dissolved solids (scale) as pure water evaporates.

![Fig. 17: Counter-flow induced-draft cooling tower (Note sketch): propeller fan at the top inducting air upward; drift eliminator below it; water distribution header with spray nozzles; fill with air arrows rising through it; louvred air inlets on both lower sides; water basin with an outlet to the condenser [Kanak p.29]](figures/017.jpg "w=0.45")

![Fig. 18: Cross-flow induced-draft cooling tower: central propeller fan at the top; on each side a hot-water distribution box with nozzles over a slanted fill; air enters horizontally through the side louvres, crosses the falling water at 90°, turns up through the central plenum and leaves through the fan; drift eliminators on the inner faces; basin with outlet to the condenser [Kanak p.30]](figures/018.jpg "w=0.45")

![Fig. 19: Cooling tower cut-away of a round FRP tower: fan motor, fan guard, fan, turn-buckle sprinkler, drift eliminator, FRP casing, PVC filling, stand pipe, air intake mesh, FRP basin, inlet, suction tank, automatic filler, outlet [Arif p.71a]](figures/019.jpg "w=0.45")

## 6.7 Air-conditioning systems: classification and unitary systems ★

**The basic air-conditioning system** [Arif p.60b]: outside air through an outside-air damper and return air from the space meet in a **mixing chamber**; the mixture passes a **filter**, a **heating coil**, a **cooling coil**, a **humidifier** and a **fan**, and the conditioned supply air goes to the space. Every system type below is a way of packaging these parts and of carrying heat between the space and the refrigeration plant.

![Fig. 20: Basic AC system: outside air through the outside-air damper into a mixing chamber with return air from the space, then filter, heating coil, cooling coil, humidifier and fan; conditioned supply air to the space [Arif p.60b]](figures/020.png "w=0.6")

**Classification** [Kanak p.118; Arif pp.61–76]:

- **Unitary (direct-expansion, DX) systems:** the refrigerant evaporates in a coil that cools the room air directly.
  1. Window type (single package).
  2. Split type: (i) wall/ceiling split, (ii) ducted split, (iii) multi-split, (iv) VRF/VRV.
- **Chiller type (central) systems:** a chiller cools water, the water is piped to the spaces.
  1. All-air systems (AHU and ducts).
  2. All-water systems (FCUs).
  3. Air-water systems (FCUs or induction units plus ducted primary air).

![Fig. 21: The Note's classification tree: Air Conditioning System → Unitary system (1 window type, 2 split type → ducted split, multi split, VRF type) and Chiller type (1 all air system, 2 all water system, 3 air-water system) [Kanak p.118]](figures/021.jpg "w=0.5")

### Window air conditioner

A **single package** unit fitted through a hole in an outside wall or window [Arif p.61]. All four refrigeration components (compressor, condenser, expansion device (capillary), evaporator) are in one box. A partition divides it: the **room side** has the evaporator, a centrifugal blower, the air filter, the front grille and a fresh-air damper; the **outdoor side** has the compressor, the condenser and a propeller fan. One double-shafted motor drives both fans. Condensate collects in the drain pan and is thrown onto the hot condenser by the fan's slinger ring or drained outside. Capacity 0.75–2.5 TR.

![Fig. 22: Window AC side view: wall with inside and outside, cabinet, front panel with cold air outlet, damper, condenser, fan motor, air filter, drain outlet, evaporator, drain pan, propeller fan, base pan, compressor, blower wheel [Arif p.61b]](figures/022.jpg "w=0.55")

### Split air conditioner

The unit is **split** into an **outdoor unit** (compressor, condenser, condenser fan, and usually the expansion device or service valves) and an **indoor unit** (evaporator, cross-flow blower, filter, drain pan, controls), joined by two insulated copper refrigerant lines (liquid and suction), a drain hose and a control cable through a small hole in the wall [Arif pp.63–64]. Indoor units can be wall-mounted, ceiling cassette, ceiling-suspended, floor-standing or concealed (ducted). Capacity 1–5 TR. Before the pipes are disconnected, the refrigerant is **pumped down** into the outdoor unit by closing the liquid (two-way) valve and running the compressor until the suction gauge reads zero, then closing the three-way valve (Arif p.63a).

![Fig. 23: Split system schematic: outdoor unit with condenser coils, fan, compressor and outside air; high-pressure refrigerant line through the wall; indoor air handler with expansion device, fan, evaporator coils, cool air out, low-pressure refrigerant line, condensate collection pan [Arif p.64a]](figures/023.jpg "w=0.55")

| Point | Window type | Split type |
|---|---|---|
| Location of components | all four (compressor, condenser, expansion valve, evaporator) in **one box** | compressor and condenser in the **outdoor unit**; evaporator (and expansion device or its valve) in the **indoor unit** |
| Noise | compressor and fans inside the room wall: noisy | compressor outside: quiet indoors |
| Fans | two fans on one shaft (one motor) | separate indoor fan and outdoor fan |
| Wall opening | large rectangular hole in the wall or window | small hole (about 75 mm) for pipes, drain and cable |
| Outdoor (fresh) air | can take in outdoor air through its damper | no provision for outdoor air |
| Capacity | low (up to about 2.5 TR) | higher (1–5 TR; ducted and VRF far more) |
| Location in the room | only on an outside wall, at window height | indoor unit anywhere within the pipe length (up to 15–50 m) |
| Installation | easy, no specialist | needs a technician: piping, vacuuming, charging; joints can leak |
| Cost | cheap | more expensive |
| Appearance, efficiency | blocks the window; lower efficiency | neat; higher EER, inverter models common |

(Kanak p.128; Arif pp.61–64.)

### Inverter air conditioners

An **inverter air conditioner** uses a microprocessor and a variable-frequency drive to **vary the speed of the compressor motor** to match the load [Arif p.62a; Kanak p.119]. Once the room reaches the set temperature, the compressor slows down instead of stopping. A non-inverter (fixed-speed) unit switches the compressor ON and OFF, so the room temperature swings widely and energy is wasted at every start. Inverter: little temperature fluctuation, 30–50 % energy saving, quiet, fast pull-down. Disadvantages [Arif p.62b]: high initial cost, costly repair and maintenance (electronic boards), sensitivity to voltage fluctuations, not suited to large spaces, energy benefit only with long running hours, shorter life of the electronics.

![Fig. 24: Inverter vs non-inverter: output power and room temperature against time. Inverter: output power ramps down, little temperature fluctuation about the set temperature. Non-inverter: compressor ON/OFF/ON/OFF/ON, big temperature fluctuations [Arif p.62a]](figures/024.jpg "w=0.6")

### Ducted split, multi-split and VRF ★

**(i) Ducted split.** One outdoor unit (ODU) and one indoor unit (IDU), the IDU being an **air handler** (cooling coil, blower, filter, sometimes a heating coil) hidden in the ceiling void or a utility room. It supplies several rooms through a **supply duct** with grilles or diffusers and takes the air back through a **return duct** or plenum [Arif p.64b; Kanak p.120]. One thermostat controls all the rooms, so they cannot be held at different temperatures.

![Fig. 25: Ducted split sketch: a separate compressor/outdoor box piped to a tall indoor air-handling cabinet with a fan and cooling coil; return air enters through a grille and return plenum; cooled air rises into a supply duct along the ceiling and drops to three diffusers [Kanak p.120]](figures/025.png "w=0.5")

![Fig. 26: Ducted split, Arif sir's figure: compressor outdoors, gas and electric lines, air handler with cooling coils, heating coils, fan, filter and control electronics, thermostat, supply-air duct and grilles, return-air duct [Arif p.64b]](figures/026.png "w=0.5")

**(ii) Multi-split.** **One ODU** feeds **several IDUs** (2–8) of any type (wall, cassette, ducted, floor), each on its own pair of refrigerant pipes through a branch box. Each room has its own IDU and remote control, so rooms can be kept at different conditions, but the compressor is usually fixed-speed or has limited modulation [Arif p.65a; Kanak p.120].

![Fig. 27: Multi-split sketch: one ODU at the bottom connected by a red refrigerant line to a branch box, from which blue refrigerant lines run to six separate indoor units (wall-mounted and cassette types), each on its own line [Kanak p.120]](figures/027.png "w=0.5")

**(iii) VRF / VRV (variable refrigerant flow / volume).** One modular outdoor unit (or a bank of modules) with **inverter (variable-speed) compressors** serves **many IDUs** (up to 50–60) on a **single main refrigerant pipe loop** with branch joints (refnets) or headers. **Electronic expansion valves** (pulse-modulating) in each IDU vary the refrigerant flow to it, so each zone is controlled individually; heat-recovery versions (with branch selector boxes and three pipes) can cool some zones and heat others at the same time, moving heat between them. Long pipe runs (over 100 m) and large height differences are allowed. Outdoor air is supplied by a separate outdoor-air unit or energy-recovery ventilator [Arif pp.65b–66b; Kanak p.120].

![Fig. 28: VRF sketch: a modular outdoor unit of four ODU modules joined into one header and a single long double refrigerant main; many indoor units (wall units and cassettes) each tap off the common main through short branch pipes [Kanak p.120]](figures/028.png "w=0.5")

![Fig. 29: VRF system with an outdoor-air unit: an outdoor-air unit (heat exchanger, fan) supplies fresh air through a duct to each room; the VRF outdoor unit is piped to two indoor units; each unit has a wired remote controller [Arif p.66b]](figures/029.png "w=0.55")

| Point | Ducted split | Multi-split | VRF |
|---|---|---|---|
| Working principle | one ODU, one IDU (air handler); air ducted to several rooms | one ODU, several IDUs, each on its own pipe pair from a branch box | one (modular) ODU, many IDUs on one main pipe with branch joints; refrigerant flow to each IDU varied |
| Heat carried to rooms by | **air** (ducts) | refrigerant | refrigerant |
| Capacity | up to about 30–50 TR (mostly 2–20 TR) | up to about 30–50 TR (mostly 2–10 TR) | 50–150 TR per system and more with modules |
| Compressor | fixed speed (or inverter) | fixed speed or limited inverter | inverter, variable speed |
| Part-load operation | poor | poor | **good** (capacity follows the load) |
| Control | one thermostat for all rooms: least flexible | each room separately: more flexible | each zone separately via electronic (pulse-modulating) valves: **most flexible**; simultaneous heating and cooling possible |
| Outdoor air | easy, through the air handler | none | by a separate outdoor-air unit |
| Pipe length, building | short; one floor or a house | short; small offices, flats | long runs, multi-storey buildings |
| Initial cost | low | medium | very high |
| Ceiling space | needs space for ducts | little | little (no ducts) |

(Kanak p.118; Arif pp.64–66.)

## 6.8 Central (chiller) systems ★

### The central chilled-water system and its components

A **central air-conditioning system** produces cooling in a central plant and distributes it to the whole building [Arif pp.67–76; Kanak pp.121–126]. It has four loops (Fig. 31):

1. **Condenser-water loop:** cooling tower ↔ chiller condenser, with the condenser-water pump.
2. **Refrigerant loop**, inside the chiller: compressor → condenser → expansion device → evaporator.
3. **Chilled-water loop:** chiller evaporator → chilled-water pump → coils of the AHUs and FCUs → back (supply about 7 °C, return about 12 °C). An expansion tank absorbs the volume changes of the water.
4. **Air loop:** AHU or FCU → supply ducts and diffusers → rooms → return grilles and ducts → AHU (with outdoor air added and some air exhausted).

**Working principle.** The chiller's evaporator chills the water; the water absorbs the heat of the room air in the AHU/FCU coils; the chiller's compressor raises this heat (plus its work) to the condensing temperature; the condenser passes it to the condenser water; the cooling tower rejects it to the outdoor air by evaporation.

**Functions of the four main components** [Arif pp.67–76; Kanak pp.121–128]:

- **Chiller:** a packaged vapour-compression (or absorption) refrigeration machine (compressor: reciprocating, screw or centrifugal; shell-and-tube condenser and evaporator; expansion device; controls) that **cools water** from about 12 °C to 7 °C. It is the heart of the plant and produces the refrigerating effect for the whole building. Chillers are water-cooled (with a cooling tower) or air-cooled (finned condenser coils and fans on the roof, no tower).
- **Cooling tower:** cools the **condenser water** that has picked up the heat rejected by the chiller condenser (about 35 → 30 °C), by evaporating part of it into the air (§6.6). It lets the water be reused and lets the condenser run near the outdoor wet-bulb temperature.
- **AHU (air handling unit):** a large central air unit in a plant room on each floor or on the roof: mixing box with outdoor-air, return-air and exhaust dampers, filters, chilled-water cooling coil, heating coil, humidifier, supply fan (and return fan), sound attenuators and controls. It **conditions (cools, dehumidifies, heats, humidifies, filters) and moves the air**, mixes in the required outdoor air, and pushes it through ducts to many rooms.
- **FCU (fan coil unit):** a small terminal unit **in or next to each room**: a fan (blower), a chilled-water (or hot-water) coil, a filter and a drain pan, in a wall, floor-console or ceiling casing. It **recirculates and cools the room's own air**, controlled by a room thermostat (three-speed fan and a valve on the water).

![Fig. 30: Central air conditioning, chilled-water system (textbook figure): a four-storey building with an AHU room on each floor (chilled-water cooling coil, fan section, air filter), supply-air duct, return-air duct, fresh-air duct with damper, SA and RA diffusers; expansion tank; plant room with compressor, condenser, chiller, thermostatic expansion valve, chilled-water pump, condenser-water pump and cooling tower [Arif p.67a]](figures/030.jpg "w=0.65")

![Fig. 31: The four loops of a central chilled-water system: the cooling tower receives warm condenser water (≈35 °C) from the chiller's water-cooled condenser and returns cool water (≈30 °C) through the condenser-water pump; inside the chiller the refrigerant loop runs compressor → condenser → expansion valve → evaporator; the evaporator sends chilled water (≈7 °C) along a supply header to the AHU and to the FCUs, which return water at ≈12 °C through the chilled-water pump; the AHU takes in outdoor (fresh) air and sends supply air to the conditioned rooms, which return air to the AHU; the FCUs serve the rooms directly](figures/031.png "w=0.95")

![Fig. 32: Hand sketch of a chiller-type central AC: cooling tower with cold water to the condenser and hot water back from it (pump); a dashed box marked Chiller containing a water-cooled condenser, compressor, expansion device and evaporator; chilled water to the AHU and warmer water back (pump); AHU with fan and coil taking fresh air through a filter; cold-air duct to the conditioned room and return-air duct back [Arif p.67b]](figures/032.jpg "w=0.55")

![Fig. 33: AHU schematic: relief air damper, return air damper, return air fan, return air from the space, inlet louver and screen, outside air damper, filter, mixed temperature sensor, heating coil, cooling coil, humidifier, supply air fan, supply temperature sensor, high-limit humidistat, space [Arif p.72b]](figures/033.png "w=0.6")

![Fig. 34: Fan coil units: (a) wall-mounted FCU with discharge grille, heater assembly, fan assembly, air inlet grille, replaceable filter, cooler heat exchanger and drain pan; (b) ceiling FCU above a suspended ceiling with fan, cooling coil C, filter, supply duct to a diffuser and return grille [Arif p.75b]](figures/034.png "w=0.6")

| Point | FCU | AHU |
|---|---|---|
| Full form | fan coil unit | air handling unit |
| Working principle | draws in the air of the room and blows it over a heating or cooling coil | takes in outside and return air, conditions it (filter, cool, dehumidify, heat, humidify) and supplies it through ducts to the building |
| Outside air | treats only the room air already present (no fresh air, unless supplied separately) | brings in outside air and conditions it; can exhaust air |
| Components | fan, one coil, filter, drain pan | mixing box and dampers, several filters, cooling and heating coils, humidifier, supply and return fans, controls |
| Size, range | small; one room, about 150 m² | large; whole floors or buildings |
| Location | in or above the room served | in a plant room or on the roof |
| Ductwork | none or very short | supply and return ducts required |
| Noise | more noisy in the room | quiet in the room (fan far away) |
| Humidity, filtration | limited | full control |
| Cost | low installation cost | high |
| System type | standalone, simple | each section is a system in itself; many configurations |

(Kanak p.128.)

### All-air systems

In an **all-air system** the central plant (AHU) delivers **cooled or heated air** through ducts, grilles and diffusers to the rooms; air is the only medium that carries heat into and out of the spaces (chilled water reaches only the AHU) [Arif p.72a; Kanak pp.122–124, 127]. Variants:

- **Single-zone, constant air volume (CAV):** one thermostat varies the supply temperature; constant flow. Suitable for one large zone (hall, auditorium).
- **Terminal reheat:** see below.
- **Variable air volume (VAV):** a VAV box (damper) on each zone branch, controlled by the room thermostat, varies the **flow** of constant-temperature supply air (about 13 °C) to that zone; the supply fan slows down as the boxes close [Arif p.73b]. More energy-efficient than reheat and very flexible; at low load it is harder to maintain adequate ventilation air and good room air distribution.
- **Bypass system:** a variation on VAV for small systems: a rooftop unit supplies constant air flow; VAV boxes throttle the air to each zone and a main bypass damper returns the surplus supply air straight to the return (ceiling void used as return plenum), keeping a constant flow over a direct-expansion coil [Arif p.74a].
- **Dual-duct:** the AHU has a **hot deck** (heating coil, about 38 °C) and a **cold deck** (cooling coil, about 13 °C); two ducts run to every zone, and a **mixing box** at each zone blends hot and cold air under thermostat control. Full airflow always; like reheat it suffers the energy penalty of simultaneous heating and cooling, and the double ducts take space; but there are no reheat coils near the zones, so no leaking hot-water coils above the ceilings [Arif p.74b].
- **Multizone:** hot and cold decks blended at the AHU, one duct per zone.

![Fig. 35: Central AHU, all-air system: outdoor air through a louvre and air filter, cooling coil C, heating coil H, supply fan, supply duct with four outlets down into the room; four return grilles to the extract fan; part of the air exhausted through a louvre, part recirculated [Arif p.72a]](figures/035.png "w=0.6")

![Fig. 36: Dual-duct system: outdoor air, relief air, return air and return fan, preheat coil, filter, supply fan, then a cooling coil feeding the cold deck (e.g. 55 °F) and a heating coil and humidifier feeding the hot deck (e.g. 100 °F); dual-duct mixing boxes for zones 1, 2 and 3 [Arif p.74b]](figures/036.png "w=0.6")

**All-air system with reheat** ★ [Arif p.73a; Kanak p.123]. A central AHU cools and dehumidifies all the air to a low, constant temperature (about 13 °C, 55 °F), enough for the zone with the greatest cooling load and low enough to remove the moisture. The air flows at **constant volume** through the main duct; on each zone branch a **reheat coil** (hot water or electric), controlled by that zone's thermostat, heats the air back up just enough to match the zone's sensible load. A zone with a small load gets more reheat. On the chart each zone has its own reheat line C → S at constant ω (Fig. 16).

- *Advantages:* the simplest all-air system to design and control; reliable; precise control of temperature in every zone and of humidity (the coil fixes ω); handles zones with very different and changing loads (perimeter and interior); constant airflow keeps ventilation and air distribution good at all loads; central equipment is easy to maintain; can heat in winter with the same reheat coils.
- *Disadvantages:* **high energy waste**, because air is first cooled and then reheated (simultaneous cooling and heating), and the full airflow is cooled even at part load; high running cost; hot-water piping, valves and coils above every zone (leak risk, maintenance in the ceiling); large ducts and plant space for constant full flow; energy codes now restrict it.

![Fig. 37: All-air system with reheat: outside ventilation air enters the AHU; supply air at 55 °F (typical) goes along the duct and through a reheat coil on each zone branch, controlled by a thermostat T in each room; return air goes back to the AHU [Arif p.73a]](figures/037.png "w=0.6")

![Fig. 38: All-air VAV system: return fan, return air, supply fan, supply air; a VAV box damper on each zone branch controlled by the room thermostat T; ducts continue to and from other zones [Arif p.73b]](figures/038.png "w=0.6")

![Fig. 39: All-air system with bypass: a rooftop unit; a main by-pass damper between supply and return; VAV boxes on the branches to each zone; the ceiling void used as the return-air plenum [Arif p.74a]](figures/039.png "w=0.6")

### CAV vs VAV ★

| Point | Constant air volume (CAV) | Variable air volume (VAV) |
|---|---|---|
| What varies with the load | the **supply temperature** (by the coil, or by terminal reheat) | the **air flow** to each zone (VAV box damper), supply temperature constant (about 13 °C) |
| Supply fan | constant speed, full flow always | variable speed (VFD) or inlet vanes; flow follows the load |
| Fan energy | high and constant | low at part load (fan power ∝ flow³) |
| Cooling/heating energy | high with reheat (cooling then reheating) | low; little or no reheat |
| Zone control | one zone, or many with reheat | each zone by its own thermostat |
| Ventilation and air distribution | good at all loads (constant flow) | can fall at low load (less outdoor air, poor throw, "dumping") |
| Humidity control | good | weaker at part load |
| Cost, complexity | simple, low first cost | VAV boxes, static-pressure and fan controls: higher first cost |
| Use | single zones, halls, clean rooms, hospitals | offices and multi-zone buildings with varying loads |

**Primary functions of an air distribution system** (2023-24): to **deliver** the conditioned supply air from the AHU to each space in the right quantity (balanced, against the design load), to **distribute** it inside the space through diffusers and grilles with proper throw, velocity and mixing and without draughts or noise, to **return** room air to the AHU (and exhaust part of it), to bring in the **outdoor ventilation air**, and so to keep temperature, humidity, air quality and pressure in every zone, at minimum fan energy.

**Main sources of pressure loss in a duct system** (detailed in Module 9): (1) **friction losses** in straight ducts, $\Delta p_f=f\dfrac{L}{D_h}\dfrac{\rho V^2}{2}$, proportional to length and to the square of velocity, larger for rough or flexible ducts; (2) **dynamic (fitting) losses** $\Delta p=C\,\dfrac{\rho V^2}{2}$ in elbows and bends, tees, branch take-offs and junctions, transitions (sudden or gradual enlargements and contractions), entrances and exits; (3) losses in **components**: dampers (volume, fire and smoke dampers), filters (rising as they load), coils, VAV boxes, sound attenuators, louvres, grilles, registers and diffusers; (4) leakage at joints. The fan must supply the total pressure of the longest (index) run.

### All-water and air-water systems

**All-water system** [Arif p.75a; Kanak pp.125, 127]. Hot or chilled water from the central plant is piped to **FCUs** (or radiators, convectors, valance units) in each room; all the conditioning except ventilation is done locally. Ventilation comes from opening windows or other means, so no ventilation air is ducted from the plant. Pipes are small (water carries about 3500 times as much heat per unit volume as air), so the system suits buildings where ducts are a problem (low floor-to-floor height, deep beams, refurbishment).

![Fig. 40: Ceiling-mounted fan-coil unit (Note sketch): an FCU box with a cooling coil (cold water in, warmer water out) and a centrifugal fan, a filter on the return-air inlet; return air from the room rises into the unit, the fan pushes it over the coil and down the supply duct into the room [Kanak p.125]](figures/040.jpg "w=0.5")

**Air-water system** [Arif p.76a; Kanak pp.126–127]. All the primary (ventilation) air comes from a central AHU, ducted at a small rate, while local units (FCUs or induction units) supplied with hot or chilled water provide the additional conditioning. The water carries 80–90 % of the thermal load, the air the rest. Particularly effective in perimeter spaces with high heating and cooling loads (offices, hotels, hospitals). Two main types: **fan-coil units with supplementary air** and **induction units** (high-velocity primary air from nozzles induces room air over the coil).

![Fig. 41: Fan-coil unit with supplementary air (air-water system): room air enters a perimeter FCU through a lower grille, passes an air filter, fan and inclined cooling coil and is discharged upward; behind the wall a separate air handling unit takes outside air, passes it over its own cooling coil and fan and ducts this primary air into the FCU [Arif p.76a]](figures/041.png "w=0.5")

| Point | All-air | All-water | Air-water |
|---|---|---|---|
| Medium carrying heat to/from the rooms | air only (chilled water only to the AHU) | water only (to FCUs in the rooms) | both: water 80–90 %, air the rest |
| Terminal equipment | supply diffusers and return grilles (VAV or reheat boxes) | FCUs, convectors, radiators | FCUs or induction units + primary-air outlets |
| Distribution space | large ducts and shafts; AHU plant rooms | small pipes; no ducts; little space | small ducts + pipes |
| Outdoor (ventilation) air | yes, through the AHU: full control, economizer (free) cooling | **no** (windows or separate system) | yes, as ducted primary air |
| Humidity control, filtration | good, central | poor (local coil only) | good (primary air dehumidified centrally) |
| Temperature control per room | needs VAV or reheat; difficult in a simple system | each FCU by its own thermostat | each unit locally |
| Equipment cost | low (central) but ducting and installation high | an FCU in every room: high; no ducts | moderate–high |
| Maintenance | central, out of the occupied space | in every room (filters, drain pans, fans) | both |
| Problems | duct space, fan energy | water leaks and condensate in the rooms, FCU noise | complexity, two systems |
| Use | auditoriums, halls, offices, clean rooms, hospitals | hotels, apartments, offices with small ceiling space | perimeter zones of offices, hotels, hospitals |

(Kanak p.127; Arif pp.72–76.)

## 6.9 Term-final questions with solutions

The 27 parts fall into five archetypes. The numericals come first, because they carry the most marks per hour of study.

| Group | Papers | Topic | Solved in full |
|---|---|---|---|
| AC2. Window/split AC, cooling with dehumidification | 13-14, 16-17, 17-18, 18-19 | §6.4 | Solution 6.1 |
| AC3. Other psychrometric numericals | 15-16, 11-12, 12-13 (×3) | §6.2, §6.4, §6.5 | Solutions 5.5–5.9 |
| AC1. Comfort, refrigeration vs AC | 11-12, 12-13, 13-14, 15-16, 23-24 | §6.1 | Solutions 5.10–5.14 |
| AC4. Processes, bypass/reheat, evaporative cooling | 11-12, 13-14 (×2), 16-17 | §6.4–6.5, §6.8 | Solutions 5.15–5.18 |
| AC5. AC system types | 11-12 (×2), 12-13, 15-16, 17-18, 18-19, 20-21, 22-23, 23-24 | §6.7–6.8 | Solutions 5.19–5.27 |

Standing assumptions for every numerical, unless the solution says otherwise:

- Steady flow; fan work, kinetic and potential energy neglected; ideal-gas moist air.
- $P=101.325$ kPa ("1 atm", "atmospheric pressure"). Properties by the equations of §6.2 with Table 1 (water) at the end of this module (the "table route"); the chart reading and the CoolProp value are quoted as checks.
- "Saturated" exit air: φ = 100 %. Condensate leaves at the stated temperature with $h_w=h_f$ (Table 1).

### AC2: window/split AC, cooling with dehumidification

> **TRY 6.1** `[PP 13-14 Q2(c), 20]` Air enters a window air conditioner at 1 atm., 35°C, and 70 percent relative humidity at a rate of 10 m³/min, and it leaves as saturated air at 15°C. Part of the moisture in the air that condenses during the process is also removed at 15°C. Determine the rates of heat and moisture removal from the air.

**Solution 6.1** **[FROM SOURCE: Arif pp.101–102; Kanak pp.158–160, method; numbers tutor-generated]** This is the model answer for the whole family.

*Sketch.* Draw the duct with the cooling coil and drain pan, and the chart path 1 → x → 2 (Fig. 9, which is drawn for exactly these numbers).

*State 1* (35 °C, φ = 70 %). Table 1, row 35 °C: $P_g=0.00563$ MPa $=5.63$ kPa.

$P_{v1}=0.70\times5.63=3.941$ kPa

$\omega_1=\dfrac{0.622\times3.941}{101.325-3.941}=0.02517$ kg/kg dry air

$h_1=1.005(35)+0.02517(2501+1.82\times35)=35.175+64.557=99.73$ kJ/kg dry air

$v_1=\dfrac{0.287\,(35+273.15)}{101.325-3.941}=0.9081$ m³/kg dry air

(The dew point is $T_{sat}(3.941\text{ kPa})=28.57$ °C: the coil must be colder than this to condense water. $T_{wb}=30.05$ °C.)

*State 2* (15 °C, saturated). Table 1, row 15 °C: $P_g=0.00171$ MPa $=1.71$ kPa $=P_{v2}$.

$\omega_2=\dfrac{0.622\times1.71}{101.325-1.71}=0.01068$ kg/kg dry air

$h_2=1.005(15)+0.01068(2501+1.82\times15)=42.07$ kJ/kg dry air

*Condensate* at 15 °C: Table 1, $h_w=h_f=62.98$ kJ/kg.

*Dry-air flow:* $\dot m_a=\dfrac{\dot V_1}{v_1}=\dfrac{10}{0.9081}=11.01$ kg/min

*Water balance:* $\dot m_a\omega_1=\dot m_a\omega_2+\dot m_w$

$$\dot m_w=\dot m_a(\omega_1-\omega_2)=11.01(0.02517-0.01068)=\mathbf{0.160\ kg/min}\ (9.6\text{ kg/h})$$

*Energy balance* (control volume: coil and drain pan): $\dot m_ah_1=\dot Q_{out}+\dot m_ah_2+\dot m_wh_w$

$$\dot Q_{out}=\dot m_a(h_1-h_2)-\dot m_wh_w=634.9-10.1=\mathbf{625\ kJ/min}\ (10.4\text{ kW, about 3.0 TR})$$

**Answer: moisture removal 0.160 kg/min; heat removal 625 kJ/min (10.4 kW).**

*Chart route* (sea-level chart): state 1 ω ≈ 25.3 g/kg, h ≈ 100.0 kJ/kg, v ≈ 0.908 m³/kg; state 2 ω ≈ 10.7 g/kg, h ≈ 42.1 kJ/kg → 0.161 kg/min, 628 kJ/min. CoolProp gives the same 0.161 kg/min and 628 kJ/min.

> **TRY 6.2** `[PP 16-17 Q2(c), 20]` Air enters a window air conditioner at 1 atm., 35 °C, and 80 percent relative humidity at a rate of 12 m³/min. The air leaves the cooling section as saturated air at 12 °C. Part of the moisture in the air that condenses during the process is also removed at 12 °C. Determine the rate of heat transfer and moisture removal from the air.

**Solution 6.2** **[TUTOR-GENERATED]** As Solution 6.1 with 80 %, 12 m³/min and 12 °C.

*State 1:* $P_{v1}=0.80\times5.63=4.504$ kPa; $\omega_1=0.02893$; $h_1=109.38$ kJ/kg; $v_1=0.9134$ m³/kg (dew point 30.92 °C, $T_{wb}=31.70$ °C).

*State 2* (12 °C sat.): Table 1 between 10 and 15 °C, $P_g=1.23+0.4(1.71-1.23)=1.422$ kPa; $\omega_2=0.00885$; $h_2=34.40$ kJ/kg. $h_w=h_f(12\ °\text{C})=50.40$ kJ/kg.

$\dot m_a=12/0.9134=13.14$ kg/min; $\dot m_w=13.14(0.02893-0.00885)=\mathbf{0.264\ kg/min}$;
$\dot Q_{out}=13.14(109.38-34.40)-0.264\times50.40=985.1-13.3=\mathbf{972\ kJ/min}$ (16.2 kW).

(Chart/CoolProp: 0.267 kg/min, 979 kJ/min.)

> **TRY 6.3** `[PP 17-18 Q2(b), 20]` Air enters a split air conditioner at 1 atm., 32 °C, and 80 percent relative humidity at a rate of 15 m³/min. The air leaves the cooling section as saturated air at 14 °C. Part of the moisture in the air that condenses during the process is also removed at 14 °C. Determine the rate of heat transfer and moisture removal from the air.

**Solution 6.3** **[TUTOR-GENERATED]** As Solution 6.1 with 32 °C, 80 %, 15 m³/min, 14 °C. (A split AC's indoor coil does exactly what the window AC's evaporator does.)

*State 1:* Table 1 between 30 and 35 °C: $P_g(32)=4.25+0.4(5.63-4.25)=4.802$ kPa; $P_{v1}=0.8\times4.802=3.842$ kPa; $\omega_1=0.02451$; $h_1=94.89$ kJ/kg; $v_1=0.8984$ m³/kg (dew point 28.11 °C, $T_{wb}=29.01$ °C).

*State 2* (14 °C sat., as Example 6.2): $P_g=1.614$ kPa, $\omega_2=0.01007$, $h_2=39.51$ kJ/kg; $h_w=58.79$ kJ/kg.

$\dot m_a=15/0.8984=16.70$ kg/min; $\dot m_w=16.70(0.02451-0.01007)=\mathbf{0.241\ kg/min}$;
$\dot Q_{out}=16.70(94.89-39.51)-0.241\times58.79=924.7-14.2=\mathbf{911\ kJ/min}$ (15.2 kW).

(Chart/CoolProp: 0.240 kg/min, 909 kJ/min.)

> **TRY 6.4** `[PP 18-19 Q2(b), 15]` Make comparison between ducted split type, multiple split type and VRF system with schematic diagram. Air enters a split air conditioner at 1 atm., 35 °C, and 80 percent relative humidity at a rate of 15 m³/min. The air leaves the cooling section as saturated air at 12.5 °C. Part of the moisture in the air that condenses during the process is also removed at 12.5 °C. Determine the rate of the heat transfer and moisture from the air.

**Solution 6.4** **[TUTOR-GENERATED]**

*Comparison* (sketch the three schematics of §6.7: one ODU piped to one air handler with supply and return ducts; one ODU with separate pipe pairs to several IDUs; one modular inverter ODU on a single main pipe with branch joints to many IDUs):

| | Ducted split | Multi-split | VRF |
|---|---|---|---|
| Principle | 1 ODU + 1 IDU (air handler), air ducted to rooms | 1 ODU + several IDUs, separate pipes | 1 modular ODU + many IDUs on one main pipe; refrigerant flow to each IDU varied by electronic valves |
| Capacity | up to 30–50 TR | up to 30–50 TR | 50–150 TR |
| Part load | poor | poor | good (inverter compressors) |
| Control | one thermostat, least flexible | per room, more flexible | per zone, most flexible; heat recovery possible |
| Cost | low | medium | very high |

*Numerical:* as Solution 6.2 (state 1 is the same 35 °C/80 %: $\omega_1=0.02893$, $h_1=109.38$, $v_1=0.9134$) with 15 m³/min and 12.5 °C.

*State 2* (12.5 °C sat.): $P_g=1.23+0.5(1.71-1.23)=1.47$ kPa; $\omega_2=0.00916$; $h_2=35.67$ kJ/kg; $h_w=h_f(12.5\ °\text{C})=52.50$ kJ/kg.

$\dot m_a=15/0.9134=16.42$ kg/min; $\dot m_w=16.42(0.02893-0.00916)=\mathbf{0.325\ kg/min}$;
$\dot Q_{out}=16.42(109.38-35.67)-0.325\times52.50=1210.5-17.1=\mathbf{1193\ kJ/min}$ (19.9 kW).

(Chart/CoolProp: 0.328 kg/min, 1203 kJ/min.)

### AC3: other psychrometric numericals

> **TRY 6.5** `[PP 15-16 Q2(b), 10]` Air enters a heating section at atmospheric pressure, 14 °C, and 80 percent relative humidity at a rate of 30 m³/min, and it leaves at 25 °C. Show the process on a psychrometric chart and determine (i) the rate of heat transfer in the heating section and (ii) the relative humidity of the air at the exit.

**Solution 6.5** **[FROM SOURCE: Arif p.100b; Kanak p.157, method]** Simple heating: a horizontal line on the chart from 1 (14 °C, 80 %) to 2 (25 °C) at constant ω (Fig. 8).

*State 1:* $P_g(14)=1.614$ kPa (Table 1, as Example 6.2); $P_{v1}=0.8\times1.614=1.291$ kPa;
$\omega_1=\dfrac{0.622\times1.291}{101.325-1.291}=0.00803$; $h_1=1.005(14)+0.00803(2501+25.48)=34.35$ kJ/kg; $v_1=\dfrac{0.287\times287.15}{101.325-1.291}=0.8238$ m³/kg.

*State 2:* $\omega_2=\omega_1=0.00803$; $h_2=1.005(25)+0.00803(2501+45.5)=45.57$ kJ/kg.

$\dot m_a=30/0.8238=36.41$ kg/min

(i) $\dot Q_{in}=\dot m_a(h_2-h_1)=36.41(45.57-34.35)=\mathbf{408.4\ kJ/min}=\mathbf{6.81\ kW}$

(ii) $P_{v2}=P_{v1}=1.291$ kPa (ω and $P$ unchanged); $P_g(25)=3.17$ kPa: $\phi_2=\dfrac{1.291}{3.17}=\mathbf{40.7\ \%}$

(Chart: $h_1\approx34.3$, $h_2\approx45.5$ kJ/kg, $v_1\approx0.824$, φ₂ ≈ 40 %. CoolProp: 409.2 kJ/min, 40.3 %.) Heating alone dries the air relatively from 80 % to about 41 %, which is why winter systems add a humidifier.

> **TRY 6.6** `[PP 11-12 Q3(c), 15]` A space is to be maintained at 50% relative humidity and 24 °C. The space has a sensible heat gain of 20 kW and moisture gain of 10 kg/hr. Moist air enters the space at 16 °C. Outside air at 35 °C dbt and 27 °C wbt is supplied at a rate of 400 litre/s. considering the system use is an elementary summer A/C system, estimate (i) wbt and dbt of air entering the space. (ii) required refrigeration load.

**Solution 6.6** **[TUTOR-GENERATED]** (method of Ameen §12.4–12.5). *Assumption:* the elementary summer system of §6.5 (Fig. 14): the 400 L/s of outdoor air O is mixed with recirculated room air R, the mixture M is cooled and dehumidified in the coil and supplied directly (no bypass, no reheat) at S = 16 °C. (400 L/s alone could not carry 20 kW with an 8 K difference, so the rest of the supply must be recirculated air.)

*Room R* (24 °C, 50 %): Table 1 between 20 and 25 °C, $P_g=2.34+0.8(3.17-2.34)=3.004$ kPa; $P_v=1.502$ kPa; $\omega_r=\dfrac{0.622\times1.502}{101.325-1.502}=0.009359$; $h_r=1.005(24)+0.009359(2501+43.68)=47.94$ kJ/kg.

*Supply mass from the sensible gain:* $\dot Q_s=\dot m_a(1.005+1.82\,\omega_s)(T_r-T_s)$. With $\omega_s$ found below, $1.005+1.82\times0.008226=1.0200$:
$\dot m_a=\dfrac{20}{1.0200\times(24-16)}=2.451$ kg/s

*Supply ω from the moisture gain:* $10$ kg/h $=0.002778$ kg/s $=\dot m_a(\omega_r-\omega_s)$ → $\omega_r-\omega_s=0.002778/2.451=0.001133$;
$\omega_s=0.009359-0.001133=0.008226$ kg/kg. (Start with $\omega_s=\omega_r$; one repeat converges.)

*(i) Supply state S:* $T_{db}=16$ °C. $P_{vs}=\dfrac{101.325\times0.008226}{0.622+0.008226}=1.322$ kPa, $\phi_s=1.322/1.836=72.0$ %, dew point 10.96 °C. Wet bulb by trial with the adiabatic-saturation relation: $T_{wb}=13$ °C gives $\omega=0.008222$, 14 °C gives 0.009240, so $T_{wb}=13+\dfrac{0.008226-0.008222}{0.009240-0.008222}=13.0$ °C.

**Air entering the space: 16 °C dbt, 13.0 °C wbt** (φ ≈ 72 %, ω = 0.00823). $h_s=36.89$ kJ/kg, $v_s=0.8298$ m³/kg, supply volume $2.451\times0.8298=2.03$ m³/s. (Room latent load $\dot m_a\Delta\omega(2501+1.82\times24)=7.07$ kW, room SHR $=20/27.07=0.74$.)

*Outdoor air O* (35 °C dbt, 27 °C wbt), from the adiabatic-saturation relation: at 27 °C, $P_g=3.602$ kPa, $\omega^*=0.02293$, $h_{fg}=2436.94$, $h_f=113.19$ kJ/kg;
$\omega_o=\dfrac{1.005(27-35)+0.02293\times2436.94}{2501+1.82\times35-113.19}=0.01951$; $P_{vo}=3.082$ kPa (φ = 54.7 %); $v_o=\dfrac{0.287\times308.15}{101.325-3.082}=0.9002$ m³/kg; $h_o=1.005(35)+0.01951(2501+63.7)=85.21$ kJ/kg.
$\dot m_{a,o}=0.400/0.9002=0.4443$ kg/s; recirculated air $\dot m_{a,r}=2.451-0.4443=2.007$ kg/s.

*Mixed air M* (dry-air weighted):
$\omega_m=\dfrac{2.007\times0.009359+0.4443\times0.01951}{2.451}=0.01120$; $h_m=\dfrac{2.007\times47.94+0.4443\times85.21}{2.451}=54.69$ kJ/kg ($T_m\approx26.0$ °C).

*(ii) Coil (refrigeration) load:* condensate $\dot m_w=\dot m_a(\omega_m-\omega_s)=2.451(0.01120-0.00823)=0.00729$ kg/s (26.2 kg/h), taken at the coil exit temperature 16 °C, $h_f=67.17$ kJ/kg:

$$\dot Q_{coil}=\dot m_a(h_m-h_s)-\dot m_wh_w=2.451(54.69-36.89)-0.00729\times67.17=43.63-0.49=\mathbf{43.1\ kW}\approx\mathbf{12.3\ TR}$$

Check: room load $\dot m_a(h_r-h_s)=27.07$ kW plus outdoor-air load $\dot m_{a,o}(h_o-h_r)=16.56$ kW $=43.63$ kW. The outdoor air is only 18 % of the flow but 38 % of the load. (CoolProp: outdoor ω = 0.01937, h = 84.90 kJ/kg; 43.0 kW. On the chart, read O at the 35 °C / 27 °C wb intersection, mark M on the line R–O at $T\approx26$ °C, and S at 16 °C on the room condition line through R with SHR 0.74.)

> **TRY 6.7** `[PP 12-13 Q2(b), 10]` A space is to be maintained at 25°C and 50% relative humidity. If the space has a sensible heat gain of 50 kW and moisture gain of 40 kg/hr, estimate: (i) conditions of supply air (ii) volume of supply air. You may assume a reasonable temperature of supply air.

**Solution 6.7** **[TUTOR-GENERATED]** (method of Ameen §12.5, Example 12.11). *Assume* a supply temperature $T_s=15$ °C ($T_r-T_s=10$ K, within the usual 8–12 K).

*Room:* Table 1, 25 °C: $P_g=3.17$ kPa; $P_v=1.585$ kPa; $\omega_r=\dfrac{0.622\times1.585}{101.325-1.585}=0.009884$; $h_r=50.30$ kJ/kg.

*Mass flow from the sensible gain.* First pass with $\omega_s=\omega_r$: $\dot m_a=\dfrac{50}{(1.005+1.82\times0.009884)\times10}=4.888$ kg/s. Moisture gain $40/3600=0.01111$ kg/s. Second pass with the $\omega_s$ below, $c_{pm}=1.0189$: $\dot m_a=\dfrac{50}{1.0189\times10}=4.907$ kg/s.

*Supply ω from the moisture gain:* $\omega_r-\omega_s=0.01111/4.907=0.002264$; $\omega_s=0.009884-0.002264=0.007620$ kg/kg.

*(i) Supply-air condition:* $T_{db}=15$ °C, $\omega_s=0.00762$ kg/kg; $P_{vs}=1.226$ kPa, $\phi_s=1.226/1.71=\mathbf{71.7\ \%}$; dew point 9.95 °C; wet bulb by trial ($T_{wb}=12$ °C gives $\omega=0.007617$, 11 °C gives 0.006604) $=\mathbf{12.0}$ °C; $h_s=34.34$ kJ/kg. **Supply air: 15 °C dbt, 12.0 °C wbt, φ ≈ 72 %, ω = 0.00762 kg/kg.**

*(ii) Volume:* $v_s=\dfrac{0.287\times288.15}{101.325-1.226}=0.8262$ m³/kg; $\dot V=4.907\times0.8262=\mathbf{4.05\ m^3/s}$.

Check: latent load $4.907\times0.002264\times(2501+45.5)=28.3$ kW, SHR $=50/78.3=0.64$ (a humid room: lots of moisture); $\dot m_a(h_r-h_s)=78.3$ kW ✓. *Chart route:* draw the SHR 0.64 line through R (25 °C, 50 %) with the protractor; at 15 °C it gives the same S. Another assumed $T_s$ gives another answer (e.g. 14 °C: less air, drier supply); state the assumption clearly.

> **TRY 6.8** `[PP 12-13 Q2(c), 15]` Air at 25°C and 50% RH is recirculated from a room and mixed with outdoor air at 33°C and 80% RH. If supply air to the room is 12°C and the volume of recirculated air is three times the volume of outdoor air, estimate the capacity of the cooling system.

**Solution 6.8** **[TUTOR-GENERATED]** (mixing method of Ameen §12.4, Example 12.3). *Assumptions:* the coil delivers the supply air saturated at 12 °C (as in the window AC problems); condensate leaves at 12 °C. **No flow rate is given**, so the capacity is found per kg/s of dry air supplied, and then for an assumed 1 m³/s of mixed air.

*Room air R* (25 °C, 50 %): $\omega_r=0.009884$, $h_r=50.30$ kJ/kg, $v_r=0.8579$ m³/kg (Solution 6.7).

*Outdoor air O* (33 °C, 80 %): Table 1, $P_g(33)=4.25+0.6(5.63-4.25)=5.078$ kPa; $P_v=4.062$ kPa; $\omega_o=0.02598$; $h_o=1.005(33)+0.02598(2501+60.1)=99.70$ kJ/kg; $v_o=0.9034$ m³/kg.

*Masses* for 3 m³ of room air per 1 m³ of outdoor air: $3/0.8579=3.497$ kg and $1/0.9034=1.107$ kg; outdoor-air mass fraction $=1.107/4.604=0.2404$.

*Mixed air M:* $\omega_m=0.7596\times0.009884+0.2404\times0.02598=0.01375$; $h_m=0.7596\times50.30+0.2404\times99.70=62.17$ kJ/kg; $T_m=\dfrac{62.17-2501\times0.01375}{1.005+1.82\times0.01375}=26.97$ °C (mass-weighted temperature 26.92 °C). On the chart M lies on the line R–O, a quarter of the way from R (Fig. 13).

*Supply S* (12 °C sat.): $\omega_s=0.00885$, $h_s=34.40$ kJ/kg (Solution 6.2); condensate $\omega_m-\omega_s=0.00490$ kg/kg at $h_f=50.40$ kJ/kg.

*Cooling capacity per kg dry air:*
$$q=h_m-h_s-(\omega_m-\omega_s)h_w=62.17-34.40-0.00490\times50.40=\mathbf{27.53\ kJ/kg\ dry\ air}$$
i.e. **27.5 kW (7.83 TR) for every kg/s of supply air**. For 1 m³/s of mixed air ($v_m=0.8689$ m³/kg, $\dot m_a=1.151$ kg/s): $\dot Q=\mathbf{31.7\ kW}\approx\mathbf{9.0\ TR}$. Multiply by the actual flow when it is known (from the room sensible load, as in Solution 6.7).

> **TRY 6.9** `[PP 12-13 Q2(a), 10]` Atmosphere air at 30°C and 50% relative humidity is compressed isothermally to a pressure of 10 bar. Estimate the psychometric condition of the compressed air.

**Solution 6.9** **[TUTOR-GENERATED]** (thermodynamics of moist air, §6.2). Take the atmosphere at 101.325 kPa.

*Initial state:* $P_g(30)=4.25$ kPa; $P_{v1}=0.5\times4.25=2.125$ kPa; $\omega_1=\dfrac{0.622\times2.125}{101.325-2.125}=0.01332$ kg/kg; $h_1=64.20$ kJ/kg; $v_1=0.8771$ m³/kg.

*Compression without condensation?* If the composition did not change, every partial pressure would rise in proportion to the total pressure: $P_v=2.125\times\dfrac{1000}{101.325}=20.97$ kPa. But at 30 °C the vapour pressure cannot exceed $P_g=4.25$ kPa. So the air **reaches saturation** (at about 2 bar) and the excess vapour **condenses** during the rest of the compression.

*Final state* (10 bar = 1000 kPa, 30 °C, saturated): $P_v=P_g=4.25$ kPa;
$$\omega_2=\frac{0.622\times4.25}{1000-4.25}=\mathbf{0.002655\ kg/kg\ dry\ air}$$
Water condensed $=\omega_1-\omega_2=0.01332-0.002655=\mathbf{0.01067}$ kg per kg dry air, **80 %** of the moisture (it must be drained from the receiver).

**Condition of the compressed air: 10 bar, $T_{db}=30$ °C, φ = 100 % (saturated), $T_{wb}=T_{dp}=30$ °C, ω = 0.002655 kg/kg**, $h_2=1.005(30)+0.002655(2501+54.6)=36.93$ kJ/kg dry air, $v_2=\dfrac{0.287\times303.15}{1000-4.25}=0.0874$ m³/kg dry air (one tenth of $v_1$). (CoolProp, with the real-gas enhancement factor at 10 bar: ω = 0.00273.)

*Remark:* the ω of saturated air falls almost in proportion to $1/P$. If this compressed air is expanded back to 1 atm at 30 °C, $P_v=\dfrac{101.325\times0.002655}{0.622+0.002655}=0.431$ kPa and φ = 10.1 % (= 101.325/1000): very dry air, with a dew point below 0 °C (about −4 °C). This is how compression plus an aftercooler and drain dries compressed air.

### AC1: comfort, refrigeration vs air conditioning

> **TRY 6.10** `[PP 11-12 Q2(a), 5]` Briefly explain the factors affecting human comfort.

**Solution 6.10** **[FROM SOURCE: Arif pp.94–95; Kanak p.153]** The body is comfortable when it can freely reject its metabolic waste heat (by convection, radiation and evaporation) and no more. Seven factors decide this:

1. **Activity level:** the metabolic heat (about 115 W at office work, 440 W at heavy work); more activity needs a cooler room.
2. **Clothing:** its insulation; more clothing, lower comfortable temperature (hence different summer and winter zones).
3. **Expectation** (with age, health and acclimatization): people used to a hot climate, or young and active people, accept warmer conditions.
4. **Air temperature:** sets the convective loss; the main controlled variable (about 23.5–26 °C in summer).
5. **Radiant temperature** of the surrounding surfaces: hot roofs or sunlit glass reduce, cold walls increase the radiant loss.
6. **Humidity:** controls the evaporation of sweat; above about 65 % the body cannot cool by sweating, below about 30 % skin and throat dry out.
7. **Air speed:** increases convective and evaporative loss; 0.1–0.25 m/s is pleasant, more is a draught, still air feels stuffy.

(Air purity and noise also affect comfort.)

> **TRY 6.11** `[PP 12-13 Q3(a), 5]` Briefly explain the factors affecting human comfort.

**Solution 6.11** **[FROM SOURCE: Arif p.95b]** A verbatim repeat of TRY 6.10: give the same seven factors with one line each (activity, clothing, expectation, air temperature, radiant temperature, humidity, air speed).

> **TRY 6.12** `[PP 13-14 Q2(a), 7]` Give the name of the factors that influence the thermal comfort for human being.

**Solution 6.12** **[FROM SOURCE: Arif p.95b]** The seven factors influencing thermal comfort (1 mark each): (1) activity level, (2) clothing, (3) expectation, (4) air temperature, (5) radiant temperature, (6) humidity, (7) air speed. The first three are personal factors, the last four environmental. Add a sketch of the man with heat loss by convection, radiation and evaporation (Fig. 1) if time allows.

> **TRY 6.13** `[PP 15-16 Q2(a), 10]` What are the differences between refrigeration and air-conditioning system? What are the factors that influence the thermal comfort of a human being?

**Solution 6.13** **[TUTOR-GENERATED]** *Differences* (5 marks):

| Refrigeration | Air conditioning |
|---|---|
| Removes heat to keep a product or space **below the ambient temperature** | Controls **temperature, humidity, cleanliness, air motion and distribution** of the air of a space at the same time |
| Treats products (food, chemicals, ice) or closed cold rooms | Treats the air of occupied or process spaces |
| Temperatures usually below 10 °C, often below 0 °C | Room conditions 20–27 °C, 30–65 % RH |
| Humidity, ventilation and filtering not controlled | Dehumidification/humidification, outdoor air, filtration are essential |
| Cooling only | Cooling in summer, heating in winter |
| Equipment: the refrigeration cycle | Refrigeration plant **plus** air handling: fans, coils, filters, humidifiers, ducts, diffusers, controls |

Refrigeration is a part of summer air conditioning; air conditioning is the larger system.

*Factors of thermal comfort* (5 marks): activity level, clothing, expectation, air temperature, radiant temperature, humidity and air speed, each explained in one line as in Solution 6.10.

> **TRY 6.14** `[PP 23-24 Q8(b), 10]` Define "Thermal Comfort". Describe the concept of the "Comfort Zone" on the psychometric chart.

**Solution 6.14** **[FROM SOURCE: Arif pp.94–96; ASHRAE 55]** *Thermal comfort* is that condition of mind which expresses satisfaction with the thermal environment (ASHRAE 55). Physically, it is reached when the body can reject its metabolic heat at the rate it is produced, freely and without strain (no shivering, no visible sweating), with no local discomfort. It depends on activity, clothing, expectation, air temperature, radiant temperature, humidity and air speed.

*Comfort zone.* Sketch a psychrometric chart (T_db horizontal, ω vertical, saturation curve and φ curves) and shade the zone (Fig. 2):

- It is the area of the chart (combinations of dry-bulb temperature and humidity) in which at least 80 % of people with normal clothing and light activity feel comfortable.
- Left and right boundaries: the lowest and highest acceptable temperatures (strictly, sloping lines of constant operative or effective temperature). Top and bottom: the highest and lowest acceptable humidity (high humidity is sticky and supports mould; low humidity dries the skin and causes static).
- ASHRAE 55/90.1: **summer 23.5–26 °C, φ 30–65 %**; **winter 20.5–23.5 °C, φ 20–65 %** (30–65 % in health-care buildings). The winter zone is cooler because heavier clothing is worn.
- Outside the zone: too cold, too warm, too humid or too dry; far to the warm and humid side lie impaired efficiency, distress and the lethal limit (Arif p.96a).
- The AC designer selects the indoor design point inside the zone (e.g. 25 °C, 50 %) and the system moves the air from the outdoor state into the zone and holds it there.

### AC4: processes on the chart, bypass and reheat systems, evaporative cooling

> **TRY 6.15** `[PP 13-14 Q2(b), 8]` Show all the Air-conditioning processes on a typical psychrometric chart.

**Solution 6.15** **[FROM SOURCE: Arif p.99b; Kanak p.154]** Draw the chart skeleton (T_db on the horizontal axis, ω on the right vertical axis, saturation curve at the upper left, two or three φ curves) and a state O in the middle, with arrows (Fig. 6):

1. **Sensible heating:** horizontal to the right (ω const., T ↑, φ ↓).
2. **Sensible cooling:** horizontal to the left (ω const., T ↓, φ ↑), not beyond the dew point.
3. **Humidifying:** vertically up (ω ↑ at const. T).
4. **Dehumidifying:** vertically down (ω ↓ at const. T).
5. **Heating and humidifying:** up and to the right (winter AC).
6. **Cooling and dehumidifying:** down and to the left toward the saturation curve (summer AC, cooling coil below the dew point).
7. **Evaporative cooling** (adiabatic saturation): up-left along the wet-bulb line, $T_{wb}$ and $h$ ≈ const.
8. **Chemical dehumidification:** down-right along a constant-enthalpy line (sorbent; T rises as ω falls).
9. **Adiabatic mixing:** a straight line between two states, the mix on it.

> **TRY 6.16** `[PP 11-12 Q3(b), 15]` Briefly explain, with schematic diagrams and processes on typical psychrometric charts, (i) Summer a/c system with bypass (ii) Summer a/c system with reheat

**Solution 6.16** **[TUTOR-GENERATED]** (Ameen §12.5; Arif pp.73–74). In both systems outdoor air O is mixed with return air R to M, and the mixture is cooled and dehumidified in a coil; the room loads move the supply state S to R along the room condition line, whose slope is fixed by the room SHR. The two systems differ in how they bring the cold, saturated coil air to the required S.

*(i) Summer AC with bypass* (Fig. 15). *Schematic:* mixing box → cooling coil → fan → room, with a bypass duct and damper that takes part of the return air (or of the mixed air) around the coil and joins the coil exit. *Chart:* M → C, cooling and dehumidification to C close to the apparatus dew point; then C mixes with the bypassed air R; S lies on the straight line C–R where it meets the room condition line. *Features:* no reheat energy, the supply temperature is raised by the room's own air; less air through the coil; smaller refrigeration load than reheat; the bypass damper gives easy part-load control and constant flow over a DX coil. But humidity control is weaker and the ADP must be lower.

*(ii) Summer AC with reheat* (Fig. 16). *Schematic:* mixing box → cooling coil → reheating coil → fan → room. *Chart:* M → C, cooling and dehumidification down to the dew point that gives the required supply ω (below the needed supply temperature); C → S, sensible reheat at constant ω (horizontal) up to the supply temperature on the room condition line; S → R in the room. *Features:* used when the room SHR is low (large latent load) or at part load, when the coil alone cannot reach the room condition line; gives independent and precise control of humidity (coil) and temperature (reheater). But energy is wasted: the air is overcooled and then reheated, and the reheat adds to the refrigeration load (reduced by using condenser heat for reheat).

> **TRY 6.17** `[PP 13-14 Q7(b), 18]` Describe an "All-Air system with Reheat" air-conditioning system. Mention its advantages and disadvantages.

**Solution 6.17** **[FROM SOURCE: Arif p.73a; Kanak pp.122–123]** *Description* (with the schematic of the all-air reheat system, and the chart of Fig. 16):

- A central **AHU** (outdoor-air and return-air dampers, filter, chilled-water or DX cooling coil, supply fan, return fan) cools and dehumidifies all the supply air to one low, constant temperature, about 13 °C (55 °F), low enough for the zone with the largest load and for dehumidification.
- The air is delivered at **constant volume** through a single supply duct to all zones.
- In each zone branch there is a **terminal reheat coil** (hot water or electric) controlled by that zone's **thermostat**. It reheats the air at constant ω just enough to match the zone's sensible load: a lightly loaded zone gets warm air, a fully loaded zone gets the cold air unheated.
- Return air is collected and taken back to the AHU, where part is exhausted and replaced by outdoor air.
- On the chart: mix M → C (coil), then a separate horizontal reheat line C → Sᵢ for each zone, each Sᵢ on its zone's room condition line.

*Advantages:*

1. Simplest all-air multi-zone system; reliable, easy to design and control.
2. Precise and independent control of temperature in every zone, and good humidity control (the coil fixes ω).
3. Handles zones with very different and changing loads (sunny and shaded, perimeter and interior).
4. Constant airflow: ventilation air and room air distribution stay good at all loads.
5. Main equipment central and outside the occupied space; the same reheat coils give winter heating.

*Disadvantages:*

1. **High energy waste**: the air is cooled and then reheated (simultaneous cooling and heating), and the full flow is cooled even at part load; "known for its reliability and its high energy wastage" (Arif p.73a).
2. High running cost; energy codes limit it.
3. Hot-water piping, valves and coils above every zone: leaks and maintenance in the ceiling.
4. Large ducts and fans for constant full flow; high fan energy.

> **TRY 6.18** `[PP 16-17 Q2(b), 8]` Briefly describe the evaporative cooling psychrometric process with example.

**Solution 6.18** **[FROM SOURCE: Arif p.104a; Kanak p.162]** In hot and dry climates air is cooled by evaporating water into it, in **evaporative (swamp, desert) coolers** and air washers. Air is passed through wetted pads or sprays; the latent heat of the evaporating water is taken from the air, so the air is cooled and humidified. No heat is exchanged with the surroundings, so it is essentially an **adiabatic saturation** process: $T_{wb}\approx$ const. and $h\approx$ const. On the chart (sketch Fig. 11) the state moves up and to the left along the wet-bulb line through the inlet state; the limit is the saturation point at the inlet wet-bulb temperature. It works well only when the air is dry ($T_{db}-T_{wb}$ large).

*Example:* air at 40 °C, 20 % RH ($T_{wb}=21.9$ °C) leaving a desert cooler at 90 % RH is at **23.1 °C**, cooled by 17 K, having taken up 0.00703 kg water per kg dry air, with $h$ ≈ 64 kJ/kg throughout. Other examples: water in a porous earthen jug, which stays cool as water seeping through evaporates; the wet cooling tower, which cools water the same way.

### AC5: AC system types

> **TRY 6.19** `[PP 11-12 Q2(b), 15]` With schematic diagram, briefly explain the key components of a central air-conditioning system. Mention the functions of following 4 components (i) chiller (ii) cooling tower (iii) AHU (iv) FCU

**Solution 6.19** **[FROM SOURCE: Arif pp.67–76; Kanak pp.121–126]** *Schematic:* draw Fig. 31: cooling tower ↔ (condenser-water pump) ↔ chiller condenser; the chiller (compressor, condenser, expansion valve, evaporator); evaporator ↔ (chilled-water pump) ↔ AHU and FCU coils; AHU ↔ supply and return ducts ↔ rooms, with outdoor air into the AHU.

*Key components:* chiller, cooling tower, condenser-water and chilled-water pumps and piping, expansion tank, AHUs, FCUs, ducts with dampers, diffusers and grilles, controls (thermostats, valves).

*Working:* the chiller evaporator cools water (12 → 7 °C); the chilled water absorbs the room heat in the AHU/FCU coils; the chiller rejects this heat plus the compressor work to the condenser water (30 → 35 °C); the cooling tower rejects it to the atmosphere by evaporation.

*Functions:*

- **(i) Chiller:** the refrigeration machine (vapour compression or absorption) that produces chilled water for the whole building; it provides the refrigerating effect.
- **(ii) Cooling tower:** cools the warm condenser water from the chiller by evaporating part of it into atmospheric air, so that the water can be recirculated and the condenser can work near the outdoor wet-bulb temperature.
- **(iii) AHU:** mixes outdoor and return air, filters, cools and dehumidifies (and heats and humidifies) it, and supplies it with its fan through ducts to many rooms; it also handles exhaust and ventilation.
- **(iv) FCU:** a room terminal unit (fan + chilled-water coil + filter) that recirculates and cools the air of one room under a local thermostat.

> **TRY 6.20** `[PP 11-12 Q3(a), 5]` Distinguish between split type and window type air conditioners.

**Solution 6.20** **[FROM SOURCE: Kanak p.128; Arif pp.61–64]**

| Window type | Split type |
|---|---|
| All components in one box in a wall or window | Compressor and condenser outdoors; evaporator (indoor unit) inside, joined by refrigerant pipes |
| Noisy (compressor in the room wall) | Quiet indoors |
| Two fans on one motor shaft | Separate indoor and outdoor fans |
| Large wall opening | Small hole for pipes |
| Can take in fresh air | No fresh air |
| Low capacity, cheap, easy to install | Higher capacity, costlier, needs a technician |

> **TRY 6.21** `[PP 12-13 Q3(b), 10]` Briefly distinguish between (i) FCU and AHU (ii) split and window type a/c

**Solution 6.21** **[FROM SOURCE: Kanak p.128]** *(i) FCU vs AHU:*

| FCU | AHU |
|---|---|
| Fan + one coil + filter; recirculates and conditions the air of one room | Large unit with dampers, filters, cooling and heating coils, humidifier, fans; conditions outdoor and return air for many rooms |
| No outdoor air | Brings in and treats outdoor air |
| In or above the room; no or short ducts | In a plant room; supply and return ducts needed |
| Small (about 150 m²), cheap | Large buildings; expensive |
| Noisier in the room | Quiet in the room |
| Limited humidity and filter control | Full humidity and filtration control |

*(ii) Split vs window:* the table of Solution 6.20 (one box vs indoor + outdoor units; noise; fans; wall opening; fresh air; capacity; cost and installation).

> **TRY 6.22** `[PP 15-16 Q2(c), 15]` Make a comparison between ducted split type, multi-split type and VRF type air-conditioning system with respective schematic diagram.

**Solution 6.22** **[FROM SOURCE: Kanak pp.118–120; Arif pp.64–66]** *Schematics* (draw each in a few lines):

- **Ducted split:** outdoor unit → refrigerant pipes → one indoor air handler (coil + blower + filter) in the ceiling → supply duct with diffusers to several rooms, return duct or plenum back.
- **Multi-split:** one outdoor unit → branch box → separate pipe pairs to 2–8 indoor units (wall, cassette, ducted) in different rooms.
- **VRF:** a modular outdoor unit with inverter compressors → one main liquid and suction pipe pair along the building → branch joints (refnets) → many indoor units, each with an electronic expansion valve; a separate outdoor-air unit for ventilation.

*Comparison:*

| | Ducted split | Multi-split | VRF |
|---|---|---|---|
| Working principle | one ODU, one IDU; air ducted to rooms | one ODU, multiple IDUs | one ODU (modular), multiple IDUs on a common pipe; variable refrigerant flow |
| Capacity range | up to 30–50 TR | up to 30–50 TR | 50–150 TR |
| Part load | not good | not good | suitable (inverter) |
| Pulse-modulating valve control | not available | not available | available: individual control of each IDU |
| Initial cost | low | medium | very high |
| Flexibility of control | least (one thermostat) | more (rooms at different conditions) | most (individual zones, heat recovery) |
| Heat carried by | air (ducts) | refrigerant | refrigerant |

> **TRY 6.23** `[PP 17-18 Q2(a), 15]` What are the differences between refrigeration and air conditioning system? Why the outdoor air is required in air conditioning system? What are the basic differences between all air system and all water system?

**Solution 6.23** **[FROM SOURCE: Arif p.97a; Kanak p.127]**

*Refrigeration vs AC* (5 marks): refrigeration removes heat to keep a product or space below ambient temperature (usually below 10 °C), with no control of humidity, ventilation or filtering and no heating; air conditioning controls temperature, humidity, cleanliness, air motion and distribution of the air of an occupied or process space (20–27 °C, 30–65 %), heats in winter, and needs fans, coils, filters, humidifiers, ducts and controls in addition to the refrigeration plant, which is only one part of it (table in Solution 6.13).

*Outdoor air is required* (5 marks): (1) to meet the metabolic (oxygen) requirements of the occupants; (2) to dilute indoor contaminants, odours and pollutants for acceptable air quality; (3) to support combustion or replace air exhausted from laboratories, kitchens, processes and toilets; (4) to make up the air exfiltrated when the space is kept at positive pressure; (5) to add or remove heat and moisture (free cooling). ASHRAE 62: about 10 L/s per person in offices, 7 L/s in classrooms.

*All-air vs all-water* (5 marks):

| All-air | All-water |
|---|---|
| Central plant (AHU) sends cooled or heated **air** through ducts, grilles and diffusers | Central plant sends hot or chilled **water** through pipes to FCUs in the rooms |
| Heat transfer medium: air | Heat transfer medium: water (higher heat capacity and density) |
| Large ducts, shafts and plant rooms | Small pipes, little space; no problem with beams |
| Outdoor ventilation air through the AHU | No ducted outdoor air (windows or a separate system) |
| Equipment cost low, but ducting and installation cost high | An FCU in every room: costly; leak risk |
| Good humidity control and filtration; room temperature control difficult unless VAV/reheat | Local control by each FCU; poor humidity control |
| Sub-types: single and multizone, CAV, VAV, terminal reheat, dual duct | Main type: FCUs (also radiators, convectors, valance units) |

> **TRY 6.24** `[PP 18-19 Q2(a), 20]` Why the outdoor air is required in air conditioning system? Briefly describe the working principle of a central air conditioning system with schematic diagram. Compare all air and all water system with schematic diagram?

**Solution 6.24** **[FROM SOURCE: Arif pp.67–75, 97a; Kanak pp.121–127]**

*Outdoor air:* the five reasons of Solution 6.23.

*Central AC working principle:* the schematic and the description of Solution 6.19: four loops (condenser water, refrigerant, chilled water, air); chiller produces 7 °C water, AHUs/FCUs cool the air with it, the cooling tower rejects the heat.

*All-air vs all-water with schematics:* sketch the all-air system (AHU with outdoor-air louvre, filter, cooling coil, heating coil, supply fan → supply ducts to the space → return grilles and return fan → exhaust and recirculation; Arif p.72a) and the all-water system (chiller → chilled-water pipes → an FCU in each room with fan, coil and filter, recirculating room air; Kanak p.125); then the table of Solution 6.23.

> **TRY 6.25** `[PP 20-21 Q1(a), 15]` Why the outdoor air is required in air conditioning system? Compare all air and all water system with schematic diagram. Make comparison between ducted split type, multiple split type and VRE type air-conditioning system with schematic diagram.

**Solution 6.25** **[FROM SOURCE: Arif pp.64–75, 97a; Kanak pp.118–127]** Three parts of about 5 marks each ("VRE" is a misprint for VRF):

- *Outdoor air:* the five reasons of Solution 6.23.
- *All-air vs all-water with schematics:* the two sketches of Solution 6.24 and the table of Solution 6.23.
- *Ducted split vs multi-split vs VRF with schematics:* the three sketches and the table of Solution 6.22.

> **TRY 6.26** `[PP 22-23 Q2(a), 15]` Why the outdoor air is required in air conditioning system? Compare all air and all water system with schematic diagram? Make comparison between ducted split type, multiple split type and VRF system with schematic diagram.

**Solution 6.26** **[FROM SOURCE: Arif pp.64–75, 97a; Kanak pp.118–127]** A verbatim repeat of TRY 6.25: same three answers (outdoor-air reasons; all-air vs all-water sketches and table; ducted split, multi-split and VRF sketches and table).

> **TRY 6.27** `[PP 23-24 Q8(c), 15]` What is the primary functions of an Air Distribution System in HVAC? Compare between Constant Air Volume (CAV) and Variable Air Volume (VAV) air distribution systems. Identify the main sources of pressure losses in duct systems.

**Solution 6.27** **[FROM SOURCE: Arif pp.73–74; Kanak p.124; tutor-generated]**

*Primary functions of the air distribution system:* (1) deliver conditioned supply air from the AHU to every space in the design quantity, balanced between branches; (2) distribute it within each space through diffusers and grilles with the right throw and velocity, good mixing and no draughts or noise; (3) return room air to the AHU and exhaust part of it; (4) bring in and distribute the outdoor ventilation air; (5) thereby maintain temperature, humidity, air quality and pressure relationships in every zone, with minimum fan energy.

*CAV vs VAV:*

| CAV | VAV |
|---|---|
| Constant air flow; the **supply temperature** varies with the load (coil control or terminal reheat) | Constant supply temperature (about 13 °C); the **air flow** to each zone varies (VAV box damper under the room thermostat) |
| Constant-speed fan, full flow always: high fan energy | Variable-speed fan: fan power falls sharply at part load |
| Reheat wastes energy (cool then heat) | Little or no reheat: energy efficient |
| Good ventilation and air distribution at all loads | Ventilation and distribution can suffer at low load |
| Simple, cheap, reliable | More complex controls, higher first cost, very flexible |
| Single zones, halls, labs, hospitals | Multi-zone offices with varying loads |

*Main sources of pressure loss in ducts:* (1) **friction** in straight runs, $\Delta p_f=f\,(L/D_h)\,\rho V^2/2$, increasing with length, velocity and roughness (flexible duct); (2) **dynamic losses in fittings**, $\Delta p=C\rho V^2/2$: elbows and bends, tees and branch take-offs, junctions, enlargements and contractions (transitions), duct entry and exit; (3) **components**: dampers (volume, fire, smoke), filters, cooling and heating coils, VAV/terminal boxes, sound attenuators, louvres, grilles, registers and diffusers; (4) **leakage** at joints. The fan must overcome the total pressure loss of the index (longest) run.

<!-- pagebreak -->

## 6.10 Summary sheet

> **KEY: Module 6 on one page**
>
> - **Equations** (P in kPa, T in °C, per kg dry air): $\omega=0.622P_v/(P-P_v)$; $\phi=P_v/P_g$; $h=1.005T+\omega(2501+1.82T)$; $v=0.287(T+273.15)/(P-P_v)$; $T_{dp}=T_{sat}(P_v)$; wet bulb from $\omega_1=[1.005(T_{wb}-T_1)+\omega^*h_{fg}]/(2501+1.82T_1-h_f)$, by trial. $P_g$, $h_f$, $h_{fg}$ from Table 1, interpolated.
> - **Chart** (end of module) is for 101.325 kPa only; at 100 kPa or altitude use the equations ($v_1=0.8157$, not 0.80).
> - **Processes:** heating/cooling horizontal; humidifying up; cooling + dehumidifying down-left to the saturation curve; heating + humidifying up-right; evaporative cooling up-left on $T_{wb}$ = const.; chemical dehumidification down-right on $h$ ≈ const.; mixing on the straight line, lever rule by dry-air masses.
> - **Cooling coil:** $\dot m_a=\dot V_1/v_1$; $\dot m_w=\dot m_a(\omega_1-\omega_2)$; $\dot Q_{out}=\dot m_a(h_1-h_2)-\dot m_wh_f(T_2)$.
> - **Answers (table route):** 35/70 %/10 m³/min → 15 °C: **0.160 kg/min, 625 kJ/min** · 35/80/12 → 12: 0.264, 972 · 32/80/15 → 14: 0.241, 911 · 35/80/15 → 12.5: 0.325, 1193 · Çengel 30/80/10 → 14: 0.130–0.131, 508–511 · heating 14/80/30 → 25 °C: 408.4 kJ/min, 40.7 % · elementary summer (24/50, 20 kW, 10 kg/h, 16 °C, 400 L/s OA): 16 °C db / 13.0 °C wb, 43.1 kW · supply (25/50, 50 kW, 40 kg/h, Ts 15 °C): 12.0 °C wb, 71.7 %, 4.05 m³/s · mixing 3:1, 12 °C: 27.5 kJ/kg · 10 bar isothermal: saturated, ω = 0.002655, 80 % condensed.
> - **Room loads:** $\dot Q_s=\dot m_a(1.005+1.82\omega_s)\Delta T$; $\dot m_{w}=\dot m_a\Delta\omega$; $SHR=Q_s/(Q_s+Q_l)$, about 0.7 in humid climates. Bypass: warm S by mixing coil air with room air (no reheat). Reheat: overcool to the dew point, reheat at ω const. (precise, wasteful).
> - **Comfort:** 7 factors: activity, clothing, expectation, air temperature, radiant temperature, humidity, air speed. Zone: summer 23.5–26 °C/30–65 %, winter 20.5–23.5 °C/20–65 %. Outdoor air: metabolism, dilution, exhaust make-up, pressurization, heat/moisture.
> - **Systems:** unitary (window; split → ducted, multi-split, VRF) vs chiller (all-air, all-water, air-water). Chiller makes 7 °C water; cooling tower cools condenser water toward the wet bulb (range, approach, make-up, blow-down); AHU conditions outdoor + return air for many rooms; FCU recirculates one room's air. All-air reheat: simple, precise, wasteful. CAV varies T, VAV varies flow. VRF: inverter + electronic valves, most flexible, costliest.
> - **Errata:** Kanak p.160 ω₁ = 22 g/kg → 0.135 kg/min; correct 0.131 kg/min. Kanak pp.161–162 $v_1=0.80$ (sea-level chart) at 100 kPa → 703 kJ/min; correct 668 kJ/min.

## 6.11 Self-test

1. Write ω in terms of $P_v$ and $P$, and say where 0.622 comes from.
2. Air at 30 °C has $P_v=2.125$ kPa. What is φ?
3. What are $T_{db}$, $T_{wb}$ and $T_{dp}$ for saturated air?
4. During simple heating, what happens to ω, φ, $T_{dp}$ and $T_{wb}$?
5. In the window-AC problem, why is $\dot m_a$ found with $v_1$ and not $v_2$?
6. Why does the condensate term appear with a minus sign in $\dot Q_{out}$, and how large is it?
7. A problem is set at 100 kPa. Can you use the chart at the end of the module?
8. Which process is a line of constant wet-bulb temperature, and what is its limit?
9. Where does the mix of two air streams lie on the chart?
10. Room SHR = 1.0: what does the room condition line look like?
11. Give two reasons for using reheat, and its main drawback.
12. Name the four loops of a central chilled-water system.

**Answers.**

1. $\omega=0.622P_v/(P-P_v)$; $0.622=R_a/R_v=0.287/0.4615$ (ratio of molar masses 18.02/28.97).
2. $\phi=2.125/4.25=50$ %.
3. All three are equal.
4. ω and $T_{dp}$ constant; φ falls; $T_{wb}$ rises.
5. The flow is measured at the inlet, where $v=v_1$; the dry-air mass flow is the same throughout.
6. The condensate leaves the control volume carrying $\dot m_wh_w$, which is not removed by the coil; it is 1–2 % of $\dot Q_{out}$.
7. No: the chart is for 101.325 kPa; use the equations (ω and v are larger at 100 kPa).
8. Evaporative cooling (adiabatic saturation); the limit is saturation at the inlet wet-bulb temperature.
9. On the straight line joining the two states, nearer the larger dry-air mass (lever rule).
10. Horizontal (sensible load only, no moisture).
11. Low SHR (large latent load) and part-load humidity control; it gives independent T and ω control. Drawback: energy wasted by cooling and then reheating.
12. Condenser water (tower–condenser), refrigerant (inside the chiller), chilled water (evaporator–AHU/FCU coils), air (AHU–ducts–rooms).

<!-- BEGIN DATA TABLES (generated by build/make_tables.py; do not edit) -->
<!-- pagebreak -->
## 6.T Tables for Module 6

![Fig. 42: Data Book Chart 8. ASHRAE psychrometric chart No. 1 (scan). Normal temperature, sea level (101.325 kPa). Clean print of the same chart on the next page.](figures/042.jpg)

![Fig. 43: Psychrometric chart at 1 atm (Çengel Fig. A-31, ASHRAE chart, clean print)](figures/043.jpg)

**Data Book Table 1 (p.2). Refrigerant 718 (water/steam): saturated liquid and saturated vapour**

Datum: $u=s=0$ for saturated liquid at the triple point. $v_f = 1/\rho_f$. For moist air $P_g = p_{sat}(T)$. Flags: a = triple point, b = normal boiling point, c = critical point.

| $T$ °C | $p$ MPa | $\rho_f$ kg/m$^3$ | $v_g$ m$^3$/kg | $h_f$ kJ/kg | $h_g$ kJ/kg | $s_f$ kJ/kgK | $s_g$ kJ/kgK | $c_{p,f}$ | $c_{p,g}$ | $c_p/c_v$ vap | Sound liq m/s | Sound vap m/s | $\mu_f$ $\mu$Pa s | $\mu_g$ | $k_f$ mW/mK | $k_g$ | $\sigma$ mN/m | flag |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0.01 | 0.00061 | 999.8 | 205.99 | 0.00 | 2500.92 | 0.0000 | 9.1555 | 4.220 | 1.884 | 1.329 | 1402. | 409.0 | 1791.2 | 9.22 | 561.0 | 17.07 | 75.65 | a |
| 5.00 | 0.00087 | 999.9 | 147.01 | 21.02 | 2510.06 | 0.0763 | 9.0248 | 4.205 | 1.889 | 1.328 | 1426. | 412.6 | 1518.3 | 9.34 | 570.5 | 17.34 | 74.94 |  |
| 10.00 | 0.00123 | 999.7 | 106.30 | 42.02 | 2519.21 | 0.1511 | 8.8998 | 4.196 | 1.895 | 1.328 | 1447. | 416.2 | 1306.0 | 9.46 | 580.0 | 17.62 | 74.22 |  |
| 15.00 | 0.00171 | 999.1 | 77.875 | 62.98 | 2528.33 | 0.2245 | 8.7803 | 4.189 | 1.900 | 1.328 | 1466. | 419.7 | 1137.6 | 9.59 | 589.3 | 17.92 | 73.49 |  |
| 20.00 | 0.00234 | 998.2 | 57.757 | 83.91 | 2537.43 | 0.2965 | 8.6660 | 4.184 | 1.906 | 1.327 | 1482. | 423.2 | 1001.6 | 9.73 | 598.4 | 18.23 | 72.74 |  |
| 25.00 | 0.00317 | 997.0 | 43.337 | 104.83 | 2546.51 | 0.3672 | 8.5566 | 4.182 | 1.912 | 1.327 | 1497. | 426.6 | 890.1 | 9.87 | 607.2 | 18.55 | 71.97 |  |
| 30.00 | 0.00425 | 995.6 | 32.878 | 125.73 | 2555.55 | 0.4368 | 8.4520 | 4.180 | 1.918 | 1.327 | 1509. | 430.0 | 797.4 | 10.01 | 615.5 | 18.89 | 71.19 |  |
| 35.00 | 0.00563 | 994.0 | 25.205 | 146.63 | 2564.55 | 0.5051 | 8.3517 | 4.180 | 1.925 | 1.327 | 1520. | 433.4 | 719.3 | 10.16 | 623.3 | 19.24 | 70.40 |  |
| 40.00 | 0.00738 | 992.2 | 19.515 | 167.53 | 2573.51 | 0.5724 | 8.2555 | 4.180 | 1.931 | 1.327 | 1529. | 436.7 | 653.0 | 10.31 | 630.6 | 19.60 | 69.60 |  |
| 45.00 | 0.00959 | 990.2 | 15.252 | 188.43 | 2582.43 | 0.6386 | 8.1633 | 4.180 | 1.939 | 1.327 | 1536. | 440.0 | 596.1 | 10.46 | 637.3 | 19.97 | 68.78 |  |
| 50.00 | 0.01235 | 988.0 | 12.027 | 209.34 | 2591.29 | 0.7038 | 8.0748 | 4.182 | 1.947 | 1.328 | 1542. | 443.2 | 546.8 | 10.62 | 643.6 | 20.36 | 67.94 |  |
| 55.00 | 0.01576 | 985.7 | 9.5643 | 230.26 | 2600.09 | 0.7680 | 7.9898 | 4.183 | 1.955 | 1.328 | 1547. | 446.4 | 504.0 | 10.77 | 649.2 | 20.77 | 67.10 |  |
| 60.00 | 0.01995 | 983.2 | 7.6672 | 251.18 | 2608.83 | 0.8313 | 7.9081 | 4.185 | 1.965 | 1.328 | 1551. | 449.5 | 466.4 | 10.93 | 654.3 | 21.19 | 66.24 |  |
| 65.00 | 0.02504 | 980.5 | 6.1935 | 272.12 | 2617.50 | 0.8937 | 7.8296 | 4.187 | 1.975 | 1.329 | 1553. | 452.6 | 433.2 | 11.10 | 659.0 | 21.62 | 65.37 |  |
| 70.00 | 0.03120 | 977.7 | 5.0395 | 293.07 | 2626.10 | 0.9551 | 7.7540 | 4.190 | 1.986 | 1.330 | 1555. | 455.6 | 403.9 | 11.26 | 663.1 | 22.07 | 64.48 |  |
| 75.00 | 0.03860 | 974.8 | 4.1289 | 314.03 | 2634.60 | 1.0158 | 7.6812 | 4.193 | 1.999 | 1.331 | 1555. | 458.5 | 377.7 | 11.43 | 666.8 | 22.53 | 63.58 |  |
| 80.00 | 0.04741 | 971.8 | 3.4052 | 335.01 | 2643.02 | 1.0756 | 7.6111 | 4.197 | 2.012 | 1.332 | 1554. | 461.4 | 354.3 | 11.59 | 670.0 | 23.01 | 62.67 |  |
| 85.00 | 0.05787 | 968.6 | 2.8258 | 356.01 | 2651.33 | 1.1346 | 7.5434 | 4.201 | 2.027 | 1.333 | 1553. | 464.2 | 333.3 | 11.76 | 672.8 | 23.51 | 61.75 |  |
| 90.00 | 0.07018 | 965.3 | 2.3591 | 377.04 | 2659.53 | 1.1929 | 7.4781 | 4.205 | 2.043 | 1.334 | 1550. | 466.9 | 314.4 | 11.93 | 675.3 | 24.02 | 60.82 |  |
| 95.00 | 0.08461 | 961.9 | 1.9806 | 398.09 | 2667.61 | 1.2504 | 7.4151 | 4.210 | 2.061 | 1.335 | 1547. | 469.6 | 297.3 | 12.10 | 677.3 | 24.55 | 59.87 |  |
| 99.97 | 0.10133 | 958.4 | 1.6732 | 419.06 | 2675.53 | 1.3069 | 7.3544 | 4.216 | 2.080 | 1.337 | 1543. | 472.2 | 281.8 | 12.27 | 679.1 | 25.09 | 58.92 | b |
| 100.00 | 0.10142 | 958.3 | 1.6718 | 419.17 | 2675.57 | 1.3072 | 7.3541 | 4.216 | 2.080 | 1.337 | 1543. | 472.2 | 281.7 | 12.27 | 679.1 | 25.10 | 58.91 |  |
| 105.00 | 0.12090 | 954.7 | 1.4184 | 440.27 | 2683.39 | 1.3633 | 7.2952 | 4.222 | 2.101 | 1.339 | 1538. | 474.7 | 267.6 | 12.44 | 680.5 | 25.66 | 57.94 |  |
| 110.00 | 0.14338 | 950.9 | 1.2093 | 461.42 | 2691.06 | 1.4188 | 7.2381 | 4.228 | 2.124 | 1.341 | 1533. | 477.1 | 254.7 | 12.61 | 681.7 | 26.24 | 56.96 |  |
| 115.00 | 0.16918 | 947.1 | 1.0358 | 482.59 | 2698.58 | 1.4737 | 7.1828 | 4.236 | 2.150 | 1.343 | 1527. | 479.5 | 242.9 | 12.78 | 682.6 | 26.85 | 55.97 |  |
| 120.00 | 0.19867 | 943.1 | 0.89121 | 503.81 | 2705.93 | 1.5279 | 7.1291 | 4.244 | 2.177 | 1.346 | 1520. | 481.7 | 232.1 | 12.96 | 683.2 | 27.47 | 54.97 |  |
| 125.00 | 0.23224 | 939.0 | 0.77003 | 525.07 | 2713.10 | 1.5816 | 7.0770 | 4.252 | 2.207 | 1.349 | 1512. | 483.9 | 222.1 | 13.13 | 683.6 | 28.11 | 53.96 |  |
| 130.00 | 0.27028 | 934.8 | 0.66800 | 546.38 | 2720.08 | 1.6346 | 7.0264 | 4.261 | 2.239 | 1.352 | 1504. | 486.0 | 212.9 | 13.30 | 683.7 | 28.76 | 52.93 |  |
| 135.00 | 0.31323 | 930.5 | 0.58173 | 567.74 | 2726.87 | 1.6872 | 6.9772 | 4.272 | 2.274 | 1.355 | 1496. | 487.9 | 204.4 | 13.47 | 683.6 | 29.44 | 51.90 |  |
| 140.00 | 0.36154 | 926.1 | 0.50845 | 589.16 | 2733.44 | 1.7392 | 6.9293 | 4.283 | 2.311 | 1.359 | 1486. | 489.8 | 196.5 | 13.65 | 683.3 | 30.14 | 50.86 |  |
| 145.00 | 0.41568 | 921.6 | 0.44596 | 610.64 | 2739.80 | 1.7907 | 6.8826 | 4.294 | 2.351 | 1.363 | 1476. | 491.6 | 189.2 | 13.82 | 682.8 | 30.86 | 49.80 |  |
| 150.00 | 0.47616 | 917.0 | 0.39245 | 632.18 | 2745.93 | 1.8418 | 6.8371 | 4.307 | 2.394 | 1.368 | 1466. | 493.3 | 182.5 | 13.99 | 682.0 | 31.60 | 48.74 |  |
| 155.00 | 0.54350 | 912.3 | 0.34646 | 653.79 | 2751.81 | 1.8924 | 6.7926 | 4.321 | 2.440 | 1.373 | 1455. | 494.8 | 176.1 | 14.16 | 681.1 | 32.35 | 47.67 |  |
| 160.00 | 0.61823 | 907.4 | 0.30678 | 675.47 | 2757.44 | 1.9426 | 6.7491 | 4.335 | 2.488 | 1.379 | 1443. | 496.3 | 170.2 | 14.34 | 680.0 | 33.13 | 46.59 |  |
| 165.00 | 0.70093 | 902.5 | 0.27243 | 697.24 | 2762.81 | 1.9923 | 6.7066 | 4.351 | 2.540 | 1.385 | 1431. | 497.6 | 164.7 | 14.51 | 678.6 | 33.93 | 45.50 |  |
| 170.00 | 0.79219 | 897.5 | 0.24259 | 719.08 | 2767.90 | 2.0417 | 6.6650 | 4.368 | 2.594 | 1.392 | 1419. | 498.9 | 159.6 | 14.68 | 677.0 | 34.75 | 44.41 |  |
| 175.00 | 0.89260 | 892.3 | 0.21658 | 741.02 | 2772.71 | 2.0906 | 6.6241 | 4.386 | 2.652 | 1.399 | 1405. | 500.0 | 154.7 | 14.85 | 675.3 | 35.59 | 43.30 |  |
| 180.00 | 1.0028 | 887.0 | 0.19384 | 763.05 | 2777.21 | 2.1392 | 6.5840 | 4.405 | 2.713 | 1.407 | 1392. | 501.0 | 150.1 | 15.03 | 673.3 | 36.45 | 42.19 |  |
| 185.00 | 1.1235 | 881.6 | 0.17390 | 785.19 | 2781.41 | 2.1875 | 6.5447 | 4.425 | 2.777 | 1.416 | 1378. | 501.9 | 145.8 | 15.20 | 671.1 | 37.33 | 41.07 |  |
| 190.00 | 1.2552 | 876.1 | 0.15636 | 807.43 | 2785.28 | 2.2355 | 6.5059 | 4.447 | 2.844 | 1.425 | 1363. | 502.7 | 141.8 | 15.37 | 668.8 | 38.24 | 39.95 |  |
| 195.00 | 1.3988 | 870.4 | 0.14089 | 829.79 | 2788.82 | 2.2832 | 6.4678 | 4.471 | 2.915 | 1.436 | 1348. | 503.4 | 137.9 | 15.54 | 666.1 | 39.16 | 38.81 |  |
| 200.00 | 1.5549 | 864.7 | 0.12721 | 852.27 | 2792.01 | 2.3305 | 6.4302 | 4.496 | 2.990 | 1.447 | 1332. | 503.9 | 134.3 | 15.71 | 663.3 | 40.11 | 37.67 |  |
| 205.00 | 1.7243 | 858.8 | 0.11508 | 874.88 | 2794.83 | 2.3777 | 6.3930 | 4.523 | 3.068 | 1.459 | 1316. | 504.3 | 130.9 | 15.89 | 660.3 | 41.09 | 36.53 |  |
| 210.00 | 1.9077 | 852.7 | 0.10429 | 897.63 | 2797.27 | 2.4245 | 6.3563 | 4.551 | 3.150 | 1.472 | 1299. | 504.6 | 127.6 | 16.06 | 657.0 | 42.09 | 35.38 |  |
| 215.00 | 2.1058 | 846.5 | 0.09468 | 920.53 | 2799.32 | 2.4712 | 6.3200 | 4.582 | 3.237 | 1.486 | 1282. | 504.8 | 124.5 | 16.24 | 653.4 | 43.11 | 34.23 |  |
| 220.00 | 2.3196 | 840.2 | 0.08609 | 943.58 | 2800.95 | 2.5177 | 6.2840 | 4.615 | 3.329 | 1.501 | 1264. | 504.8 | 121.5 | 16.41 | 649.7 | 44.17 | 33.07 |  |
| 225.00 | 2.5497 | 833.7 | 0.07840 | 966.80 | 2802.15 | 2.5640 | 6.2483 | 4.650 | 3.426 | 1.518 | 1246. | 504.6 | 118.7 | 16.59 | 645.6 | 45.26 | 31.90 |  |
| 230.00 | 2.7971 | 827.1 | 0.07150 | 990.19 | 2802.90 | 2.6101 | 6.2128 | 4.688 | 3.528 | 1.536 | 1228. | 504.4 | 116.0 | 16.76 | 641.3 | 46.38 | 30.74 |  |
| 235.00 | 3.0625 | 820.3 | 0.06530 | 1013.77 | 2803.17 | 2.6561 | 6.1775 | 4.728 | 3.638 | 1.556 | 1209. | 503.9 | 113.4 | 16.94 | 636.7 | 47.53 | 29.57 |  |
| 240.00 | 3.3469 | 813.4 | 0.05970 | 1037.55 | 2802.96 | 2.7020 | 6.1423 | 4.772 | 3.754 | 1.578 | 1189. | 503.3 | 110.9 | 17.12 | 631.8 | 48.73 | 28.39 |  |
| 245.00 | 3.6512 | 806.2 | 0.05465 | 1061.55 | 2802.22 | 2.7478 | 6.1072 | 4.819 | 3.878 | 1.601 | 1169. | 502.6 | 108.4 | 17.31 | 626.7 | 49.97 | 27.22 |  |
| 250.00 | 3.9762 | 798.9 | 0.05008 | 1085.77 | 2800.93 | 2.7935 | 6.0721 | 4.870 | 4.011 | 1.627 | 1148. | 501.6 | 106.1 | 17.49 | 621.2 | 51.26 | 26.04 |  |
| 255.00 | 4.3229 | 791.4 | 0.04594 | 1110.23 | 2799.07 | 2.8392 | 6.0369 | 4.925 | 4.153 | 1.655 | 1127. | 500.5 | 103.9 | 17.68 | 615.4 | 52.61 | 24.87 |  |
| 260.00 | 4.6923 | 783.6 | 0.04217 | 1134.96 | 2796.60 | 2.8849 | 6.0016 | 4.986 | 4.308 | 1.686 | 1105. | 499.2 | 101.7 | 17.88 | 609.2 | 54.03 | 23.69 |  |
| 265.00 | 5.0853 | 775.7 | 0.03875 | 1159.96 | 2793.49 | 2.9307 | 5.9661 | 5.051 | 4.475 | 1.720 | 1083. | 497.7 | 99.6 | 18.07 | 602.8 | 55.53 | 22.51 |  |
| 270.00 | 5.5030 | 767.5 | 0.03562 | 1185.27 | 2789.69 | 2.9765 | 5.9304 | 5.123 | 4.656 | 1.757 | 1060. | 496.0 | 97.5 | 18.28 | 595.9 | 57.11 | 21.34 |  |
| 275.00 | 5.9464 | 759.0 | 0.03277 | 1210.90 | 2785.17 | 3.0224 | 5.8944 | 5.202 | 4.855 | 1.798 | 1037. | 494.1 | 95.5 | 18.48 | 588.7 | 58.80 | 20.16 |  |
| 280.00 | 6.4166 | 750.3 | 0.03015 | 1236.88 | 2779.87 | 3.0685 | 5.8579 | 5.289 | 5.073 | 1.845 | 1013. | 491.9 | 93.5 | 18.70 | 581.1 | 60.61 | 18.99 |  |
| 285.00 | 6.9147 | 741.3 | 0.02776 | 1263.25 | 2773.73 | 3.1147 | 5.8209 | 5.385 | 5.314 | 1.896 | 988. | 489.5 | 91.6 | 18.92 | 573.2 | 62.57 | 17.83 |  |
| 290.00 | 7.4418 | 731.9 | 0.02555 | 1290.03 | 2766.70 | 3.1612 | 5.7834 | 5.493 | 5.582 | 1.954 | 962. | 486.9 | 89.7 | 19.15 | 565.0 | 64.71 | 16.66 |  |
| 295.00 | 7.9991 | 722.2 | 0.02353 | 1317.27 | 2758.70 | 3.2080 | 5.7451 | 5.614 | 5.882 | 2.019 | 936. | 483.9 | 87.8 | 19.40 | 556.3 | 67.05 | 15.51 |  |
| 300.00 | 8.5879 | 712.1 | 0.02166 | 1345.01 | 2749.64 | 3.2552 | 5.7059 | 5.750 | 6.220 | 2.094 | 909. | 480.7 | 85.9 | 19.65 | 547.4 | 69.65 | 14.36 |  |
| 310.00 | 9.8651 | 690.7 | 0.01833 | 1402.22 | 2727.95 | 3.3510 | 5.6244 | 6.085 | 7.045 | 2.277 | 853. | 473.3 | 82.2 | 20.21 | 528.7 | 75.84 | 12.09 |  |
| 320.00 | 11.2843 | 667.1 | 0.01547 | 1462.22 | 2700.59 | 3.4494 | 5.5372 | 6.537 | 8.159 | 2.528 | 793. | 464.4 | 78.4 | 20.85 | 509.2 | 83.91 | 9.86 |  |
| 330.00 | 12.8581 | 640.8 | 0.01298 | 1525.87 | 2666.03 | 3.5518 | 5.4422 | 7.186 | 9.753 | 2.889 | 729. | 453.7 | 74.5 | 21.61 | 489.1 | 94.94 | 7.70 |  |
| 340.00 | 14.6007 | 610.7 | 0.01078 | 1594.53 | 2621.85 | 3.6601 | 5.3356 | 8.21 | 12.24 | 3.45 | 658. | 440.7 | 70.4 | 22.55 | 468.5 | 110.91 | 5.63 |  |
| 350.00 | 16.5294 | 574.7 | 0.00880 | 1670.89 | 2563.64 | 3.7784 | 5.2110 | 10.12 | 16.69 | 4.46 | 578. | 424.4 | 65.9 | 23.82 | 447.4 | 135.95 | 3.67 |  |
| 360.00 | 18.6660 | 527.6 | 0.00695 | 1761.66 | 2481.49 | 3.9167 | 5.0536 | 15.00 | 27.36 | 6.83 | 480. | 402.4 | 60.3 | 25.72 | 425.7 | 181.51 | 1.88 |  |
| 370.00 | 21.0436 | 451.4 | 0.00495 | 1890.69 | 2334.52 | 4.1112 | 4.8012 | 45.16 | 96.60 | 21.15 | 360. | 362.8 | 52.1 | 29.68 | 425.0 | 323.84 | 0.39 |  |
| 373.95 | 22.0640 | 322.0 | 0.00311 | 2084.26 | 2084.26 | 4.4070 | 4.4070 | ∞ | ∞ | ∞ | 0. | 0.0 | — | — | ∞ | ∞ | 0.00 | c |


<!-- END DATA TABLES -->
