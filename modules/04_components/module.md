<!-- pagebreak -->
# Module 4: Refrigeration components: compressors, condensers, expansion devices, evaporators

| | |
|---|---|
| **Where it appears** | Ten of eleven papers, 2011-12 to 2023-24 (not 2013-14): Q7 of Section B (2011-12), Q6 of Section B (2012-13), **Q5 and Q6 of Section B every year from 2015-16 to 2022-23**, and Q1(a), Q2(a), Q2(b) of Section A (2023-24) |
| **Share of all marks** | 12.5% (381 of 3055 weighted marks, 27 parts); 16.7–18.9% of the 2015-16, 2016-17, 2017-18, 2020-21 and 2023-24 papers. All theory: no numericals have been set. |
| **Time** | core 3 h (§4.1–4.12 and Solutions 4.3, 4.4, 4.6, 4.7, 4.13, 4.15, 4.19, 4.22, 4.23, 4.26), full 5 h (all 27 solutions) |
| **Sources** | Aloke sir's slides pp.24–72 (compressors, condensers, cooling towers, expansion devices, evaporators); Full note pp.13–40 and pp.59–63; Hundy, *Refrigeration, Air Conditioning and Heat Pumps* 5th ed. Ch. 4, 6, 7, 8, 9; Ameen, *Refrigeration and Air Conditioning* Ch. 16 |

**How it has been asked:**

- **Compressor classification + one working principle (the commonest question of the module, 17 marks each):** "**Classify different types of compressors used in refrigeration systems. Describe the working principle of a scroll compressor**" (**2016-17, 2020-21**, the latter "with proper schematic diagram"); "What are the different types of compressors … Describe the working principle of **rotary sliding vane** type compressor" (2017-18); "Classify … **along with their capacity ranges**. Describe the working principle of a **sliding and rotary vane** compressor with proper schematic diagram" (2021-22); "**Why are a wide range of capacities and types** for compressor used in HVAC application? Describe the working principle of a sliding and rotary vane compressor" (2023-24).
- **Volumetric efficiency:** "Why does volumetric efficiency decrease with pressure ratio for compressor? Find out the reasons due to which **scroll compressor attains maximum volumetric efficiency**" (2022-23).
- **Centrifugal:** "advantages and disadvantages of centrifugal compressor over reciprocating" (2011-12); "**Hermetically sealed compressors are not generally centrifugal** – why?" (2012-13); "**When centrifugal compressor is suitable for air-conditioning application?** Describe a centrifugal compressor and its different components with neat sketch" (2015-16).
- **Air-cooled condenser:** "**Describe with neat sketches an air-cooled condenser** used in an air-conditioning system" (2015-16, 2016-17 with "characteristics"); "Describe an air-cooled condenser … **Justify the statement 'On days when maximum cooling is needed, the least is available'** with the context of climate of Bangladesh" (**2022-23, 2023-24, word for word**); "comparison of air-cooled and water cooled condenser" (2011-12).
- **Evaporative condenser:** "Describe with neat sketches a **counter-flow forced draft evaporative condenser**. What are the benefits of using forced draft condenser?" (2017-18); "working principle of an evaporative condenser … major components … their functions" (2020-21).
- **Expansion devices:** "**What are the benefits of electronics expansion valve (EXV)** used in a refrigeration system? Also explain how its **controller system** works" (**2015-16, 2017-18, 2020-21**, near word for word); "working principle of a **thermostatic expansion device** … how does it maintain a constant degree of suction superheat" (2021-22); "How are the **bellows in an automatic expansion valve** remain in equilibrium?" (2023-24); "why **capillary tube** is preferred … in household refrigerator" (2011-12); "differences between **solenoid valve and expansion valve**" (2012-13).
- **Evaporators:** "Why is **liquid over feed evaporator** suitable for **multiple evaporator** air-conditioning system? Describe this evaporator with necessary diagram" (**2016-17, 2018-19**); "**frosting, non-frosting and defrosting** evaporators" (2011-12); "factors that affect the **heat transfer capacity of an evaporator**" (2012-13).

> **KEY: Toolkit for this module**
>
> - **The four components.** Compressor (raises vapour pressure so that heat can be rejected at a temperature above ambient), condenser (rejects $Q_c=Q_e+W$: de-superheat, condense, sub-cool), expansion device (meters liquid to the evaporator and holds the high/low pressure difference), evaporator (absorbs the load by boiling the refrigerant).
> - **Compressor families.** Positive displacement: reciprocating; rotary (vane, scroll, rolling piston, screw). Dynamic: turbo (centrifugal, axial); ejector. **Capacity ranges (kW):** rolling piston 0.25–22, scroll 6.5–100, rotary vane 7–300, reciprocating 0.25–1000, screw 75–6000, turbo 270–36 000.
> - **Motor arrangement.** Hermetic (welded shell, motor cooled by refrigerant), semi-hermetic (bolted, openable), open (external drive, shaft seal, air-cooled motor).
> - **Volumetric efficiency.** $\eta_v=\dfrac{\text{actual volume flow at suction}}{\text{compressor displacement}}$. Clearance part, with $C=V_c/V_s$ and re-expansion $pV^n=$ const:
> $$\eta_{vc}=1+C-C\left(\frac{p_d}{p_s}\right)^{1/n},\qquad \dot m=\frac{\eta_v\,\dot V_{disp}}{v_{suction}}$$
> - **Air-cooled condenser rating** (Hundy): $Q_c\approx(UA)\,(T_c-T_{amb})$, so a hotter day forces a higher $T_c$.
> - **TXV force balance** (equal areas): $p_{bulb}=p_e+p_{spring}$; $p_{bulb}=p_{sat}(T_{bulb})$, so the spring sets the superheat. **AXV:** $p_{spring}=p_e$, so it holds evaporator pressure. **EXV:** controller computes superheat $=T_{out}-T_{sat}(p_{out})$ and drives a stepper or pulse valve.
> - **Evaporator feed.** DX (all evaporated plus superheat; TXV/EXV); flooded (natural circulation from a surge drum; float valve); liquid overfeed (pump circulates $n$ times the evaporated flow).
> - **Cooling tower terms.** Range $=T_{w,in}-T_{w,out}$; approach $=T_{w,out}-T_{wb,air\,in}$.

## 4.1 The components of a vapour-compression system

A vapour-compression plant needs four essential components in a closed loop: **compressor → condenser → expansion device → evaporator → compressor** [Hundy §9.1]. Each has one job:

| Component | Enters | Leaves | Job |
|---|---|---|---|
| Compressor | low-pressure dry (slightly superheated) vapour from the evaporator | high-pressure superheated vapour | Removes vapour from the evaporator so its pressure (and so its temperature) stays low; raises the pressure so that the vapour can condense at a temperature above the cooling medium [Ameen §16.1] |
| Condenser | hot high-pressure vapour | high-pressure liquid (slightly sub-cooled) | Rejects the evaporator load **plus** the compressor work: $Q_c=Q_e+W$ [Hundy §6.2] |
| Expansion device | high-pressure liquid | low-pressure liquid–vapour mixture (about 80% liquid) | Meters liquid at the rate it boils off in the evaporator, and keeps the pressure difference between condenser and evaporator [Aloke p.51] |
| Evaporator | low-pressure mixture | low-pressure vapour | Takes heat from the space, product, air or water by boiling the refrigerant [Aloke p.62] |

Questions in this module ask you to classify each component, draw one type and explain how it works. The sections below teach every type that has been asked, with a figure you can reproduce in the exam.

## 4.2 Compressors: classification and capacity ranges ★

The compressor "compresses the low-pressure dry gas from the evaporator and raises its pressure to that of the condenser" [Aloke p.24; Kanak p.13].

### Classification by working principle {#comp-classify}

**Positive-displacement** compressors trap discrete volumes of low-pressure vapour and **physically reduce the volume**, which raises the pressure. **Dynamic** compressors **raise the velocity** of the gas and then slow it down in a way that raises the pressure [Aloke p.29; Kanak p.15].

![Fig. 1: Classification tree of refrigeration compressors. COMPRESSORS divide into POSITIVE DISPLACEMENT and DYNAMIC. Positive displacement → RECIPROCATING and ROTARY; rotary → VANE, SCROLL, ROLLING PISTON, SCREW. Dynamic → TURBO and EJECTOR (JET); turbo → CENTRIFUGAL and AXIAL. [Aloke p.28]](figures/001.jpg "w=0.6")

Draw it as a tree in the exam:

- **Positive displacement**
  - **Reciprocating** (piston in a cylinder; single- or multi-cylinder)
  - **Rotary**: vane (multi-vane sliding vane), scroll, rolling piston (fixed vane), screw (twin or single)
- **Dynamic**
  - **Turbo**: centrifugal (radial), axial
  - **Ejector** (jet, driven by a high-velocity steam or refrigerant jet)

A second, independent classification is **by motor arrangement**: hermetic, semi-hermetic and open (§4.3). Name both in a "classify" answer: e.g. "a hermetic scroll", "an open screw", "a semi-hermetic reciprocating".

### Capacity ranges {#comp-capacity}

![Fig. 2: Approximate range of refrigeration capacity covered by each compressor type, drawn as vertical bars on a logarithmic capacity axis from 0.1 kW to 100 000 kW: rolling piston 0.25–22 kW; scroll 6.5–100 kW; rotary vane 7–300 kW; reciprocating 0.25–1000 kW; screw 75–6000 kW; turbo (centrifugal) 270–36 000 kW. [Aloke p.29, from Hundy Fig. 4.2]](figures/002.png "w=0.6")

| Type | Capacity (kW) | Typical use [Kanak p.16; Hundy Ch. 4] |
|---|---|---|
| Rolling piston | 0.25–22 | lowest capacity: domestic refrigerators, window and split AC |
| Scroll | 6.5–100 | split and packaged AC, heat pumps, small chillers |
| Rotary vane | 7–300 | small commercial; booster (low-stage) duty |
| Reciprocating | 0.25–1000 | **widest range**: domestic to industrial, any refrigerant |
| Screw | 75–6000 | high capacity: chillers, industrial and ammonia plants |
| Turbo (centrifugal) | 270–36 000 | highest capacity: large water chillers of central AC |

### Why so many types and capacities are used in HVAC {#comp-why-range}

One mechanism cannot serve every duty efficiently [Kanak p.16; Hundy §4.1, §4.15]:

1. **Loads span five orders of magnitude**: a domestic refrigerator needs ≈ 0.1 kW, a large district-cooling chiller ≈ 36 000 kW.
2. **Volume flow decides the mechanism.** Small flows suit pistons, rollers and scrolls; large flows of low-density gas need screws and centrifugals. A centrifugal cannot be built small (high tip speed), and a piston machine becomes huge and heavy at large flows.
3. **Pressure ratio** differs: AC (≈ 3) suits centrifugals; freezers and cold stores (≈ 8–15) suit pistons, screws or two-stage plant.
4. **Refrigerant**: ammonia needs open machines (it attacks copper motor windings); low-pressure R134a/R1233zd suits centrifugals; high-pressure R410A suits scrolls [Hundy Table 4.1].
5. **Part-load behaviour and capacity control**: cylinder unloading, slide valves, inlet guide vanes, variable speed.
6. **Efficiency, noise, vibration, size, weight, reliability, first cost and serviceability** each favour a different type in each application.

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Classify different types of compressors used in refrigeration systems” (2016-17, 2020-21); “What are the different types of compressors used in refrigeration systems?” (2017-18). *Read:* [classification by working principle](#comp-classify). *Answer:* [Solution 4.4](#q-4-4), [Solution 4.5](#q-4-5), [Solution 4.7](#q-4-7).
> - “Classify different types of compressor used in refrigeration systems along with their capacity ranges” (2021-22). *Read:* [classification](#comp-classify), [capacity ranges](#comp-capacity). *Answer:* [Solution 4.8](#q-4-8).
> - “Why are a wide range of capacities and types for compressor used in HVAC application?” (2023-24). *Read:* [why so many types and capacities](#comp-why-range), [capacity ranges](#comp-capacity). *Answer:* [Solution 4.9](#q-4-9).

## 4.3 Hermetic, semi-hermetic and open compressors ★

| | Hermetic (sealed, welded) | Semi-hermetic (accessible hermetic) | Open |
|---|---|---|---|
| Motor | inside a welded steel shell with the compressor | inside the compressor housing, which is **bolted** | outside; drives through a shaft |
| Motor cooling | by refrigerant: suction vapour (or liquid from the liquid line) passing over the windings | by refrigerant (suction gas) | by **air** from the surroundings |
| Shaft seal | none | none | **needed** where the shaft leaves the crankcase; a possible leak path |
| Repair | **tedious**: the shell must be cut open; normally replaced | housing opened to overhaul compressor or motor | easy; motor or compressor replaced separately |
| Drive | electric motor at line speed (2900 rpm, 50 Hz) | electric motor (usually 1450 rpm) | electric motor, engine or turbine; belt or coupling, any speed |
| Size and use | small: domestic refrigerators, room AC, up to tens of kW | commercial and industrial, wide range | large and ammonia plants |

[Aloke pp.24–27; Kanak pp.13–14; Hundy §4.6–4.7]

![Fig. 3: Cut-away of a hermetic reciprocating compressor inside a welded steel shell. Labels: internal pressure relief valve, muffler, piston, crankcase heater, oil sight glass (left); suction inlet, motor winding at the top, terminal box, discharge connection (right). Suction gas enters the shell and cools the motor winding before it reaches the cylinder. [Aloke p.25]](figures/003.jpg "w=0.5")

![Fig. 4: Cut-away of a semi-hermetic reciprocating compressor with a bolted housing. Motor end (left): terminal box, stator winding, motor connectors, rotor on the extended crankshaft. Compressor end (right): suction valve plate, piston ring, piston, connecting rod, crankshaft, oil return port, oil level sight glass. [Aloke p.26]](figures/004.jpg "w=0.55")

**Advantages of a hermetic unit:** no shaft coupling or external shaft seal, so no refrigerant leakage and no seal maintenance; compact, light, quiet; the motor is cooled by the refrigerant and can be smaller. **Disadvantages:** cannot be repaired in the field; a motor burn-out decomposes the refrigerant and oil and contaminates the whole system; the motor heat goes into the suction gas and lowers the volumetric efficiency; the refrigerant must be compatible with the winding insulation (not ammonia) [Hundy §4.6].

### Why hermetically sealed compressors are not centrifugal {#comp-hermetic-centrifugal}

1. **Speed.** A centrifugal compressor works only at high impeller tip speed (up to ≈ 300 m/s). At the 2900 rpm of a two-pole motor this needs an impeller about **2 m** in diameter; real machines run at ≈ 10 000 rpm through a **step-up gear** or a high-frequency drive [Hundy §4.14]. A small welded hermetic unit runs directly at line speed.
2. **Size.** Hermetics are made for small capacities (fractions of a kW to tens of kW) in a welded shell. A centrifugal **cannot be built small**: the smallest is ≈ 260–270 kW (Fig. 2). A shell big enough for such a machine cannot practically be welded shut.
3. **Service.** Large machines with gears, bearings, guide vanes and motors of hundreds of kW must be opened for inspection and repair. A welded hermetic cannot be opened.
4. **Motor heat.** In a hermetic the motor loss heats the suction gas. In a large machine this heat is large and would reduce capacity; centrifugal motors are cooled separately (liquid refrigerant spray or air).

So large centrifugals are **open** or **semi-hermetic** (accessible, bolted; up to ≈ 7000 kW) [Hundy §4.14], while fully hermetic units are reciprocating, rolling-piston and scroll machines.

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Hermetically sealed compressors are not generally centrifugal compressor – why?” (2012-13). *Read:* [why hermetics are not centrifugal](#comp-hermetic-centrifugal). *Answer:* [Solution 4.2](#q-4-2).

## 4.4 Reciprocating compressor and volumetric efficiency ★

### Working principle

The reciprocating compressor is "discontinuous": it takes in a little gas, then compresses it [Kanak p.17]. A piston moves in a cylinder that has automatic, pressure-operated suction and discharge valves (Fig. 5) [Hundy §4.2]:

1. **Suction stroke** (piston moving down): the suction valve opens when cylinder pressure falls below suction pressure; vapour from the evaporator enters.
2. **Compression**: at the bottom of the stroke the suction valve closes; the piston moves up and compresses the trapped vapour.
3. **Discharge**: when cylinder pressure exceeds discharge-line pressure the discharge valve opens and the gas is pushed to the condenser.
4. **Re-expansion**: at the top of the stroke some high-pressure gas is left in the **clearance volume**. On the next down-stroke this gas must re-expand to below suction pressure before the suction valve can open again.

![Fig. 5: Reciprocating compressor operation. Left, four cylinder snapshots: (a) piston moving down, suction valve open, gas drawn in; (b) piston moving up, discharge valve open; (c) piston at the top, trapped high-pressure gas in the clearance; (d) trapped gas re-expands as the piston moves down. Right, p–V indicator diagram: discharge along the condensing pressure P_c (arrow leftward) ending at the clearance volume, re-expansion curve falling from P_c to the evaporating pressure P_e, inlet along P_e (arrow rightward), compression curve rising back to P_c. [Aloke p.30, from Hundy Fig. 4.4]](figures/005.jpg "w=0.75")

### Volumetric efficiency and why it falls with pressure ratio {#comp-voleff}

"The amount of gas pumped by the compressor will always be less than the physical displacement of the pistons" [Aloke p.36]:

$$\eta_v=\frac{\text{actual volume flow at suction }(p_1,T_1)}{\text{compressor displacement}}$$

The losses (Fig. 6) are [Aloke p.36; Kanak p.24; Hundy §4.10]:

1. **Re-expansion loss**: clearance gas re-expands and occupies part of the suction stroke.
2. **Pressure drops** through the suction and discharge valves and ports: the cylinder fills at below suction pressure.
3. **Heat transfer**: hot cylinder walls and head heat the incoming gas, so less mass fits in the cylinder.
4. **Motor heat pick-up** (hermetic and semi-hermetic): suction gas warmed by the motor.
5. **Leakage** past piston rings and valves back to the suction side.

![Fig. 6: Left: hermetic reciprocating compressor between a suction gauge (P1, T1) and a discharge gauge (P2, T2), with the volumetric losses marked: motor heat pick-up (suction gas over the motor), pressure drops (valves), heat transfer (cylinder head), re-expansion loss (clearance gas), leakage loss (piston rings). Right: volumetric efficiency against pressure ratio (1 to 20): scroll and screw stay high (upper lines), the typical piston compressor falls from 100% at pressure ratio 1 to about 72% at ratio 7 and 50% at ratio 14. [Aloke p.36, from Hundy Figs. 4.15–4.16]](figures/006.jpg "w=0.75")

**Why $\eta_v$ falls as the pressure ratio rises.** With clearance ratio $C=V_c/V_s$ and re-expansion $pV^n=$ const, the clearance gas expands from $V_c$ to $V_c(p_d/p_s)^{1/n}$. The fresh charge per stroke is $V_s+V_c-V_c(p_d/p_s)^{1/n}$, so [Ameen §16.1]

$$\eta_{vc}=1+C-C\left(\frac{p_d}{p_s}\right)^{1/n}$$

1. A higher $p_d/p_s$ makes the clearance gas re-expand to a **larger volume**, so the piston travels further before the suction valve opens; at a high enough ratio $\eta_{vc}=0$ and the compressor pumps nothing.
2. A larger pressure difference drives **more leakage** past rings and valves [Kanak p.24: "pressure ratio ↑ → $\eta_v$ ↓; leakage ↑"].
3. Higher ratio → higher **discharge temperature** → hotter cylinder → more **heating of the suction gas**.
4. A low suction pressure means low-density suction gas, so valve pressure drops are a larger fraction of $p_s$.

![Fig. 7: Clearance volumetric efficiency against pressure ratio p_d/p_s from 1 to 20, from η_vc = 1 + C − C(p_d/p_s)^(1/n) with n = 1.1. Three falling straight-ish lines for piston compressors: C = 0.02 (green, about 72% at ratio 20), C = 0.05 (blue, marked 91.4% at ratio 3, 75.7% at ratio 7 and 49.9% at ratio 14), C = 0.08 (red, reaching zero near ratio 17.5). A dashed purple line shows the scroll/screw trend (no clearance volume, leakage only), falling only to about 83% at ratio 20. Higher clearance and higher pressure ratio both cut the volumetric efficiency.](figures/007.png "w=0.65")

> **EXAMPLE 4.1** `[TUTOR-GENERATED]` A reciprocating compressor has a clearance ratio $C=0.05$ and re-expansion index $n=1.1$. (a) Find the clearance volumetric efficiency at pressure ratios 3, 7 and 14. (b) For a displacement of $0.02\ \mathrm{m^3/s}$ and suction specific volume $0.0693\ \mathrm{m^3/kg}$ (R134a saturated vapour at 0 °C), find the mass flow at pressure ratio 3.

**[TUTOR-GENERATED]**

(a) $\eta_{vc}=1.05-0.05\,r^{1/1.1}$:

- $r=3$: $3^{0.9091}=2.7149$ → $\eta_{vc}=1.05-0.1357=$ **0.914 (91.4%)**
- $r=7$: $7^{0.9091}=5.8650$ → $\eta_{vc}=1.05-0.2933=$ **0.757 (75.7%)**
- $r=14$: $14^{0.9091}=11.014$ → $\eta_{vc}=1.05-0.5507=$ **0.499 (49.9%)**

These match the "typical piston compressor" line of Fig. 6 (72% at 7, 50% at 14): a clearance of about 5% explains most of the slide's curve.

(b) $\dot m=\eta_v\dot V_{disp}/v_s=0.914\times0.02/0.0693=$ **0.264 kg/s**. Use the **suction** specific volume, not the discharge one.

### Capacity control

Loads vary, so the compressor capacity must follow [Hundy §4.5; Ameen §16.1]:

- **On–off cycling** (small units, thermostat).
- **Variable speed**: two-speed motors or an inverter (variable-frequency drive).
- **Cylinder unloading**: suction valves of some cylinders held open (oil-pressure or solenoid operated), or **blocked suction**; also gives an unloaded start.
- **Cylinder bypass**: discharge of some cylinders returned to suction.
- **Hot-gas bypass**: some discharge gas fed back to the suction or evaporator inlet through a solenoid or regulating valve (wasteful, but keeps the evaporator pressure up).
- **Screw**: slide valve (10–100%); **centrifugal**: inlet guide vanes or suction damper (to 10–15%) and speed control; **scroll**: inverter or axial scroll separation.

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Why does volumetric efficiency decrease with pressure ratio for compressor?” (2022-23). *Read:* [volumetric efficiency and pressure ratio](#comp-voleff). *Answer:* [Solution 4.6](#q-4-6).

## 4.5 Rotary compressors: scroll, vane, rolling piston and screw ★

### Scroll compressor {#comp-scroll}

**Construction.** Two interleaved spiral (involute) **scrolls**: one **fixed** (stationary), the other **orbiting**. The orbiting scroll is driven by an eccentric (crank) on the motor shaft and kept from rotating by an anti-rotation (Oldham) coupling, so it **orbits without rotating** [Hundy §4.12; Kanak p.20]. The scrolls touch along several contact (sealing) lines, which divide the space between them into crescent-shaped pockets. Suction gas enters at the **rim**; the **discharge port is at the centre** of the fixed scroll. Almost all scrolls are hermetic.

**Working principle** (Fig. 8 and Fig. 9) [Aloke p.33]:

1. **Suction**: as the orbiting scroll moves, an outer pocket opens to the suction gas at the periphery and fills (1st revolution).
2. **Sealing**: the orbiting scroll closes the pocket by a new contact line; compression starts.
3. **Compression**: on further orbiting the pocket is carried inward along the spiral and its volume shrinks continuously, so the pressure rises ("internal compression"; 2nd to about 3.5th revolution).
4. **Discharge**: when the pocket reaches the centre, the discharge port is uncovered and the high-pressure gas leaves (about 3.5th to 4.5th revolution).

Pockets work in symmetric pairs, and all six pockets are at different stages at once, so suction, compression and discharge go on **simultaneously and continuously**: the flow is smooth, with little pulsation, noise or vibration.

![Fig. 8: Scroll compression sequence (left, four numbered stages): 1, interaction of an orbiting spiral and a stationary spiral generates the compression process; gas enters an outer pocket (shaded); 2, the pocket is sealed off and compression starts; 3, the pocket is reduced in size; 4, as the pocket reaches the centre the discharge port is uncovered; fifth sketch: during the process all six pockets are in various stages of compression. Right, colour cycle of six positions round a loop: swing (orbiting) scroll and fixed scroll; intake starts, intake finishes (compression starts), compression finishes (discharge starts), discharge port; colour key: intake in the 1st rotation (blue/green), compression in the 2nd to 3.5th rotation (green/yellow), discharge in the 3.5th to 4.5th rotation (orange/red). [Aloke p.33, from Hundy Fig. 4.25]](figures/008.jpg "w=0.85")

![Fig. 9: Exam sketch of a scroll compressor at four crank angles (0°, 90°, 180°, 270°). In each panel the black spiral is the FIXED scroll and the blue spiral is the ORBITING scroll, displaced by the orbit radius in the direction of the crank angle; it orbits without turning. White dots mark the contact (sealing) lines where the two scrolls touch. Light blue: suction gas entering at the rim inside the dashed housing circle. The sealed crescent pockets between the walls are coloured by size: yellow (largest, outer, lowest pressure) through orange to red (smallest, at the centre, highest pressure). The red dot at the centre is the discharge port. From panel to panel the pockets move inward and shrink.](figures/009.jpg "w=1.0")

**Why the scroll has the highest volumetric efficiency** (Fig. 6) [Hundy §4.12]:

1. **No clearance volume, so no re-expansion loss**: the pocket is swept completely into the discharge port.
2. **No suction valve** and usually no discharge valve: no valve pressure-drop and no valve leakage.
3. **Contacting seals**: the flanks and tips of the scrolls actually touch (the slow orbiting motion allows it), unlike a screw that runs with clearances; so leakage is very low.
4. **Small pressure difference across each seal**: compression is shared between several pockets in series, so each contact line holds only part of the total pressure difference.
5. **No direct path from discharge to suction**: the discharge is at the centre, the suction at the rim, so leakage and heat transfer to the suction gas are small.
6. Smooth continuous compression; the flat $\eta_v$ curve also gives more capacity at extreme (high-ratio) conditions.

Other advantages: quiet, very few moving parts, very reliable, tolerant of liquid floodback, unloaded start possible [Hundy §4.12].

### Sliding-vane and rotary-vane compressors {#comp-vane}

Aloke sir's slide puts two different machines under one title, "Sliding and Rotary Vane Compressor" (Fig. 10) [Aloke p.34]; answer both.

**(a) Multi-vane rotary (sliding-vane) compressor.** A cylindrical **casing** contains an **eccentrically mounted rotor** with radial **slots** in which several **vanes** (blades) slide freely. As the rotor turns, **centrifugal force** (helped by springs or oil pressure) throws the vanes outward so that their tips stay in contact with the casing wall. Each pair of vanes traps a pocket of gas [Kanak p.21; Hundy §4.13]:

1. On the side where the rotor moves away from the casing, the pockets **grow**: gas is drawn in through the **suction port**.
2. After the trailing vane passes the suction port the pocket is sealed.
3. Moving round towards the point where rotor and casing nearly touch, the pocket **shrinks**: the gas is compressed.
4. The pocket opens to the **discharge port** and the compressed gas leaves.

Large rotary-vane machines (eight or more vanes) need no suction or discharge valves and have no clearance volume, but the vane-tip thrust limits them to low pressure ratios; they are used as booster (low-stage) compressors [Hundy §4.13].

**(b) Rolling-piston (fixed-vane) compressor.** A **roller (rolling piston)** is mounted on the **eccentric** of the shaft inside a **cylindrical housing** and rolls round the cylinder wall, touching it along one line. One **stationary sliding vane (blade)**, held in a slot of the housing and pressed against the roller by a **spring**, divides the crescent space between roller and cylinder into a suction side and a compression side [Kanak p.21; Hundy §4.13]:

1. As the contact line moves away from the vane, the space behind it (suction side) grows and gas enters through the **suction port** beside the vane.
2. The space ahead of the contact line (between it and the other side of the vane) shrinks and compresses the gas trapped from the previous revolution.
3. When the pressure exceeds discharge pressure the **discharge (reed) valve** opens and the gas leaves on the other side of the vane.

Suction and compression happen at the same time, once per revolution. Rolling-piston compressors need a discharge valve. They are made in huge numbers for refrigerators, room and split air conditioners, up to ≈ 15–22 kW.

![Fig. 10: Course figure. Left: three-dimensional cut-away of a multi-vane rotary compressor; the green rotor carries eight red sliding vanes; label 'Gas is trapped in between successive sliding vanes'; suction on the left, discharge on the right; yellow arrow showing the direction of rotation. Right: rolling-piston compressor section: discharge valve, sliding vane (spring-loaded, circled), suction, cylindrical housing, rolling piston, eccentric shaft. [Aloke p.34]](figures/010.jpg "w=0.8")

![Fig. 11: Exam sketch of the two vane machines. (a) Multi-vane rotary compressor: cylinder (casing) with an eccentric rotor (centre offset by e, touching the casing at the bottom on a seal line); six sliding vanes in rotor slots thrown out against the casing by centrifugal force; rotation anticlockwise. Pockets on the right side grow (light blue, suction) as they pass the suction port on the right; pockets on the left shrink (orange to red, compression) and open to the discharge port on the left. (b) Rolling-piston compressor: roller on the eccentric of the shaft, rolling clockwise round the cylinder wall with one contact line (lower right); a stationary spring-loaded sliding vane (blade) at the top presses on the roller and separates the suction space (light blue, right of the vane, growing, fed by the suction port) from the compression space (orange, left of the vane, shrinking, leaving through the discharge reed valve and port).](figures/011.jpg "w=0.95")

| | Multi-vane rotary | Rolling piston |
|---|---|---|
| Vanes | several, **rotate with the rotor** in rotor slots | one (or two), **stationary** in the housing slot |
| Held against the wall by | centrifugal force (and oil) | spring |
| Rotating part | eccentric rotor | roller rolling on the shaft eccentric |
| Valves | none (large types); small "rotaries" have a discharge valve | discharge valve needed |
| Clearance volume | none | very small |
| Use | low pressure ratios; booster stage | domestic refrigerators, room/split AC, ≤ ≈ 22 kW |

Compared with a hermetic reciprocating compressor of the same duty, a small rotary is about half the weight and size, has about a quarter of the moving parts and a higher volumetric efficiency [Ameen §16.1].

### Screw compressor

**Construction.** Two **helical rotors** mesh in a close-fitting casing: a **male rotor** with convex lobes (usually 4) and a **female rotor** with concave flutes (usually 6). The male rotor is driven; **synchronising (timing) gears** or the oil film keep the rotors in step; a **shaft seal** is fitted on open machines. Oil is injected along the rotors for sealing, cooling and lubrication, and separated from the discharge gas afterwards [Aloke p.32; Hundy §4.11].

**Working principle.** As the rotors turn, the space between two lobes comes opposite the **suction port** at one end and fills with gas. Further rotation seals this pocket from the suction port and carries it along the rotors; the meshing lobe of the male rotor moves progressively into the female flute and **reduces the pocket volume** ("progressive overlapping of the lobes") until the pocket reaches the **discharge port** at the other end [Aloke p.32]. Compression is **continuous** (no valves, no clearance volume). The volume reduction is fixed by the geometry (**built-in volume ratio**).

**Capacity control.** A **slide valve** in the casing wall, moved toward the discharge end, opens a short-cut recirculating passage back to suction, so part of the trapped gas is returned before it is compressed. Control is **continuous and step-less**, from 100% down to ≈ 10% [Aloke p.32; Kanak p.19].

![Fig. 12: Twin-screw compressor structure. Left: section drawing with synchromesh (timing) gear at the left end, female rotor (top), male rotor (bottom), shaft seal at the drive end. Right: cut-away photograph of a twin-screw compressor showing the meshing helical rotors, bearings and casing. [Aloke p.32]](figures/012.jpg "w=0.7")

![Fig. 13: Exam sketch of a twin-screw compressor. (a) Plan view: casing containing the male rotor (4 convex lobes, top) and female rotor (6 concave flutes, bottom), drawn as helical lines; suction port at the top of the left end (blue arrow in, low pressure); discharge port at the bottom of the right end (red arrow out, high pressure); drive shaft with shaft seal on the left; timing (synchromesh) gears on the right. A row of coloured blocks between the rotors shows one trapped pocket moving axially from suction to discharge and shrinking (light blue, yellow, orange, red). A slide valve under the rotors, moved toward the discharge, opens a bypass to suction for capacity control. (b) End section: male rotor with four lobes meshing with the female rotor's six flutes; arrows show the rotors turning in opposite directions.](figures/013.jpg "w=0.95")

Screw compressors are the workhorse of industry (Kanak vai's note says "most popular, 80% industry" [Kanak p.18]): high pressure ratio in one stage (up to ≈ 20–25), few wearing parts, tolerant of some liquid, good part-load control.

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Describe the working principle of a scroll compressor” (2016-17; “with proper schematic diagram” 2020-21; “with necessary schematic diagram” 2022-23). *Read:* [scroll compressor](#comp-scroll). *Answer:* [Solution 4.4](#q-4-4), [Solution 4.5](#q-4-5), [Solution 4.6](#q-4-6).
> - “Find out the reasons due to which scroll compressor attains maximum volumetric efficiency” (2022-23), with §4.4 for the losses. *Read:* [scroll compressor](#comp-scroll). *Answer:* [Solution 4.6](#q-4-6).
> - “Describe the working principle of rotary sliding vane type compressor” (2017-18); “… of a sliding and rotary vane compressor with proper schematic diagram” (2021-22, 2023-24). *Read:* [sliding-vane and rotary-vane compressors](#comp-vane). *Answer:* [Solution 4.7](#q-4-7), [Solution 4.8](#q-4-8), [Solution 4.9](#q-4-9).

## 4.6 Centrifugal compressor ★

### Construction and components {#comp-cent-construction}

A centrifugal compressor is "a rotor located inside a special chamber" [Aloke p.35]. One stage has (Fig. 14, Fig. 15) [Aloke p.35; Ameen §16.1; Hundy §4.14]:

1. **Suction (inlet) pipe and inlet guide vanes (IGV)**: adjustable vanes ahead of the eye that pre-swirl or throttle the entering gas; they are the main **capacity control**.
2. **Impeller (rotor)**: a wheel carrying curved (usually backward-curved) **blades**, keyed to a shaft that turns at high speed (≈ 10 000 rpm for AC duty, through step-up gears or a high-speed motor). Gas enters **axially** at the **eye** and is thrown **radially outward** between the blades.
3. **Diffuser**: an annular passage round the impeller (vaneless or vaned) whose flow area increases with radius, so the gas slows down and its pressure rises.
4. **Volute (scroll) casing**: a spiral passage of steadily increasing area that collects the gas from the diffuser, converts more kinetic energy to pressure and leads it to the **discharge**.
5. **Shaft, bearings (oil-lubricated or magnetic), shaft seal** (open type), **drive motor** (open or semi-hermetic, cooled by refrigerant or air), and for multi-stage machines, return channels leading to the next impeller.

### Working principle {#comp-cent-working}

1. The impeller does work on the gas: it raises the gas's **tangential velocity** (kinetic energy) and, through the centrifugal (radial) pressure gradient, also some of its static pressure.
2. In the diffuser and volute the flow area grows, so the **velocity falls and the static pressure rises** (energy equation: pressure energy + kinetic energy ≈ constant, with no work input) [Kanak p.23: "volute casing → A↑ V↓ P↑"].
3. The pressure rise depends on the **tip speed** and gas density; with low-density refrigerant vapours one stage gives a pressure ratio of about 3–5, so two or more impellers in series are used for larger lifts.

![Fig. 14: Centrifugal compressor (course figure). Left: cut-away of an oil-free magnetic-bearing centrifugal compressor: volute, cooling ducts, permanent-magnet synchronous motor, auxiliary bearing, impeller, radial and axial active magnetic bearings, auxiliary (touchdown) bearing. Right: flow through one stage: refrigerant intake enters axially at the eye (green pipe), is flung outward by the impellers on the impeller wheel (purple arrows), collects in the spiral volute casing and leaves at the refrigerant exhaust. [Aloke p.35]](figures/014.jpg "w=0.6")

![Fig. 15: Exam sketch of a centrifugal stage. (a) Front section: refrigerant enters the EYE axially at the centre; the IMPELLER with twelve backward-curved blades rotates anticlockwise at about 10 000 rpm and flings the gas outward (purple arrows); the DIFFUSER ring (dashed circle) round the impeller, where area grows, velocity falls and pressure rises; the VOLUTE casing, a spiral passage whose area grows round the circumference, collects the gas and leads it through the volute tongue to the tangential DISCHARGE pipe (to the condenser, top right). Inlet guide vanes sit in the inlet pipe ahead of the eye. (b) Qualitative plot of static pressure p (solid red) and absolute velocity V (dashed blue) at five stations: suction pipe, inlet guide vanes/eye, impeller tip, diffuser exit, volute exit. In the impeller both p and V rise (work input); in the diffuser and volute V falls and p keeps rising (no work, kinetic energy converted to pressure).](figures/015.jpg "w=0.95")

> **TRAP: where the pressure rises.** The slide says the gas "is forced through the narrow outlet opening, thus increasing its pressure" [Aloke p.35]. Pressure is not raised by a narrowing: a converging passage speeds the gas up and lowers its pressure. The static pressure rises in the **diverging diffuser and volute**, where the area increases and the velocity falls (Kanak vai's note has it right: "A↑ V↓ P↑", Kanak p.23).

### When a centrifugal compressor suits air conditioning {#comp-cent-ac}

The slide's reasons: it is "suitable for variable loads, has few moving parts, and is economical to operate" [Aloke p.35]. In full:

1. **Large capacity.** It is economical only above ≈ 270–350 kW (≈ 80–100 TR) up to 36 000 kW (Fig. 2): central plants of large buildings, hospitals, airports, district cooling.
2. **Low pressure ratio.** AC works at evaporating ≈ 5 °C and condensing ≈ 40 °C. For R134a this is 349.8 kPa to 1016.6 kPa, a ratio of 2.9, which one or two centrifugal stages give easily. Low-temperature duty (high ratio) does not suit it.
3. **Large volume flow** of low-density vapour (R134a, R123, R1233zd, R1234ze): a piston machine for this flow would be enormous.
4. **Variable load**: inlet guide vanes and speed control give smooth, step-less capacity from 100% to ≈ 10–20%, with good part-load efficiency.
5. **Water chillers**: it is built as a factory package with a shell-and-tube flooded evaporator and a water-cooled condenser, which keeps the condensing pressure low and steady (a centrifugal is sensitive to head pressure).
6. Few moving parts, no valves or piston rings, little vibration, long life, oil-free operation possible (magnetic bearings).

### Centrifugal vs reciprocating {#comp-cent-vs-recip}

| | Centrifugal (dynamic) | Reciprocating (positive displacement) |
|---|---|---|
| Principle | gives kinetic energy, converts it to pressure | traps a volume and reduces it |
| Flow | continuous, smooth, no pulsation | intermittent, pulsating |
| Capacity | 270–36 000 kW only | 0.25–1000 kW |
| Volume flow | very large | small to moderate |
| Pressure ratio per stage | low (≈ 3–5); many stages for high lift | high (≈ 8–10 per stage) |
| Speed | very high (≈ 10 000 rpm, gears) | low to moderate (≈ 1450–2900 rpm) |
| Moving parts, wear | few; no valves, rings | many: pistons, rings, valves, crank |
| Lubrication | bearings only; refrigerant can stay oil-free | oil in contact with refrigerant |
| Capacity control | IGV and speed, step-less, 10–100% | on–off, unloading steps, speed |
| Head-pressure sensitivity | capacity falls sharply if the condensing pressure rises; **surge** below the stable flow | capacity nearly independent of head |
| Size per kW, vibration | compact, light, little vibration, needs light foundations | bulky, heavy, vibrates, heavy foundations |
| Refrigerants | low-pressure, high-volume (R134a, R123, R1233zd) | any, including ammonia and high-pressure gases |
| Cost | high first cost; cheap per kW only at large sizes | low first cost at small sizes |

**Advantages of the centrifugal over the reciprocating:** step-less capacity control and good part-load efficiency; compact for its capacity; few moving parts, so less maintenance and long life; no pulsation, little vibration; oil-free refrigerant possible; direct drive by motor or steam turbine.

**Disadvantages:** uneconomic below ≈ 270 kW; low pressure ratio per stage, so many stages for high lift; **surge** at low flow or high head (flow reverses back and forth, stressing impeller and motor); capacity very sensitive to condensing pressure; very high speed needs gears and precise balancing; only suits low-pressure, high-volume refrigerants; high first cost and skilled service [Hundy §4.14; Ameen §16.1].

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “What are the advantages and disadvantages of centrifugal compressor over reciprocating compressors?” (2011-12). *Read:* [centrifugal vs reciprocating](#comp-cent-vs-recip). *Answer:* [Solution 4.1](#q-4-1).
> - “When centrifugal compressor is suitable for air-conditioning application?” (2015-16). *Read:* [when a centrifugal suits air conditioning](#comp-cent-ac). *Answer:* [Solution 4.3](#q-4-3).
> - “Describe a centrifugal compressor and its different components with neat sketch” (2015-16). *Read:* [construction and components](#comp-cent-construction), [working principle](#comp-cent-working). *Answer:* [Solution 4.3](#q-4-3).

## 4.7 Condensers: condensation and types ★

**Condensation process.** When saturated vapour touches a surface colder than its saturation temperature it condenses [Aloke p.37]:

1. **Film-wise**: the condensate wets the surface and forms a continuous film; the film is a thermal resistance.
2. **Drop-wise**: the surface is not wetted; the condensate forms droplets that fall off. Drop-wise has the **higher heat-transfer coefficient** because more bare surface is exposed to the vapour.

**Stages in a condenser** [Aloke p.38]: (1) **de-superheating** of the hot gas; (2) **condensing** at the condensing temperature, releasing the latent heat; (3) **sub-cooling** of the liquid. Sub-cooling uses only a small part of the surface, so one average coefficient is used and condensation is taken to happen at $T_c$ (Fig. 19).

**Types by cooling medium** [Aloke p.39]:

1. **Water-cooled**: double-tube (tube-in-tube), shell-and-tube, shell-and-coil.
2. **Air-cooled**: natural convection (wire-and-tube, domestic) or forced convection (fan).
3. **Evaporative**: air and water together.

### Water-cooled condensers

- **Shell-and-tube** (the commonest, all sizes): water flows through the tubes in several passes (end-cover baffles), refrigerant vapour condenses on the outside of the tubes in the shell and drains to the bottom, which can act as a receiver. Copper (often low-finned) tubes for halocarbons, steel for ammonia; heads removable for tube cleaning [Ameen §16.2; Hundy §6.4].
- **Shell-and-coil**: a welded shell with a continuous water coil inside; cheap and compact, but the coil is hard to clean or repair.
- **Double-tube (tube-in-tube)**: water in the inner tube, refrigerant in the annulus, in **counter-flow** so the coldest water meets the leaving liquid and gives the most sub-cooling; small capacities [Aloke p.40].

![Fig. 16: Water-cooled condenser (hand sketch in Kanak vai's note): a rectangular shell; hot refrigerant vapour enters through a nozzle at the top and liquid refrigerant leaves through a nozzle at the bottom; inside, a serpentine three-pass water coil with cold water in at the lower left and hot water out at the upper left. [Kanak p.27]](figures/016.png "w=0.45")

The choice of a water-cooled condenser depends on: quality and availability of water, space, water-treatment cost and noise [Aloke p.42]. Its advantages: easy to operate, needs less surface area, and low compressor energy (lower condensing temperature) [Aloke p.42]. Disadvantages: water treatment, a cooling tower and pumps, more parts and higher overall cost [Kanak p.27].

## 4.8 Air-cooled condenser and the hot-day statement ★

### Construction and working {#comp-aircond}

An air-cooled condenser is a **finned coil** (copper tubes with aluminium plate fins, outside-to-inside area ratio 5:1 to 10:1) through which the refrigerant flows, and a **fan** (propeller or axial) that blows or draws outdoor air across the fins [Hundy §6.3]. In the slide's unit (Fig. 17) [Aloke p.43]:

1. Hot high-pressure vapour from the compressor enters the **top header** of the **condensing coil**.
2. The **propeller fan** draws ambient air through the coil. The air takes the heat: first the superheat, then the latent heat; the refrigerant condenses and drains **downward by gravity** (inlet at the top, outlet at the bottom).
3. The liquid collects in the **liquid accumulator** (header) and passes through a separate **sub-cooling coil** at the bottom, where the coldest entering air sub-cools it.
4. The warm air (≈ 9–12 K warmer than ambient) is discharged through a **damper**, which can throttle the air flow to control the head pressure in cool weather.
5. Liquid leaves to the receiver / expansion valve.

![Fig. 17: Air-cooled condenser (course figure): ambient air enters from the left through the finned condensing coil (refrigerant in through the header at the top, liquid accumulator header and a separate sub-cooling coil at the bottom), passes through a propeller fan and a motorised damper, and leaves to the right. Refrigerant lines at the bottom left: hot vapour up into the top header, liquid down out of the sub-cooling coil. [Aloke p.43]](figures/017.jpg "w=0.6")

![Fig. 18: Hand sketch of an air-cooled condenser (note): hot refrigerant vapour rises in a pipe and enters the top of a rectangular serpentine condensing coil, leaving at the bottom as cold refrigerant liquid; normal ambient air (four arrows) enters from the left, passes through the coil, then through a boxed propeller fan, and leaves on the right as hot air. [Kanak p.28]](figures/018.png "w=0.5")

In a split or window AC the condenser is the outdoor coil with a propeller fan; in large plant it is a roof-mounted "remote air-cooled condenser" with several fans and coil sections.

### Characteristics {#comp-aircond-char}

[Aloke p.44; Ameen §16.2]

1. Compact, easy and economical to install; no water, pumps, piping or cooling tower.
2. **Flexibility in changing capacity by varying air flow** (fan cycling, fan speed, dampers).
3. **Hot air may be disposed of easily** to the outdoors.
4. **Easy to clean** the fin and tube surface by blowing air; surfaces visible.
5. Requires less maintenance; no water treatment, scaling, freezing or Legionella risk.
6. **Higher power requirement per ton of refrigeration** (higher head pressure: 10–20% above a water-cooled system; condensing temperature 5–8 K higher for the same medium temperature).
7. **On days when maximum cooling is needed, the least is available.**
8. Large air volumes: ≈ 0.093 kg/s of air per kW rejected, so large fans, noise and space; practical limit ≈ 70 kW in hot climates for a single unit [Hundy §6.3; Ameen §16.2]. Shorter compressor life.

### "On days when maximum cooling is needed, the least is available" (Bangladesh) {#comp-hotday}

The heat-rejection capacity of an air-cooled condenser depends on the difference between the condensing temperature and the **dry-bulb** temperature of the outdoor air: $Q_c\approx(UA)(T_c-T_{db})$ [Hundy §6.3].

1. **Demand peaks on the hottest days.** In Dhaka the pre-monsoon and summer months (April–September) have outdoor dry-bulb temperatures of 35–40 °C with strong sun, so the building cooling load (conduction, solar gain, hot humid ventilation air) is at its maximum.
2. **The cooling medium is hottest exactly then.** The air entering the condenser is at 35–40 °C (higher still near hot roofs, or when units recirculate each other's hot discharge air on crowded walls). The temperature difference $T_c-T_{db}$ for a given $T_c$ falls, so the coil can reject less heat.
3. **The system responds by raising the condensing temperature and pressure** until the reduced difference again rejects the heat (Fig. 19, Example 4.2). Higher head pressure means:
   - a higher pressure ratio, so lower volumetric efficiency and lower refrigerant mass flow (§4.4);
   - a smaller refrigerating effect per kg (liquid enters the expansion valve hotter, more flash gas);
   - more compressor work per kg.
   So **capacity falls and power rises** (lower COP) on the very days the building needs the most cooling. In extreme cases the high-pressure cut-out trips the compressor.
4. **High humidity does not help an air-cooled condenser**: it rejects heat by sensible heating of air, governed by the dry bulb. A water-cooled or evaporative condenser instead works against the **wet-bulb** temperature (≈ 27–29 °C in a Dhaka summer), several kelvin lower than the dry bulb, which is why the statement is made for air-cooled condensers.

Remedies: size the condenser for the peak ambient (40 °C or more in Bangladesh), shade it and give it free air (avoid recirculation), keep the fins clean, or use water-cooled/evaporative condensers for large plant.

![Fig. 19: Temperature along an air-cooled condenser coil, from refrigerant inlet (left) to outlet (right), for two days. Solid lines: refrigerant temperature, falling steeply in the de-superheating zone (pink band), flat at the condensing temperature through the long middle zone (latent heat), then falling in the short sub-cooling zone (blue band): T_c = 50 °C on a 35 °C day (blue) and T_c = 56 °C on a 40 °C hot day (red). Dashed lines: air temperature rising by 11 K through the coil, 35 → 46 °C and 40 → 51 °C. The hotter air forces the whole refrigerant curve, and so the condensing pressure, upward.](figures/019.jpg "w=0.7")

> **EXAMPLE 4.2** `[TUTOR-GENERATED, after Hundy Example 6.1]` An air-cooled R134a condenser rejects 12 kW at a condensing temperature of 50 °C when the outdoor air is at 35 °C. On a 40 °C Dhaka afternoon the heat to be rejected rises to 12.8 kW. Taking the condenser rating (kW per K of $T_c-T_{amb}$) as constant, find the new condensing temperature and the rise in condensing pressure.

**[TUTOR-GENERATED]**

Rating: $UA=\dfrac{12}{50-35}=$ **0.8 kW/K**.

Hot day: $T_c-T_{amb}=\dfrac{12.8}{0.8}=16$ K, so $T_c=40+16=$ **56 °C**.

R134a saturation table (data book p.8): $p_{sat}(50\ °\mathrm{C})=1317.9$ kPa, $p_{sat}(56\ °\mathrm{C})=1528.2$ kPa. The head pressure rises by **210.3 kPa (16.0%)**. With the evaporator at 5 °C (349.8 kPa) the pressure ratio rises from $1317.9/349.8=3.77$ to $1528.2/349.8=$ **4.37**, so the volumetric efficiency and capacity fall while the work per kg rises: the hot-day statement in numbers.

### Air-cooled vs water-cooled condenser {#comp-air-vs-water}

| | Air-cooled | Water-cooled |
|---|---|---|
| Cooling medium, limit | outdoor air, limited by the **dry-bulb** temperature | water (cooling tower, river, well), limited by the **wet-bulb** (tower) or source temperature |
| Heat-transfer coefficient | low (air side); large finned surface | high (water film); much smaller surface |
| Condensing temperature / head pressure | higher: 10–20% higher head, $T_c$ ≈ 15–20 K above ambient | lower: $T_c$ ≈ 5–8 K above leaving water |
| Compressor power per TR | higher | lower ("low energy requirement for the compressor") |
| Ancillaries | fan only | pumps, cooling tower, water piping, treatment |
| Water use | none | evaporation, drift and blow-down make-up |
| Maintenance | low: blow or wash the fins | high: water treatment, tube cleaning, scaling, corrosion, freeze protection |
| Installation, first cost | compact, easy, cheap, outdoors | more parts, higher first cost, needs plant room |
| Capacity range | small to medium (window, split, packaged, ≤ ≈ 70 kW per unit in hot climates; multi-fan units larger) | all sizes; standard for large chillers |
| Capacity control | easy: vary air flow (fans, dampers) | water flow or tower fan control |
| Noise | fan noise outdoors | quieter at the unit (tower has its own fan) |
| Hot weather | **capacity least on the hottest days** | far less affected; water is cooler than air at peak load |
| Life | shorter compressor life (high head) | longer |

[Aloke pp.42–44; Kanak pp.27–28; Ameen §16.2; Hundy §6.3–6.4]

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Give the comparison of air-cooled condenser and water cooled condenser” (2011-12). *Read:* [air-cooled vs water-cooled](#comp-air-vs-water). *Answer:* [Solution 4.10](#q-4-10).
> - “Describe with neat sketches an air-cooled condenser used in an air-conditioning system” (2015-16, 2016-17); “Describe an air-cooled condenser used in air conditioning system with proper schematic diagram” (2022-23, 2023-24). *Read:* [construction and working](#comp-aircond). *Answer:* [Solution 4.11](#q-4-11), [Solution 4.12](#q-4-12), [Solution 4.13](#q-4-13), [Solution 4.14](#q-4-14).
> - “What are the characteristics of an air-cooled condenser?” (2016-17). *Read:* [characteristics](#comp-aircond-char). *Answer:* [Solution 4.12](#q-4-12).
> - “Justify the statement ‘On days when maximum cooling is needed, the least is available’ with the context of climate of Bangladesh” (2022-23, 2023-24). *Read:* [the hot-day statement](#comp-hotday). *Answer:* [Solution 4.13](#q-4-13), [Solution 4.14](#q-4-14).

## 4.9 Evaporative condenser and cooling tower ★

### Cooling tower

"A cooling tower is a device in which recirculating condenser water from a condenser or cooling coils is evaporatively cooled by contact with atmospheric air. It consists of a fan, a heat-transfer medium or fill, a water basin, a water distribution system and an outer casing" [Aloke p.46]. Types by fan position and flow arrangement: **counter-flow induced draft** (fan at the top pulls air up through the fill against the falling water), **cross-flow induced draft** (air enters the sides and crosses the falling water at 90°), **counter-flow forced draft** (a centrifugal fan at the bottom pushes air in) [Aloke pp.47–49].

Terms [Aloke p.50]: **range** = water temperature entering − leaving the tower; **approach** = water leaving − wet-bulb of entering air; **blow-down** = water drained periodically to limit dissolved solids; **make-up** = water added to replace evaporation, drift and blow-down.

### Evaporative condenser: construction and working {#comp-evapcond}

An evaporative condenser puts the **refrigerant coil itself** inside a cooling-tower-like casing: it combines condenser and cooling tower in one unit [Kanak p.31; Ameen §16.2]. Components and functions (Fig. 20, Fig. 21):

| Component | Function |
|---|---|
| **Condensing coil** (bare or finned serpentine tubes) | carries the refrigerant: hot vapour in at the top, condensed liquid out at the bottom to the receiver |
| **Water distribution system** (spray header and nozzles, or troughs) | sprays recirculated water evenly over the coil so the whole outer tube surface stays wetted |
| **Recirculating pump** and water piping | lifts water from the basin to the spray header; water flow ≈ 80–160 times the evaporation rate |
| **Water basin (sump)** | collects the falling water; holds the make-up **float valve**, overflow and **bleed-off (blow-down)** connection; may have a heater against freezing |
| **Fan** (centrifugal, forced draft; or axial, induced draft) | moves ambient air through the unit: ≈ 0.06 kg/s per kW rejected; air and water mass flows are roughly equal |
| **Drift eliminators** | baffles at the air outlet that catch entrained droplets, cutting water loss (drift) and spray carry-over |
| **Fill (in some designs, below the coil)** | extra wetted surface that pre-cools the water before it falls into the basin |
| **Casing, louvres, access doors** | enclose the unit and admit the air |
| **Receiver and purge** | store the liquid refrigerant; remove non-condensables |

**Working principle.** The recirculated water forms a thin film on the outside of the tubes. Heat flows from the condensing refrigerant through the tube wall into the water film; air moving over the film **evaporates a small part of the water** (≈ 0.41 g/s per kW, from a latent heat of ≈ 2430 kJ/kg [Hundy §6.5]), and this evaporation carries the heat away. Because the film is cooled by evaporation, its temperature approaches the **wet-bulb** temperature of the air, not the dry bulb, so the condensing temperature is lower than with an air-cooled condenser. The unevaporated water falls to the basin and is pumped back; make-up replaces evaporation, drift and blow-down.

![Fig. 20: Evaporative condenser (course figure): refrigerant vapour enters a serpentine coil at the top (red, cooling to blue toward the bottom) and leaves as fluid at the lower left; the water distribution system sprays water over the coil from a header fed by a pump from the basin at the bottom (blue pipe on the right); a fill pack below the coil; air enters at the bottom on all four sides, rises through the fill and the coil, passes the drift eliminators at the top and leaves as warm air. [Aloke p.45]](figures/020.jpg "w=0.55")

![Fig. 21: Exam sketch of a counter-flow forced-draft evaporative condenser. Casing with a centrifugal fan in a box at the lower left that pushes ambient air into the bottom of the casing; the air rises (blue arrows) through falling water droplets and the refrigerant coil (red serpentine, hot vapour in at the top right from the compressor, condensed liquid out at the bottom left to the receiver and expansion valve); spray header and nozzles above the coil wet it; drift eliminators (zigzag baffles) above the sprays catch droplets; warm, nearly saturated air leaves at the top. The water basin (sump) at the bottom feeds a recirculating pump P, whose line rises on the right to the spray header; make-up water (float valve) and bleed-off/blow-down connect to the basin. Side note: counter-flow, air rises up through the coil while the water falls; heat path refrigerant → tube → water film → evaporation into air.](figures/021.jpg "w=0.75")

**Counter-flow forced draft**: the fan is at the **air inlet** (bottom side) and **pushes** air into the casing; the air then rises **against** the falling water (counter-flow), so the coldest water and driest air meet at the bottom and the driving difference is kept large throughout. (In an induced-draft unit the fan sits at the top outlet and pulls the air.)

**Benefits of a forced-draft evaporative condenser** [Kanak p.31; Hundy §6.6; Ameen §16.2]:

1. Heat rejection by evaporation gives **more cooling capacity** per unit surface and a **lower condensing temperature** (wet-bulb limited), so less compressor power.
2. **Less fan power** than an air-cooled condenser of the same duty (much less air), and compared with a separate tower + condenser, no condenser-water pump head.
3. **Saves space**: condensing coil and cooling tower in one piece; no separate condenser-water circuit.
4. Uses both water and air, so it is efficient, with **water consumption far below** a once-through water-cooled condenser (only the evaporated fraction).
5. Forced-draft specifics: the fan and motor sit in **dry, cool entering air**, away from the hot, wet discharge, so they last longer and are easy to reach; **centrifugal fans** overcome the high air resistance of coil and eliminators, and are **quieter**; the unit can be ducted and installed indoors.

Drawbacks: water treatment and scaling of the coil, freezing in winter, drift, Legionella control, and higher maintenance than air-cooled.

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Describe with neat sketches a counter-flow forced draft evaporative condenser. What are the benefits of using forced draft condenser?” (2017-18). *Read:* [evaporative condenser](#comp-evapcond). *Answer:* [Solution 4.15](#q-4-15).
> - “Describe the working principle of an evaporative condenser with necessary diagram. Identify the major components of an evaporative condenser and mention their functions” (2020-21). *Read:* [evaporative condenser](#comp-evapcond). *Answer:* [Solution 4.16](#q-4-16).

## 4.10 Expansion devices: functions and types ★

**Functions** [Aloke p.51]:

1. **To meter** liquid refrigerant from the liquid line into the evaporator at a rate equal to the rate at which it is boiling off in the evaporator.
2. **To maintain the pressure difference** between condenser and evaporator, so that the refrigerant boils at the desired low pressure (low temperature) in the evaporator while it condenses at high pressure in the condenser.

The liquid leaves as a low-pressure, low-temperature mixture (roughly 80% liquid, 20% flash vapour) [Ameen §16.4].

**Types:** capillary tube (fixed restriction); hand expansion valve; automatic (constant-pressure) expansion valve; thermostatic expansion valve; thermo-electric expansion valve; electronic expansion valve; high-side and low-side float valves [Aloke p.51; Ameen §16.4].

| Device | Senses / controls | Typical use |
|---|---|---|
| Capillary tube | nothing (fixed bore and length) | domestic refrigerators, room AC, small hermetic units |
| Hand expansion valve | operator sets the opening | large plant, bypass round automatic valves |
| Automatic expansion valve (AXV) | **evaporator pressure** (constant) | small steady-load units, water coolers |
| Thermostatic expansion valve (TXV) | **suction superheat** (constant) | most DX evaporators (most widely used) |
| Thermo-electric valve | thermistor at evaporator outlet (dry gas or liquid) | DX evaporators |
| Electronic expansion valve (EXV) | superheat from P and T sensors, via a controller | modern AC, VRF, chillers, display cases |
| Low-side float valve | **liquid level** in the evaporator / surge drum | flooded evaporators, many evaporators |
| High-side float valve | liquid level in a high-side float chamber | single-evaporator flooded systems |

## 4.11 Capillary tube, AXV, TXV, EXV, float and solenoid valves ★

### Capillary tube {#comp-capillary}

A fixed length (1–6 m) of small-bore tube (0.5–2 mm) between condenser and evaporator [Ameen §16.4; Hundy §8.5]. Friction and acceleration of the flow drop the pressure from condensing to evaporating pressure ($h_L=f\,\dfrac{L}{D}\,\dfrac{V^2}{2g}$: a smaller $D$ or longer $L$ gives more pressure drop) [Kanak p.39]. Part of the liquid flashes to vapour along the tube. It is often soldered to the suction line to form a liquid–suction heat exchanger.

![Fig. 22: Capillary-tube refrigeration circuit divided diagonally into the high side (lower left: compressor discharging hot gas to the condenser, liquid leaving it) and the low side (upper right): the coiled cap tube is the restriction device between the condenser liquid outlet and the evaporator inlet; gas returns from the evaporator to the compressor. [Aloke p.59]](figures/022.jpg "w=0.45")

**Why preferred in household refrigerators** [Aloke p.59; Ameen §16.4; Hundy §8.5]:

1. **Simplest and cheapest**: no moving parts, nothing to wear or adjust, very reliable.
2. **Pressures equalise during the off cycle**, so the compressor restarts against no pressure difference: a cheap **low-starting-torque** single-phase motor will do.
3. **Smaller refrigerant charge**: no receiver is needed; the critical charge suits a factory-sealed hermetic unit.
4. Small, steady loads of a refrigerator suit a fixed restriction; it is "self-regulating within certain parameters" (a hotter condenser forces more flow).
5. Compact; doubles as a heat exchanger with the suction line.

Limitations: not adjustable to load changes; clogs with dirt or moisture (needs a strainer/drier); needs an exact charge; must be matched to the compressor at the design condition; only for factory-built systems.

### Automatic (constant-pressure) expansion valve, AXV {#comp-axv}

**Construction** (Fig. 23) [Aloke p.55; Kanak p.36; Ameen §16.4]: a needle and seat in the valve body; a **bellows or diaphragm** attached to the needle stem; **evaporator pressure** acts on the **underside** of the diaphragm; an **adjustable spring** (set by the adjusting screw) acts on the **top**; a strainer at the liquid inlet.

**Equilibrium of the bellows.** With diaphragm area $A$, the valve is steady when

$$F_{spring}=p_e\,A \quad\Longleftrightarrow\quad p_{spring}=p_e$$

The spring pushes **down to open** the valve; the evaporator pressure pushes **up to close** it.

**Control principle:**

1. If $p_e$ falls below the setting (the compressor removes vapour faster than it forms), the spring force exceeds $p_eA$, the needle moves off the seat, and more liquid enters; $p_e$ rises back.
2. If $p_e$ rises above the setting, the diaphragm is pushed up and the valve closes, cutting the flow until $p_e$ falls.
3. So the AXV holds a **constant evaporator pressure (and temperature)** by flooding more or less of the evaporator surface in response to the load.
4. When the compressor stops, $p_e$ rises and the valve **closes tightly**; it stays closed until the compressor starts and pulls $p_e$ down [Aloke p.55].

![Fig. 23: Automatic expansion valve: high-pressure liquid from the condenser enters at 'In' through a strainer into the lower chamber; a needle and seat control the flow to the outlet 'Out' (to the evaporator); the needle stem is fixed to a bellows or diaphragm; above it a spring whose force is set by an adjusting screw at the top. Arrows: spring pressure acts downward on the diaphragm (opening), evaporator pressure acts upward from below (closing). [Aloke p.55]](figures/023.png "w=0.45")

**Characteristic and drawback.** The AXV responds to pressure, not to load. When the load **rises**, more boiling raises $p_e$, so the valve **closes** and starves the evaporator just when it needs more liquid; when the load **falls**, $p_e$ drops and the valve opens and floods the evaporator, with risk of liquid reaching the compressor. It therefore suits only small systems with **nearly constant load** (domestic freezers of old, water coolers, ice-cream cabinets) [Ameen §16.4].

### Superheat sensing and the thermostatic expansion valve, TXV {#comp-txv}

**Why superheat.** In a DX evaporator no liquid must return to the compressor, so the last part of the coil superheats the dry vapour by ≈ 5 K [Hundy §8.2]. Refrigerant boils at $T_e,p_e$ until it is all vapour (point A in Fig. 24), then superheats to $T_s$ at $p_e$ (point B). A closed bulb of the same refrigerant at $T_s$ has the saturation pressure $p_s$ (point C). The difference $p_s-p_e$ (C–B) is a pressure signal that measures the superheat [Aloke p.52].

![Fig. 24: Left: DX evaporator coil fed from the condenser through the expansion valve; refrigerant at T_e, p_e along the coil; point where all liquid has evaporated; superheating gas section; superheat sensor bulb on the suction line at T_s (bulb pressure p_s); suction to the compressor. Right: pressure–temperature boiling-point curve: p_e at T_e gives point A on the curve; B at (T_s, p_e) to its right; C on the curve at T_s directly above B, at p_s. The vertical gap C–B, p_s − p_e, is the signal related to the amount of superheat. [Aloke p.52, from Hundy Fig. 8.1]](figures/024.png "w=0.75")

**Components** [Aloke pp.53–54; Ameen §16.4]: (1) **sensing bulb (phial)** clamped to the suction line at the evaporator outlet, charged with the same refrigerant; (2) **capillary tube** transmitting the bulb pressure $p_s$ to (3) the top of the **diaphragm** (power element, "thermostatic element"); (4) **valve stem/pin, needle and seat** (interchangeable orifice); (5) **superheat spring** with adjusting spindle under the diaphragm; (6) the **evaporator pressure** under the diaphragm, through an **internal equaliser** (valve outlet) or an **external equaliser** line from the evaporator outlet; (7) body with inlet strainer.

**Forces on the diaphragm** (equal areas):

$$\underbrace{p_s}_{\text{bulb: opens}}=\underbrace{p_e}_{\text{evaporator: closes}}+\underbrace{p_{spring}}_{\text{spring: closes}}$$

Since $p_s=p_{sat}(T_s)$ and $p_e=p_{sat}(T_e)$, the spring setting fixes $T_s-T_e$, the **superheat**.

![Fig. 25: TXV on an evaporator coil (course figure). Top: liquid from the condenser enters the valve (needle on seat) below a spring and diaphragm; a capillary tube runs from the head above the diaphragm to the phial clamped on the suction line at the coil outlet; force-balance arrows on the left: p_s acting down on the diaphragm, p_e and the spring acting up. Bottom: cut-away of a commercial TXV: remote bulb on its capillary, thermostatic element (diaphragm), superheat setting spindle, valve body, interchangeable orifice assembly. [Aloke p.53, from Hundy Fig. 8.2]](figures/025.jpg "w=0.6")

**How it keeps the superheat constant** [Aloke p.54; Kanak p.35; Hundy §8.2]:

1. **Load rises**: the refrigerant boils off earlier in the coil, so more of the coil superheats and $T_s$ rises. The bulb pressure $p_s$ rises above $p_e+p_{spring}$, the diaphragm moves down and opens the valve: more liquid enters, the boiling region lengthens, and the superheat returns to the setting.
2. **Load falls (or superheat falls for any reason)**: liquid reaches further along the coil, $T_s$ falls, $p_s$ falls, and the spring and $p_e$ push the diaphragm up and **close** the valve; this prevents liquid reaching the compressor.
3. In equilibrium the valve passes exactly the flow that the load evaporates while holding the set superheat (typically 4–7 K).
4. **External equaliser**: where the coil or distributor has a large pressure drop, the pressure under the diaphragm is taken from the evaporator **outlet** (next to the bulb), so that the valve senses the true outlet superheat [Aloke p.53; Hundy §8.3].

> **EXAMPLE 4.3** `[TUTOR-GENERATED]` An R134a TXV feeds an evaporator at 0 °C. It is set for 5 K superheat. (a) Find the spring pressure. (b) What is the bulb pressure, and the net opening pressure on the diaphragm, if the superheat falls to 2 K or rises to 8 K?

**[TUTOR-GENERATED]** R134a saturation table (data book p.8): $p_{sat}(0)=292.8$ kPa, $p_{sat}(2)=314.6$ kPa, $p_{sat}(5)=349.8$ kPa (interpolated), $p_{sat}(8)=387.6$ kPa.

(a) At the set point the bulb is at $0+5=5$ °C: $p_{spring}=p_s-p_e=349.8-292.8=$ **57.0 kPa**.

(b) Superheat 2 K: $p_s=314.6$ kPa; net $=314.6-(292.8+57.0)=$ **−35.2 kPa** (closing: the valve throttles down, protecting the compressor). Superheat 8 K: $p_s=387.6$ kPa; net $=387.6-349.8=$ **+37.8 kPa** (opening: more liquid fed to the starved coil).

### Thermo-electric expansion valve

A **thermistor** at the evaporator outlet gives a signal that changes sharply depending on whether it senses dry vapour or traces of liquid. The signal controls the current through a **thermal (heater) actuator** that modulates the valve: liquid traces → less current → valve closes; too dry and hot → valve opens [Aloke p.56; Kanak p.37].

![Fig. 26: Thermo-electric expansion valve: the liquid inlet enters the valve from below; a thermal actuator (heater element) on top of the valve moves it; the valve feeds a two-pass evaporator coil; a thermistor at the evaporator outlet is wired by low-voltage leads (dashed) to the actuator. [Aloke p.56]](figures/026.png "w=0.45")

### Electronic expansion valve, EXV {#comp-exv}

**Description.** An EXV is an electrically driven metering valve: a needle or slide moved by a **stepper motor** (continuous, typically several hundred to a few thousand steps), or a solenoid valve opened and closed in a **pulse-width-modulated** cycle of a few seconds, or a heat-motor (thermal) actuator. It is always used with an **electronic controller** and **sensors** [Hundy §8.4].

**Benefits** [Aloke p.57; Kanak p.38; Hundy §8.4]:

1. **Precise flow control over a wide range of capacities** (e.g. 10–100%, linear characteristic).
2. **Rapid response to load changes** (Kanak vai's note's example: a cinema hall filling with an audience).
3. **Better control at low superheat**, so less of the evaporator surface is used for superheating; more surface for boiling gives a **higher evaporating temperature and better efficiency**.
4. Electrical connection between components gives **greater flexibility in system layout**, important for compact systems.
5. **The valve can close when the system shuts down**, which **eliminates the separate shut-off solenoid valve**.
6. Stable at part load and with floating (low) condensing pressure, where a TXV hunts; the same valve can do other jobs (suction-pressure, hot-gas bypass, liquid injection) by reconfiguring the controller.

**How the controller works** (Fig. 27, Fig. 28) [Aloke p.58; Hundy §8.4]:

1. **Main inputs**: the **evaporating temperature** (or a pressure transducer at the evaporator outlet, converted to $T_{sat}$) and the **suction temperature** (thermistor on the outlet pipe).
2. The controller, pre-configured for the refrigerant and valve, computes the **superheat** $=T_{suction}-T_{sat}(p_e)$ and compares it with the **set point** (e.g. 4–5 K).
3. A control algorithm (PI/PID) turns the error into an **output signal**: number of motor steps, or the open-time fraction of a PWM cycle. Superheat above the set point → valve opens; below → valve closes.
4. **Other inputs**: room (return-air) temperature, ambient temperature, so the controller can also control the space temperature and adapt to the condensing condition.
5. **Other outputs**: compressor start/stop, condenser fan speed, defrost cycle, room temperature display, and a **maximum operating pressure (MOP)** function that limits the evaporator pressure on start-up.
6. On power failure or shutdown the controller drives the valve **closed**.

![Fig. 27: EXV controller block diagram (course figure): main inputs (evaporating temperature, suction temperature) and other inputs (ambient temperature, room temperature) enter the controller; main output (solid line): the expansion valve; other outputs (dashed): compressor start/stop, condenser fan speed, defrost cycle, room temperature display, maximum operating pressure function. [Aloke p.58, from Trott & Welch]](figures/027.jpg "w=0.6")

![Fig. 28: Exam sketch of an EXV control loop. High-pressure liquid from the condenser enters the EXV (valve body with a stepper-motor actuator on top) and feeds the serpentine evaporator coil; at the evaporator outlet a pressure transducer P (giving T_sat) and a thermistor T sit on the suction line to the compressor. Dashed green lines carry these main inputs to the CONTROLLER (microprocessor), which computes superheat SH = T − T_sat(P), compares it with the set point (e.g. 4–5 K) and sends, through a PID, valve steps as the main output to the actuator. Other inputs (room and ambient temperature) enter from the left; other outputs (compressor start/stop, condenser fan speed, defrost, room-temperature display, MOP limit) leave on the right. Note: load up → SH up → valve opens; SH down → valve closes; power off → valve shuts.](figures/028.jpg "w=0.85")

### Float valves

**Low-side float valve** [Aloke p.61; Ameen §16.4; Hundy §8.6]: a float in a chamber connected by balance lines to the flooded evaporator or surge drum (on the low-pressure side). As the liquid boils off, the level and the float **drop**, opening the valve to admit more liquid; as the level rises the float closes it. It keeps a **constant liquid level** whatever the load, and each evaporator can have its own float, so any number of evaporators can run on one system.

**High-side float valve** [Aloke p.60; Hundy §8.7]: the float chamber is on the **high-pressure side, between the condenser and the evaporator**; as liquid drains from the condenser the float rises and passes it straight on to the evaporator (like a steam trap). The evaporator level is fixed by the charge, so the charge is critical, and it can feed only **one** evaporator.

![Fig. 29: Low-pressure float valve on a flooded evaporator: liquid refrigerant from the condenser enters a low-pressure float chamber through a valve pin worked by a float; balance lines connect the chamber to a vertical surge tank (accumulator) holding liquid; liquid from the bottom of the surge tank circulates through the flooded evaporator coil and returns as liquid–vapour to the tank; vapour to the compressor leaves from the top. [Aloke p.61]](figures/029.png "w=0.5")

> **TRAP: location of the high-side float.** The slide says the high-side float sits "between the compressor discharge outlet and the inlet of the TXV" [Aloke p.60]. In textbooks it sits between the **condenser outlet and the evaporator**, and it is itself the expansion device (no TXV after it) [Hundy §8.7; Ameen §16.4]. Write that.

### Solenoid valve vs expansion valve {#comp-solenoid}

A **solenoid valve** is an electrically operated **on–off shut-off valve**. A coil, when energised, pulls a plunger (armature) up into its core and lifts the pin off the orifice: the valve is **fully open**; when de-energised, the plunger falls by its weight or a spring and the valve is **fully closed** [Ameen §16.6; Hundy §9.6]. It is fitted in the liquid line ahead of the expansion valve (pump-down and shut-off when a thermostat is satisfied), in hot-gas bypass and defrost lines, in oil and water lines.

![Fig. 30: Solenoid valve (normally closed) in two states. Left, de-energised (current off): the spring and the plunger's weight seat the pin on the orifice; the valve is fully closed, no flow. Right, energised (current on): the magnetic field of the coil lifts the plunger (armature) and pin off the seat; the valve is fully open and refrigerant flows straight through with almost no pressure drop (it does not meter).](figures/030.png "w=0.6")

| | Solenoid valve | Expansion valve |
|---|---|---|
| Purpose | **stop or allow** flow (shut-off) | **meter** flow and **reduce pressure** (throttling) |
| Action | two-position: fully open or fully closed | modulating (variable opening) or fixed restriction |
| Actuated by | electric current in a coil (from a thermostat, pressure switch, level switch, controller) | thermal bulb + spring (TXV), evaporator pressure (AXV), electronics (EXV), float |
| Pressure drop when open | negligible | large: condensing → evaporating pressure |
| Senses | nothing itself; obeys an external signal | superheat, pressure or level |
| Location | liquid line before the expansion valve; hot-gas, oil, water lines | at the evaporator inlet |
| Result | refrigerant passes unchanged (high-pressure liquid) | low-pressure, low-temperature liquid–vapour mixture |

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Explain in brief as to why capillary tube is preferred to other throttling devices in household refrigerator” (2011-12). *Read:* [capillary tube](#comp-capillary). *Answer:* [Solution 4.17](#q-4-17).
> - “What are the differences between solenoid valve and expansion valve?” (2012-13). *Read:* [solenoid valve vs expansion valve](#comp-solenoid). *Answer:* [Solution 4.18](#q-4-18).
> - “What are the benefits of electronics expansion valve (EXV) used in a refrigeration system? Also explain how its controller system works” (2015-16, 2017-18 “describe with necessary diagram”, 2020-21 “describe an EXV”). *Read:* [electronic expansion valve](#comp-exv). *Answer:* [Solution 4.19](#q-4-19), [Solution 4.20](#q-4-20), [Solution 4.21](#q-4-21).
> - “Describe the working principle of a thermostatic expansion device with necessary schematic diagram … how does it maintain a constant degree of suction superheat at the evaporator outlet” (2021-22). *Read:* [superheat sensing and the TXV](#comp-txv). *Answer:* [Solution 4.22](#q-4-22).
> - “How are the bellows in an automatic expansion valve remain in equilibrium? Describe … the controlling principle of refrigerant flow” (2023-24). *Read:* [automatic expansion valve](#comp-axv). *Answer:* [Solution 4.23](#q-4-23).

## 4.12 Evaporators ★

### Classification

**By what they cool** [Aloke p.63]: **air coolers** (finned coils that cool the air of a refrigerated space directly; the air is then distributed) and **liquid coolers** (chill water or brine, which is pumped to remote AHUs, FCUs and other terminals). A liquid cooler is a component; a **chiller** is a whole refrigeration package that makes chilled water.

**By refrigerant feed** [Aloke p.64]:

1. **Dry / direct expansion (DX)**: the feed is limited to what can be **completely evaporated** by the end of the evaporator; the outlet vapour is slightly superheated. Fed by a TXV or EXV (Fig. 31).
2. **Flooded**: relies on **natural convection** to circulate more refrigerant than evaporates; all inside surfaces are wetted with liquid; the vapour is separated in a **surge drum** and goes to the suction line. Fed by a float valve (Fig. 32).
3. **Liquid overfeed**: liquid is supplied to the evaporators by a **mechanical pump** or a **gas-pressure pumping** arrangement, at several times the evaporation rate (§4.12, Fig. 33).

Also by construction (bare tube, finned tube, plate, shell-and-tube, shell-and-coil, Baudelot), by air circulation (natural or forced), and by surface temperature (frosting, non-frosting, defrosting).

![Fig. 31: DX evaporator: high-pressure liquid refrigerant enters through a superheat-controlled expansion valve whose capillary leads to a sensing bulb clamped on the suction line; the serpentine evaporator tube shows liquid with growing vapour bubbles along three passes; near the end of the last pass a region is marked 'superheat begins'; the outlet goes to the compressor suction. [Aloke p.65]](figures/031.jpg "w=0.45")

![Fig. 32: Flooded evaporator: liquid enters a surge drum through a float-controlled valve; a liquid leg drops from the bottom of the drum to the bottom of the evaporator tubes; the liquid and vapour rising from the evaporator return to the drum; vapour leaves from the top of the drum to the compressor. [Aloke p.67]](figures/032.jpg "w=0.45")

| | DX (dry expansion) | Flooded | Liquid overfeed |
|---|---|---|---|
| Liquid fed | exactly what evaporates | more than evaporates (natural circulation) | 2–6 (up to 12) times what evaporates, pumped |
| Outlet | superheated vapour | liquid + vapour to surge drum; saturated vapour to compressor | liquid + vapour to low-pressure receiver |
| Wetted inner surface | part (superheat zone dry) | all: highest $h$ | all: high $h$ |
| Control | TXV/EXV per evaporator | float valve per evaporator | one float/level control at the receiver; hand valves or orifices at evaporators |
| Charge | smallest | large | large |
| Oil return | carried by velocity | oil collects in the drum; must be drained | flushed back to the receiver; drained there |
| Cost, size | cheapest, compact, simple | higher first cost | pump, receiver, more piping |
| Use | most popular: AC coils, DX chillers, small plant | water chillers, ammonia plant | multiple evaporators, cold stores, freezers |

[Aloke pp.64–70; Ameen §16.3; Hundy §7.1–7.3]

**DX** evaporators are "somewhat less efficient, but simpler, lower in initial cost, much more compact and need a much smaller refrigerant charge", so they are the most popular type [Aloke p.65]. **Flooded** evaporators give the highest heat-transfer rate, and saturated (not superheated) vapour enters the suction line, so suction and discharge temperatures are lower; but first cost is higher, more refrigerant is needed and oil accumulates in the surge drum [Aloke p.68].

### Liquid-overfeed evaporator {#comp-overfeed}

"A liquid overfeed evaporator is one wherein the amount of liquid refrigerant circulated through the evaporator is considerably in excess of that which can be vaporized. These systems are most commonly and economically employed in multiple evaporator systems" [Aloke p.70].

**Working (Fig. 33, Fig. 34).**

1. High-pressure liquid from the condenser is expanded through a **float (level-control) valve** into the **low-pressure receiver** (separator, surge drum), where it is at the evaporating pressure. Flash vapour separates at once.
2. A **liquid refrigerant pump** draws saturated liquid from the bottom of the receiver (with enough liquid head above the pump to avoid cavitation) and delivers it to a **supply header**.
3. Each evaporator takes liquid through a **hand-operated expansion (regulating) valve** or fixed **orifice** that only balances the flow; it is not a pressure-reducing control.
4. In each evaporator part of the liquid boils; the **circulation ratio** $n$ = (liquid pumped)/(liquid evaporated) is usually 2 to 6 (5–12 in plate freezers [Hundy §7.4]), so the whole inner surface stays wet.
5. The liquid–vapour mixture returns through a common **wet-return line** to the receiver; the liquid falls back for recirculation, and **dry saturated vapour** leaves from the top to the **compressor suction**. A relief/bypass protects the pump.

![Fig. 33: Liquid overfeed system (course figure): a low-pressure receiver with a float-controlled liquid feed; vapour leaves from the top to the suction line and compressor; a pump draws liquid from the bottom of the receiver and supplies three liquid-overfeed coolers in parallel, each through a hand-operated expansion valve (underlined by hand); the mixture returns through a common return line to the receiver; a relief valve at the far end of the loop. [Aloke p.70]](figures/033.png "w=0.75")

![Fig. 34: Exam sketch of a pumped liquid-overfeed system. A low-pressure receiver (surge drum/separator) at the left holds saturated liquid; high-pressure liquid from the condenser enters through a float (level-controlled) expansion valve; dry saturated vapour leaves from the top to the compressor suction. A liquid refrigerant pump below the receiver feeds a liquid supply header (pumped liquid, n = 2–6 times the evaporation rate) that serves three evaporators in parallel, each through an orifice or hand valve at its bottom inlet. A wet-return header at the top brings the liquid + vapour mixture back to the receiver. A dotted relief/bypass at the far end. Note: every evaporator gets plenty of liquid and stays fully wetted; only the receiver needs a level control; liquid and oil are separated in one vessel; no superheat is needed, the separator protects the compressor.](figures/034.jpg "w=0.9")

**Why it suits (and is economical for) multiple-evaporator systems** [Aloke p.70; Hundy §7.4, §9.18]:

1. **One pump, one receiver and one level control serve all the evaporators.** A flooded system would need a surge drum and float for each evaporator; a DX system a TXV for each. With many evaporators the overfeed plant is cheaper to build and simpler to control.
2. **Even, positive feed to every evaporator**, however far away or high up, and whatever its load: the pump overcomes pipe friction and static head, which gravity (flooded) cannot.
3. **Fully wetted surfaces**: no superheat zone, so heat-transfer coefficients are high, the evaporators are smaller, and the evaporating temperature can be higher (lower compressor power).
4. **Compressor protection**: liquid is separated centrally in the receiver; dry vapour goes to the compressor, so the evaporators need no superheat control, and load swings are absorbed.
5. **Oil return**: the high liquid velocity flushes oil out of the evaporators to the receiver, where it is drained in one place.
6. **Simple automatic operation and defrost** (hot gas), quick pull-down, stable operation with fluctuating loads; suits ammonia cold stores, freezing tunnels, food plants and large AC plant with many coolers.

Drawbacks: larger refrigerant charge, the pump (cost, power, maintenance, cavitation risk) and a large low-pressure receiver.

### Other evaporators

- **Flooded liquid cooler** (shell-and-tube): chilled water in the tubes, the shell about three-quarters full of boiling refrigerant fed by a distributor; eliminators keep droplets out of the vapour outlet [Aloke p.69; Hundy §7.3].
- **DX liquid cooler**: refrigerant in the (U-)tubes, water in the shell round baffles [Aloke p.66].
- **Baudelot cooler**: water or milk flows by gravity as a thin film over the outside of evaporator tubes or plates and is collected in a trough; very high heat transfer; ice forming outside cannot burst the tube, so it chills water to near 0 °C; used for milk, wine and water [Aloke p.71; Hundy §7.3].
- **Secondary-refrigerant (indirect, brine) system**: brine or water is chilled by a DX chiller and pumped to coils in the space or product [Aloke p.72].

### Frosting, non-frosting and defrosting evaporators {#comp-frosting}

Moisture in the air condenses on a coil below the air's dew point; if the surface is below 0 °C it freezes as **frost**. Frost insulates the surface, bridges the fins and blocks the air flow, so it reduces capacity and must be removed [Ameen §16.3; Hundy §7.5].

![Fig. 35: Coil surface temperature against time over four compressor on–off cycles (off cycles shaded). Green, NON-FROSTING: always above 0 °C (an AC coil at about 2–7 °C); only condensate (dew) forms. Red, DEFROSTING: falls below 0 °C (to about −4 °C) while the compressor runs, then rises above 0 °C (to about +3 °C) during every off cycle; frost forms while running and melts each off cycle. Blue, FROSTING: always below 0 °C (about −12 °C); frost builds up continuously and must be removed by a defrost method. A horizontal line marks 0 °C.](figures/035.jpg "w=0.7")

1. **Non-frosting evaporator**: works with its surface **always above 0 °C** (≈ 1–7 °C). Moisture condenses as water and drains away; no frost. Examples: AC cooling coils, water and liquid chillers, coolers for fruit and vegetables at 2–10 °C. The coil can have close fins.
2. **Frosting evaporator**: works **always below 0 °C**. Frost builds up continuously while it runs and does not melt in the off cycle. Examples: frozen-food stores, freezers, blast freezers, ice-cream cabinets. It needs periodic **defrosting**, wider fin spacing (up to 12 mm [Hundy §7.2]) and drain heaters.
3. **Defrosting evaporator**: works slightly **below 0 °C during the running cycle** (frost forms) but its temperature rises **above 0 °C during each off cycle**, so the frost melts every cycle and drains away automatically. Possible when the space is kept above ≈ 1–4 °C (domestic fresh-food compartments, display cases, coolers for meat and dairy). Called "off-cycle defrost" [Hundy §7.5].

**Defrosting methods** [Ameen §16.3; Hundy §7.5]:

- **Off-cycle / time shut-down** (manual or by timer): stop the refrigerant flow and let the space air (≥ 4 °C) melt the frost.
- **Electric defrost**: resistance heaters in or under the coil.
- **Hot-gas defrost**: compressor discharge gas is sent through a solenoid valve into the evaporator, which acts briefly as a condenser; needs another working evaporator or heat storage to supply the gas.
- **Reverse-cycle defrost** (heat pumps): a four-way valve reverses the flow so the evaporator becomes the condenser.
- **Water (spray) defrost**: water or anti-freeze is run over the coil.

In every method the drain tray and line must be kept warm so the melt water drains, and the cold refrigerant in the coil is removed first.

### Factors affecting the heat-transfer capacity of an evaporator {#comp-evap-factors}

From $Q=U\,A\,\Delta T_m$ [Ameen §16.3; Hundy §7.2]:

1. **Surface area** of the evaporator: tube length, number of tubes, **fins** (extended surface) and fin spacing.
2. **Temperature difference** between the cooled medium (air, water) and the boiling refrigerant (TD, LMTD).
3. **Overall coefficient $U$**, which depends on:
   - **velocity** of the air or liquid over the surface and of the refrigerant inside (turbulence gives thin films);
   - **wetted inner surface**: liquid wets better than vapour, so a flooded coil beats a DX coil whose superheat zone is dry;
   - **material and thickness** of the tube and fins (thermal conductivity: copper, aluminium better than steel);
   - **contact (bond)** between fins and tubes;
   - **condition of the surface**: frost and ice, oil film inside, scale, dirt and fouling outside reduce $U$;
   - properties of the refrigerant and the medium (conductivity, viscosity, latent heat).
4. **Flow rate (quantity) of the medium** and its distribution, and even refrigerant distribution between circuits.

> **ASKED: Read this section to answer**
>
> These past-paper parts are answered from this section; the full answers are with the term-final questions at the end of the module.
>
> - “Discuss the frosting, non-frosting and defrosting evaporators” (2011-12). *Read:* [frosting, non-frosting and defrosting](#comp-frosting). *Answer:* [Solution 4.24](#q-4-24).
> - “What are the factors that affect the heat transfer capacity of an evaporator?” (2012-13). *Read:* [factors affecting heat-transfer capacity](#comp-evap-factors). *Answer:* [Solution 4.25](#q-4-25).
> - “Why is liquid over feed evaporator suitable for multiple evaporator air-conditioning system? Describe this evaporator with necessary diagram” (2016-17); “… liquid overfeed cooler type evaporator economically employed in multiple evaporator system” (2018-19). *Read:* [liquid-overfeed evaporator](#comp-overfeed). *Answer:* [Solution 4.26](#q-4-26), [Solution 4.27](#q-4-27).

## 4.13 Term-final questions with solutions

The 27 parts fall into four archetypes:

| Archetype | What is asked | Parts | Solved in full |
|---|---|---|---|
| CM1 Compressors | classification, capacity ranges, scroll, vane, centrifugal, hermetic, volumetric efficiency | 9 | Solutions 4.1–4.4, 4.6, 4.7, 4.9 |
| CM2 Condensers | air-cooled ("maximum cooling needed, least available"), air vs water, evaporative | 7 | Solutions 4.10, 4.11, 4.13, 4.15, 4.16 |
| CM3 Expansion devices | capillary, solenoid vs expansion valve, EXV, TXV, AXV | 7 | Solutions 4.17–4.19, 4.22, 4.23 |
| CM4 Evaporators | frosting/defrosting, heat-transfer factors, liquid overfeed | 4 | Solutions 4.24–4.26 |

Theory answers are sized to the marks (about one point per mark). Draw a labelled sketch wherever the question says "sketch", "schematic" or "diagram"; the sketch earns a large share of the marks.

### CM1. Compressors

> **TRY 4.1** `[PP 11-12 Q7(a), 10]` What are the advantages and disadvantages of centrifugal compressor over reciprocating compressors?

::: {.answer label="Show answer"}
**Solution 4.1** **[FROM SOURCE: Aloke p.35; Kanak pp.17, 23; Hundy §4.14; Ameen §16.1]**

A centrifugal compressor raises pressure by giving the gas kinetic energy in a high-speed impeller and converting it to pressure in a diffuser and volute; a reciprocating compressor traps a volume in a cylinder and reduces it with a piston.

**Advantages of the centrifugal:**

1. Continuous, smooth, pulsation-free flow; little vibration, light foundations.
2. Handles **very large volume flows** of low-density vapour; compact and light per kW at large capacity (270–36 000 kW).
3. **Few moving parts** (impeller and shaft only): no valves, piston rings or crank; low wear, low maintenance, long life.
4. **Step-less capacity control** (inlet guide vanes, speed) from 100% to ≈ 10–15%, with good part-load efficiency: suits variable loads.
5. Oil only in the bearings, so the refrigerant can stay oil-free (better heat transfer); direct drive by motor or steam turbine.
6. Economical to operate in large AC plant.

**Disadvantages:**

1. Not economical below ≈ 270 kW; cannot be built small.
2. Low pressure ratio per stage (≈ 3–5): high lifts need several stages; unsuitable for low-temperature duty.
3. **Surge** at low flow or high head; capacity falls steeply if the condensing pressure rises (sensitive to condenser fouling, hot cooling water).
4. Very high speed (≈ 10 000 rpm): needs gears, precise balancing and good bearings.
5. Suits only low-pressure, high-volume refrigerants; high first cost; skilled service.

| | Centrifugal | Reciprocating |
|---|---|---|
| Capacity | 270–36 000 kW | 0.25–1000 kW |
| Ratio/stage | 3–5 | 8–10 |
| Moving parts | few | many |
| Control | step-less IGV/speed | steps, unloading |
| Flow | smooth | pulsating |
:::

> **TRY 4.2** `[PP 12-13 Q6(a), 5]` Hermetically sealed compressors are not generally centrifugal compressor – why?

::: {.answer label="Show answer"}
**Solution 4.2** **[FROM SOURCE: Aloke p.25; Kanak pp.13, 23; Hundy §4.6, §4.14]**

1. A centrifugal needs a high **impeller tip speed** (≈ 300 m/s). At the 2900 rpm of a sealed two-pole motor the impeller would be ≈ 2 m in diameter, so real machines run at ≈ 10 000 rpm through step-up gears or special high-speed drives, which do not suit a small welded shell.
2. A centrifugal **cannot be made small**: the smallest is ≈ 260–270 kW. Hermetic (welded-shell) construction is used for small units (refrigerators, room AC, up to tens of kW).
3. A large machine with gears, bearings and guide vanes must be **opened for service**; a welded hermetic shell cannot be opened ("repair of hermetic compressor is tedious").
4. The large motor loss would heat the suction gas and cut capacity; a motor burn-out would contaminate a huge charge.

Hence centrifugals are **open** or **semi-hermetic** (bolted, accessible); fully hermetic units are reciprocating, rotary and scroll.
:::

> **TRY 4.3** `[PP 15-16 Q5(a), 18]` When centrifugal compressor is suitable for air-conditioning application? Describe a centrifugal compressor and its different components with neat sketch.

::: {.answer label="Show answer"}
**Solution 4.3** **[FROM SOURCE: Aloke p.35; Kanak p.23; Hundy §4.14; Ameen §16.1]**

**When it suits AC** (6 marks):

1. **Large capacity**, above ≈ 300 kW (≈ 100 TR): central plant of large buildings, hospitals, airports, district cooling (economic range 270–36 000 kW).
2. **Low pressure ratio**: AC evaporates at ≈ 5 °C and condenses at ≈ 40 °C; for R134a, 349.8 kPa → 1016.6 kPa, ratio 2.9, which one or two stages give easily.
3. **Large volume flow** of low-density refrigerant (R134a, R123, R1233zd), which a piston machine could handle only with huge cylinders.
4. **Variable load**: inlet guide vanes and speed control give smooth part-load operation down to ≈ 10–20% with good efficiency ("suitable for variable loads").
5. Used in **water-chilling packages** with flooded evaporators and water-cooled condensers, which keep the head pressure low and steady.
6. Few moving parts, little vibration, oil-free, "economical to operate".

**Description and components** (12 marks). Sketch Fig. 15(a): eye, impeller, diffuser, volute, discharge; and the meridional flow path.

1. **Suction pipe and inlet guide vanes**: adjustable vanes at the inlet control the capacity by pre-swirling/throttling the gas.
2. **Impeller**: a wheel with curved (backward-curved) blades on a shaft, turning at ≈ 10 000 rpm (via step-up gear or high-speed motor). Gas enters axially at the **eye** and is thrown radially outward; the impeller raises its velocity and part of its pressure.
3. **Diffuser**: an annular passage of increasing area round the impeller; the gas slows and its static pressure rises.
4. **Volute casing**: a spiral collector of increasing area that converts more kinetic energy to pressure and leads the gas to the **discharge** (A↑ V↓ p↑).
5. **Shaft, bearings** (oil-lubricated or magnetic), **seal**, **drive motor** (open or semi-hermetic, refrigerant-cooled), gearbox; in multi-stage machines **return channels** lead the gas to the next impeller.
6. **Working**: kinetic energy given by the impeller is converted into pressure energy in the diffuser and volute; pressure rise depends on tip speed and gas density; surge occurs if the head is too high for the flow.
:::

> **TRY 4.4** `[PP 16-17 Q5(a), 17]` Classify different types of compressors used in refrigeration systems. Describe the working principle of a scroll compressor.

::: {.answer label="Show answer"}
**Solution 4.4** **[FROM SOURCE: Aloke pp.24, 28, 33; Kanak pp.15, 20; Hundy §4.12]** This is the model answer for the classification + scroll family.

**Classification** (6 marks). Draw the tree (Fig. 1):

- **By principle**: (i) **positive displacement** (reduce a trapped volume): reciprocating; rotary: vane, scroll, rolling piston, screw. (ii) **dynamic** (raise velocity, then convert to pressure): turbo (centrifugal, axial); ejector (jet).
- **By motor arrangement**: hermetic (welded, refrigerant-cooled motor), semi-hermetic (bolted, openable), open (external drive, shaft seal).
- (Capacity ranges for a fuller answer: rolling piston 0.25–22, scroll 6.5–100, rotary vane 7–300, reciprocating 0.25–1000, screw 75–6000, turbo 270–36 000 kW.)

**Scroll compressor** (11 marks). Sketch Fig. 9 (four positions of the fixed and orbiting scrolls with a shaded pocket moving inward).

1. **Construction**: two identical interleaved **involute spirals (scrolls)**; one **fixed**, the other **orbiting**, driven by a crank (eccentric) on the motor shaft and kept from rotating by an **Oldham coupling**. They touch along contact lines that seal off crescent pockets. **Suction at the rim**, **discharge port at the centre** of the fixed scroll. Usually hermetic.
2. **Suction**: as the orbiting scroll moves, the outermost pockets open to the suction gas and fill (1st revolution).
3. **Sealing**: further orbiting closes the pocket with a new contact line; compression begins.
4. **Compression**: the pocket is carried inward along the spiral and its volume shrinks continuously, raising the pressure (2nd to ≈ 3.5th revolution).
5. **Discharge**: at the centre the pocket opens to the discharge port and the gas leaves (≈ 3.5th to 4.5th revolution).
6. Pockets work in pairs and all six are in different stages at once, so suction, compression and discharge are **simultaneous and continuous**: smooth, quiet, vibration-free.
7. **Features**: no clearance volume (no re-expansion), no suction valve, contacting seals, few moving parts; highest volumetric efficiency, high reliability, tolerant of liquid; 6.5–100 kW, used in split/packaged AC and heat pumps.
:::

> **TRY 4.5** `[PP 20-21 Q5(a), 17]` Classify different types of compressors used in refrigeration systems. Describe the working principle of a scroll compressor with proper schematic diagram.

::: {.answer label="Show answer"}
**Solution 4.5** **[FROM SOURCE: Aloke pp.28, 33; Kanak pp.15, 20]** Word for word TRY 4.4 plus "with proper schematic diagram". Write Solution 4.4 and draw the schematic carefully: fixed scroll, orbiting scroll, crank/eccentric shaft, Oldham ring, suction at the rim, discharge port at the centre, and four numbered positions (Fig. 9) showing one pocket (1) open to suction, (2) sealed, (3) smaller, (4) at the discharge port.
:::

> **TRY 4.6** `[PP 22-23 Q5(a), 15]` Why does volumetric efficiency decrease with pressure ratio for compressor? Find out the reasons due to which scroll compressor attains maximum volumetric efficiency. Hence, describe the working principle of a scroll compressor with necessary schematic diagram.

::: {.answer label="Show answer"}
**Solution 4.6** **[FROM SOURCE: Aloke pp.33, 36; Kanak pp.17, 24; Hundy §4.10, §4.12; Ameen §16.1]**

**(i) Why $\eta_v$ falls with pressure ratio** (5 marks). $\eta_v$ = actual suction volume flow / displacement. Sketch the p–V diagram (Fig. 5) with clearance volume $V_c$.

1. Gas left in the clearance at discharge pressure must **re-expand** to below suction pressure before the suction valve opens. It expands to $V_c(p_d/p_s)^{1/n}$, so the fresh charge is $\eta_{vc}=1+C-C(p_d/p_s)^{1/n}$: a higher ratio leaves less of the stroke for fresh gas (e.g. $C=0.05$, $n=1.1$: 91.4% at ratio 3, 75.7% at 7, 49.9% at 14; Example 4.1).
2. **Leakage** past rings and valves back to suction grows with the pressure difference.
3. Higher discharge temperature heats the cylinder and the incoming gas more (lower density).
4. Valve and port pressure drops are a larger fraction of the low suction pressure.

**(ii) Why the scroll has the maximum $\eta_v$** (4 marks):

1. **No clearance volume**, so no re-expansion loss: the pocket is swept fully into the discharge port.
2. **No suction (and usually no discharge) valve**: no valve losses or valve leakage.
3. **Contacting flank and tip seals** (slow orbiting motion), so very low leakage.
4. Compression shared by several pockets in series: small pressure difference across each seal.
5. Suction at the rim, discharge at the centre: no direct leakage path and little heating of suction gas.

So the scroll's $\eta_v$ stays high and nearly flat with pressure ratio (Fig. 6).

**(iii) Working principle with schematic** (6 marks): as Solution 4.4, points 1–6, with the sketch of Fig. 9.
:::

> **TRY 4.7** `[PP 17-18 Q5(a), 17]` What are the different types of compressors used in refrigeration systems? Describe the working principle of rotary sliding vane type compressor.

::: {.answer label="Show answer"}
**Solution 4.7** **[FROM SOURCE: Aloke pp.28, 34; Kanak pp.15, 21–22; Hundy §4.13]** This is the model answer for the classification + vane family.

**Types** (6 marks): as Solution 4.4, first part (positive displacement: reciprocating; rotary: vane, scroll, rolling piston, screw; dynamic: centrifugal, axial, ejector; and hermetic, semi-hermetic, open).

**Rotary sliding-vane compressor** (11 marks). Sketch Fig. 11(a).

1. **Construction**: a cylindrical **casing (stator)** with suction and discharge ports; a **rotor** mounted **eccentrically** in it, almost touching the casing on one side; radial **slots** in the rotor carrying several (2–8 or more) **sliding vanes**.
2. As the rotor turns, **centrifugal force** (helped by springs or oil pressure) throws the vanes out so their tips press on the casing; adjacent vanes, rotor and casing enclose **pockets** of gas.
3. **Suction**: on the side where the rotor surface moves away from the casing, the pockets grow and draw vapour in through the suction port.
4. When the trailing vane passes the end of the suction port the pocket is **sealed**.
5. **Compression**: as the pocket moves toward the point of near-contact, its volume falls and the pressure rises.
6. **Discharge**: the pocket uncovers the discharge port and the gas is delivered; several pockets work at once, so the flow is nearly continuous.
7. **Features**: no suction or discharge valves in large types (small "rotaries" have a discharge valve), no clearance volume, high $\eta_v$, compact, few parts, quiet; vane-tip friction and thrust limit it to low pressure ratios (booster stage, small commercial units, 7–300 kW). Oil sealing along the vanes.
:::

> **TRY 4.8** `[PP 21-22 Q5(a), 17]` Classify different types of compressor used in refrigeration systems along with their capacity ranges. Describe the working principle of a sliding and rotary vane compressor with proper schematic diagram.

::: {.answer label="Show answer"}
**Solution 4.8** **[FROM SOURCE: Aloke pp.28–29, 34; Kanak pp.15–16, 21–22; Hundy §4.13]**

**Classification with capacity ranges** (7 marks): the tree of Solution 4.4 and the table:

| Type | Capacity (kW) | Remark |
|---|---|---|
| Rolling piston | 0.25–22 | lowest capacity, domestic |
| Scroll | 6.5–100 | low capacity, AC |
| Rotary vane | 7–300 | low capacity |
| Reciprocating | 0.25–1000 | widest range |
| Screw | 75–6000 | high capacity, industrial |
| Turbo (centrifugal) | 270–36 000 | highest capacity, large chillers |

**Sliding and rotary vane compressor** (10 marks). The slide's title covers two machines; draw both (Fig. 11):

- **(a) Multi-vane rotary (sliding vanes in the rotor)**: as Solution 4.7 points 1–6.
- **(b) Rolling-piston (one stationary sliding vane)**: a roller on the **eccentric shaft** rolls round the **cylindrical housing**, touching it along a line that moves round with the shaft. A **spring-loaded vane** in the housing slot presses on the roller and separates suction from discharge. Behind the moving contact line the suction space grows and fills through the suction port beside the vane; ahead of it the space shrinks and compresses the gas, which leaves through a **discharge valve** on the other side of the vane. One suction and one compression per revolution, both at the same time; used in refrigerators and room AC.
- One line of comparison: in (a) the vanes rotate with the rotor and need no valves; in (b) the vane is stationary and a discharge valve is needed.
:::

> **TRY 4.9** `[PP 23-24 Q1(a), 15]` Why are a wide range of capacities and types for compressor used in HVAC application? Describe the working principle of a sliding and rotary vane compressor with proper schematic diagram.

::: {.answer label="Show answer"}
**Solution 4.9** **[FROM SOURCE: Aloke p.29, 34; Kanak pp.16, 21; Hundy §4.1, §4.15]**

**Why a wide range** (6 marks):

1. HVAC loads range from ≈ 0.1 kW (refrigerator) to ≈ 36 000 kW (district cooling); each mechanism is economical only in its band: rolling piston 0.25–22, scroll 6.5–100, rotary vane 7–300, reciprocating 0.25–1000, screw 75–6000, centrifugal 270–36 000 kW.
2. **Volume flow**: positive-displacement machines suit small flows; centrifugals need large flows (they cannot be built small; pistons become huge at large flows).
3. **Pressure ratio**: AC (≈ 3) suits centrifugal and scroll; freezing duty (≈ 8–15) needs pistons, screws or two stages.
4. **Refrigerant**: ammonia needs open machines; low-pressure refrigerants suit centrifugals; high-pressure R410A suits scrolls.
5. **Part-load control** needed: unloading, slide valve, guide vanes, inverter.
6. **Efficiency, noise, vibration, size, weight, reliability, first cost, maintenance** and whether the unit is factory-sealed or field-serviced.

**Sliding and rotary vane compressor with schematic** (9 marks): as Solution 4.8, second part, with both sketches of Fig. 11 (the multi-vane rotary, and the rolling piston with its stationary sliding vane).
:::

### CM2. Condensers

> **TRY 4.10** `[PP 11-12 Q7(b), 10]` Give the comparison of air-cooled condenser and water cooled condenser.

::: {.answer label="Show answer"}
**Solution 4.10** **[FROM SOURCE: Aloke pp.42–44; Kanak pp.27–28; Ameen §16.2]**

| Point | Air-cooled | Water-cooled |
|---|---|---|
| Medium and limit | outdoor air; dry-bulb temperature | water from tower, river or well; wet-bulb or source temperature |
| Heat-transfer coefficient, surface | low; large finned coil | high; less surface |
| Condensing pressure | higher (10–20% higher head) | lower |
| Compressor power per TR | higher | lower |
| Hot-day performance | least capacity on the hottest days | little affected |
| Auxiliaries | fan | pump, cooling tower, water piping |
| Water use and treatment | none | make-up water and treatment needed |
| Maintenance | low; blow/wash the fins | high: scale, corrosion, cleaning tubes, Legionella |
| Installation, first cost | compact, easy, cheap | more parts, higher cost |
| Capacity range | small and medium (window, split, packaged) | all sizes, large chillers |
| Capacity control | vary air flow (fans, dampers) | vary water flow or tower fan |
| Compressor life | shorter | longer |
:::

> **TRY 4.11** `[PP 15-16 Q6(a), 12]` Describe with neat sketches an air-cooled condenser used in an air-conditioning system.

::: {.answer label="Show answer"}
**Solution 4.11** **[FROM SOURCE: Aloke pp.43–44; Kanak p.28; Hundy §6.3]** This is the model answer for the air-cooled condenser family. Sketch Fig. 17 (or Fig. 18): coil with inlet header at the top, liquid accumulator and sub-cooling coil at the bottom, propeller fan, damper, air arrows.

1. **Construction**: copper tubes with aluminium plate fins (outside/inside area 5:1–10:1) arranged in a coil; inlet header at the top, outlet at the bottom so the condensate drains by gravity; a sub-cooling section at the bottom; one or more **propeller (axial) fans**; dampers or fan-speed control; casing. In a split AC it is the outdoor unit; large plants use roof-mounted multi-fan units.
2. Hot high-pressure vapour from the compressor enters the top header.
3. The fan moves ambient air across the fins (forced convection; small domestic units use natural convection on a wire-and-tube coil).
4. The air first removes the **superheat**, then the **latent heat**: the refrigerant condenses at the condensing temperature.
5. The liquid collects in the accumulator header and is **sub-cooled** in the bottom rows by the coolest air.
6. The air leaves 9–12 K warmer and is discharged outdoors; the liquid goes to the receiver/expansion valve.
7. Capacity is controlled by varying the air flow (fan cycling, speed, dampers), which also keeps the head pressure up in cool weather.
8. Rule of thumb: ≈ 0.093 kg/s of air per kW rejected; condensing temperature ≈ 15–20 K above ambient.
:::

> **TRY 4.12** `[PP 16-17 Q5(b), 18]` What are the characteristics of an air-cooled condenser? Describe with neat sketches an air-cooled condenser used in an air-conditioning system.

::: {.answer label="Show answer"}
**Solution 4.12** **[FROM SOURCE: Aloke pp.43–44; Kanak p.28; Ameen §16.2]**

**Characteristics** (7 marks):

1. Compact, easy and economical to install; needs no water, pumps or tower.
2. Flexible capacity by varying air flow.
3. Hot air is disposed of easily outdoors.
4. Fin and tube surface easy to clean by blowing air; surfaces visible.
5. Requires less maintenance (no water treatment, scaling, freezing).
6. Higher power requirement per ton of refrigeration (head pressure 10–20% higher than water-cooled).
7. On days when maximum cooling is needed, the least is available; large air volumes, fan noise; shorter compressor life; practical in sizes up to ≈ 70 kW per unit in hot climates.

**Description with sketch** (11 marks): Solution 4.11.
:::

> **TRY 4.13** `[PP 22-23 Q6(b), 15]` Describe an air-cooled condenser used in air conditioning system with proper schematic diagram. Justify the statement "On days when maximum cooling is needed, the least is available" with the context of climate of Bangladesh.

::: {.answer label="Show answer"}
**Solution 4.13** **[FROM SOURCE: Aloke pp.43–44; Kanak p.28; Hundy §6.3]** This is the model answer for the justification.

**Description with schematic** (8 marks): Solution 4.11, points 1–7, with Fig. 17.

**Justification** (7 marks):

1. An air-cooled condenser rejects heat to outdoor air by sensible heating: $Q_c\approx(UA)(T_c-T_{db,out})$. Its capacity falls as the outdoor dry bulb rises.
2. In Bangladesh the hottest months (April–September) bring outdoor dry bulb of 35–40 °C, intense solar radiation and humid outdoor air; the building **cooling load is at its maximum** on these days.
3. On the same days the condenser air is at 35–40 °C (more near sun-heated roofs and walls, or where the hot discharge of one outdoor unit is drawn into the next). The available $T_c-T_{db}$ shrinks, so less heat can be rejected at the normal condensing temperature.
4. The system responds by raising **$T_c$ and the head pressure**: e.g. a condenser rated 0.8 kW/K that runs at 50 °C on a 35 °C day must condense at 56 °C on a 40 °C day with 12.8 kW to reject; R134a pressure goes from 1317.9 to 1528.2 kPa and the pressure ratio (evaporator at 5 °C) from 3.77 to 4.37 (Example 4.2).
5. Higher pressure ratio → lower volumetric efficiency and mass flow; hotter liquid → smaller refrigerating effect per kg; more work per kg. So the **refrigerating capacity falls and power rises** (lower COP), and the high-pressure cut-out may trip.
6. Hence when the most cooling is demanded the plant can give the least. High humidity does not help: the air-cooled condenser is governed by the dry bulb, while a water-cooled or evaporative condenser works against the wet bulb (≈ 27–29 °C in a Dhaka summer).
7. Remedies: size for 40 °C+ ambient, shade the unit and avoid recirculation, keep fins clean, or use water-cooled/evaporative condensers for large plant.
:::

> **TRY 4.14** `[PP 23-24 Q2(b), 15]` Describe an air-cooled condenser used in air conditioning system with proper schematic diagram. Justify the statement "On days when maximum cooling is needed, the least is available" in the context for climate of Bangladesh.

::: {.answer label="Show answer"}
**Solution 4.14** **[FROM SOURCE: Aloke pp.43–44; Kanak p.28]** Word for word TRY 4.13 (repeated in 2023-24 Section A). Write Solution 4.13 in full: the schematic of Fig. 17 with labels (inlet header, condensing coil, liquid accumulator, sub-cooling coil, propeller fan, damper, air in/out, refrigerant in/out), the working points, and the seven justification points with the Example 4.2 numbers (50 → 56 °C, 1317.9 → 1528.2 kPa, ratio 3.77 → 4.37).
:::

> **TRY 4.15** `[PP 17-18 Q5(b), 18]` Describe with neat sketches a counter-flow forced draft evaporative condenser. What are the benefits of using forced draft condenser?

::: {.answer label="Show answer"}
**Solution 4.15** **[FROM SOURCE: Aloke pp.45, 49; Kanak pp.29–31; Hundy §6.6; Ameen §16.2]** This is the model answer for the evaporative condenser family. Sketch Fig. 21.

**Description** (12 marks):

1. **Arrangement**: a casing containing the refrigerant **condensing coil**; above it a **spray header with nozzles**; above that **drift eliminators**; at the bottom a **water basin (sump)** with make-up float valve and bleed-off; a **recirculating pump** from the basin to the sprays; a **centrifugal fan** at the **bottom side (air inlet)**.
2. **Forced draft**: the fan pushes ambient air into the lower part of the casing.
3. **Counter-flow**: the air rises up through the falling water and the wetted coil, while the water falls downward over the tubes; the air leaves at the top through the eliminators.
4. Hot refrigerant vapour enters the top of the coil; water sprayed on the tubes forms a thin film.
5. Heat passes from the condensing refrigerant through the tube to the water film; the rising air **evaporates part of the water**, and the latent heat of evaporation (≈ 2430 kJ/kg; ≈ 0.41 g/s per kW) carries the heat away. The film approaches the air's wet-bulb temperature.
6. The refrigerant condenses and drains as liquid from the bottom of the coil to the **receiver**.
7. Unevaporated water falls to the basin and is recirculated (80–160 times the evaporation rate); **make-up** replaces evaporation, drift and blow-down; **blow-down** limits dissolved solids; eliminators stop drift.

**Benefits of the forced-draft evaporative condenser** (6 marks):

1. Heat rejection by evaporation: more capacity per unit surface and a lower condensing temperature (wet-bulb limited), so less compressor power.
2. Less fan power than an air-cooled condenser; no separate condenser-water pump head or tower.
3. Saves space: condenser and cooling tower combined in one piece.
4. Uses water and air together: efficient, with much less water than a once-through water-cooled condenser.
5. Fan and motor work in **dry, cool entering air** (longer life, easy access); centrifugal fans overcome the high air resistance and are **quiet**; the unit can be ducted or placed indoors.
:::

> **TRY 4.16** `[PP 20-21 Q5(b), 18]` Describe the working principle of an evaporative condenser with necessary diagram. Identify the major components of an evaporative condenser and mention their functions.

::: {.answer label="Show answer"}
**Solution 4.16** **[FROM SOURCE: Aloke p.45; Kanak pp.29–31; Hundy §6.6; Ameen §16.2]**

**Working principle with diagram** (9 marks): Solution 4.15, points 4–7, with Fig. 20 or Fig. 21. Summary: water is sprayed on the outside of the refrigerant coil; air flowing over the wet coil evaporates a small part of it; the evaporation removes the condensing heat, so the refrigerant condenses at a temperature close to the air's wet bulb; the water recirculates.

**Components and functions** (9 marks):

| Component | Function |
|---|---|
| Condensing coil | carries refrigerant: vapour in at top, liquid out at bottom |
| Spray header / nozzles (water distribution) | wet the whole outer tube surface evenly |
| Recirculating pump | lifts basin water to the sprays |
| Water basin (sump) | collects water; holds make-up float valve, overflow, blow-down |
| Fan (centrifugal forced draft or axial induced draft) | moves air through the unit to carry away the vapour |
| Drift eliminators | catch droplets carried by the air; reduce water loss |
| Fill (some designs) | extra surface to cool the water before the basin |
| Make-up and blow-down connections | replace lost water; limit dissolved solids |
| Casing, louvres | enclose the unit, admit air, keep sunlight off the water |
| Receiver | stores the condensed liquid |
:::

### CM3. Expansion devices

> **TRY 4.17** `[PP 11-12 Q7(c), 5]` Explain in brief as to why capillary tube is preferred to other throttling devices in household refrigerator.

::: {.answer label="Show answer"}
**Solution 4.17** **[FROM SOURCE: Aloke p.59; Kanak p.39; Ameen §16.4]**

1. **Simplest and cheapest**: a fixed length of small-bore tube with no moving parts; nothing to wear, adjust or fail.
2. **Pressures equalise in the off cycle**, so the compressor restarts unloaded and a cheap low-starting-torque motor suffices.
3. **No receiver needed, small refrigerant charge**: suits a sealed hermetic unit with a fixed critical charge.
4. A household refrigerator has a **small, nearly steady load**, so the lack of adjustment does not matter.
5. Compact; it can be soldered to the suction line as a heat exchanger (more sub-cooling, dry suction).

(Its drawbacks, not adjustable to load and liable to clog, are acceptable in a factory-built appliance with a filter-drier.)
:::

> **TRY 4.18** `[PP 12-13 Q6(b), 5]` What are the differences between solenoid valve and expansion valve?

::: {.answer label="Show answer"}
**Solution 4.18** **[FROM SOURCE: Kanak p.32; Ameen §16.4, §16.6; Hundy §9.6]**

| | Solenoid valve | Expansion valve |
|---|---|---|
| Function | shut-off: allows or stops flow | meters flow and throttles high → low pressure |
| Action | on–off (fully open or closed) | modulating or fixed restriction |
| Operated by | electromagnet coil (thermostat, pressure or level switch) | bulb and spring, evaporator pressure, electronics or float |
| Pressure drop when open | negligible | condensing to evaporating pressure |
| Outlet state | unchanged high-pressure liquid | low-pressure, low-temperature mixture |

A solenoid valve is usually fitted in the liquid line just ahead of the expansion valve (sketch Fig. 30).
:::

> **TRY 4.19** `[PP 15-16 Q5(b), 17]` What are the benefits of electronics expansion valve (EXV) used in a refrigeration system? Also explain how its controller system works.

::: {.answer label="Show answer"}
**Solution 4.19** **[FROM SOURCE: Aloke pp.57–58; Kanak p.38; Hundy §8.4]** This is the model answer for the EXV family.

**Benefits** (8 marks):

1. Precise flow control over a wide range of capacities (≈ 10–100%).
2. Rapid response to load changes.
3. Better control at low superheat: less evaporator surface is wasted on superheating, more on boiling, so the evaporating temperature and efficiency rise.
4. Electrical connections give flexibility in system layout (valve, sensors and controller can be anywhere): important for compact systems.
5. The valve closes when the system shuts down, eliminating a separate shut-off solenoid valve.
6. Stable at part load and with low (floating) condensing pressure where a TXV hunts; the controller also handles MOP, defrost, fans and compressor.

**How the controller works** (9 marks). Sketch Fig. 28 (or the block diagram Fig. 27).

1. **Sensors**: a pressure transducer (or temperature sensor) gives the **evaporating temperature** $T_{sat}$; a thermistor on the outlet pipe gives the **suction temperature** $T_{suc}$. These are the main inputs.
2. The microprocessor controller, configured for the refrigerant and valve, computes **superheat** $=T_{suc}-T_{sat}$.
3. It compares it with the **set point** (e.g. 4–5 K) and a PI/PID algorithm gives an output signal.
4. **Main output**: steps to the stepper motor (or the open-time fraction of a PWM valve). Superheat too high (load rising) → valve opens; too low (liquid near the outlet) → valve closes.
5. **Other inputs**: room and ambient temperature (space temperature control, adapting to condensing condition).
6. **Other outputs**: compressor start/stop, condenser fan speed, defrost cycle, room temperature display, maximum operating pressure limit.
7. On power loss or shutdown the controller closes the valve.
:::

> **TRY 4.20** `[PP 17-18 Q6(a), 17]` What are the benefits of electronics expansion valve (EXV) used in a refrigeration system? Also explain how its control system works. Describe with necessary diagram.

::: {.answer label="Show answer"}
**Solution 4.20** **[FROM SOURCE: Aloke pp.57–58; Kanak p.38]** Same as TRY 4.19 with "describe with necessary diagram". Write Solution 4.19 and draw Fig. 28 in full: liquid line → EXV with stepper-motor actuator → evaporator coil → suction line with pressure transducer P and thermistor T → signal wires to the controller → output wire back to the valve actuator; add the box of other inputs (room, ambient temperature) and other outputs (compressor, condenser fan, defrost, display, MOP).
:::

> **TRY 4.21** `[PP 20-21 Q6(b), 18]` Describe an electronic expansion valve (EXV). What are the benefits of an electronic expansion valve used in a refrigeration system? Also explain how its controller system works.

::: {.answer label="Show answer"}
**Solution 4.21** **[FROM SOURCE: Aloke pp.57–58; Kanak p.38; Hundy §8.4]** As Solution 4.19, adding a description of the valve (4 marks):

- An EXV is an electrically actuated metering valve at the evaporator inlet. Types: (i) **stepper-motor** valve: a motor drives a needle or a ceramic slide over the orifice in small steps, giving continuous flow and a linear capacity characteristic; (ii) **pulse-width-modulated** valve: a solenoid valve opened and closed in a fixed cycle of a few seconds, the open fraction setting the flow; (iii) **thermal (heat-motor)** actuator, where a heater changes the pressure in a charged capsule.
- It has no bulb or spring setting of its own: it is positioned by a controller from sensor signals (superheat), so it can also serve as suction-pressure, liquid-injection or hot-gas bypass valve.

Then the benefits (6 points) and the controller (7 points) of Solution 4.19, with Fig. 28.
:::

> **TRY 4.22** `[PP 21-22 Q5(b), 18]` Describe the working principle of a thermostatic expansion device with necessary schematic diagram and identify its major components. Hence, explain how does it maintain a constant degree of suction superheat at the evaporator outlet.

::: {.answer label="Show answer"}
**Solution 4.22** **[FROM SOURCE: Aloke pp.52–54; Kanak pp.33–35; Hundy §8.2–8.3; Ameen §16.4]** Sketch Fig. 25 (valve, diaphragm, spring, capillary, phial on the suction line, evaporator coil, force arrows) and the p–T curve of Fig. 24.

**Major components** (5 marks): (1) **sensing bulb (phial)** on the suction line at the evaporator outlet, charged with the circuit refrigerant; (2) **capillary tube** to the valve head; (3) **diaphragm** (power element); (4) **push-pin, needle and seat** (orifice); (5) **superheat spring** with adjusting spindle; (6) **equaliser** (internal, or external line from the evaporator outlet); (7) body with inlet strainer.

**Working principle** (7 marks):

1. Refrigerant boils at $T_e$, $p_e$ along the coil until all is vapour (A), then superheats to $T_s$ at the outlet (B).
2. The bulb at $T_s$ contains saturated refrigerant at $p_s=p_{sat}(T_s)>p_e$; $p_s-p_e$ measures the superheat (C–B).
3. $p_s$ acts on top of the diaphragm (**opening** force); $p_e$ under the diaphragm and the spring act upward (**closing** forces).
4. Equilibrium: $p_s=p_e+p_{spring}$. Since $p_s$ and $p_e$ are saturation pressures at $T_s$ and $T_e$, the spring setting fixes the **superheat** $T_s-T_e$ (e.g. R134a at 0 °C with 5 K superheat: $p_{spring}=349.8-292.8=57.0$ kPa; Example 4.3).

**How it holds constant superheat** (6 marks):

1. **Load increases**: liquid boils off sooner, the superheated length grows, $T_s$ and $p_s$ rise (8 K superheat → 387.6 kPa, net opening force +37.8 kPa): the diaphragm moves down, the valve opens, more liquid is fed, and the superheat falls back to the setting.
2. **Load decreases** or superheat falls: liquid travels further, $T_s$ and $p_s$ fall (2 K → 314.6 kPa, net −35.2 kPa): the spring and $p_e$ close the valve, preventing liquid flood-back to the compressor.
3. The valve thus balances feed against evaporation at a constant superheat (≈ 4–7 K).
4. With a large coil or distributor pressure drop an **external equaliser** feeds the outlet pressure under the diaphragm so that the true outlet superheat is held.
:::

> **TRY 4.23** `[PP 23-24 Q2(a), 15]` How are the bellows in an automatic expansion valve remain in equilibrium? Describe with necessary diagram the controlling principle of refrigerant flow during the operation of an automatic expansion valve.

::: {.answer label="Show answer"}
**Solution 4.23** **[FROM SOURCE: Aloke p.55; Kanak p.36; Ameen §16.4]** Sketch Fig. 23: inlet with strainer, needle and seat, outlet to evaporator, bellows/diaphragm, spring, adjusting screw, arrows for spring force (down) and evaporator pressure (up).

**Equilibrium of the bellows** (5 marks):

1. Two forces act on the bellows (diaphragm): the **adjustable spring** pushes it **down**, which opens the needle; the **evaporator pressure** acting on its underside pushes it **up**, which closes the needle.
2. The bellows is in equilibrium (needle steady) when $F_{spring}=p_e\,A$, i.e. when the evaporator pressure equals the pressure set by the spring.
3. Turning the adjusting screw changes the spring force and so the evaporator pressure (and temperature) that the valve holds.

**Controlling principle** (10 marks):

1. The AXV is a **constant-pressure** valve: it keeps the evaporator pressure, and hence the evaporating temperature, constant.
2. While the compressor runs it pulls vapour out of the evaporator; if $p_e$ falls below the setting, the spring force exceeds $p_eA$, the bellows moves down and the needle opens, admitting more liquid until $p_e$ rises back.
3. If $p_e$ rises above the setting (more vapour than the compressor removes), the bellows is pushed up and the valve throttles down.
4. So it floods more or less of the evaporator surface to keep $p_e$ constant.
5. When the compressor **stops**, $p_e$ rises and the valve **closes tightly**; it stays shut until the compressor restarts and lowers $p_e$, so high-pressure liquid is held back ready for quick cooling at the next start [Kanak p.36].
6. Characteristic: it responds **inversely to load**: on a load increase $p_e$ rises and the valve closes (evaporator starved); on a load decrease it opens (risk of flooding the compressor). It therefore suits small systems with nearly **constant load** (water coolers, small freezers), and a suction accumulator is advisable.
:::

### CM4. Evaporators

> **TRY 4.24** `[PP 11-12 Q7(d), 10]` Discuss the frosting, non-frosting and defrosting evaporators.

::: {.answer label="Show answer"}
**Solution 4.24** **[TUTOR-GENERATED, from Hundy §7.2, §7.5; Ameen §16.3]** (The course notes do not cover this; Fig. 35 is the sketch to draw.)

Moisture from the air condenses on a coil colder than the dew point; below 0 °C it freezes as frost, which insulates the surface, bridges the fins, cuts the air flow and so reduces capacity.

1. **Non-frosting evaporator** (3 marks): surface always **above 0 °C** (≈ 1–7 °C); moisture condenses as water and drains; no frost. Used for air conditioning coils, water/liquid chillers and coolers kept above ≈ 2 °C (fruit, vegetables). Close fin spacing is possible.
2. **Frosting evaporator** (3 marks): surface always **below 0 °C**; frost builds up continuously and does not melt in the off cycle. Used in freezers, frozen-food stores, blast freezers, ice-cream cabinets. Needs a periodic artificial defrost, wide fin spacing and heated drains.
3. **Defrosting evaporator** (2 marks): surface slightly **below 0 °C while running** (frost forms) but **above 0 °C during each off cycle** because the space is above ≈ 1–4 °C, so the frost melts each cycle and drains away automatically (off-cycle defrost). Used in domestic fresh-food compartments, display cases, coolers for dairy and meat.
4. **Defrost methods** for frosting coils (2 marks): off-cycle/timed shut-down; electric heaters; hot-gas defrost (discharge gas through a solenoid valve into the evaporator); reverse cycle; water spray.
:::

> **TRY 4.25** `[PP 12-13 Q6(c), 5]` What are the factors that affect the heat transfer capacity of an evaporator?

::: {.answer label="Show answer"}
**Solution 4.25** **[TUTOR-GENERATED, from Ameen §16.3; Hundy §7.2]** From $Q=UA\,\Delta T_m$:

1. **Surface area**: tube length and number, fins and fin spacing.
2. **Temperature difference** between the medium (air, water) and the boiling refrigerant.
3. **Velocity** of the medium over the surface and of the refrigerant inside (turbulence, film coefficients); and the medium's flow rate.
4. **Wetted inner surface** (flooded > DX) and even refrigerant distribution.
5. **Material, wall thickness and fin-to-tube contact** (conductivity).
6. **Surface condition**: frost or ice, oil film, scale and dirt reduce $U$.
:::

> **TRY 4.26** `[PP 16-17 Q6(a), 17]` Why is liquid over feed evaporator suitable for multiple evaporator air-conditioning system? Describe this evaporator with necessary diagram.

::: {.answer label="Show answer"}
**Solution 4.26** **[FROM SOURCE: Aloke pp.64, 70; Kanak p.62; Hundy §7.4, §9.18]** This is the model answer for the family.

**Definition** (2 marks): a liquid overfeed evaporator is one in which the liquid refrigerant circulated through it is **considerably more than can be vaporised**; liquid is supplied by a mechanical pump or by gas pressure.

**Why it suits multiple-evaporator systems** (7 marks):

1. One **low-pressure receiver, one pump and one level control** serve all the evaporators, instead of a TXV per DX evaporator or a surge drum and float per flooded evaporator: cheaper and simpler with many evaporators ("most commonly and economically employed in multiple evaporator systems").
2. The pump gives **positive, even feed** to every evaporator, whatever its distance, height or load.
3. All inner surfaces stay **wetted** (no superheat zone): high heat-transfer coefficient, smaller coils, higher evaporating temperature.
4. Liquid is separated centrally, so only **dry saturated vapour** reaches the compressor; the evaporators need no superheat control.
5. High liquid velocity **flushes oil** back to the receiver, where it is drained in one place.
6. Stable under fluctuating loads, quick pull-down, simple automatic operation and hot-gas defrost.

**Description with diagram** (8 marks). Sketch Fig. 34 (or Fig. 33):

1. High-pressure liquid from the condenser enters the **low-pressure receiver** through a **float (level-control) expansion valve**; flash vapour separates.
2. The **refrigerant pump** draws saturated liquid from the bottom of the receiver and delivers it through a supply header.
3. Each evaporator (cooler) receives liquid through a **hand-operated regulating valve or orifice** that balances the flow.
4. Part of the liquid boils in each evaporator; circulation ratio $n$ ≈ 2–6 (pumped/evaporated).
5. The liquid–vapour mixture returns by a **wet-return line** to the receiver; liquid drops back for recirculation.
6. **Dry saturated vapour** leaves the top of the receiver to the compressor suction; a relief/bypass valve protects the pump.
7. Drawbacks: larger refrigerant charge, pump power and maintenance, large receiver.
:::

> **TRY 4.27** `[PP 18-19 Q5(a), 17]` Why is liquid overfeed cooler type evaporator economically employed in multiple evaporator system? Describe a liquid overfeed cooler evaporator with schematic diagram.

::: {.answer label="Show answer"}
**Solution 4.27** **[FROM SOURCE: Aloke p.70; Kanak p.62]** Same family as TRY 4.26 (2016-17), worded "economically employed" and "cooler". Write Solution 4.26: the reasons (one receiver, pump and level control for all coolers instead of a control per cooler; positive feed; fully wetted surface and smaller coolers; dry vapour to the compressor; central oil removal; stable automatic operation) and the description with Fig. 34, labelling the low-pressure receiver, float feed, pump, supply header, hand-operated expansion valves, three liquid-overfeed coolers, wet return and vapour to the compressor.
:::

## 4.14 Summary sheet

> **KEY: Module 4 on one page**
>
> - **Classify compressors:** positive displacement (reciprocating; rotary: vane, scroll, rolling piston, screw) vs dynamic (turbo: centrifugal, axial; ejector); and hermetic / semi-hermetic / open. **Ranges (kW):** rolling piston 0.25–22, scroll 6.5–100, rotary vane 7–300, reciprocating 0.25–1000 (widest), screw 75–6000, turbo 270–36 000. Wide range because loads, volume flows, pressure ratios, refrigerants and control needs differ.
> - **Hermetic:** welded, refrigerant-cooled motor, no shaft seal, not repairable. **Not centrifugal** because a centrifugal needs ≈ 10 000 rpm/gears, is never smaller than ≈ 270 kW and must be opened for service.
> - **$\eta_v$** = actual suction flow / displacement; $\eta_{vc}=1+C-C(p_d/p_s)^{1/n}$; falls with pressure ratio (re-expansion, leakage, heating, valve losses). $C=0.05$, $n=1.1$: 91.4 / 75.7 / 49.9% at ratio 3 / 7 / 14.
> - **Scroll:** fixed + orbiting involute; suction at rim, pockets move in and shrink, discharge at centre; six pockets at once. **Max $\eta_v$:** no clearance, no valves, contacting seals, small Δp per pocket, no discharge-to-suction path.
> - **Vane:** (a) multi-vane: eccentric rotor, vanes thrown out by centrifugal force; pockets grow at suction, shrink to discharge; no valves. (b) rolling piston: roller on eccentric, stationary spring-loaded vane, discharge valve; domestic.
> - **Screw:** male (4) + female (6) helical rotors; pocket travels axially and shrinks; slide valve 10–100%.
> - **Centrifugal:** IGV → eye → impeller (KE) → diffuser → volute (A↑ V↓ p↑) → discharge. Suits AC: large (> 300 kW), low ratio (≈ 3), large volume flow, variable load (IGV), chillers. Vs reciprocating: smooth, few parts, step-less control, compact | surge, head-sensitive, uneconomic small, low ratio/stage.
> - **Condenser:** de-superheat → condense → sub-cool; $Q_c=Q_e+W$. Water-cooled: shell-and-tube, shell-and-coil, double-pipe (counter-flow).
> - **Air-cooled:** finned coil, propeller fan, inlet top, sub-cooler bottom; compact, cheap, flexible, low maintenance | high power/TR, high head. **Hot-day statement:** $Q_c\approx UA(T_c-T_{db})$; 35–40 °C Dhaka summer = peak load and hottest air → $T_c$ 50 → 56 °C, R134a 1317.9 → 1528.2 kPa, ratio 3.77 → 4.37 → capacity ↓, power ↑.
> - **Evaporative condenser:** coil + sprays + eliminators + basin + pump + fan; wet-bulb limited. Counter-flow forced draft: fan at inlet pushes air up against falling water. Benefits: lower $T_c$, less fan power, condenser + tower in one, little water, fan in dry air, quiet centrifugal fans.
> - **Expansion devices** meter liquid and keep Δp. **Capillary:** cheap, no moving parts, pressure equalises off-cycle (low-torque motor), small charge; not adjustable, clogs. **AXV:** spring (opens) = $p_e$ (closes); constant $p_e$; closes when compressor stops; inverse to load. **TXV:** $p_{bulb}=p_e+p_{spring}$ → constant superheat; load ↑ → $T_s$ ↑ → opens. R134a 0 °C, 5 K: spring 57.0 kPa. **EXV:** P + T sensors → controller computes SH → PID → stepper/PWM valve; benefits: precise wide range, fast, low superheat (higher $T_e$), layout flexibility, shuts off (no solenoid). **Solenoid:** on–off shut-off, no metering. **Floats:** low-side keeps evaporator level (any number of evaporators); high-side between condenser and evaporator, one evaporator, critical charge.
> - **Evaporators:** air/liquid coolers; DX (all evaporated + superheat; most popular), flooded (surge drum, natural circulation, highest $h$), liquid overfeed (pump, $n$ = 2–6). **Overfeed for many evaporators:** one receiver + pump + level control for all, positive feed, wetted surfaces, dry vapour to compressor, central oil return.
> - **Frost:** non-frosting > 0 °C (AC); frosting < 0 °C always (freezers, need defrost); defrosting < 0 °C running, > 0 °C each off cycle. Defrost: off-cycle, electric, hot gas, reverse cycle, water. **Heat transfer:** area (fins), ΔT, velocities, wetted surface, material/thickness, frost/oil/fouling.

## 4.15 Self-test

1. Name the two ways of classifying compressors and give one example of each class.
2. Which compressor type covers the widest capacity range, and which the highest?
3. Give two reasons why a fully hermetic compressor is never centrifugal.
4. Find $\eta_{vc}$ for $C=0.04$, $n=1.2$ at a pressure ratio of 6.
5. Why does a scroll compressor need no suction valve?
6. In a rolling-piston compressor, what separates the suction and discharge spaces?
7. Where does the static pressure rise in a centrifugal stage?
8. An air-cooled condenser rejects 10 kW at $T_c=48$ °C with 35 °C air. Estimate $T_c$ with 39 °C air at the same load.
9. What is the "approach" of a cooling tower?
10. Which pressure opens a TXV and which close it?
11. Why does an AXV starve the evaporator when the load rises?
12. Why does an EXV make the liquid-line solenoid valve unnecessary?

**Answers.**

1. By principle: positive displacement (scroll) and dynamic (centrifugal); by motor arrangement: hermetic (refrigerator compressor), semi-hermetic, open (ammonia screw).
2. Widest: reciprocating (0.25–1000 kW); highest: turbo/centrifugal (to 36 000 kW).
3. It needs very high speed (gears, ≈ 10 000 rpm) and is at least ≈ 270 kW in size; it must be opened for service.
4. $6^{1/1.2}=4.45$; $\eta_{vc}=1.04-0.04\times4.45=0.862$ (86.2%).
5. The pocket is sealed from the suction rim by the scroll contact itself as the orbiting scroll moves; the geometry, not a valve, times suction.
6. A stationary spring-loaded sliding vane (blade) pressing on the roller.
7. In the diverging diffuser and volute (area up, velocity down), after the impeller raises the kinetic energy.
8. $UA=10/13=0.769$ kW/K; $T_c=39+13=52$ °C.
9. Leaving water temperature minus the entering-air wet-bulb temperature.
10. Bulb pressure opens it; evaporator pressure and the spring close it.
11. More boiling raises the evaporator pressure, which pushes the bellows up and closes the valve.
12. The controller drives the valve fully closed when the system shuts down, so it acts as the shut-off valve.
