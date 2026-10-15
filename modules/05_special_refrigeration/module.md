<!-- pagebreak -->
# Module 5: Special refrigeration systems and gas liquefaction

| | |
|---|---|
| **Where it appears** | 10 of 11 papers, 2012-13 to 2023-24 (not 2011-12), always Section B except 2023-24 (Section A). The Linde plant is asked in 7 papers; steam-jet refrigeration in 6; aircraft/air-cycle cooling in 4; cascade liquefaction of natural gas, the Joule–Thomson coefficient, magnetic and thermoelectric refrigeration once to three times each |
| **Share of all marks** | 12.2% (372 of 3055 weighted marks): 23 parts, all theory. Gas liquefaction (SP2) 182 marks in 11 parts; steam jet (SP1) 91 marks in 6 parts; air cycle and aircraft (SP3) 67 marks in 4 parts; magnetic and thermoelectric (SP4) 32 marks in 2 parts |
| **Time** | core 3 h (§5.1, §5.4, §5.5, §5.7 and Solutions 5.1, 5.5, 5.7, 5.9, 5.19), full 5 h (all 23 solutions and the worked examples) |
| **Sources** | Aloke pp.8–23, 92–103; Kanak pp.6–12, 64–69; Ameen §6.1–6.3, §8.2, §8.4; Hundy §2.7; Data Book Table 1 (R718, water, at the end of this module); nitrogen and air properties from CoolProp (values given in the text) |

**How it has been asked:**

- **The Linde plant (SP2), 15–20 marks, 7 papers.** "**Describe the Linde Liquefaction Plant for liquifying gas with neat sketch. Draw the necessary T-s diagram and explain**" (2013-14, **2015-16 and 2020-21 the same words**). Each later paper adds a lead-in: "Explain the necessity for using two heat exchangers in this process" (2017-18); "Why are two heat exchangers necessary before the first throttling in a Linde Liquefaction plant?" (2021-22); "Why is intercooling necessary for the compressor in a Linde liquefaction process? How is Joule-Thomson effect applicable for Linde liquefaction process?" (2022-23); "Why oxygen gas is not possible to extract from air by 'liquefaction by cooling' method?" (2023-24).
- **The steam-jet system (SP1), 10–18 marks, 6 papers.** "**Briefly describe the principle of operation of a steam jet water vapour refrigerating system. What are its advantages and limitations. Draw the necessary schematic diagram**" (**2013-14 ≡ 2016-17**); "Why is steam jet refrigeration system safe for air-conditioning installation?" (2018-19); "**How is cooling produced in a steam jet refrigeration system? … Hence, explain the mathematical formula to show the amount of cooling produced**" (**2022-23 ≡ 2023-24 verbatim**); "Briefly describe the working principle" (2012-13).
- **Joule–Thomson effect (SP2), 10–18 marks:** "Explain the importance of Joule Thomson coefficient and inversion temperature when operating a system for liquefaction of gases" (2012-13); "Describe the thermodynamic principle of liquefaction of gases by expansion. Hence, explain the Joule-Theorem [Thomson] coefficient and isenthalpic curve for flow through a porous plug" (2018-19).
- **Cascade liquefaction of natural gas (SP2), 17–18 marks:** "Explain the basic principle of cascade refrigeration cycle. Hence, describe with neat sketches the liquefaction of natural gas by cascade refrigeration method" (2018-19); "What are its special features due to which it can liquefy the gases? Hence, describe a ternary cascade refrigeration cycle for liquifying natural gas" (2021-22).
- **Aircraft and air-cycle refrigeration (SP3), 15–18 marks:** "**Though the temperature at high altitude is lower than the earth surface, aircraft needs cooling, why is this cooling necessary? Hence, describe an air cycle refrigeration system with proper schematic diagram**" (**2020-21 ≡ 2021-22 word for word**; 2017-18 in other words); "Briefly describe the principle of operation of a gas refrigeration system. What are its advantages and limitations?" (2015-16).
- **Magnetic and thermoelectric (SP4), 15–17 marks, once each:** "Describe with neat sketch the working principle of magnetic refrigeration. Explain how so low temperature like absolute zero can be achieved" (2017-18); "Why is an electromotive force produced when the junctions of two dissimilar conductors are maintained at two different temperatures? Hence, describe the thermoelectric refrigeration system with relevant mathematical expression" (2022-23).

> **KEY: Toolkit for this module**
>
> - **Steam jet:** water is the refrigerant; it boils under a high vacuum in a **flash chamber**; a **steam ejector** (nozzle + mixing chamber + diffuser) is the compressor. Cooling of the remaining water by flashing a mass $m_v$ out of $m$: $m_v h_{fg}\approx(m-m_v)\,c_p\,\Delta T$. Steady flash fraction $x=\dfrac{h_{f,in}-h_{f,out}}{h_g-h_{f,out}}$ (water table, Table 1 at the end of this module). Practical chilled water 4–10 °C; flash chamber ≈ 0.8–1.2 kPa.
> - **Units:** 1 cm Hg = 1.333 kPa; 1 mm Hg = 0.1333 kPa; 76 cm Hg = 101.3 kPa. 1 TR = 3.517 kW.
> - **Liquefaction:** bring the gas below its **critical temperature** and into the dome. Two routes: cooling by refrigeration (cascade) or expansion (throttling = isenthalpic, J–T; or work-producing expansion in an engine = nearly isentropic).
> - **Joule–Thomson coefficient:** $\mu_{JT}=\left(\dfrac{\partial T}{\partial p}\right)_h$. $\mu_{JT}>0$: throttling cools; $\mu_{JT}=0$: inversion point; $\mu_{JT}<0$: throttling heats. Ideal gas: $\mu_{JT}=0$. Throttling cools only **below the inversion temperature** (N$_2$, air ≈ 600–650 K; H$_2$ ≈ 200 K; He ≈ 40–45 K).
> - **Linde (simple) yield:** with the compressor outlet 2 and the inlet 1 at the same (ambient) temperature, $y=\dfrac{h_1-h_2}{h_1-h_f}$ kg liquid per kg compressed (first law on HX + valve + separator). Slides' two-throttle plant: $y=y_By_A$.
> - **Air cycle (reversed Brayton/Bell–Coleman), ideal:** $T_2/T_1=T_3/T_4=r_p^{(\gamma-1)/\gamma}$; $COP=\dfrac{q_L}{w_c-w_t}=\dfrac{1}{r_p^{(\gamma-1)/\gamma}-1}$; air $c_p=1.005$ kJ/(kg·K), $\gamma=1.4$, $(\gamma-1)/\gamma=0.2857$.
> - **Thermoelectric:** Seebeck $E=\alpha(T_1-T_2)$; Peltier $Q=\pi I$, $\pi=\alpha T$; cooling of a couple $Q_c=\alpha IT_c-\tfrac12I^2R-K(T_h-T_c)$; input $W=\alpha I(T_h-T_c)+I^2R$; $COP=Q_c/W$.
> - **Magnetic:** adiabatic magnetization heats, adiabatic demagnetization cools (magnetocaloric effect); paramagnetic salts (gadolinium sulphate) from ≈ 1 K reach ≈ 0.001 K.

## 5.1 Steam-jet (water-vapour) refrigeration ★

**What it is.** A refrigeration system in which **water is the refrigerant** and the compressor is replaced by a **steam ejector** (thermocompressor). Refrigeration is obtained by the direct evaporation and self-cooling of water: water sprayed into a vessel kept under a high vacuum boils at a low temperature, and the latent heat of the part that evaporates is taken from the rest, which is chilled [Aloke pp.8–10; Kanak pp.6–7; Ameen §6.3]. The chilled water is pumped to the air-conditioning plant or the process.

**The principle: water boils at a low temperature at a low pressure.** The boiling (saturation) temperature of water falls with the pressure on its surface. From the water table (Table 1, end of this module):

| Saturation temperature | Pressure | In cm Hg | Where |
|---|---|---|---|
| 5 °C | 0.87 kPa | 0.65 | flash chamber of a steam-jet chiller |
| 10 °C | 1.23 kPa | 0.92 | flash chamber (warmer chilled water) |
| ≈ 38 °C | 6.67 kPa | 5.0 | condenser |
| ≈ 43 °C | 8.67 kPa | 6.5 | condenser |
| 100 °C | 101.3 kPa | 76 | atmosphere |

So the flash chamber must be held at about **1 kPa absolute (7–9 mm Hg)**, roughly 1 % of atmospheric pressure. Ameen gives 4 °C at 6 mm Hg in the evaporator and 38 °C at 50 mm Hg in the condenser: a compression ratio of about 8 to 1, which is near the limit for an ejector [Ameen §6.3].

> **TRAP: The boiling points in the slides and Kanak vai's note**
>
> The slides and Kanak vai's note print "Water boils at 60C, when the pressure on the surface is 5 cm of Hg and at 100C, when the pressure is 6.5 cms of Hg" [Aloke p.8; Kanak p.6]. Neither reading is right. Taken literally (60 °C and 100 °C), it contradicts the steam table: 100 °C needs 76 cm Hg and 60 °C about 15 cm Hg. Read as "6 °C and 10 °C" (the degree sign lost), the pressures are wrong. **Correct statements:** at **5 cm Hg** (6.67 kPa) water boils at **≈ 38 °C**, and at **6.5 cm Hg** (8.67 kPa) at **≈ 43 °C** (Table 1, interpolated: 37.96 °C and 42.91 °C; EOS 38.1 and 43.0 °C), which are condenser conditions. The chilled-water temperatures of 5–10 °C need **0.65–0.92 cm Hg (6.5–9.2 mm Hg)**: the original source probably had **mm Hg**. In an exam, write: "at about 0.9 kPa (7 mm Hg) water boils at about 5 °C".

**The schematic** (Fig. 1) [Aloke pp.8–10; Kanak pp.6–7]. The components are:

1. **Steam boiler** and **control valve**: supply high-pressure motive steam.
2. **Steam ejector (thermocompressor)**: a steam **nozzle**, a **suction (entrainment) and mixing chamber** and a **diffuser** (Fig. 2). It does the job of the compressor.
3. **Flash chamber** (evaporator): an insulated vessel under high vacuum. Warm water returned from the air-conditioning plant is **sprayed** into it; part of it flashes to vapour, the rest falls as chilled water.
4. **Chilled-water pump**: sends the cold water to the cooling coils of the A/C plant (the load) and back.
5. **Condenser** (water-cooled, usually a surface or barometric condenser) with a **condensate pump**; a secondary ejector or vacuum pump removes air.
6. **Make-up water** line, to replace the water evaporated and any splashed or lost at the load.

![Fig. 1: Steam-jet refrigeration system [Aloke p.8; Kanak p.6]. A steam boiler (left) supplies steam through a control valve to the steam nozzle of the thermocompressor (ejector, top right). The ejector draws vapour up from the insulated flash chamber below. "Water returned from A.C-plant" enters the flash chamber through a spray header ("Spray") over the pool of cold water; "Cold water to A.C-plant" leaves from the bottom through a pump. The ejector discharges the mixture of motive steam and flash vapour to the condenser, whose condensate is removed by a pump. A "Make-up-water" line enters the flash chamber at the right.](figures/001.jpg "w=0.75")

![Fig. 2: The steam ejector (drawn for this guide after Ameen Fig. 6.12–6.13). (a) Motive steam from the boiler (red, e.g. 7–10 bar) enters at the left and expands through a converging–diverging steam nozzle into the suction (entrainment) chamber. Flash vapour from the flash chamber (blue, at about 0.9 kPa, 5 °C) enters the suction chamber from below and is entrained by the high-velocity jet. The two streams mix in the converging inlet and the constant-area mixing section (throat), and the mixture is compressed in the diverging diffuser and leaves at the right to the condenser at about 6.6 kPa. (b) Qualitative profiles along the ejector: the static pressure (red, log scale) falls through the nozzle from the boiler pressure to just below the flash-chamber pressure $p_e$, stays near $p_e$ through the suction and mixing sections, and rises in the diffuser to the condenser pressure $p_c$; the velocity (green, dash-dot) rises to its maximum at the nozzle exit (over 1000 m/s), falls as the jet shares its momentum with the entrained vapour, and falls to a low value at the diffuser exit. Labels: "expansion: p ↓, V ↑", "entrainment + mixing: p ≈ p$_e$, V falls", "compression: V ↓, p ↑".](figures/002.jpg "w=0.85")

**Operation** [Aloke p.10; Kanak p.7; Ameen §6.3]:

1. High-pressure steam from the boiler is **expanded** in the nozzle. Its enthalpy is converted into a very high velocity, and the pressure at the nozzle exit falls below the flash-chamber pressure.
2. This low pressure keeps the **vacuum** on the flash chamber. The water vapour formed in the flash chamber is **entrained** by the high-velocity steam jet and mixes with it.
3. In the **diffuser** the kinetic energy of the mixture is converted into static pressure (compression) up to the condenser pressure, and the mixture is discharged to the condenser.
4. In the **condenser** both the motive steam and the flash vapour are condensed by cooling water. The condensate is usually returned to the boiler (and partly to the flash chamber as make-up).
5. In the **flash chamber**, the warm water returning from the load is sprayed through nozzles to give the largest surface area. A small part (about 1 %) evaporates; the latent heat of evaporation comes from the remaining water, which is chilled to about 6 °C.
6. The **chilled water** is pumped to the load (air-conditioning cooling coils or a process), takes up heat there and returns warm to the sprays.
7. **Make-up water** replaces the water evaporated, splashed or lost at the application.

### How the cooling is produced: the formula ★

The source example [Aloke p.9; Kanak p.6]: a flash chamber holds 100 kg of water. If 1 kg is suddenly evaporated by lowering the pressure, about 2385 kJ (its latent heat) is taken from the remaining 99 kg. Energy balance (heat lost by the remaining water = latent heat of the vapour):
$$m_v\,h_{fg}=(m-m_v)\,c_p\,\Delta T\qquad\Rightarrow\qquad\Delta T=\frac{m_v\,h_{fg}}{(m-m_v)\,c_p}=\frac{1\times2385}{99\times4.18}=5.76\ ^\circ\text{C}$$

Evaporating each further 1 % lowers the temperature by about another 5.8 °C, so in principle the water could be cooled to freezing. Since water freezes at 0 °C, a practical steam-jet system stops at about 4–6 °C; colder would need an ice-handling device. Because $h_{fg}\approx2480$ kJ/kg is 590 times $c_p$, **flashing about 1 % of the water chills the rest by about 6 °C** [Aloke p.10].

For a running plant, write the steady-flow energy balance on the flash chamber. Warm water $\dot m_r$ enters at $T_r$ (enthalpy $h_{f,r}$); vapour $\dot m_v$ leaves saturated at the chamber temperature $T_e$ ($h_g$); chilled water $\dot m_r-\dot m_v$ leaves at $T_e$ ($h_{f,e}$):
$$\dot m_r\,h_{f,r}=\dot m_v\,h_g+(\dot m_r-\dot m_v)\,h_{f,e}\qquad\Rightarrow\qquad x=\frac{\dot m_v}{\dot m_r}=\frac{h_{f,r}-h_{f,e}}{h_g-h_{f,e}}$$
The **refrigerating effect** is the heat the chilled water takes from the load, $Q=\dot m_c\,(h_{f,r}-h_{f,e})\approx\dot m_c\,c_p\,(T_r-T_e)$, and it equals (with make-up water at $T_r$) $\dot m_v\,(h_g-h_{f,r})$: **every kg of vapour the ejector removes carries away about 2450 kJ**.

> **EXAMPLE 5.1** `[Aloke p.9; Kanak p.6]` Check the source statement: 1 kg of water is flashed from 100 kg in a flash chamber. Find the fall in temperature of the remaining water, (a) with the source's $h_{fg}=2385$ kJ/kg and (b) with the latent heat at a chilled-water temperature of 10 °C from the water table.
>
> **[FROM SOURCE: Aloke p.9; Kanak p.6]**
>
> (a) $\Delta T=\dfrac{1\times2385}{99\times4.18}=$ **5.76 °C** (printed as 5.7 °C in the sources).
>
> (b) Table 1, 10 °C row: $h_f=42.02$, $h_g=2519.21$ kJ/kg, so $h_{fg}=2477.19$ kJ/kg. $\Delta T=\dfrac{2477.19}{99\times4.18}=$ **5.99 °C**. The value 2385 kJ/kg is $h_{fg}$ at about 49 °C, not at chilled-water temperatures; the difference is small (about 4 %). Either way: **1 % flashed ≈ 6 °C of cooling**.

> **EXAMPLE 5.2** `[TUTOR-GENERATED]` A steam-jet chiller supplies chilled water at 5 °C to an air-conditioning load of 100 kW; the water returns at 15 °C and is sprayed into the flash chamber. Make-up water enters at 15 °C. Find (a) the flash-chamber pressure, (b) the fraction of sprayed water that flashes, (c) the chilled-water flow, (d) the vapour the ejector must remove, in kg/s and in m³/s. (e) If the condenser works at 38 °C, what compression ratio must the ejector produce?
>
> **Solution.** Table 1 (end of this module), rows 5 °C: $p=0.87$ kPa, $h_f=21.02$, $h_g=2510.06$ kJ/kg, $v_g=147.01$ m³/kg; 15 °C: $h_f=62.98$ kJ/kg.
>
> (a) The chamber is at $p_{sat}(5\ ^\circ\text{C})=$ **0.87 kPa** (6.5 mm Hg).
>
> (b) $x=\dfrac{h_{f,15}-h_{f,5}}{h_{g,5}-h_{f,5}}=\dfrac{62.98-21.02}{2510.06-21.02}=\dfrac{41.96}{2489.04}=$ **0.01686**: only 1.7 % of the water flashes.
>
> (c) $\dot m_c=\dfrac{Q}{h_{f,15}-h_{f,5}}=\dfrac{100}{41.96}=$ **2.383 kg/s** of chilled water.
>
> (d) Energy balance on the chamber with make-up at 15 °C: $\dot m_v\,(h_{g,5}-h_{f,15})=Q$, so $\dot m_v=\dfrac{100}{2510.06-62.98}=\dfrac{100}{2447.08}=$ **0.04087 kg/s** (147 kg/h). Its volume: $\dot V=\dot m_v\,v_g=0.04087\times147.01=$ **6.01 m³/s**. This tremendous volume of vapour per 100 kW (≈ 28 TR) is why water is only usable with an ejector, which handles large volumes cheaply, and is the first limitation of the system.
>
> (e) $p_{sat}(38\ ^\circ\text{C})=6.68$ kPa (Table 1, interpolated between 35 and 40 °C). Compression ratio $=6.68/0.87=$ **7.7**, close to Ameen's "8 to 1, the limit for efficient operation".

**The steam (energy) balance of the ejector** [Ameen §6.3]. If $m_1$ kg of motive steam entrains 1 kg of flash vapour, the ejector energy balance is $m_1h_1+h_6=(m_1+1)\,h_5$, where 1 is the motive steam, 6 the flash vapour and 5 the mixture leaving the diffuser. The losses are described by a nozzle efficiency (0.87–0.95), an entrainment efficiency (≈ 0.65) and a compression efficiency (0.75–0.80). Because the ejector is so inefficient, $m_1$ is well above 1: the condenser must condense the motive steam **and** the flash vapour, which is why it rejects about twice the heat of a vapour-compression condenser per TR.

### Advantages, limitations, uses

**Advantages** [Aloke p.11; Kanak p.7; Ameen §6.3]:

1. **Water is the refrigerant**: completely safe, non-toxic, non-flammable, non-explosive and cheap; leakage is no hazard.
2. **No moving parts** in the refrigerating unit (the ejector replaces the compressor): vibration-free and quiet; very reliable, low maintenance cost.
3. **Flexible:** the capacity can be changed easily and quickly (steam flow, number of ejectors in service), so it adjusts quickly to load variations.
4. The weight per TR is low, and it **can be installed out of doors**.
5. Cheap to run where waste or exhaust **steam and cooling water are abundant and cheap** (process plants).
6. Well suited to producing chilled water for **air conditioning** and for process cooling in rubber mills, distilleries, chemical and paper mills, food processing plants, on ships, and for vacuum cooling of lettuce and leafy vegetables.

**Why it is safe for air-conditioning installations** [Aloke p.11; Kanak p.7]: the refrigerant is water, so a leak cannot poison, suffocate or ignite anything in an occupied building; the system works under vacuum, so leakage is inward (air in), not refrigerant out; it has no high-pressure refrigerant and no compressor; and it follows load changes quickly.

**Limitations (disadvantages)** [Aloke p.11; Kanak p.7; Ameen §6.3]:

1. A **high vacuum** must be kept in the flash chamber (≈ 1 kPa): air leaks in and must be removed by a secondary ejector or vacuum pump.
2. A **tremendous volume of vapour** must be handled (6 m³/s per 100 kW, Example 5.2), so direct evaporation is limited to large units with ejectors.
3. **Low efficiency (COP):** the ejector is a poor compressor. The condenser must remove **about twice as much heat per TR** as that of a vapour-compression system, so a large condenser and much cooling water are needed.
4. **Temperature limit:** the refrigerant freezes at 0 °C, so it is not feasible for water below about **4 °C**: it **cannot make ice** and is limited to air conditioning and process chilled water (4–10 °C).
5. It needs a supply of steam (a boiler) and of cheap condensing water; it has largely been superseded by more efficient vapour-compression and absorption chillers.

## 5.2 Liquefaction of gases: the two routes ★

**Where a gas must go.** A gas becomes liquid when its state point (p, T) is taken under the saturation dome, between the saturated-liquid and saturated-vapour lines: it becomes "wet" and the wetness condenses into liquid (Fig. 3) [Aloke p.92; Kanak p.64]. This is possible only **below the critical temperature**: above it no pressure, however high, gives a liquid. So heat (enthalpy) must be taken out of the gas until it is below its critical temperature and inside the dome.

![Fig. 3: Hand sketch of a p–v diagram [Kanak p.64]: pressure P (vertical) against volume V; a shaded saturation dome labelled "gas + liquid"; an isotherm (blue) falls steeply in the "liquid" region on the left, runs horizontally across the dome and falls gently in the "gas" region on the right. To liquefy, the state point must be taken under the dome.](figures/003.png "w=0.5")

**The two ways** [Aloke p.92; Kanak p.64; Ameen §8.4]:

1. **Cooling by heat transfer to a cold reservoir (refrigeration).** The gas is cooled at constant pressure in the evaporator of a refrigeration plant, often several plants in series (a **cascade**, §5.3). Practical when the liquefaction temperature is **not very low**: hydrocarbons such as butane and propane (which are liquid at room temperature under moderate pressure), LPG and LNG.
2. **Expansion.** The gas is compressed, cooled to near ambient, then expanded:
   - **throttling** (an irreversible adiabatic expansion through a valve or porous plug, at constant enthalpy, with no work): the **Joule–Thomson** expansion (§5.4), used in the **Linde** process (§5.5);
   - **expansion in an engine or turbine** that does work (reversible adiabatic, nearly isentropic): "if the gas does work against a device (e.g. a turbine) whilst expanding adiabatically then the internal energy will be reduced and liquefaction may ensue" [Aloke p.97]. This is used in the **Claude** process (§5.5).

**Why "liquefaction by cooling" cannot give oxygen (or air, nitrogen, hydrogen)** [Aloke p.93; Ameen §8.1–8.2]. Ordinary refrigeration and cascades reach about −100 to −157 °C at best (Ameen: R14 as the low stage reaches −157 °C). Oxygen has a critical temperature of −118.6 °C and a normal boiling point of −183 °C; nitrogen −147 °C and −196 °C (Table 9.1). To liquefy them by cooling, the evaporator of the last stage would have to be below about −183 °C, and the only fluids that boil there are the permanent gases themselves (N$_2$, Ne, H$_2$, He), which would first have to be liquefied. In addition, air is a mixture: oxygen is extracted by **liquefying air by expansion** (Linde or Claude plant) and then separating O$_2$ (bp −183 °C) from N$_2$ (−196 °C) by fractional distillation. Liquefaction by cooling suits only gases whose boiling points are close to ambient.

**Table 9.1** Boiling, critical and maximum inversion temperatures [Ameen Table 8.1; boiling and critical points and the bracketed inversion values from CoolProp; the published maximum inversion temperatures scatter by a few per cent]

| Gas | Normal boiling point | Critical temperature | Maximum inversion temperature |
|---|---|---|---|
| Butane | −0.5 °C | 152 °C | — |
| Propane | −42.1 °C | 96.7 °C | — |
| Ethane | −88.6 °C | 32.2 °C | — |
| Methane | −161.5 °C | −82.6 °C | (CoolProp ≈ 980 K) |
| Oxygen | −183.0 °C | −118.6 °C | (CoolProp ≈ 757 K) |
| Air | −194 °C | −140.6 °C | 330 °C = 603 K (CoolProp ≈ 645 K) |
| Nitrogen | −195.8 °C | −147.0 °C | 348 °C = 621 K (CoolProp ≈ 608 K) |
| Hydrogen | −252.8 °C | −240.0 °C | −73 °C = 200 K (CoolProp ≈ 201 K) |
| Helium | −268.9 °C | −268.0 °C | −232 °C = 41 K (CoolProp ≈ 46 K) |

## 5.3 Cascade refrigeration and the liquefaction of natural gas ★

**Why a cascade.** To reach a low temperature in one vapour-compression plant, the evaporator pressure must be very low. This raises the specific volume of the suction vapour (a larger compressor and evaporator), and the very large temperature lift lowers the COP and raises the discharge temperature [Aloke p.94]. No single refrigerant works well over the whole range: one that evaporates at −100 °C at a reasonable pressure has its critical point below ambient and cannot condense against cooling water. **The cascade splits the temperature drop between two (or more) working fluids**, each chosen for its own range, so the plant is more cost-effective [Aloke p.93; Kanak p.65].

**The binary cascade** (Fig. 4) [Aloke pp.94–95; Kanak p.65]. Two vapour-compression cycles are connected by a **cascade condenser**, a heat exchanger that is the **condenser of the low-temperature cycle and the evaporator of the high-temperature cycle**. The low-temperature cycle 1-2-3-4 takes $Q_1$ from the cold space (or from the gas being liquefied) and, instead of rejecting its heat to the environment, rejects $Q_2$ into the evaporator of the high-temperature cycle 5-6-7-8, which rejects $Q_3$ to the cooling water. It is the refrigeration equivalent of the combined-cycle power station. The fluids differ: the high-temperature fluid has a higher boiling point. If the substance to be liquefied is itself the low-stage working fluid, liquid is drawn off at 1′; both fluids can be liquefied, with liquid also drawn at 5′.

![Fig. 4: Cascade refrigeration [Aloke p.94]. (a) Two vapour-compression plants in cascade: the low-temperature cycle 1-2-3-4 (compressor work $W_1$, evaporator taking $Q_1$) rejects $Q_2$ in the cascade heat exchanger to the evaporator of the high-temperature cycle 5-6-7-8 (compressor work $W_2$), which rejects $Q_3$ to the surroundings. (b) T–s diagram with two saturation domes: the lower cycle 1-2-3-4 sits on the lower dome, the upper cycle 5-6-7-8 on the higher dome; the condensing line of the lower cycle (3–4) lies just above the evaporating line of the upper cycle (5–6); liquid can be drawn at 1′ and 5′.](figures/004.jpg "w=0.7")

**Special features that let a cascade liquefy gases** [Aloke pp.93–95; Kanak p.65; Ameen §8]:

1. Each stage works over a moderate temperature lift, so each has a good COP, moderate pressure ratio and moderate discharge temperature; the overall COP is far better than one plant across the whole range.
2. Each working fluid is chosen for its range: evaporating pressure not far below atmospheric (no vacuum, small suction volume) and condensing pressure below its critical pressure. Fluids of successively lower boiling point are stacked.
3. The heat of each lower stage is rejected to the evaporator of the next, not to the environment; only the top stage needs cooling water.
4. The gas being liquefied is cooled step by step at constant pressure by the evaporator of each stage, so it can be condensed and subcooled.
5. Different fluids (and lubricants) are kept apart; each loop can be sized and controlled separately.

**Liquefaction of natural gas: the ternary cascade** (Fig. 5) [Aloke p.96; Kanak p.66]. Natural gas (mostly methane) is liquefied by three cascaded cycles using **propane, ethane (or ethylene) and methane** as working fluids. The longer-chain alkanes have higher boiling points (propane −42 °C, ethane −89 °C, methane −161.5 °C), so they can cool each other in order.

1. **Propane cycle (top):** condenses against cooling water or air ($Q_4$ out); its evaporator cools the incoming natural gas ($Q_3'$) to **237 K (−36 °C)** and also condenses the ethane ($Q_3$).
2. **Ethane cycle (middle):** condenses in the propane evaporator; its evaporator cools the natural gas further ($Q_2'$), so it leaves as **liquefied gas at 190 K (−83 °C)** (the gas is still at high pressure: methane's critical temperature is 190.6 K), and also condenses the methane ($Q_2$).
3. **Methane cycle (bottom):** condenses in the ethane evaporator; its evaporator subcools the liquid ($Q_1'$) to **120 K (−153 °C)**, close to the normal boiling point of methane (111.7 K), so it can be stored in insulated tanks at low pressure (about 1.9 bar at 120 K) with little flashing.

Each compressor ($W_1$, $W_2$, $W_3$) works over a moderate range; the heat taken from the gas is passed up the cascade and rejected to the cooling water at the top. LNG occupies about 1/600 of the gas volume, which is why it is used for storage and transport by ship.

![Fig. 5: Plant for liquefaction of natural gas by a ternary cascade [Aloke p.96]. Three stacked vapour-compression loops, each with a compressor (W$_3$, W$_2$, W$_1$) and a throttle valve: propane (top), whose condenser rejects $Q_4$ to "cooling water or air"; ethane (middle), whose condenser rejects heat $Q_3$ to the propane evaporator; methane (bottom), whose condenser rejects $Q_2$ to the ethane evaporator. The natural-gas line (thick grey) enters at the right ("Natural gas"), passes the propane evaporator (giving up $Q_3'$) and leaves as "Gas at 237 K", passes the ethane evaporator (giving up $Q_2'$) and leaves as "Liquefied gas at 190 K", then passes the methane evaporator (giving up $Q_1'$) and leaves as "Stored gas at 120 K".](figures/005.jpg "w=0.7")

## 5.4 The Joule–Thomson effect and the inversion temperature ★

**The porous-plug experiment** (Fig. 6) [Aloke pp.97–98; Kanak p.67]. Joule and Thomson forced a gas steadily through a porous plug in an insulated pipe, from a high pressure $p_1$ (temperature $T_1$) to a lower pressure $p_2$, and measured $T_2$. No heat crosses the insulated walls and no work is done except the flow work, so the steady-flow energy equation gives
$$h_1=h_2\qquad\text{(throttling is isenthalpic)}$$
For some gases at some entry temperatures, $T_2<T_1$. This showed that the enthalpy of a real gas depends on pressure as well as temperature; for an ideal gas $h=h(T)$ only, and throttling changes nothing.

![Fig. 6: Porous-plug device for the Joule–Thomson experiment [Aloke p.98; Kanak p.67]. A horizontal duct with insulated walls; a piston on the left keeps the gas at high pressure $p_1$, $T_1$; the gas flows through a porous plug in the middle into a chamber at low pressure $p_2$, $T_2$, kept by a second piston on the right; a dashed control surface encloses the plug.](figures/006.jpg "w=0.6")

**The isenthalpic curve** (Fig. 7) [Aloke p.99; Kanak pp.67–68]. Keep $p_1$, $T_1$ fixed (point A) and repeat the experiment with lower and lower back pressures $p_2$. Each run gives one point ($p_2$, $T_2$), all with the same enthalpy. Joining them gives an **isenthalpic curve** (line ABC). It does **not** show the temperature along the plug; it shows the effect of lowering the back pressure on the downstream temperature.

- From A to B, as $p_2$ falls below $p_1$ the temperature **rises** ($\mu_{JT}<0$).
- At B the temperature is a maximum: B is the **inversion point**, its temperature the **inversion temperature** $T_i$ at the **inversion pressure** $p_i$.
- From B to C the temperature **falls** with pressure ($\mu_{JT}>0$). At C, $T_2=T_1$ again; below C, $T_2<T_1$: a net cooling.

![Fig. 7: Isenthalpic curve for flow through a porous plug [Aloke p.99]. Temperature T (vertical) against pressure p; an inverted-U curve C–B–A. A is the inlet state ($p_1$, $T_1$) on the right; moving left (lower back pressure) the curve rises to the maximum B at the inversion temperature $T_i$ and inversion pressure $p_i$, then falls through C, where $T=T_1$ again, and below. Dashed lines mark $T_i$, $T_1$, $p_i$, $p_1$. Green hand arrows point along the curve from A towards B and from B towards C.](figures/007.png "w=0.55")

**The Joule–Thomson coefficient** [Aloke p.100; Kanak p.68; Ameen §8.4]. The slope of an isenthalpic curve:
$$\mu_{JT}\equiv\left(\frac{\partial T}{\partial p}\right)_h\qquad\begin{cases}\mu_{JT}>0: & \text{temperature drops on throttling (B–C)}\\ \mu_{JT}=0: & \text{no change: the inversion point (B)}\\ \mu_{JT}<0: & \text{temperature rises on throttling (A–B)}\end{cases}$$
(dp is negative in throttling, so a positive slope means $dT<0$). From the property relations, $\mu_{JT}=\dfrac{1}{c_p}\left[T\left(\dfrac{\partial v}{\partial T}\right)_p-v\right]$; for an ideal gas $v=RT/p$ makes the bracket zero, so $\mu_{JT}=0$. **The size of $\mu_{JT}$ measures how far the gas deviates from ideal-gas behaviour**, and a large positive $\mu_{JT}$ is wanted for cooling [Ameen §8.4].

**The inversion curve** (Fig. 8, Fig. 9). Repeat the experiment for many inlet states: each gives an isenthalp on T–p axes with its own maximum. The locus of the maxima (inversion points) is the **inversion curve**. Inside it $\mu_{JT}>0$ and throttling cools; outside it throttling heats. The curve meets the $T$ axis ($p\to0$) at the **maximum inversion temperature**: above it **no** throttling from any pressure can cool the gas. For nitrogen it is about 610–620 K, for air about 600–650 K, so at room temperature air and nitrogen cool on throttling; for hydrogen it is about 200 K and for helium about 40–45 K, so they **heat up** when throttled at room temperature (Table 9.1).

![Fig. 8: Constant-enthalpy lines and the inversion line on T–p axes [Aloke p.100; after Moran & Shapiro]. Left: throttling through a porous plug, inlet $T_1$, $p_1$; outlet $T_2$, $p_2$ through a valve. Right: a family of isenthalps (green); the open circles on one of them are measured states from one inlet state ($T_1$, $p_1$); the maximum of each isenthalp is marked "Inversion state"; a small triangle shows the slope $(\partial T/\partial p)_h$; the critical point, the triple point and the vapour, liquid and solid regions are marked at the bottom left.](figures/008.jpg "w=0.75")

![Fig. 9: Isenthalps and inversion curve of nitrogen on T–p axes, computed with CoolProp for this guide. Horizontal axis: pressure 0–600 bar; vertical axis: temperature 60–720 K. Thin black curves: isenthalps starting at 1 bar from 140, 180, 230, 300, 380, 460, 540, 620 and 700 K; red dots: the maximum of each isenthalp (inversion point). Thick blue curve: the inversion curve ($\mu_{JT}=0$), a dome reaching about 390 bar at about 280 K and meeting the T axis at the maximum inversion temperature ≈ 608 K (335 °C) at p → 0; its lower branch ends near 105 K, 28 bar. Shaded inside: "$\mu_{JT}>0$, throttling COOLS the gas"; outside: "$\mu_{JT}<0$, throttling HEATS the gas". Green: the saturation line ending at the critical point (126 K, 34 bar). Orange dashed arrow: throttling from 200 bar, 300 K to 1 bar gives 269 K.](figures/009.png "w=0.8")

**Why the temperature changes (physical picture).** In throttling $u_1+p_1v_1=u_2+p_2v_2$. Two effects compete:

1. **Attraction between molecules.** As the gas expands, the molecules move apart against their attractive forces; their potential energy rises, and at constant enthalpy this energy comes from their kinetic energy: the gas **cools**. This dominates at moderate pressures and temperatures (B–C, the "expansion-dominant" branch).
2. **Repulsion and the flow work.** In a very dense gas (high pressure, or high temperature) the molecules are crowded into their repulsive range; the product $pv$ then changes so that expansion releases energy: the gas **warms** (A–B).

The inversion point is where the two balance. (With the van der Waals equation at low pressure, $\mu_{JT}\approx\frac{1}{c_p}\left(\frac{2a}{RT}-b\right)$: the attraction term $a$ cools, the size term $b$ heats, and $T_{inv,max}=2a/(Rb)$.)

> **TRAP: Three slips in Kanak vai's note on the J–T effect**
>
> 1. **The definition [Kanak p.67].** Under the heading "Joule–Thomson effect" Kanak vai's note writes: "If the gas does work against a device (e.g. turbine) while expanding adiabatically, then the internal energy will be reduced and liquefaction may ensue." That sentence (copied from Aloke p.97, where it introduces liquefaction by expansion in general) describes **work-producing, nearly isentropic expansion in an expander**, the Claude route. The **Joule–Thomson effect** is the temperature change in an adiabatic **throttling** through a valve or porous plug, with **no work and constant enthalpy**. Write: "J–T effect: the change of temperature of a real gas when it is throttled adiabatically at constant enthalpy; it is measured by $\mu_{JT}=(\partial T/\partial p)_h$."
> 2. **"Friction dominant" for A–B [Kanak pp.67–68].** The heating on A–B is not caused by friction (throttling is always frictional, on both branches). It is a real-gas effect: at high density the repulsive part of the intermolecular forces and the $pv$ term dominate. "Expansion dominant" for B–C is acceptable shorthand for "work against intermolecular attraction dominates".
> 3. **Labels in Kanak vai's note's sketch [Kanak p.67].** Kanak vai's note's curve labels the inlet A with $T_i$ and the maximum B with $T_1$. It is the other way round (Fig. 7): A is the inlet ($p_1$, $T_1$), B the inversion point ($p_i$, $T_i$).

**Isenthalpic versus isentropic expansion** [Ameen §8.2, §8.4]. A work-producing expansion (expander, turbine) follows nearly $s$ = constant and always cools, even an ideal gas: $T_2/T_1=(p_2/p_1)^{(\gamma-1)/\gamma}$; the cooling is large and the work can be recovered. Throttling (constant $h$) cools only a real gas below its inversion temperature, and much less; but a valve is simple, has no moving parts at very low temperature, and can handle a liquid–vapour mixture. On a T–s diagram the isentrope is vertical; the isenthalps are nearly horizontal at low pressure and high temperature (little cooling) and slope down more steeply at high pressure and low temperature [Ameen Fig. 8.2].

> **EXAMPLE 5.3** `[TUTOR-GENERATED]` Nitrogen at 200 bar and 300 K is throttled to 1 bar. (a) Find the outlet temperature. (b) Is any liquid formed? (c) Find the mean Joule–Thomson coefficient and compare it with $\mu_{JT}$ at 300 K, 1 bar. Properties from CoolProp (the data book has no nitrogen tables).
>
> **Solution.** (a) Throttling: $h_2=h_1=h(300\text{ K},200\text{ bar})=279.11$ kJ/kg (CoolProp). At 1 bar this enthalpy corresponds to $T_2=$ **269.2 K** (the orange arrow of Fig. 9). The drop is $\Delta T=300-269.2=$ **30.8 K**.
>
> (b) **No.** The boiling point at 1 bar is 77.2 K; a single throttle from room temperature cools nitrogen by only about 31 K.
>
> (c) Mean $\mu_{JT}=\Delta T/\Delta p=30.8/199=$ **0.155 K/bar**; at 300 K, 1 bar CoolProp gives **0.212 K/bar** (the isenthalp is flatter at high pressure, Fig. 9).
>
> This is why a liquefier must **compound** the cooling: the cold throttled gas is sent back through a counter-flow heat exchanger to pre-cool the next high-pressure gas, so each throttle starts colder, where $\mu_{JT}$ is larger, until the throttled gas enters the dome (§5.5).

**Why $\mu_{JT}$ and the inversion temperature matter in a liquefier** [Aloke pp.99–101; Ameen §8.4]:

1. **Sign:** throttling cools only if the gas enters the valve **below its inversion temperature** (inside the inversion curve). Air and nitrogen can be throttled from room temperature; **hydrogen must first be pre-cooled below about 200 K** (in practice with liquid nitrogen, to about 80 K) and **helium below about 40 K** (with liquid hydrogen or an expander), or throttling would heat them.
2. **Size:** the cooling per bar is $\mu_{JT}$, which is larger at lower temperatures; this is why the high-pressure gas is pre-cooled in a regenerative heat exchanger before throttling.
3. **Best pressure:** for a given inlet temperature, the largest temperature drop is obtained by throttling from the pressure on the inversion curve (the top of the isenthalp, point B), since any pressure above it first heats the gas (A–B). Linde plants for air work at 100–200 bar, near the inversion pressure at room temperature.
4. **Thermodynamics of the yield:** in the simple Linde cycle the liquid yield $y=(h_1-h_2)/(h_1-h_f)$ is positive only if $h(T_1,p_{low})>h(T_1,p_{high})$, i.e. if the gas has a positive J–T effect at the compressor-outlet temperature.

## 5.5 The Linde liquefaction plant ★

### The simple Linde–Hampson cycle

Carl von Linde (1895) liquefied air with a J–T valve and a **counter-flow regenerative heat exchanger** (Fig. 10) [Ameen §8.4, Fig. 8.4; Aloke p.101].

1. Gas at 1 (ambient, 1 bar) is compressed in a **multi-stage compressor with intercoolers and an after-cooler** to a high pressure (100–200 bar), leaving at 2 at about ambient temperature (compression close to isothermal).
2. The high-pressure gas is cooled from 2 to 3 in the heat exchanger by the cold gas returning from the separator.
3. It is **throttled** (J–T valve) from 3 to 4, at constant enthalpy, into the liquid–vapour region at 1 bar.
4. In the **separator** the liquid $y$ (state f) is drawn off; the saturated vapour $1-y$ (state g) returns through the heat exchanger, cooling the incoming gas, and leaves warm at 1. **Make-up gas** $y$ is added to replace the liquid.

**Start-up.** At first there is no cold gas: the throttled gas is only about 30 K colder (Example 5.3). It returns through the heat exchanger and pre-cools the next high-pressure gas, which is throttled from a lower temperature and gets colder still. The cooling **accumulates**, and after some time the gas leaving the valve is inside the dome and liquid starts to collect. Then the plant runs in steady state.

![Fig. 10: Simple Linde–Hampson plant and its T–s diagram, drawn for this guide (nitrogen, CoolProp). (a) Schematic: gas at 1 (blue) plus make-up gas y (green) enters the multi-stage compressor with intercoolers (work $W_{in}$), then the after-cooler (heat to water), leaving at 2 (ambient temperature, 200 bar); it flows down the hot side of the counter-flow regenerative heat exchanger to 3, through the J–T valve to 4 and into the separator; liquid y (state f) is drawn from the bottom; saturated vapour g (1 − y) rises through the cold side of the heat exchanger and returns to the compressor inlet 1. (b) T–s diagram, T 60–440 K against s in kJ/(kg·K): the green saturation dome (critical point 126 K); 1 bar (blue) and 200 bar (red) isobars; 1→2 compression with intercooling drawn as a zig-zag near 300 K (each stage heats the gas, each intercooler brings it back to 300 K); 2→3 cooling along the 200 bar isobar from 300 K to $T_3$ ≈ 164 K in the heat exchanger; 3→4 throttling (orange dashed isenthalp, h = const) into the dome at 1 bar (77 K); 4 splits into saturated liquid f and saturated vapour g on the 1-bar line; g→1 the return gas warmed along the 1-bar isobar back to 300 K. Title: $T_3$ ≈ 164 K, y = 0.074.](figures/010.jpg "w=1.0")

**The liquid yield (first law).** Take a control volume around the heat exchanger, valve and separator (everything except the compressor). Per kg of gas compressed: in, 1 kg at 2; out, $y$ kg of liquid at f and $1-y$ kg of gas at 1 (a perfect heat exchanger warms the return gas to $T_1=T_2$). No work, no heat (insulated):
$$h_2=y\,h_f+(1-y)\,h_1\qquad\Rightarrow\qquad\boxed{y=\frac{h_1-h_2}{h_1-h_f}}$$
$h_1-h_2$ is the isothermal J–T effect at ambient temperature (positive only below the inversion temperature) and $h_1-h_f$ is the heat that must be removed from the gas at 1 to liquefy it. The heat-exchanger balance fixes state 3: $h_2-h_3=(1-y)(h_1-h_g)$. The ideal (reversible isothermal) compression work per kg compressed is $w=T_1(s_1-s_2)-(h_1-h_2)$, and per kg of liquid $w/y$.

> **EXAMPLE 5.4** `[TUTOR-GENERATED]` A simple Linde plant liquefies nitrogen. The gas is compressed from 1 bar, 300 K to 200 bar and cooled back to 300 K; the heat exchanger is perfect and the plant is insulated. CoolProp gives: $h(300\text{ K},1\text{ bar})=311.20$ kJ/kg, $s=6.8457$ kJ/(kg·K); $h(300\text{ K},200\text{ bar})=279.11$ kJ/kg, $s=5.1630$ kJ/(kg·K); saturated liquid at 1 bar $h_f=-122.25$ kJ/kg, saturated vapour $h_g=77.07$ kJ/kg (77.2 K). Find (a) the liquid yield, (b) the state before the valve, (c) the ideal isothermal compression work per kg of gas and per kg of liquid.
>
> **Solution.** (a) $y=\dfrac{h_1-h_2}{h_1-h_f}=\dfrac{311.20-279.11}{311.20-(-122.25)}=\dfrac{32.09}{433.45}=$ **0.0740**: only **7.4 %** of the gas compressed is liquefied each pass; 92.6 % is recirculated.
>
> (b) $h_3=h_2-(1-y)(h_1-h_g)=279.11-0.9260\times(311.20-77.07)=$ **62.31 kJ/kg**, which at 200 bar is $T_3\approx$ **164 K** (CoolProp): the high-pressure gas must be pre-cooled to −109 °C before the valve.
>
> (c) $w=T_1(s_1-s_2)-(h_1-h_2)=300\times(6.8457-5.1630)-32.09=504.81-32.09=$ **472.7 kJ/kg** of gas compressed; per kg of liquid $w/y=472.7/0.0740=$ **6388 kJ/kg** (≈ 1.8 kWh/kg) even with ideal isothermal compression. Real plants need two or three times more. Pre-cooling, the dual-pressure arrangement below and the Claude expander all raise $y$ or lower the work.

### The Linde plant of the slides (two throttles, two heat-exchanger streams)

The course slides draw the **dual-pressure Linde plant** (Fig. 11, Fig. 12) [Aloke pp.101–103; Kanak pp.68–69]. It is similar to a vapour-compression refrigerator, except that a heat exchanger transfers $Q_A$ and $Q_B$ from the high-pressure gas to the cold gas already cooled by throttling, and there are **two throttles**, both cooling the gas by the Joule–Thomson effect. Steady operation is assumed, with liquid already in the receivers.

1. **1/11 → 2: compression.** Gas at 1 (with make-up gas $y$ at 11, the same state) is compressed to a **high, supercritical pressure** (hundreds of atmospheres) by a **multi-stage reciprocating compressor with inter-stage cooling** (the zig-zag on the T–s diagram). The gas returning from the first receiver enters at an intermediate stage, 8.
2. **2 → 3: regenerative cooling.** The high-pressure gas ($m=1$) is cooled at constant pressure in the heat exchanger, giving $Q_B$ to the returning intermediate-pressure gas and $Q_A$ to the returning low-pressure gas.
3. **3 → 4: first throttle.** The gas is throttled (isenthalpic) to an intermediate pressure and cooled by the J–T effect into the wet region; it enters the first receiver.
4. **First receiver.** The saturated vapour, $1-y_B$, leaves at 7 and returns through the heat exchanger (taking $Q_B$) to the compressor's intermediate stage at 8. The saturated liquid, $y_B$, leaves at 5.
5. **5 → 6: second throttle** to the low pressure, into the wet region; it enters the second receiver.
6. **Second receiver.** The liquid $y$ is drawn off at 9: the product. The flash vapour, $y_B-y$, leaves at 10 and returns through the heat exchanger (taking $Q_A$) to the compressor inlet at 11.
7. **Yield:** $y_B$ = liquid fraction after the first throttle, $y_A$ = liquid fraction after the second; $\boxed{y=y_B\,y_A}$ kg of liquid per kg compressed. The make-up gas $y$ replaces it.

![Fig. 11: Fig. 5(a) of the slides: the Linde liquefaction plant, schematic [Aloke p.102; Kanak p.68]. A compressor driven by an electric motor (−W$_{in}$) delivers gas at 2 (m = 1). The high-pressure line goes down through the heat exchanger (zig-zag coil), giving $Q_B$ and $Q_A$ to two return lines, and leaves at 3; it passes a throttle to 4 and enters the first receiver. Vapour (1 − $y_B$) leaves the receiver at 7 and rises through the heat exchanger to 8, an intermediate stage of the compressor. Liquid leaves at 5, passes the second throttle to 6 and enters the second receiver; liquid y = $y_By_A$ is drawn off at 9; vapour $y_B$ − y leaves at 10 and rises through the heat exchanger to 11, joined by the make-up gas y, and enters the compressor at 1.](figures/011.jpg "w=0.5")

![Fig. 12: Fig. 5(b) of the slides: T–s diagram of the Linde plant [Aloke p.102; Kanak p.68]. Temperature T against entropy S. At the top, interstage cooling drawn as a zig-zag along the top from 1/11 to 8 and on to 2; the high-pressure line (m = 1) falls from 2 to 3, giving $Q_B$ to the dashed intermediate-pressure line 7–8 carrying (1 − $y_B$) and $Q_A$ to the low-pressure line 10–11 carrying ($y_B$ − y). Near the top of the saturation dome: 3, then the isenthalpic line 3→4 into the dome, 5 (saturated liquid) and 7 (saturated vapour) on the intermediate isobar; the second isenthalpic line 5→6 ($y_B$) drops to the low-pressure line 9–6–10 at the bottom of the dome; 9 is the liquid (yield y), 10 the vapour. A red hand-drawn "?" in the empty upper left is a mark on the slide, not part of the diagram.](figures/012.jpg "w=0.6")

**Explaining the T–s diagram** (state by state, Fig. 12): 1/11 → 2 multi-stage compression with intercooling, close to the ambient temperature, to supercritical pressure; 2 → 3 cooling at constant high pressure in the heat exchanger (heat $Q_A+Q_B$ out); 3 → 4 isenthalpic throttling into the dome at the intermediate pressure; 4 separates into saturated liquid 5 and saturated vapour 7 ($y_B$ and $1-y_B$); 7 → 8 the vapour is warmed at the intermediate pressure in the heat exchanger and goes to the intermediate stage; 5 → 6 isenthalpic throttling to the low pressure; 6 separates into the liquid product 9 ($y$) and vapour 10 ($y_B-y$); 10 → 11 the vapour is warmed at the low pressure back to ambient and rejoins the compressor inlet with the make-up gas. The source says the yield is "the quality of state 6"; strictly it is the **liquid fraction** $1-x_6$ of the gas reaching the second throttle, and overall $y=y_By_A$.

### Why the Linde plant needs intercooling, two heat exchangers and two throttles

**Why intercooling of the compressor** [Aloke p.101; Ameen §8.4]:

1. **Less work.** For a given pressure ratio the compression work is least when the compression is isothermal. A pressure ratio of 100–200 cannot be done in one stage; with intercooling between stages the path approaches the isotherm (the zig-zag of Fig. 10 and Fig. 12), and the work saving is large.
2. **Reasonable temperatures.** Compressing air from 1 to 200 bar adiabatically in one stage from 300 K would give $300\times200^{0.2857}\approx$ 1363 K, which no lubricant, valve or cylinder can stand. Intercooling keeps every stage's discharge temperature moderate and improves the volumetric efficiency of each stage.
3. **Gas at ambient temperature to the heat exchanger.** The yield $y=(h_1-h_2)/(h_1-h_f)$ assumes the high-pressure gas enters the heat exchanger at about ambient temperature. Heat of compression left in the gas would have to be removed by the cold return gas, wasting refrigeration and reducing the liquid yield.
4. Water vapour condenses in the intercoolers and is drained, reducing the risk of ice blocking the cold heat exchanger and valves.

**Why two heat exchangers (two return streams) before the first throttle** [Aloke pp.101–103; Kanak p.69]:

1. **To pre-cool the high-pressure gas as much as possible before the first throttle.** A throttle from ambient temperature gives only about 30 K of cooling (Example 5.3) and no liquid. The gas must reach the valve at a low temperature (164 K for nitrogen in Example 5.4), well inside the inversion curve, where $\mu_{JT}$ is large, so that the isenthalpic expansion ends in the wet region and liquid forms. The cold available is the cold of the unliquefied gas leaving the receivers.
2. **To recover the cold of both return streams.** There are two cold return streams at two different pressures: the intermediate-pressure vapour $1-y_B$ from the first receiver ($Q_B$) and the low-pressure flash vapour $y_B-y$ from the second ($Q_A$). They cannot be mixed, since they return to different compressor stages (8 and 1/11), so each needs its own heat-exchanger passage. Without exchangers this cold would be wasted (rejected to the surroundings), and no liquid would be produced.
3. **To warm the return gas to ambient before compression**, so that the cold is used in the plant rather than taken into the compressor, and the compressor works between its design temperatures.
4. **The second exchanger stream helps the gas before the second throttle enter the dome**: the colder the stream, the larger the liquid fraction after each throttle [Kanak p.69].

**Why two throttles (dual pressure).** Most of the gas ($1-y_B$) is recirculated at the intermediate pressure and recompressed only from it, not from 1 bar. Since the isothermal work goes as $\ln(p_2/p_1)$, this cuts the compression work per kg of liquid substantially, while the high-pressure throttle still gives the large J–T effect. This, not preheating, is how the plant saves compressor work.

> **TRAP: "Preheating the gas reduces compressor work" [Kanak p.69]**
>
> Kanak vai's note says the heat removed before the throttle should be passed to the gas going to the compressor because "if the gas is preheated, the compressor work will decrease". **That is wrong.** For a given pressure ratio the compression work is proportional to the inlet absolute temperature ($w=RT_1\ln(p_2/p_1)$ isothermal; $c_pT_1(r^{(\gamma-1)/\gamma}-1)$ adiabatic): **warming the gas raises the work**. The real reason for the regenerative heat exchanger is the other half of the exchange: the cold, unliquefied return gas **pre-cools the high-pressure gas** before the throttle (cold that would otherwise be wasted), which is what lets the J–T expansion start below the inversion temperature and produce liquid. The return gas is warmed to ambient as a consequence. The work saving in the slides' plant comes from recirculating most of the gas at the intermediate pressure.

### The Claude plant

In the Claude process (Fig. 13) [Ameen §8.4, Fig. 8.5] part of the high-pressure gas (typically 60–80 %), after the first heat exchanger, is **expanded in an expansion engine or turbine**, doing work. The expansion is nearly isentropic, so the temperature drop is far larger than by throttling (and does not depend on the J–T effect); the work is recovered (to drive a generator or help the compressor). The cold expanded gas joins the low-pressure return stream and cools the rest of the high-pressure gas in the lower heat exchangers. The remaining gas is finally **throttled through a J–T valve** into the separator, because an expander cannot handle a liquid–vapour mixture well. Compared with the Linde plant the yield is higher, the working pressure lower (≈ 40 bar instead of 200 bar), and the work per kg of liquid smaller. It is used for air, nitrogen and, with pre-cooling, hydrogen and helium.

![Fig. 13: Claude plant, drawn for this guide (after Ameen Fig. 8.5). Gas at 1 is compressed and cooled (work $W_{in}$) to 2 and cooled in HX 1 to 3. There the flow splits: about 60–80 % goes to the expander (work $W_{out}$ taken out), leaves cold at e and joins the cold low-pressure return line (blue) between HX 1 and HX 2; the rest (red) continues down through HX 2 and HX 3, is throttled in the J–T valve and enters the separator, from which liquid y is drawn off. The cold return gas (low pressure) rises through HX 3, HX 2 and HX 1 and returns to the compressor inlet 1.](figures/013.png "w=0.6")

| Aspect | Linde plant | Claude plant |
|---|---|---|
| Cooling by | J–T throttling only (isenthalpic, no work) | expansion engine/turbine (nearly isentropic, work out) + a final J–T valve |
| Needs a positive J–T effect at ambient | yes (H$_2$, He need pre-cooling) | the expander cools any gas |
| Working pressure | high (100–200 bar) | lower (≈ 40 bar) |
| Yield, work per kg liquid | lower yield, more work | higher yield, less work |
| Moving parts at low temperature | none (only a valve) | an expander (lubrication at low temperature is a difficulty) |

## 5.6 Air-cycle (gas) refrigeration ★

**What it is.** Air-cycle refrigeration belongs to the **gas-cycle** refrigeration systems, in which a gas is the working fluid and **does not change phase**: all the heat transfers are **sensible** [Aloke p.21; Kanak p.11; Hundy §2.7.1]. It works on the **reversed Brayton (Joule) cycle**, called the **Bell–Coleman cycle** in its old reciprocating form. Its uses are aircraft cabin cooling and the liquefaction of gases (expander cycles).

**The cycle** (Fig. 14) [Aloke p.21; Hundy Fig. 2.15]:

1. **1 → 2, compressor:** air from the cold space (or the atmosphere) is compressed (ideally isentropically); its temperature rises well above ambient.
2. **2 → 3, hot heat exchanger:** heat $Q_H$ is rejected at constant pressure to the warm environment (cooling water or ambient air); the air is cooled to near ambient.
3. **3 → 4, turbine (expander):** the air is expanded (ideally isentropically) and does work; its temperature falls far below the cold-space temperature.
4. **4 → 1, cold heat exchanger:** the cold air takes heat $Q_L$ from the refrigerated space at constant pressure (closed cycle), or is blown straight into it (open cycle).

The turbine is on the compressor shaft, so its work reduces the net work input:
$$COP_R=\frac{q_L}{w_{net,in}}=\frac{q_L}{w_{comp,in}-w_{turb,out}}=\frac{c_p(T_1-T_4)}{c_p(T_2-T_1)-c_p(T_3-T_4)}$$
For isentropic processes with pressure ratio $r_p$, $T_2/T_1=T_3/T_4=r_p^{(\gamma-1)/\gamma}$, and
$$COP_R=\frac{1}{r_p^{(\gamma-1)/\gamma}-1}=\frac{T_1}{T_2-T_1}$$
which is below the Carnot COP between the same temperatures because the heat is absorbed and rejected over a range of temperatures, not at constant temperature.

![Fig. 14: Gas (reversed Brayton) refrigeration cycle [Aloke p.21; Kanak p.11]. Schematic: a compressor (1→2) and a turbine (3→4) on one shaft with net work input $W_{net,in}$; a heat exchanger rejects $Q_H$ to the WARM environment (2→3); a heat exchanger absorbs $Q_L$ from the COLD refrigerated space (4→1). T–s diagram: 1 at the cold-space temperature, vertical (isentropic) rise to 2, constant-pressure cooling to 3 with $Q_H$ out, vertical drop to 4 well below 1, constant-pressure heating 4→1 with $Q_L$ in.](figures/014.jpg "w=0.7")

> **EXAMPLE 5.5** `[TUTOR-GENERATED]` A Bell–Coleman (air-cycle) refrigerator takes air from the cold room at 1 bar, −5 °C, compresses it isentropically to 5 bar, cools it at 5 bar to 30 °C and expands it isentropically to 1 bar. Air: $c_p=1.005$ kJ/(kg·K), $\gamma=1.4$. Find the refrigerating effect, the net work and the COP per kg of air.
>
> **Solution.** $r_p^{(\gamma-1)/\gamma}=5^{0.2857}=1.584$. Take $T_1=-5$ °C ≈ 268 K and $T_3=30$ °C ≈ 303 K.
> $$T_2=268\times1.584=424.5\ \text{K},\qquad T_4=\frac{303}{1.584}=191.3\ \text{K}$$
> $q_L=1.005\,(268-191.3)=$ **77.1 kJ/kg**; $w_c=1.005\,(424.5-268)=157.3$ kJ/kg; $w_t=1.005\,(303-191.3)=112.3$ kJ/kg; $w_{net}=157.3-112.3=$ **45.0 kJ/kg**.
> $$COP=\frac{77.1}{45.0}=\mathbf{1.71}\qquad\left(=\frac{1}{1.584-1}\right)$$
> A vapour-compression plant between −5 °C and 30 °C would have a COP of about 4–5. Note also the small refrigerating effect per kg (77 kJ/kg against about 150 kJ/kg for R134a), which means a large mass flow of air per kW.

**Advantages of gas (air) refrigeration** [Aloke pp.21–23; Hundy §2.7.1]:

1. Air is free, safe, non-toxic, non-flammable and environmentally harmless; leaks are no problem.
2. In an **open system** the cold air is supplied directly to the space, so the cold heat exchanger is eliminated: low weight.
3. Light and compact for its duty when built with high-speed turbomachinery; the weight per kW is low (aircraft).
4. It can reach very low temperatures (no freezing or vacuum limit of a refrigerant), which is used in gas liquefaction.
5. Simple design at low pressures; little maintenance.

**Limitations** [Aloke p.23; Hundy §2.7.1]:

1. **Low COP** (heat absorbed and rejected at varying temperatures; strong dependence on compressor and turbine efficiencies: with real machines the COP falls sharply).
2. **Small refrigerating effect per kg** (only sensible heat): large mass and volume flow, large machines and heat exchangers in a closed cycle.
3. High-speed turbines and compressors are noisy.
4. In an open system moisture in the air freezes or forms fog at the turbine exit: a water separator is needed.

## 5.7 Aircraft cooling systems ★

**Why an aircraft needs cooling although the air outside is cold** [Aloke pp.22–23; Kanak p.12]. The cabin must be kept at a comfortable temperature (about 25 °C). Even though the outside air is very cold at high altitude (about −50 °C at 10 000 m), cooling is required because of:

1. **Large internal heat generation** by the occupants (a crowded cabin), the lights, the avionics and other equipment.
2. **Heat generated by skin friction** of the fast-moving aircraft (aerodynamic heating of the skin).
3. **Ram effect and cabin pressurization.** At high altitude the outside pressure is far below atmospheric. The air brought to rest in the intake (ram compression) and then compressed to cabin pressure, close to atmospheric, gets much hotter. For example, outside air at 0.2 bar and 223 K (10 000 m) compressed to 1 bar reaches about 353 K; to a cabin pressure of 0.8 bar, about 332 K (Example 5.6). This hot fresh air would heat the cabin and must be cooled.
4. **Solar radiation** through the windows and on the fuselage.

For low-speed aircraft at low altitude a cooling system may not be needed; for high-speed aircraft at high altitude it is a must.

**Why air-cycle refrigeration for aircraft** (although its COP is low) [Aloke p.23; Kanak p.12]:

1. Air is cheap, safe, non-toxic and non-flammable; leakage is no problem.
2. The cold air can be supplied directly to the cabin (open system), eliminating the low-temperature heat exchanger: lower weight. The same air provides ventilation and pressurization.
3. The aircraft engine already has a high-speed turbo-compressor, so no separate compressor is needed; the weight per kW of cooling is typically **less than 50 %** of an equivalent vapour-compression system.
4. The design is simpler, since the pressures are low; maintenance is less.

> **EXAMPLE 5.6** `[FROM SOURCE: Aloke p.22; Kanak p.12 (part a); TUTOR-GENERATED (part b)]` (a) Check the ram-effect temperatures of the source. (b) In a simple air-cycle system, air from the main compressor at 3 bar is cooled in the ram-air heat exchanger to 330 K and expanded in the cooling turbine to the cabin pressure of 1 bar. The cabin is held at 25 °C (298 K) and its cooling load is 30 kW. Find the air supply temperature and the mass flow of air, with an isentropic turbine and with a turbine efficiency of 0.85. Air: $c_p=1.005$ kJ/(kg·K), $\gamma=1.4$.
>
> **Solution.** (a) Isentropic compression from 0.2 bar, 223 K: to 1 bar, $T=223\times5^{0.2857}=$ **353.2 K**; to 0.8 bar, $T=223\times4^{0.2857}=$ **331.4 K** (≈ 332 K), as the sources say.
>
> (b) Isentropic turbine: $T_5=330\,/\,3^{0.2857}=$ **241.1 K** (−32 °C). The supply air takes up the load as it warms to the cabin temperature: $\dot m=\dfrac{Q}{c_p(T_{cabin}-T_5)}=\dfrac{30}{1.005\,(298-241.1)}=$ **0.525 kg/s**. The turbine delivers $c_p(330-241.1)=$ **89.3 kJ/kg**, which drives the fan.
>
> With $\eta_T=0.85$: $T_5'=330-0.85\,(330-241.1)=$ **254.4 K**, and $\dot m=\dfrac{30}{1.005\,(298-254.4)}=$ **0.685 kg/s**: 30 % more air for the same load. Turbine efficiency matters a great deal in air cycles.

### The four aircraft systems

**1. Simple air-cycle system** (Fig. 15). Ram air (1→2, compressed by the ram effect in the intake) is compressed further by the **main (engine) compressor** (2→3, bleed air). It is cooled in a **ram-air heat exchanger** (3→4) by ram air, then expanded in a **cooling turbine** (4→5) to slightly above cabin pressure, and supplied to the cabin (5→6), where it absorbs the cabin heat before being exhausted. The turbine drives a **fan** that draws the cooling air through the heat exchanger, so the system also works on the ground and at low speed. A water separator after the turbine removes condensed moisture. Simple, light; used in most transport aircraft (often as an "air-cycle machine").

![Fig. 15: Simple aircraft air-cycle system and its T–s diagram, drawn for this guide (ideal processes, illustrative values). (a) Ambient air 1 enters the ram intake, is ram-compressed to 2, compressed in the main (engine) compressor to 3, cooled in the ram-air heat exchanger (ram cooling air enters from below, is drawn through by a fan and goes overboard) to 4, expanded in the cooling turbine to 5 and supplied to the CABIN (load $Q_L$), leaving at 6 to ambient; a shaft connects the cooling turbine to the fan. (b) T–s diagram: 1 (0.2 bar, 223 K) → 2 (0.3 bar, 250 K) ram compression (grey, vertical), 2 → 3 main compressor (vertical, to 483 K at 3 bar), 3 → 4 heat to ram air along the 3-bar isobar down to 330 K, 4 → 5 cooling turbine (vertical) to 241 K at 1 bar, 5 → 6 cabin load along the 1-bar isobar up to 298 K.](figures/015.png "w=1.0")

**2. Bootstrap system** (Fig. 16). After the primary heat exchanger (3→4) the air is compressed again in a **secondary (bootstrap) compressor** (4→5) **driven by the cooling turbine**, cooled again in a **secondary heat exchanger** (5→6) and then expanded in the turbine (6→7) to the cabin. Because the turbine expands from a higher pressure, the supply air is colder, and the turbine work is used to compress the air rather than wasted in a fan. Both heat exchangers use ram air, so it needs flight speed (an auxiliary fan is added for ground cooling). Used in high-speed aircraft and military transports.

![Fig. 16: Bootstrap aircraft air-cycle system and its T–s diagram, drawn for this guide (ideal processes, illustrative values). (a) Ram air (1→2) enters the main compressor, leaves at 3, is cooled in the primary heat exchanger (ram air) to 4, compressed in the secondary (bootstrap) compressor to 5, cooled in the secondary heat exchanger (ram air) to 6, expanded in the cooling turbine to 7 and supplied to the CABIN, leaving at 8; a common shaft connects the cooling turbine to the secondary compressor. (b) T–s: 1 (223 K) → 2 (250 K) ram; 2 → 3 main compressor to 483 K at 3 bar; 3 → 4 cooled at 3 bar to 360 K; 4 → 5 bootstrap compressor to 404 K at 4.5 bar; 5 → 6 cooled at 4.5 bar to 340 K; 6 → 7 cooling turbine to 221 K at 1 bar; 7 → 8 cabin load up to 298 K.](figures/016.jpg "w=0.85")

**3. Regenerative system.** As the simple system, but after the ram-air heat exchanger the air passes a **regenerative heat exchanger**, where it is cooled further by part of the cold air leaving the cooling turbine; that bled cold air is then dumped overboard. The air enters the turbine colder, so the supply is colder. Used in **high-speed aircraft**, where the ram air is too hot (high stagnation temperature) to cool the bleed air enough.

**4. Reduced-ambient system.** For supersonic aircraft: the ram air used as the heat-exchanger coolant is itself first expanded in a turbine to lower its temperature; a second cooling turbine on the same shaft handles the cabin air.

| System | Extra components | Best for |
|---|---|---|
| Simple | ram-air HX, cooling turbine driving a fan | transport aircraft; works on the ground (fan) |
| Bootstrap | secondary compressor (on the turbine shaft), second HX | high-speed aircraft; colder supply, no fan power waste |
| Regenerative | regenerative HX cooled by turbine exhaust | high speed where ram air is hot |
| Reduced ambient | turbine on the ram-air (coolant) side | supersonic aircraft |

## 5.8 Thermoelectric (Peltier) refrigeration

**The five thermoelectric effects** [Aloke pp.12–14; Kanak p.8; Ameen §6.1]:

1. **Seebeck effect (1821).** When the two junctions of two **dissimilar conductors** A and B form a circuit and are kept at different temperatures $T_1>T_2$, an **EMF** is produced: $E=\alpha\,(T_1-T_2)$, where $\alpha=\alpha_A-\alpha_B$ is the **Seebeck coefficient** (thermoelectric power), $\alpha=dE/dT$ for a fixed cold junction. This is the principle of the thermocouple. The effect is reversible.
2. **Peltier effect (1834).** When a current $I$ is passed through a junction of two dissimilar conductors, heat is absorbed at one junction and released at the other: $Q=\pi I$, with the Peltier coefficient $\pi=\alpha T$ (Kelvin relation). Reversing the current reverses the hot and cold junctions. This is the **reverse Seebeck effect**, the basis of thermoelectric refrigeration.
3. **Thomson effect.** A current in a single conductor with a temperature gradient absorbs or releases heat $\tau I\,dT/dx$ per unit length.
4. **Joule effect.** Irreversible heating $I^2R$ in the resistance $R$ of the conductors.
5. **Fourier (conduction) effect.** Irreversible conduction $K(T_h-T_c)$ from the hot to the cold junction ($K=kA/L$).

**Why an EMF appears when the junctions are at different temperatures.** In each conductor the free charge carriers (electrons, or holes in a p-type semiconductor) at the hot end have more thermal energy and diffuse towards the cold end, building up a charge and an electric field along the conductor until the diffusion is balanced. The size of this thermal EMF per kelvin is a property of the material (its Seebeck coefficient). At each junction, two materials with different carrier energies (different Fermi levels, a contact potential) meet. If both junctions were at the same temperature, the two contact potentials would cancel round the loop. With the junctions at different temperatures, the diffusion EMFs of A and B along the loop are unequal and the contact potentials differ, so a **net EMF** $E=(\alpha_A-\alpha_B)(T_1-T_2)$ drives a current.

![Fig. 17: Seebeck and Peltier effects [Aloke p.13; Kanak p.8]. Left, Seebeck effect ($T_1>T_2$): two conductors A (top, split) and B (bottom) joined at junctions at $T_1$ (left) and $T_2$ (right); an EMF E appears across the gap in A. Right, Peltier effect ($T_1>T_2$): a battery in conductor A drives a current I round the loop; heat $Q_h$ is rejected at the left junction ($T_1$, hot) and heat $Q_l$ is absorbed at the right junction ($T_2$, cold).](figures/017.png "w=0.75")

**The thermoelectric refrigerator** (Fig. 18) [Ameen §6.1; Hundy §2.7.4]. With pure metals the effect is small. A practical couple uses **p-type and n-type semiconductors** (bismuth telluride, Bi$_2$Te$_3$, and compounds of lead and bismuth with tellurium and selenium) joined by copper strips. A DC current flows from the p leg to the n leg through the cold junction: carriers in both legs carry heat away from the cold junction towards the hot junctions, which sit on a heat sink. Many couples are combined in modules. The components correspond to a vapour-compression system: the cold junction is the evaporator, the hot junction the condenser, the battery the compressor, the semiconductor legs the expansion device and the electrons the refrigerant [Ameen Fig. 6.3].

![Fig. 18: A thermoelectric (Peltier) couple, drawn for this guide. Two legs, p-type (left) and n-type (right) Bi$_2$Te$_3$, are joined at the top by a copper strip, the COLD junction $T_c$, under the cold plate (refrigerated space), and at the bottom by two copper strips, the HOT junctions $T_h$, on the hot plate/heat sink (fins). A DC source (+ on the left, − on the right) drives the current I up the p leg and down the n leg (red arrows). Blue arrow at the top: $Q_c$ absorbed (Peltier cooling) $=\alpha IT_c-\tfrac12I^2R-K(T_h-T_c)$. Red arrow at the right: $Q_h$ rejected $=Q_c+W$, with $W=\alpha I(T_h-T_c)+I^2R$.](figures/018.png "w=0.7")

**The mathematical expressions** [Ameen §6.1; standard analysis]. For one couple with total Seebeck coefficient $\alpha$, resistance $R$ and conductance $K$, half of the Joule heat is assumed to reach each junction:

- Peltier heat absorbed at the cold junction: $\pi_cI=\alpha IT_c$; rejected at the hot junction: $\alpha IT_h$.
- **Net refrigerating effect:** $Q_c=\alpha IT_c-\tfrac12I^2R-K(T_h-T_c)$.
- **Heat rejected:** $Q_h=\alpha IT_h+\tfrac12I^2R-K(T_h-T_c)$.
- **Power input** (energy balance $Q_h-Q_c=W=EI$): $W=\alpha I(T_h-T_c)+I^2R$.
- $COP=\dfrac{Q_c}{W}=\dfrac{\alpha IT_c-\tfrac12I^2R-K\,\Delta T}{\alpha I\,\Delta T+I^2R}$.
- The current for maximum cooling is $I=\alpha T_c/R$; the material quality is the **figure of merit** $Z=\alpha^2/(RK)$, and the largest temperature difference a couple can hold is $\Delta T_{max}=\tfrac12ZT_c^2$. Good materials have low resistance and low thermal conductivity together, which is why semiconductors are used.

> **EXAMPLE 5.7** `[TUTOR-GENERATED]` A Bi$_2$Te$_3$ couple has $\alpha=400\ \mu$V/K, $R=0.01\ \Omega$ and $K=0.005$ W/K. It runs at $I=5$ A between $T_c=273$ K and $T_h=303$ K. Find the cooling, the power and the COP; and the cooling of a module of 127 couples.
>
> **Solution.** $\Delta T=30$ K.
> $Q_c=4\times10^{-4}\times5\times273-\tfrac12\times5^2\times0.01-0.005\times30=0.546-0.125-0.150=$ **0.271 W**.
> $W=4\times10^{-4}\times5\times30+5^2\times0.01=0.060+0.250=$ **0.310 W**; $COP=0.271/0.310=$ **0.874**.
> Module: $127\times0.271=$ **34.4 W**. The Joule and conduction losses eat half the Peltier cooling; that is why COPs are low.

**Advantages and uses** [Ameen §6.1; Hundy §2.7.4]: no moving parts, no refrigerant (no liquid or gas), silent, compact, very long life, any orientation; the cooling rate is controlled simply by the current, with a fast response; reversing the current turns it into a heater (heat pump). Its COP stays almost constant as the capacity falls, so it is preferred for small duties: electronic components and instruments, medicines, picnic boxes, laboratory, military and aerospace equipment, nuclear submarines. **Limitations:** low COP and high cost per kW for large capacities, high DC currents.

## 5.9 Magnetic (magnetocaloric) refrigeration

**Principle: the magnetocaloric effect** (Warburg, 1881) [Aloke pp.15–16; Kanak p.9; Ameen §8.4; Hundy §2.7.5]. Like a gas, which heats when compressed and cools when expanded adiabatically, some materials **heat up when adiabatically magnetised and cool when adiabatically demagnetised**. Each atom (ion) of a **paramagnetic salt** behaves as a tiny magnet. With no field the magnets are randomly oriented (high magnetic entropy, zero net magnetism). In a strong field they line up (low magnetic entropy): this needs work, and if no heat leaves, the temperature rises. When the field is removed, the atoms return to the random orientation; this requires work by the atoms, and with no heat from the surroundings their internal energy falls: the salt cools.

**The cycle** (Fig. 19a). Like the reversed Brayton cycle, with the magnetic field in place of pressure: 1→2 adiabatic magnetization (temperature rises above the sink); 2→3 heat rejected to the sink with the field on; 3→4 adiabatic demagnetization (temperature falls below the cold space); 4→1 heat absorbed from the cold space with the field off. Near room temperature, gadolinium alloys in an active magnetic regenerator are being developed as an environmentally benign alternative to vapour compression.

**How temperatures near absolute zero are reached** (apparatus, Fig. 20; process, Fig. 19b) [Aloke p.16; Ameen §8.4]:

1. A **paramagnetic salt** (gadolinium sulphate; also cerium magnesium nitrate) in a tube is surrounded by **helium gas**, inside a bath of **liquid helium**, which is inside a Dewar of **liquid hydrogen** (or nitrogen), between the poles N and S of a strong magnet.
2. The salt is cooled to about **1 K** by pumping on the liquid helium (lowering its boiling pressure).
3. A **strong magnetic field** (about 2.5 T, 25 000 gauss) is applied: the salt is **magnetized isothermally**; the heat of magnetization passes through the helium gas to the liquid helium, so the salt stays at 1 K but its entropy falls (A→B).
4. The helium gas is **pumped out** (high vacuum), isolating the salt thermally.
5. The field is **removed**: **adiabatic demagnetization**, nearly isentropic (B→C). The salt's temperature falls to a few thousandths of a kelvin (≈ 0.001 K).
6. Why so low: at a low temperature, almost all the remaining entropy of the salt is the magnetic (spin) entropy, so lowering it by the field and then removing the field at constant entropy gives a large fractional fall in temperature; for an ideal paramagnet $T_C\approx T_A\,b/B_1$, the ratio of the internal field to the applied field. The two entropy curves (field on and off) meet at $T=0$ (third law), so each step lowers the temperature by a factor and **absolute zero can be approached but never reached**.
7. Aligning **nuclear spins** instead of electron spins gives even lower temperatures (microkelvin) for a brief instant; this is a spin temperature, not a macroscopic temperature of the whole substance [Aloke p.16].

![Fig. 19: Magnetocaloric refrigeration, drawn for this guide. (a) The magnetic refrigeration cycle on T–s (relative units): two entropy curves, field off B = 0 (blue, right) and field on B = $B_1$ (red, left, lower entropy at the same temperature). 1 (on the B = 0 curve at the cold-space temperature) → 2 adiabatic magnetization, vertical up to the field-on curve above the sink temperature; 2 → 3 heat rejected along the field-on curve down to the sink temperature; 3 → 4 adiabatic demagnetization, vertical down to the field-off curve below the cold-space temperature; 4 → 1 heat $Q_L$ absorbed along the field-off curve. (b) Adiabatic demagnetization towards 0 K (spin-½ paramagnet model): entropy s/R against T (0–1.3 K) for B = 0 (blue) and a strong field $B_1$ (red); A (1 K, B = 0) → B isothermal magnetization at about 1 K (heat to the liquid-helium bath); B → C helium gas pumped out and the field removed, adiabatic demagnetization at constant entropy down to about 0.1 K in this model; note "both curves meet at s = 0, T = 0 (third law): each step lowers T by a factor, so 0 K is approached but never reached".](figures/019.jpg "w=1.0")

![Fig. 20: Adiabatic demagnetization apparatus [Aloke p.16; Kanak p.9]. A paramagnetic salt in a small tube connected "to high vacuum"; the tube sits in a bath of liquid helium ("to helium pump"), which is surrounded by a Dewar of liquid hydrogen ("to hydrogen pump"); the magnet poles N and S stand on either side.](figures/020.png "w=0.6")

## 5.10 Vortex tube

Not asked in 2011–2024 papers, but in the sources [Aloke pp.17–20; Kanak pp.10–11; Ameen §6.2]. Compressed air (7–10 bar) enters a tube **tangentially** through a nozzle, forming a vortex that spins at very high speed. The outer layer moves towards the hot end and leaves through a **valve** as hot air; part of the flow, restricted by the valve, reverses along the core and leaves through the central hole of a **diaphragm** at the other end as **cold air** (up to about 50 K below the inlet). Heat passes from the core stream to the outer stream. Opening the valve changes the amount and temperature of the cold air. **Advantages:** air as refrigerant (no leakage problem), simple, no moving parts, light, cheap where compressed air exists, little maintenance, instant start. **Disadvantages:** very low COP (0.1–0.2), limited capacity, only a small part of the compressed air becomes cold air. Uses: spot cooling of electronic cabinets, machining, small laboratory duties.

![Fig. 21: Vortex tube [Aloke p.17]. Compressed air enters through a nozzle into a chamber (tangential entry); a long hot tube on the right ends in a conical valve that releases hot air; a diaphragm with a central hole on the left lets cold air out along the axis.](figures/021.jpg "w=0.55")

<!-- pagebreak -->

## 5.11 Term-final questions with solutions

All 23 parts are theory. They fall into four archetypes; the gas-liquefaction family carries half the marks.

| Group | Papers | Solved in full |
|---|---|---|
| SP1. Steam-jet water-vapour refrigeration | 12-13, 13-14, 16-17, 18-19, 22-23, 23-24 | Solutions 5.2, 5.5 |
| SP2-A. Joule–Thomson coefficient, inversion, liquefaction by expansion | 12-13, 18-19 | Solutions 5.7, 5.8 |
| SP2-B. The Linde plant with its T–s diagram | 13-14, 15-16, 17-18, 20-21, 21-22, 22-23, 23-24 | Solution 5.9 |
| SP2-C. Cascade liquefaction of natural gas | 18-19, 21-22 | Solution 5.16 |
| SP3. Gas refrigeration and aircraft cooling | 15-16, 17-18, 20-21, 21-22 | Solutions 5.18, 5.19 |
| SP4. Magnetic and thermoelectric refrigeration | 17-18, 22-23 | Solutions 5.22, 5.23 |

How to size a theory answer: about one point (one sentence) per mark, plus the sketch. A 15–18 mark "describe with neat sketch" earns about a third of its marks for a clean, fully labelled diagram.

### SP1: steam-jet refrigeration

> **TRY 5.1** `[PP 12-13 Q6(e), 10]` Briefly describe the working principle of a steam jet refrigeration system.

::: {.answer label="Show answer"}
**Solution 5.1** **[FROM SOURCE: Aloke pp.8–10; Kanak pp.6–7]** (ten points; a small sketch of Fig. 1 helps)

1. Water is the refrigerant; the principle is that water boils at a low temperature when the pressure on its surface is reduced (about 5 °C at 0.87 kPa, 6.5 mm Hg).
2. The low pressure (high vacuum) in the **flash chamber** is produced and kept by a **steam ejector** (thermocompressor), which replaces the compressor.
3. High-pressure steam from a boiler expands through the ejector **nozzle** to a very high velocity and a pressure below that of the flash chamber.
4. The jet **entrains** the water vapour formed in the flash chamber.
5. In the **diffuser** the kinetic energy of the mixture is converted to pressure, compressing it to the condenser pressure.
6. The mixture is condensed in the **condenser**; the condensate returns to the boiler.
7. Warm water returning from the air-conditioning plant is **sprayed** into the flash chamber to give a large surface.
8. A small part (about 1 %) of the water **flashes** to vapour; its latent heat comes from the rest, which is chilled (≈ 6 °C per 1 % evaporated: $m_vh_{fg}=(m-m_v)c_p\Delta T$).
9. The **chilled water** is pumped to the cooling coils (load) and returns warm to the sprays.
10. **Make-up water** replaces the evaporated and lost water. Practical chilled-water temperatures are 4–10 °C (air conditioning, process cooling).
:::

> **TRY 5.2** `[PP 13-14 Q6(b), 18]` Briefly describe the principle of operation of a steam jet water vapour refrigerating system. What are its advantages and limitations. Draw the necessary schematic diagram.

::: {.answer label="Show answer"}
**Solution 5.2** **[FROM SOURCE: Aloke pp.8–11; Kanak pp.6–7; Ameen §6.3]** This is the model answer for the family.

*Schematic (about 6 marks):* draw Fig. 1 with every label: steam boiler, control valve, steam nozzle, ejector/thermocompressor (nozzle, mixing chamber, diffuser), flash chamber with spray header and vapour outlet, chilled-water pump to the A/C plant, warm water returning, condenser with condensate pump, make-up water.

*Principle of operation (about 6 marks):*

1. Water is the refrigerant. Its boiling point falls with pressure: at about 0.9 kPa (7 mm Hg) it boils at about 5 °C. (The slides' "60 °C at 5 cm Hg" is wrong: 5 cm Hg is a condenser pressure, ≈ 38 °C.)
2. High-pressure steam from the boiler expands in the ejector nozzle to a high velocity and a pressure below the flash-chamber pressure; this maintains the high vacuum.
3. The jet entrains the vapour formed in the flash chamber; in the diffuser the mixture's kinetic energy is converted to pressure (the compression stroke), and it is discharged to the condenser and condensed; the condensate returns to the boiler.
4. Warm water from the load is sprayed into the flash chamber. About 1 % flashes; the latent heat of that part is taken from the rest, which is chilled ($m_vh_{fg}=(m-m_v)c_p\Delta T$: 1 kg flashed from 100 kg cools the 99 kg by 5.8 °C).
5. The chilled water (≈ 6 °C) is pumped to the cooling coils and returns; make-up water replaces the evaporated water.

*Advantages (about 3 marks):*

1. Water is the refrigerant: completely safe, non-toxic, non-flammable, cheap; leakage is harmless.
2. No moving parts in the refrigerating unit: vibration-free, reliable, low maintenance.
3. Flexible: capacity changed quickly; adjusts quickly to load variations.
4. Low weight per TR; can be installed out of doors.
5. Cheap to run where waste steam and cooling water are available (rubber mills, distilleries, paper mills, food processing).

*Limitations (about 3 marks):*

1. A very high vacuum (≈ 1 kPa) must be maintained; air leakage must be removed.
2. A tremendous volume of vapour per kW must be handled (≈ 6 m³/s per 100 kW at 5 °C).
3. Low efficiency: about twice as much heat must be removed in the condenser per TR as in a vapour-compression system; a boiler and much cooling water are needed.
4. Not feasible below about 4 °C (water freezes): cannot make ice; limited to air conditioning and process chilled water.
:::

> **TRY 5.3** `[PP 16-17 Q7(a), 15]` Briefly describe the principle of operation of a steam jet water vapour refrigeration system. What are its advantages and limitations? Draw a necessary schematic diagram.

::: {.answer label="Show answer"}
**Solution 5.3** **[FROM SOURCE: Aloke pp.8–11]** A verbatim repeat of TRY 5.2 (15 marks instead of 18): give Solution 5.2 with Fig. 1, five principle points, four advantages and four limitations.
:::

> **TRY 5.4** `[PP 18-19 Q5(b), 18]` Why is steam jet refrigeration system safe for air-conditioning installation? Describe a steam jet refrigeration system with proper diagram and hence discuss its operation, advantages and disadvantages.

::: {.answer label="Show answer"}
**Solution 5.4** **[FROM SOURCE: Aloke pp.8–11; Kanak pp.6–7]** As Solution 5.2, with the lead-in answered first:

*Why it is safe for air-conditioning installations (about 4 marks):*

1. The refrigerant is **water**: non-toxic, non-flammable, non-explosive and odourless; a leak cannot poison or suffocate the occupants or start a fire.
2. The system works **under vacuum**: any leak lets air in; no refrigerant escapes into the building.
3. There is **no high-pressure refrigerant circuit and no compressor** with moving parts; it is free from vibration.
4. It adjusts quickly to load variations, which suits air-conditioning loads.

Then the diagram (Fig. 1), the operation (points 2–5 of Solution 5.2), the advantages and the disadvantages as in Solution 5.2.
:::

> **TRY 5.5** `[PP 22-23 Q5(b), 15]` How is cooling produced in a steam jet refrigeration system? Describe a steam jet refrigeration system with neat sketches. Hence, explain the mathematical formula to show the amount of cooling produced.

::: {.answer label="Show answer"}
**Solution 5.5** **[FROM SOURCE: Aloke pp.8–10; Kanak pp.6–7; worked check TUTOR-GENERATED]**

*How cooling is produced (about 4 marks).* By **flash evaporation** of water under a high vacuum. Water boils at a low temperature at a low pressure (about 5 °C at 0.87 kPa). The steam ejector keeps the flash chamber at this pressure by continuously removing the vapour. When warm water is sprayed in, part of it evaporates; the latent heat needed for that evaporation is drawn from the remaining water, so it is cooled (self-cooling). The chilled water is the secondary refrigerant sent to the load.

*Description with sketch (about 6 marks).* Fig. 1 (and Fig. 2 for the ejector): boiler, control valve, ejector (nozzle → mixing chamber → diffuser), flash chamber with sprays, chilled-water pump to the load and return, condenser and condensate pump, make-up water. Operation: steam expands in the nozzle to high velocity and low pressure; it entrains the flash vapour; the diffuser compresses the mixture to the condenser pressure; the condenser condenses it; the condensate returns to the boiler; chilled water circulates to the load and back.

*The formula for the cooling produced (about 5 marks).* Let $m$ kg of water be in the flash chamber and $m_v$ kg evaporate. The latent heat of the vapour comes from the remaining $m-m_v$ kg:
$$m_v\,h_{fg}=(m-m_v)\,c_p\,\Delta T\qquad\Rightarrow\qquad\Delta T=\frac{m_v\,h_{fg}}{(m-m_v)\,c_p}$$
With $m=100$ kg, $m_v=1$ kg, $h_{fg}\approx2385$ kJ/kg and $c_p=4.18$ kJ/(kg·K): $\Delta T=\dfrac{2385}{99\times4.18}=$ **5.76 °C**. Each further 1 % evaporated cools the water by about 5.8 °C more, so in principle it could freeze; in practice the chilled water is kept at 4–10 °C.

For continuous operation (steady-flow energy balance on the flash chamber, water return at $T_r$, chamber at $T_e$), the fraction that flashes and the cooling are
$$x=\frac{h_{f}(T_r)-h_f(T_e)}{h_g(T_e)-h_f(T_e)},\qquad Q=\dot m_c\,[h_f(T_r)-h_f(T_e)]\approx\dot m_c\,c_p\,(T_r-T_e)=\dot m_v\,[h_g(T_e)-h_f(T_r)]$$
For 15 °C → 5 °C, $x=$ **0.01686** (Example 5.2): 1.7 % of the water flashes, and each kg of vapour removed by the ejector carries away 2447 kJ.
:::

> **TRY 5.6** `[PP 23-24 Q1(b), 15]` How is cooling produced in a steam jet refrigeration system? Describe a steam jet refrigeration system with neat sketches. Hence, explain the mathematical formula to show the amount of cooling produced.

::: {.answer label="Show answer"}
**Solution 5.6** **[FROM SOURCE: Aloke pp.8–10]** A verbatim repeat of TRY 5.5: give Solution 5.5 (cooling by flash evaporation under vacuum; Fig. 1 and the ejector; $m_vh_{fg}=(m-m_v)c_p\Delta T$, 1 kg from 100 kg → **5.76 °C**; steady flash fraction 0.01686 for 15 → 5 °C).
:::

### SP2-A: the Joule–Thomson effect and liquefaction by expansion

> **TRY 5.7** `[PP 12-13 Q6(d), 10]` Explain the importance of Joule Thomson coefficient and inversion temperature when operating a system for liquefaction of gases.

::: {.answer label="Show answer"}
**Solution 5.7** **[FROM SOURCE: Aloke pp.97–101; Kanak pp.67–68; Ameen §8.4]** (sketch Fig. 7 or Fig. 9)

1. Liquefiers such as the Linde plant cool the gas by **throttling** it (adiabatic, constant enthalpy). The change of temperature per unit pressure drop at constant enthalpy is the **Joule–Thomson coefficient** $\mu_{JT}=(\partial T/\partial p)_h$.
2. $\mu_{JT}>0$: the gas cools on throttling; $\mu_{JT}=0$: no change; $\mu_{JT}<0$: the gas heats up. For an ideal gas $\mu_{JT}=0$, so only the real-gas behaviour gives cooling.
3. On an isenthalpic curve (T against p) the maximum is the **inversion point**; its temperature is the **inversion temperature**. The locus of these points is the **inversion curve**: inside it throttling cools, outside it heats.
4. Above the **maximum inversion temperature** no throttling can cool the gas. So the gas **must enter the throttle valve below its inversion temperature**. Air and nitrogen (≈ 600 K) can be throttled from room temperature; **hydrogen (≈ 200 K) must be pre-cooled** with liquid nitrogen and **helium (≈ 40 K)** with liquid hydrogen or an expander, or throttling would warm them.
5. $\mu_{JT}$ is small at room temperature (N$_2$: 0.21 K/bar; a 200 → 1 bar throttle gives only ≈ 31 K): one throttle cannot liquefy the gas. The cooling must be accumulated with a regenerative heat exchanger, so the gas is throttled from lower and lower temperatures where $\mu_{JT}$ is larger.
6. The starting pressure should be near the inversion pressure for the inlet temperature (the top of the isenthalp): starting higher first heats the gas. This fixes the operating pressure of the plant (100–200 bar for air).
7. The liquid yield $y=(h_1-h_2)/(h_1-h_f)$ is positive only when the gas shows a positive J–T effect at the compressor-outlet temperature.
:::

> **TRY 5.8** `[PP 18-19 Q7(b), 18]` Describe the thermodynamic principle of liquefaction of gases by expansion. Hence, explain the Joule-Theorem coefficient and isenthalpic curve for flow through a porous plug.

::: {.answer label="Show answer"}
**Solution 5.8** **[FROM SOURCE: Aloke pp.92, 97–100; Kanak pp.64, 67–68; Ameen §8.4]** ("Joule-Theorem" in the paper means Joule–Thomson.)

*Principle of liquefaction by expansion (about 6 marks).*

1. To liquefy a gas its state must be taken below the critical temperature into the region between the saturated-liquid and saturated-vapour lines (Fig. 3); heat (enthalpy) must be removed.
2. Besides cooling by a cold reservoir, this can be done by **expanding** the gas after it has been compressed and cooled to near ambient.
3. **Expansion with work** (in an engine or turbine, adiabatic and nearly reversible, isentropic): the gas does work at the expense of its internal energy, so its temperature falls strongly, $T_2/T_1=(p_2/p_1)^{(\gamma-1)/\gamma}$, for any gas (Claude process).
4. **Expansion without work** (throttling through a valve or porous plug, isenthalpic): a real gas below its inversion temperature cools, because the molecules separate against their attractive forces (Joule–Thomson effect; Linde process).
5. With a counter-flow heat exchanger the cold expanded gas pre-cools the incoming high-pressure gas; the cooling accumulates until the expansion ends inside the dome and liquid forms.

*The porous-plug experiment and the isenthalpic curve (about 7 marks; sketch Fig. 6 and Fig. 7).*

1. Gas is forced steadily through a porous plug in an insulated pipe from $p_1$, $T_1$ to $p_2$, $T_2$. With no heat and no work, $h_1=h_2$.
2. Keeping $p_1$, $T_1$ fixed (point A) and lowering the back pressure $p_2$ in a series of experiments gives points of equal enthalpy; the line joining them is the **isenthalpic curve** ABC. It is not the temperature along the plug, but the effect of the back pressure on the outlet temperature.
3. From A to B, as $p_2$ falls the temperature **rises**; B is the maximum: the **inversion point** ($T_i$, $p_i$).
4. From B to C the temperature **falls**; at C, $T_2=T_1$; beyond C, $T_2<T_1$ (net cooling).
5. The family of such curves for different inlet states, with their maxima joined, gives the **inversion curve** (Fig. 8); cooling occurs only inside it, i.e. below the inversion temperature.

*The Joule–Thomson coefficient (about 5 marks).*
$$\mu_{JT}=\left(\frac{\partial T}{\partial p}\right)_h=\frac{1}{c_p}\left[T\left(\frac{\partial v}{\partial T}\right)_p-v\right]$$
It is the slope of the isenthalpic curve: negative on A–B (temperature increase), zero at B (inversion), positive on B–C (temperature drop). For an ideal gas it is zero; its size measures the deviation from ideal-gas behaviour, and a large positive value is wanted in a liquefier. Typical value: nitrogen at 300 K, 1 bar, 0.21 K/bar.
:::

### SP2-B: the Linde plant (verbatim family)

> **TRY 5.9** `[PP 13-14 Q6(a), 17]` Describe the Linde Liquefaction Plant for liquifying gas with neat sketch. Draw the necessary T-s diagram and explain.

::: {.answer label="Show answer"}
**Solution 5.9** **[FROM SOURCE: Aloke pp.101–103; Kanak pp.68–69; Ameen §8.4]** This is the model answer for the family; the later papers add a lead-in (Solutions 5.11–5.15).

*Sketches (about 7 marks).* Draw the plant schematic (Fig. 11) and the T–s diagram (Fig. 12), with all state numbers 1–11, $m=1$, $y_B$, $1-y_B$, $y_B-y$, $y$, $Q_A$, $Q_B$ and the make-up gas. (If time is short, the simple Linde plant of Fig. 10 with states 1, 2, 3, 4, f, g earns most of the marks; label it "simple Linde–Hampson".)

*Description (about 6 marks).*

1. The Linde process liquefies a gas by the **Joule–Thomson effect**: the gas is throttled, at constant enthalpy, from a high pressure after being pre-cooled below its inversion temperature. It is like a vapour-compression refrigerator with a regenerative heat exchanger that transfers $Q_A$ and $Q_B$ from the high-pressure gas to the cold gas already cooled by throttling.
2. In steady operation, gas at 1 and make-up gas at 11 are compressed in a **multi-stage reciprocating compressor with inter-stage cooling** to a high, supercritical pressure (hundreds of atmospheres), leaving at 2 near ambient temperature.
3. The high-pressure gas is cooled in the **heat exchanger** from 2 to 3 by the two cold return streams.
4. It is **throttled** (first throttle) from 3 to 4; the J–T effect cools it into the wet region, and it enters the first receiver.
5. The vapour $1-y_B$ (state 7) returns through the heat exchanger to an intermediate stage of the compressor (8); the liquid $y_B$ (state 5) is throttled again (second throttle) to 6, at the low pressure, and enters the second receiver.
6. The liquid $y$ is drawn off at 9 as the product; the flash vapour $y_B-y$ (state 10) returns through the heat exchanger to the compressor inlet (11). The yield is $y=y_By_A$ (the liquid fractions after the two throttles); make-up gas $y$ replaces it.

*Explanation of the T–s diagram (about 4 marks).* 1/11 → 2: multi-stage compression with intercooling (zig-zag near ambient) to supercritical pressure; 2 → 3: cooling at constant high pressure in the heat exchanger ($Q_A+Q_B$); 3 → 4: isenthalpic throttling into the dome at the intermediate pressure; 4 → 5 (saturated liquid) and 7 (saturated vapour); 7 → 8: vapour warmed at the intermediate pressure; 5 → 6: isenthalpic throttling to the low pressure; 6 → 9 (liquid product $y$) and 10 (vapour); 10 → 11: vapour warmed at the low pressure to ambient. For the simple Linde plant, a first-law balance on the heat exchanger, valve and separator gives the yield
$$h_2=y\,h_f+(1-y)\,h_1\quad\Rightarrow\quad y=\frac{h_1-h_2}{h_1-h_f}$$
(nitrogen, 1 → 200 bar at 300 K: $y=0.0740$, Example 5.4).
:::

> **TRY 5.10** `[PP 15-16 Q7(b), 20]` Describe the Linde Liquefaction plant for liquifying gas with neat sketch. Draw the necessary T-s diagram and explain.

::: {.answer label="Show answer"}
**Solution 5.10** **[FROM SOURCE: Aloke pp.101–103]** A verbatim repeat of TRY 5.9 (20 marks): give Solution 5.9 in full, and for the extra marks add the start-up (the cooling accumulates through the regenerative heat exchanger until the throttled gas enters the dome, §5.5) and the yield formula with its derivation.
:::

> **TRY 5.11** `[PP 17-18 Q6(b), 18]` Describe the Linde liquefaction plant for liquefying gas with neat sketch. Draw the necessary T-s diagram. Explain the necessity for using two heat exchangers in this process.

::: {.answer label="Show answer"}
**Solution 5.11** **[FROM SOURCE: Aloke pp.101–103; Kanak p.69, corrected]** Solution 5.9 (sketches, description, T–s), then:

*Necessity of two heat exchangers (about 5 marks).*

1. A single throttle from ambient temperature cools the gas by only about 30 K (nitrogen, 200 → 1 bar), giving no liquid. The high-pressure gas must reach the throttle valve as cold as possible, well below its inversion temperature, where $\mu_{JT}$ is large, so that the isenthalpic expansion ends in the wet region.
2. The only cold available is that of the unliquefied gas leaving the receivers. The heat exchangers recover it to pre-cool the high-pressure gas; without them it would be wasted and no liquid would form.
3. There are two cold return streams at two different pressures: $1-y_B$ at the intermediate pressure (taking $Q_B$) and $y_B-y$ at the low pressure (taking $Q_A$). They go back to different compressor stages (8 and 1/11), so they cannot be mixed: each needs its own exchanger (passage).
4. They also warm the return gas to about ambient before it re-enters the compressor, so the cold is not carried into the compressor.
5. The colder the gas before each throttle, the larger the liquid fraction after it ($y_B$ and $y_A$), so the yield $y=y_By_A$ rises. (Warming the return gas does **not** reduce compressor work, as Kanak vai's note says; the plant saves work by recirculating most of the gas at the intermediate pressure.)
:::

> **TRY 5.12** `[PP 20-21 Q7(a), 17]` Describe the Linde liquefaction plant for liquifying gas with neat sketch. Draw the necessary T-s diagram and explain.

::: {.answer label="Show answer"}
**Solution 5.12** **[FROM SOURCE: Aloke pp.101–103]** A verbatim repeat of TRY 5.9 (17 marks): give Solution 5.9 as written.
:::

> **TRY 5.13** `[PP 21-22 Q7(a), 17]` Why are two heat exchangers necessary before the first throttling in a Linde Liquefaction plant? Hence, describe this liquefaction plant for liquefying gas with neat sketch. Draw the necessary T-s diagram and explain.

::: {.answer label="Show answer"}
**Solution 5.13** **[FROM SOURCE: Aloke pp.101–103; Kanak p.69, corrected]** Answer the lead-in first with the five points of Solution 5.11 (pre-cool below the inversion temperature so the first throttle reaches the dome; recover the cold of the two return streams at two pressures, returning to two compressor stages; warm the return gas; raise $y_B$ and $y$), then give Solution 5.9 (sketches, description, T–s).
:::

> **TRY 5.14** `[PP 22-23 Q7(b), 15]` Why is intercooling necessary for the compressor in a Linde liquefaction process? How is Joule-Thomson effect applicable for Linde liquefaction process? Hence, describe the Linde liquefaction process with neat sketches.

::: {.answer label="Show answer"}
**Solution 5.14** **[FROM SOURCE: Aloke pp.99–103; Kanak pp.67–69; Ameen §8.4]** This part belongs to both the J–T family and the Linde family.

*Why intercooling (about 4 marks).*

1. The pressure ratio is very large (1 → 100–200 bar); the work is least for isothermal compression, and multi-stage compression with intercooling brings the process close to the isotherm, saving much work.
2. Without it the discharge temperature would be impossible: adiabatic 1 → 200 bar from 300 K gives about 1363 K; intercooling keeps the temperatures safe for lubricant, valves and cylinders and improves the volumetric efficiency.
3. The gas must enter the heat exchanger near ambient temperature; heat of compression left in it would have to be removed by the cold return gas, reducing the yield.
4. Moisture condenses and is drained in the intercoolers, so less ice forms in the cold parts.

*How the J–T effect is applied (about 4 marks).*

1. Throttling is isenthalpic; a real gas below its inversion temperature cools when throttled ($\mu_{JT}=(\partial T/\partial p)_h>0$).
2. In the Linde plant both throttles (3 → 4 and 5 → 6) cool the gas by this effect; it is the only cooling mechanism in the plant (no expander).
3. Because one throttle gives only a small drop, the throttled cold gas pre-cools the incoming high-pressure gas in the heat exchanger; the effect is compounded until the gas enters the dome and liquid forms.
4. Hence the gas must be below its inversion temperature at the valve (air and N$_2$ at room temperature are; H$_2$ and He must be pre-cooled).

*Description with sketches (about 7 marks):* Fig. 11 and Fig. 12 with the description of Solution 5.9 (points 1–6, $y=y_By_A$).
:::

> **TRY 5.15** `[PP 23-24 Q3(b), 15]` Why oxygen gas is not possible to extract from air by "liquefaction by cooling" method? Describe the Linde Liquefaction plant for liquifying gas with neat sketches. Draw the necessary T-s diagram and explain.

::: {.answer label="Show answer"}
**Solution 5.15** **[FROM SOURCE: Aloke pp.93, 101–103; Ameen §8.1–8.2]**

*Why not by cooling (about 4 marks).*

1. Liquefaction by cooling (heat transfer to a refrigerated evaporator) is practical only when the liquefaction temperature is not very low, for gases boiling close to ambient (butane, propane, LPG, LNG).
2. Oxygen has a critical temperature of −118.6 °C and a normal boiling point of −183 °C: no pressure can liquefy it above −118.6 °C, and to condense it at moderate pressure it must be cooled to below about −150 °C.
3. Vapour-compression refrigeration, even in cascade, reaches only about −100 to −157 °C; colder evaporators would need fluids that are themselves permanent gases (N$_2$, Ne, H$_2$, He), which would first have to be liquefied; and the COP would be impractically low.
4. Air is a mixture: oxygen is separated by liquefying the whole air by **expansion** (Linde or Claude plant) and then distilling it (O$_2$ boils at −183 °C, N$_2$ at −196 °C).

*Then the Linde plant:* Solution 5.9 (sketches Fig. 11 and Fig. 12, description, T–s explanation), trimmed to about 11 marks.
:::

### SP2-C: cascade liquefaction of natural gas

> **TRY 5.16** `[PP 18-19 Q7(a), 17]` Explain the basic principle of cascade refrigeration cycle. Hence, describe with neat sketches the liquefaction of natural gas by cascade refrigeration method.

::: {.answer label="Show answer"}
**Solution 5.16** **[FROM SOURCE: Aloke pp.93–96; Kanak pp.65–66]** This is the model answer for the family.

*Basic principle of the cascade cycle (about 7 marks; sketch Fig. 4 with its T–s).*

1. To reach a low temperature in one plant the evaporator pressure must be very low: the specific volume of the suction vapour and so the evaporator and compressor sizes rise, and the large temperature difference lowers the COP.
2. A cascade puts two (or more) refrigeration plants **in series**; it **splits the temperature drop between two working fluids**, each optimised for its own temperature range, so the plant is more cost-effective.
3. The low-temperature cycle 1-2-3-4 absorbs $Q_1$ at the lowest temperature; its condenser is the **evaporator of the high-temperature cycle** (the cascade condenser), to which it rejects $Q_2$.
4. The high-temperature cycle 5-6-7-8 rejects $Q_3$ to the cooling water. Its fluid has a higher boiling point than the low-stage fluid.
5. It is the refrigeration equivalent of the combined-cycle power station. If the gas to be liquefied is the working fluid of the low stage, liquid is taken out at 1′; both fluids can be liquefied, with liquid also taken at 5′.

*LNG by the ternary cascade (about 10 marks; sketch Fig. 5).*

1. Natural gas (mostly methane, normal boiling point −161.5 °C) is liquefied by a **ternary cascade** of three vapour-compression cycles using **propane, ethane and methane**; the longer-chain alkanes have higher boiling points (propane −42 °C, ethane −89 °C, methane −161.5 °C), so they can cool each other in turn.
2. **Propane cycle:** compressor $W_3$; condenses against cooling water or air ($Q_4$); its evaporator cools the incoming natural gas to **237 K (−36 °C)** ($Q_3'$) and condenses the ethane ($Q_3$).
3. **Ethane cycle:** compressor $W_2$; condenses in the propane evaporator; its evaporator cools the gas further ($Q_2'$) so that it leaves as **liquefied gas at 190 K (−83 °C)** (still at high pressure), and condenses the methane ($Q_2$).
4. **Methane cycle:** compressor $W_1$; condenses in the ethane evaporator; its evaporator subcools the liquefied gas ($Q_1'$) to **120 K (−153 °C)**, near methane's boiling point, so it is **stored** at low pressure with little flashing.
5. The heat taken from the gas passes up the cascade and is rejected to the cooling water by the propane cycle; each compressor works over a moderate range, so the whole plant has a reasonable COP. LNG has about 1/600 of the gas volume, for storage and shipping.
:::

> **TRY 5.17** `[PP 21-22 Q7(b), 18]` For the purpose of liquefaction of a gas by cooling cascade system is employed in refrigeration system. What are its special features due to which it can liquefy the gases? Hence, describe a ternary cascade refrigeration cycle for liquifying natural gas.

::: {.answer label="Show answer"}
**Solution 5.17** **[FROM SOURCE: Aloke pp.93–96; Kanak pp.65–66]** As Solution 5.16, with the features in place of the principle:

*Special features (about 7 marks).*

1. The total temperature drop is split between two or more cycles, each with a moderate lift: good COP, moderate pressure ratio and discharge temperature in each.
2. Each working fluid is chosen for its range: its evaporating pressure stays near or above atmospheric (no deep vacuum, small suction volume) and its condensing pressure stays below its critical pressure.
3. Fluids of successively lower boiling points are stacked (propane, ethane, methane); each lower cycle condenses in the evaporator of the one above (cascade condenser); only the top cycle rejects heat to cooling water.
4. The gas to be liquefied is cooled step by step at constant pressure in successive evaporators, condensed and then subcooled, so it reaches temperatures no single plant could reach economically.
5. The separate loops keep the fluids and their oils apart and can be controlled independently; the cascade is more cost-effective than one plant.

Then the ternary LNG cycle: points 1–5 of Solution 5.16 with Fig. 5 (237 K, 190 K, 120 K).
:::

### SP3: gas refrigeration and aircraft cooling

> **TRY 5.18** `[PP 15-16 Q7(a), 15]` Briefly describe the principle of operation of a gas refrigeration system. What are its advantages and limitations? Draw the necessary schematic diagram.

::: {.answer label="Show answer"}
**Solution 5.18** **[FROM SOURCE: Aloke pp.21–23; Kanak pp.11–12; Hundy §2.7.1]**

*Schematic (about 5 marks):* Fig. 14: compressor and turbine on one shaft, hot heat exchanger ($Q_H$ to the warm environment), cold heat exchanger ($Q_L$ from the cold space), states 1–4, with the T–s diagram.

*Principle (about 5 marks).*

1. A gas (usually air) is the working fluid; it **does not change phase**, so all heat transfers are sensible. The cycle is the **reversed Brayton (Bell–Coleman)** cycle.
2. 1 → 2: the gas is compressed isentropically; its temperature rises above ambient.
3. 2 → 3: it rejects heat $Q_H$ at constant pressure to the surroundings and is cooled to near ambient.
4. 3 → 4: it expands in a **turbine**, doing work, and its temperature falls far below the cold-space temperature.
5. 4 → 1: it absorbs $Q_L$ from the refrigerated space (closed cycle), or is supplied directly to it (open cycle). The turbine work reduces the compressor work: $COP=\dfrac{q_L}{w_{comp}-w_{turb}}=\dfrac{1}{r_p^{(\gamma-1)/\gamma}-1}$ (e.g. 1.71 for $r_p=5$, Example 5.5).

*Advantages (about 3 marks):* air is free, safe, non-toxic, non-flammable, leakage harmless; open system needs no cold heat exchanger, so it is light (aircraft); low weight per kW with turbomachinery; can reach very low temperatures (gas liquefaction); simple low-pressure design.

*Limitations (about 2 marks):* low COP (sensible heat at varying temperatures; strongly affected by machine efficiencies); small refrigerating effect per kg, so large flow rates and equipment; noisy high-speed machines; moisture freezing in open systems.
:::

> **TRY 5.19** `[PP 17-18 Q7(b), 18]` Describe air-craft cooling system. Justify the statement in regard to air-craft cooling "Though the outside temperature is very low at high altitude, still cooling of cabin is required for air-craft."

::: {.answer label="Show answer"}
**Solution 5.19** **[FROM SOURCE: Aloke pp.22–23; Kanak p.12; systems TUTOR-GENERATED after the standard texts]** This is the model answer for the family.

*Justification (about 6 marks).* Cabin cooling is still required because:

1. **Large internal heat generation** by the occupants, lights, avionics and other equipment in a small, crowded, well-insulated cabin.
2. **Skin friction** of the fast-moving aircraft heats the skin (aerodynamic heating).
3. **Ram effect and pressurization:** the outside air at high altitude is at low pressure; when it is rammed and compressed to cabin pressure, close to atmospheric, its temperature rises greatly. Air at 0.2 bar and 223 K (10 000 m) compressed to 1 bar reaches about 353 K, to 0.8 bar about 332 K ($T_2=T_1(p_2/p_1)^{0.2857}$). This hot air must be cooled before it enters the cabin.
4. **Solar radiation** on the fuselage and through the windows.

For low-speed aircraft at low altitude cooling may not be needed; for high-speed aircraft at high altitude it is a must.

*The aircraft cooling system (about 12 marks).* Aircraft use **air-cycle refrigeration**, in which the cabin air itself is the refrigerant (open cycle). Describe the **simple system** with its schematic and T–s diagram (Fig. 15):

1. Ambient air is ram-compressed in the intake (1 → 2) and compressed further by the **main (engine) compressor** (2 → 3); this bleed air is hot.
2. It is cooled at constant pressure in a **ram-air heat exchanger** (3 → 4) by outside (ram) air.
3. It is expanded in a **cooling turbine** (4 → 5) to slightly above cabin pressure; its temperature falls well below the cabin temperature (e.g. 330 K → 241 K from 3 to 1 bar, Example 5.6).
4. A **water separator** removes condensed moisture; the cold air is supplied to the **cabin** (5 → 6), where it absorbs the cabin heat load, then leaves overboard. The supply flow is $\dot m=Q/[c_p(T_{cabin}-T_5)]$.
5. The turbine drives a **fan** that draws cooling air through the heat exchanger (so it works on the ground too).

Then name the other systems in one line each: **bootstrap** (a secondary compressor driven by the turbine and a second heat exchanger give a higher turbine inlet pressure and colder air, Fig. 16); **regenerative** (part of the turbine exhaust cools the air before the turbine in a regenerative heat exchanger, for high-speed aircraft); **reduced ambient** (the ram coolant is itself expanded first, for supersonic aircraft). Finish with why air cycle is used: air is safe and free, cold air goes directly to the cabin (no cold coil), the engine compressor is already there, so the weight per kW is under half that of vapour compression, and the system is simple.
:::

> **TRY 5.20** `[PP 20-21 Q6(a), 17]` Though the temperature at high altitude is lower than the earth surface, aircraft needs cooling, why is this cooling necessary? Hence, describe an air cycle refrigeration system with proper schematic diagram.

::: {.answer label="Show answer"}
**Solution 5.20** **[FROM SOURCE: Aloke pp.21–23; Kanak pp.11–12]** As Solution 5.19: the four reasons (internal heat, skin friction, ram effect with the 0.2 bar/223 K → 1 bar/353 K example, solar radiation), then the simple aircraft air-cycle system with Fig. 15 (points 1–5). Add the reversed Brayton cycle with its COP $q_L/(w_c-w_t)$ (Fig. 14) and the bootstrap variant (Fig. 16) if time allows.
:::

> **TRY 5.21** `[PP 21-22 Q6(a), 17]` Though the temperature at high altitude is lower than the earth surface, aircraft needs cooling, why is this cooling necessary? Hence, describe an air cycle refrigeration system with proper schematic diagram.

::: {.answer label="Show answer"}
**Solution 5.21** **[FROM SOURCE: Aloke pp.21–23]** A verbatim repeat of TRY 5.20: give Solution 5.20.
:::

### SP4: magnetic and thermoelectric refrigeration

> **TRY 5.22** `[PP 17-18 Q7(a), 17]` Describe with neat sketch the working principle of magnetic refrigeration. Explain how so low temperature like absolute zero can be achieved by this refrigeration process?

::: {.answer label="Show answer"}
**Solution 5.22** **[FROM SOURCE: Aloke pp.15–16; Kanak p.9; Ameen §8.4]**

*Sketch (about 5 marks):* the apparatus of Fig. 20 (paramagnetic salt in a tube to a high vacuum, liquid helium bath, liquid hydrogen Dewar, magnet poles N and S), and the T–s diagram of Fig. 19.

*Working principle (about 6 marks).*

1. Magnetic refrigeration is based on the **magnetocaloric effect** (Warburg, 1881): some materials **heat up when magnetised adiabatically and cool when demagnetised adiabatically**, as a gas heats on compression and cools on expansion.
2. Each atom of a **paramagnetic salt** (e.g. gadolinium sulphate) acts as a tiny magnet; without a field they are randomly oriented and the net magnetism is zero.
3. In a strong field the atoms align with it; this requires work, and the temperature rises (the magnetic entropy falls). The heat is removed to a heat sink (the helium).
4. When the field is removed the atoms return to random orientation; this requires work by the atoms, and if no heat enters, the internal energy and temperature of the salt fall: it absorbs heat from the space to be cooled.
5. A cycle of adiabatic magnetization, heat rejection with the field on, adiabatic demagnetization and heat absorption with the field off (Fig. 19a) gives continuous refrigeration.

*How temperatures near absolute zero are reached (about 6 marks).*

1. The salt, surrounded by helium gas, is first cooled to about 1 K by pumping on the liquid-helium bath (itself shielded by liquid hydrogen).
2. A strong magnetic field (≈ 2.5 T) is applied: the salt is magnetized at about 1 K, the heat of magnetization going through the helium gas to the liquid helium (isothermal magnetization, entropy lowered).
3. The helium gas is pumped away (high vacuum), isolating the salt.
4. The field is removed: **adiabatic demagnetization**, almost isentropic, cools the salt to a few thousandths of a kelvin (≈ 0.001 K).
5. At such low temperatures the salt's entropy is almost all magnetic, so this entropy change gives a large fractional fall of temperature. The process can be repeated, and aligning nuclear spins gives even lower (spin) temperatures for an instant.
6. The entropy curves with and without the field meet at 0 K (third law), so each step lowers the temperature by a factor: **absolute zero is approached but cannot be reached**.
:::

> **TRY 5.23** `[PP 22-23 Q6(a), 15]` Why is an electromotive force produced when the junctions of two dissimilar conductors are maintained at two different temperatures? Hence, describe the thermoelectric refrigeration system with relevant mathematical expression.

::: {.answer label="Show answer"}
**Solution 5.23** **[FROM SOURCE: Aloke pp.12–14; Kanak p.8; Ameen §6.1]**

*Why an EMF is produced (Seebeck effect, about 5 marks).*

1. In a conductor, the charge carriers at the hot end have more thermal energy and diffuse towards the cold end; charge builds up until an electric field balances the diffusion. This thermal EMF per kelvin (the Seebeck coefficient) depends on the material.
2. At a junction two materials with different carrier energies (Fermi levels) meet, producing a contact potential that depends on temperature.
3. If both junctions are at the same temperature, the effects cancel around the loop. With the junctions at $T_1>T_2$ they do not cancel, and a net EMF appears: $E=\alpha(T_1-T_2)$, with $\alpha=\alpha_A-\alpha_B$ the Seebeck coefficient (thermoelectric power), $\alpha=dE/dT$ for a constant cold junction. This is the thermocouple principle; the effect is reversible.

*Thermoelectric refrigeration (about 10 marks; sketch Fig. 17 and Fig. 18).*

1. It uses the **Peltier effect**, the reverse of the Seebeck effect: a DC current through a circuit of two dissimilar conductors makes one junction cold (heat absorbed) and the other hot (heat rejected); reversing the current swaps them.
2. Practical units use **p- and n-type semiconductors** (Bi$_2$Te$_3$) joined by copper strips: the cold junction is in contact with the space to be cooled, the hot junctions with a finned heat sink; many couples form a module.
3. Peltier heat at a junction: $Q=\pi I$, with $\pi=\alpha T$.
4. Two irreversible effects oppose the cooling: **Joule heating** $I^2R$ (half assumed to reach each junction) and **conduction** $K(T_h-T_c)$ from the hot to the cold junction.
5. Net refrigeration: $Q_c=\alpha IT_c-\tfrac12I^2R-K(T_h-T_c)$; heat rejected $Q_h=\alpha IT_h+\tfrac12I^2R-K(T_h-T_c)$; power $W=Q_h-Q_c=\alpha I(T_h-T_c)+I^2R$; $COP=Q_c/W$.
6. Best materials have a high figure of merit $Z=\alpha^2/(RK)$ (high Seebeck coefficient, low resistance, low thermal conductivity). Example 5.7: one couple at 5 A between 273 and 303 K gives 0.271 W with COP 0.874.
7. Advantages: no moving parts or refrigerant, silent, compact, long life, easy control by current, reversible to heating. Limitations: low COP and high cost for large capacities; used for electronics, instruments, medicines, small coolers.
:::

<!-- pagebreak -->

## 5.12 Summary sheet

> **KEY: Module 5 on one page**
>
> - **Steam jet:** water refrigerant boils under vacuum (≈ 0.9 kPa → 5 °C) in a flash chamber; a steam ejector (nozzle → mixing → diffuser) keeps the vacuum and compresses the vapour to the condenser (≈ 6.7 kPa, 38 °C). Cooling: $m_vh_{fg}=(m-m_v)c_p\Delta T$ (1 kg from 100 kg: 5.76 °C); steady $x=\frac{h_{f,r}-h_{f,e}}{h_g-h_{f,e}}$ (15 → 5 °C: 0.01686). Advantages: safe water, no moving parts, flexible, outdoors, cheap with waste steam. Limits: vacuum, huge vapour volume (6 m³/s per 100 kW), condenser twice VC's, not below 4 °C. Erratum: 5 cm Hg ↔ 38 °C, 6.5 cm Hg ↔ 43 °C (not 60/100 °C).
> - **Liquefaction:** state below the critical temperature, into the dome; by cooling (cascade; butane, propane, LNG) or by expansion (J–T throttle, isenthalpic; expander, isentropic). O$_2$ ($T_c$ −118.6 °C, bp −183 °C) cannot be made by cooling: liquefy air by expansion and distil.
> - **Cascade/LNG:** the low stage condenses in the high stage's evaporator; splits the lift; propane (→ 237 K) / ethane (→ 190 K, liquefied) / methane (→ 120 K, stored).
> - **J–T:** $\mu_{JT}=(\partial T/\partial p)_h$; + cools, 0 inversion, − heats; ideal gas 0. Isenthalp A–B (heats) – B (inversion) – C ($T_2=T_1$). Inversion curve; max inversion T: N$_2$/air ≈ 600 K, H$_2$ ≈ 200 K, He ≈ 40 K: pre-cool H$_2$, He. N$_2$ 200 → 1 bar at 300 K: 269 K only.
> - **Linde:** multi-stage intercooled compressor → HX (2 → 3) → throttle → receiver (vapour back) → throttle → receiver (liquid $y$); $y=y_By_A$; simple: $y=\frac{h_1-h_2}{h_1-h_f}$ (N$_2$ 200 bar: 0.074; $T_3$ ≈ 164 K; ≈ 6.4 MJ/kg liquid ideal). Intercooling: less work, safe temperatures (1363 K otherwise), gas at ambient to HX. Two HX: pre-cool below inversion with the cold of two return streams at two pressures. Preheating does **not** reduce compressor work (Kanak p.69 is wrong). Claude: expander + final J–T valve.
> - **Air cycle:** reversed Brayton; $COP=1/(r_p^{0.2857}-1)$ (r = 5: 1.71). Aircraft cooling needed for internal heat, skin friction, ram effect (0.2 bar 223 K → 1 bar 353 K), solar. Why air: safe, direct supply, engine compressor exists, < 50 % weight. Simple (HX + turbine + fan), bootstrap (turbine-driven secondary compressor + 2nd HX), regenerative (turbine exhaust cools the air), reduced ambient.
> - **Thermoelectric:** Seebeck $E=\alpha\Delta T$; Peltier $Q=\alpha IT$; $Q_c=\alpha IT_c-\frac12I^2R-K\Delta T$, $W=\alpha I\Delta T+I^2R$. p/n Bi$_2$Te$_3$.
> - **Magnetic:** magnetize at ≈ 1 K (heat to He), isolate, demagnetize adiabatically → ≈ 0.001 K; 0 K approached, never reached.
> - **Errata:** steam-jet boiling points (Kanak p.6, Aloke p.8); "J–T = work-producing expansion" (Kanak p.67); "friction-dominant" and swapped $T_1$/$T_i$ labels (Kanak p.67); "preheating reduces compressor work" (Kanak p.69); "yield = quality of state 6" (Aloke p.103: it is the liquid fraction).

## 5.13 Self-test

1. At what pressure does water boil at 5 °C, and at what temperature does it boil at 5 cm Hg?
2. Name the three sections of a steam ejector and say what each does to the pressure and velocity.
3. Write the formula for the fall in temperature when $m_v$ kg is flashed from $m$ kg of water. What does 1 kg from 100 kg give?
4. Give two reasons why a steam-jet system is safe for air conditioning, and two limitations.
5. Define $\mu_{JT}$. What is its value for an ideal gas, and what does its sign tell you?
6. What is the inversion temperature? Why must hydrogen be pre-cooled before a J–T valve?
7. Derive the liquid yield of the simple Linde plant.
8. Give three reasons for intercooling the Linde compressor.
9. Why can oxygen not be liquefied by "cooling"?
10. In the LNG ternary cascade, what does each of the three fluids do, and what are the three gas temperatures?
11. Give four reasons an aircraft cabin needs cooling at high altitude, and the ram-effect example.
12. Write $Q_c$ and $W$ for a Peltier couple, and explain why 0 K cannot be reached by adiabatic demagnetization.

**Answers.**

1. 0.87 kPa (6.5 mm Hg); at 5 cm Hg (6.67 kPa), about 38 °C.
2. Nozzle (p falls below the flash-chamber pressure, V rises to over 1000 m/s); mixing/suction chamber (vapour entrained, p ≈ $p_e$, V falls); diffuser (V falls, p rises to the condenser pressure).
3. $\Delta T=m_vh_{fg}/[(m-m_v)c_p]$; 2385/(99 × 4.18) = 5.76 °C.
4. Water is non-toxic and non-flammable; the system is under vacuum, so leaks are inward (also: no compressor, quick load response). Limitations: high vacuum and huge vapour volume; condenser load about twice VC; not below 4 °C.
5. $(\partial T/\partial p)_h$; zero; positive: throttling cools, negative: throttling heats.
6. The temperature at the top of an isenthalp (where $\mu_{JT}=0$); the maximum one bounds the cooling region. Hydrogen's maximum inversion temperature (≈ 200 K) is below room temperature, so at room temperature throttling would heat it.
7. Heat exchanger + valve + separator, no work or heat: $h_2=yh_f+(1-y)h_1$, so $y=(h_1-h_2)/(h_1-h_f)$.
8. Approach isothermal compression (less work); avoid impossible discharge temperatures (≈ 1363 K in one stage to 200 bar); deliver the gas at ambient temperature to the heat exchanger (and drain moisture).
9. Its critical temperature is −118.6 °C and boiling point −183 °C, below what refrigeration cascades reach (≈ −100 to −157 °C); air must be liquefied by expansion and distilled.
10. Propane: condenses to cooling water, cools the gas to 237 K and condenses ethane; ethane: liquefies the gas at 190 K and condenses methane; methane: subcools the liquid to 120 K for storage.
11. Internal heat (people, equipment), skin friction, ram effect, solar radiation; 0.2 bar, 223 K compressed to 1 bar gives 353 K (0.8 bar: 332 K).
12. $Q_c=\alpha IT_c-\frac12I^2R-K\Delta T$, $W=\alpha I\Delta T+I^2R$. The two entropy curves (field on, field off) meet at 0 K, so each demagnetization lowers T by a factor and never to zero (third law).

<!-- BEGIN DATA TABLES (generated by build/make_tables.py; do not edit) -->
<!-- pagebreak -->
## 5.T Tables for Module 5

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
