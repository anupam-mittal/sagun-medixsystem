import { cosmoprofHK, cosmoprofItaly, cosmoprofLA, cosmoprofMumbai, incosmeticsFrance, medicaGermany } from "../images/PREvents/import";
import { artificialBreastForm, botulinumToxinTypeA,lypolysis, hyaluronicAcidFiller,pdoCog,pdoMonoScrew,skinBooster } from "../images/Biologics/import";
import { chinImplant, cheekImplant, noseImplant, siliconeBreastImplant, tissueExpander } from "../images/MedicalDevices/import";
import { activo, aromaGrand, aromaGrandCheveux, hipro, hiproL, hiproQ, hiproV,noableLaser, pentagonGSlim, pentagonGlassF, pentagonGrand, tinea } from "../images/Equipments/import";

const productTypeToPageMapping = {
  Biologics: [
    "Biologics",
    ["All", "Bone", "Skin"],
    [
      {
        id: 1,
        title: "PDO Cod Threads",
        subtitle: "Bi-directional threads for lifting and contouring",
        details: {
          "Types": ["19G-100mm, bidirectional cod, W-type", "18G-100mm, bidirectional cod, W-type", "21G-90mm, bidirectional cod, L-type for eyebrow lifting", "Double Arms, Two needles 400mm, for face lifting"]
        },
        img: pdoCog,
        category: "Skin",
      },
      {
        id: 2,
        title: "Hyaluronic Acid Filler",
        subtitle: "Versatile fillers for contouring and hydration",
        details: {
          "Types": ["Biphasic HA Dermal Fillers", "Monophasic HA Dermal Fillers"],
          "Biphasic HA Features": ["Adding of non cross linked HA disappear in 1-2wks", "Big particle size", "Relatively short duration", "Low cross linking ratio", "Easy to mold shape"],
          "Monophasic HA Features": ["Non adding of non cross linked HA", "Longer duration", "Relatively high duration", "Difficult to mold shape", "Relatively high cross linking ratio"],
          "Recommended Applications": ["A type : Cheek, Chin, Forehead, Nose", "B-type : Nasolabial folds, Lips", "C-type : Fine wrinkle, Around eyes"],
          "Recommended Dose": ["Nose : 1-2ml", "Nasolabial folds : 2-3ml", "Forehead : 3-5ml", "Lip each side : 1 ml", "Cheek : 4-10ml", "Short chin : 2-4ml", "Sunken Eye : 1ml", "Temporal Area Depression Each : Over 2ml"]
        },
        img: hyaluronicAcidFiller,
        category: "Skin",
      },
      {
        id: 3,
        title: "Skin Booster",
        subtitle: "Long-lasting hydration and skin rejuvenation",
        details: {
          "Description": "The most of hyaluronic acid gel products for mesotherapy are non cross linked HA but skin booster( biorevitalization) is cross linked HA gel same as dermal fillers, so has much better duration and safety. Non cross linked HA gel can not be autoclave sterilized, also skin booster( biorevitalization) has lidocaine to lower pain",
          "Merits": ["Cross linked hyaluronic acid 10mg/cc", "Longer duration and better efficacy", "Autoclave sterilized (better safety)", "Glutathione 0.1% for whitening"],
          "Preparation": "Apply ice bad and make anesthesia with lidocaine cream both to reduce pain.",
          "Precaution": "This booster( biorevitalization) contain cross linked hyaluronic acid (HA). Once injected to epidermis, this can cause nodule and papule, so injection layer will be dermis layer ,and use mesotherapy gun needle with depth more than 1.5mm. Do not inject at one point too much. Inject widely deeply and evenly. After injection compress treated area with dry gauze.",
          "Protocols": ["2-3 session is needed", "Interval one month", "After second session, the effect can be seen", "This booster is usually used with meso gun. If you do not have meso gun, you can use the meso needle"]
        },
        img: skinBooster,
        category: "Bone",
      },
      {
        id: 4,
        title: "Lipolysis",
        subtitle: "Fat-dissolving solution for double chin and body",
        details: {
          "Description": "Lipolysis solution for double chin and body. Do not use it for face",
          "Ingredients": ["Deoxycholic acid 10mg/cc", "Q.S- Phosphate buffer solution"],
          "Packaging": "5ml X 10 vials",
          "Purpose": "Emulsifying subcutaneous fat in double chin. ",
          "Deoxycholic Acid": `Deoxycholic acid has been used since its discovery in various fields of human medicine. In the human body deoxycholic acid is used in the emulsification of fats for absorption in the intestine. It has, in some countries (including Switzerland) been licensed as an emulsifier in food industry, but it is no longer common. Outside the body it is used in experimental basis of cholagogues and is also in use to prevent and dissolve gallstones.
          In research deoxycholic acid is used as a mild detergent for the isolation of membrane associated proteins. The critical micelle concentration for deoxycholic acid is approximately 2.4-4 mM.
          Sodium deoxycholate, the sodium salt of deoxycholic acid,en used as a biological detergent to lyse cells and solubilise cellular and membrane components.Sodium deoxycholate mixed with phosphatidylcholine, is used in mesotherapy injections to produce lipolysis and has been used as an alternative to surgical excision in the treatment of lipomas.
          Deoxycholates and bile acid derivatives in general are actively being studied as structures for incorporation in nanotechnology.They also have found application in microlithography as photoresistant components.`
        },
        img: lypolysis,
        category: "Bone",
      },
      {
        id: 5,
        title: "Botulinum Toxin Type A",
        subtitle: "For muscle relaxation and wrinkle reduction",
        details: {
          "Active Ingredient": "Clostridium botulinum toxin type A (Hall strain).",
          "Description": "A lyophilized white powder for injection in a colorless transparent vial.",
          "Storage Condition": "Store at -15 ~ -5℃ or at 2 ~ 8℃ in a refrigerator, in hermetic container.",
          "Package Unit": "1 vial",
          "Expiry Date": "36 months from manufacturing date.",
          "Indication and Usage": ["Benign essential blepharospasm in adults aged 18 or more", "To treat foot deformities due to spasticity in pediatric cerebral palsy patients aged 2 or older", "To temporarily improve moderate to severe glabellar lines related to eyebrow wrinkle muscle (corrugator muscle) and/or procerus muscle activity in adults aged from 20 to 65", "Muscle spasticity: upper limb local muscle spasticity related to stroke in adults aged 20 or more"]
        },
        img: botulinumToxinTypeA,
        category: "Bone",
      },
      {
        id: 6,
        title: "PDO Mono and Screw Threads",
        subtitle: "Non-surgical threads for skin lifting and tightening",
        details: {
          "Benefit": ["No need for cuts on the skin", "Does not require serious anesthesia", "Quick rehabilitation", "The procedure takes no more than 30-40 minutes", "Possibility of combining with other procedures"],
          "Treatment Areas": `Over the years, PDO (polydioxanone) has been used in a wide range of medical fields, from orthopedics and pediatric surgery to maxillofacial surgery. Nowadays it is successfully used in cosmetology for face rejuvenation, skin lifting and tightening. 
          PDO is a biodegradable synthetic polymer that the threads are made of, and this material gets more popular due to its safety. The procedure of insertion is quite simple, the results are stable, side effects are minor and complication rate is very low.
          PDO biodegradation occurs through a process of hydrolysis over a time period from 6 to 9 months, while the duration of the aesthetic result continues up to 12 months.`,
          "Indications": ["Chin, face oval, nasolabial folds, forehead, eyebrows, nasolacrimal grooves, cheekbone areas", "Neck and decollete", "Abdomen", "Buttocks and inner thighs", "The inner surface of the hands", "Knees"],
          "Package": "20 EA / 1 pack"
        },
        img: pdoMonoScrew,
        category: "Bone",
      },
      {
        id: 7,
        title: "Artificial Breast Form",
        subtitle: "An artificial breast that is worn under clothing to imitate the shape of the breast.",
        details: {
          "About Artifical Breast Form" : [
            "A breast prosthesis can recreate the appearance of a breast shape under clothing and can also help to improve your balance and posture, which may be affected after a mastectomy.",
            "There are a wide variety of external breast prostheses available. Some are held within specially designed bras, while others are attached to the skin with a sticky backing. Special swimsuits are available to hold prostheses in place while swimming.",
            "Breast prostheses are available from some lingerie stores, department stores or specialty stockists. Trained staff members are often on hand to help you choose the prosthesis that is right for you.",
            "Things to consider include the shape and size of the prosthesis, how comfortable it is and the cost.",
          ],
          "Pros and Cons" : [
            "Some women find external breast prostheses comfortable and are happy with how their breast shape looks. Smaller breasted women in particular may find external breast prostheses comfortable.",
            "Other women find external breast prostheses uncomfortable, cumbersome and impractical. Prostheses are often described as hot, sometimes heavy, and can sometimes irritate the skin. Self-adhesive prostheses require regular cleaning. Some women report difficulty with their prostheses during physical activity and sports. Of particular concern to some women is the fear that the prostheses may fall out of clothing."
          ],
        },
        img: artificialBreastForm,
        category: "Bone",
      },
    ],
    {
      All: 0,
      Bone: 1,
      Skin: 2,
    },
    [
      {
        id: 0,
        title: "All",
      },
      {
        id: 1,
        title: "Bone",
      },
      {
        id: 2,
        title: "Skin",
      },
    ],
  ],
  Devices: [
    "Medical Device",
    [
      "All",
      "Silicone Implant",
      "Threads",
      "Hair Transplanter",
      "Scar Management",
    ],
    [
      {
        id: 1,
        title: "Silicone Breast Implant",
        subtitle: "Enhancing breast size and shape with a natural feel.",
        details : {
          "Features" : ["Multiple Models to Choose From", "High wear resistance, can withstand 6.5 million times of fatigue resistance test", "Safe and reliable materials", "The gel has strong cohesion, the shell breaking elongation can exceed 1000%, and the resilience is excellent"],
          
        },
        img: siliconeBreastImplant,
        category: "Skin",
      },
      {
        id: 2,
        title: "Tissue Expander",
        subtitle: "Gradual skin stretching for reconstructive surgeries.",
        details : {
          "Features" : ["Various models and specifications", "U-shaped limit groove, puncture-proof", "Safe and reliable materials", "Internal and external catheter, adjustable length"],
          
        },
        img: tissueExpander,
        category: "Scar Management",
      },
      {
        id: 3,
        title: "Chin Implant",
        subtitle: "Enhancing chin projection and facial harmony.",
        details: {
          "Features" : ["Various specifications and sizes", "Safe and reliable materials", "Complete range of styles, can be matched with different procedures"],
        },
        img: chinImplant,
        category: "Silicone Implant",
      },
      {
        id: 4,
        title: "Nose Implant",
        subtitle: "Improving nasal shape and function with precision.",
        details: {
          "Features" : ["Low risk of rejection or allergic reactions", "Used to enhance nasal projection, height, or symmetry", "Can significantly improve nasal contours and overall facial harmony"],
          "Types" : ["L-Type", "L30", "T-Type", "Type 1", "Type C", "P-Type"],
        },
        img: noseImplant,
        category: "Silicone Implant",
      },
      {
        id: 5,
        title: "Cheek Implant",
        subtitle: "Adding volume and contour to enhance facial balance.",
        details: {
          "Features" : ["Low risk of rejection or allergic reactions", "Used to enhance nasal projection, height, or symmetry", "Can significantly improve nasal contours and overall facial harmony"],
          "Types" : ["L-Type", "L30", "T-Type", "Type 1", "Type C", "P-Type"],
        },
        img: cheekImplant,
        category: "Silicone Implant",
      },
    ],
    {
      All: 0,
      "Silicone Implant": 1,
      Threads: 2,
      "Hair Transplanter": 3,
      "Scar Management": 4,
    },
    [
      {
        id: 0,
        category: 0,
        title: "All",
      },
      {
        id: 1,
        category: 1,
        title: "Silicone Implant",
      },
      {
        id: 2,
        category: 2,
        title: "Threads",
      },
      {
        id: 3,
        category: 3,
        title: "Hair Transplanter",
      },
      {
        id: 4,
        category: 4,
        title: "Scar Management",
      },
    ],
  ],
  Equipments : [
    "Equipments",
    [/*Filter*/],
    [
      {
        id: 1,
        title: "Activo",
        subtitle: "Q-Switched Nd:YAG Laser Surgical Instrument",
        details : {
          "Laser Type" : "Q-Switched Nd:YAG Laser",
          "Laser Source" : "Nd:YAG",
          "Indications" : "Tatto removal (1,064/532nm), Nevus of Ota (1,064nm), Epidermal Lesions (532nm)",
          "Various Hand Piece" : ["Zoom Hand Piece", "MLA Hand Piece", "Collimated Hand Piece"],
          "Advantages" : ["High Peak Power", "Less Side Effect", "Less Pain", "Types of Three Pulses"],
          "Product Specifications" : ["Wavelength	: 1,064 [nm] / 532 [nm]", "Operation Method	: Q-switched Nd:YAG", "Pulse Energy 1064 mode(Q-switched Mode) : Max. 2,700 [mJ]",
            "Pulse Energy 532 mode(Q-switched Mode) : Max. 900 [mJ]", `Type of Pulse:	Single Pulses(One whole pulse), Double Pulses (Photoacoustic twin pulses), Triple Pulses (Photoacoustic triple pulses)`,
            "Pulse Width :	5 ~ 10 [ns] (Q-switched Mode) / 500 [㎲] (FR mode)", "Spot Size :	2 ~ 10 [㎜]", "Pulse Rate : 1,064, 32, FR Mode	1 ~ 10 [Hz]",
            "Memory	: 5 User Programmable Memory", "Optical Delivery :	Articulated Arm", "Aiming Beam :	Diode 650 [nm] (Adjustable Brightness)",
            `Display : 10.4" LCD`, "Cooling	: Closed Circuit Water to Air", "Input Power : 110/220 [VAC], 50/60 [Hz]", "Dimension : 315 x 825 x 1,022 [mm] (W x D x H)",
            "Weight : 90 [kg]"
          ],
          "What is Q-Switched Nd:YAG Laser ?" : "The Q-Switched Nd:YAG Laser method with short pulse width and low energy used for removal of pigment demonstrated better treatment effects than other conventional treatment methods. This treatment method is a new concept that can be described as selective photo rejuvenation with minimal thermal damage and inflammation reaction to affected tissues by pigmentation.",

        },
        img: activo,
        category: "Skin",
      },
      {
        id: 2,
        title: "Aroma Grand",
        subtitle: "808nm Diode Laser for Hair Removal",
        details : {
          "About Aroma Grand" : ["AROMA GRAND delivers thermal energy to hair follicle and it is selectively absorbed to the melanin in the hair follicle. Thus, the destruction of melanin will be resulted.",
            "808nm Diode laser : The diode laser consists of a high power laser diode emitting 808nm laser. The longer wavelength allows deep penetration into the skin and suitable for all skin types.",
            "Laser and light-based modalities destroy hair follicles by selective photothermolysis (SP) when red and near infrared wavelengths penetrate deeply into the dermis and are selectively absorbed by melanin, thermal damage is restricted to the hair follicles.",
            "AROMA GRAND is taking advantage of micro channel LD (Laser Diode) for high efficient cooling method. Using FAC technology for getting 99% energy transfer efficiency. Lightweight and user freindly size of Hand-piece.",
          ],
          "Strengths" : ["Simple, Easy to operation using by GUI", "Speedy treatment time", "Excellent clinical results", "Decent output power of diode (600W)",
            "The relatively lighter hand-piece with 600W output power", "Safe for dark skin (Oriental people)", "Little pain and burning", "Applicable for Thick & Thin Hair",
            "Long durability with stable energy source", "No consumables",
          ],
          "Product Specifications" : [
            "Light Source	: Diode laser module", "Output Energy	: 600 [W] / (6 bars)", "Warranty : 10,000,000 Shots or Within 1 year(Whichever comes earlier, would be expired)",
            "Wavelength	: 808 [nm]", "Fluence	: 100 [J/cm²]", "Pulse Duration	: 10 ~ 350 [ms]", "Spot Size (Sapphire Size) : 14 x 15 [mm] / 600W",
            "Repetition Rate : 1 ~ 10 [Hz]", "Input Voltage	: 200-240 [VAC], 50/60 [Hz]", "Dimension : 480 x 640 x 1,230 [mm] (W x D x H)", "Weight :	67 [kg]",
          ],
        },
        img: aromaGrand,
        category: "Skin",
      },
      {
        id: 3,
        title: "Aroma Grand Cheveux",
        subtitle: "808nm Diode Laser for Hair Removal(ABS Type)",
        details : {
          "About Aroma Grand" : ["AROMA GRAND delivers thermal energy to hair follicle and it is selectively absorbed to the melanin in the hair follicle. Thus, the destruction of melanin will be resulted.",
            "808nm Diode laser : The diode laser consists of a high power laser diode emitting 808nm laser. The longer wavelength allows deep penetration into the skin and suitable for all skin types.",
            "Laser and light-based modalities destroy hair follicles by selective photothermolysis (SP) when red and near infrared wavelengths penetrate deeply into the dermis and are selectively absorbed by melanin, thermal damage is restricted to the hair follicles.",
            "AROMA GRAND is taking advantage of micro channel LD (Laser Diode) for high efficient cooling method. Using FAC technology for getting 99% energy transfer efficiency. Lightweight and user freindly size of Hand-piece.",
          ],
          "Strengths" : ["Simple, Easy to operation using by GUI", "Speedy treatment time", "Excellent clinical results", "Decent output power of diode (600W)",
            "The relatively lighter hand-piece with 600W output power", "Safe for dark skin (Oriental people)", "Little pain and burning", "Applicable for Thick & Thin Hair",
            "Long durability with stable energy source", "No consumables",
          ],
          "Product Specifications" : [
            "Light Source	: Diode laser module", "Output Energy	: 600 [W] / (6 bars) , 800 [W] / (8 bars)", "Warranty : 10,000,000 Shots or Within 1 year(Whichever comes earlier, would be expired)",
            "Wavelength	: 808 [nm]", "Fluence	: 100 [J/cm²] (600[W]), 107.6 [J/cm²] (800[W])", "Pulse Duration	: 10 ~ 350 [ms]", "Spot Size (Sapphire Size) : 14 x 15 [mm] / 600W , 14 x 18.5 [mm] / 800[W]",
            "Repetition Rate : 1 ~ 10 [Hz]", "Input Voltage	: 110/220 [VAC], 50/60 [Hz]", "Dimension : 420 X 510 X 1,040 [mm] (W x D x H)", "Weight :	50 [kg]",
          ],
        },
        img: aromaGrandCheveux,
        category: "Skin",
      },
      {
        id: 4,
        title: "Hipro / Hipro - S",
        subtitle: "Focused Ultrasound Stimulator System",
        details : {
          "About Hipro / Hipro - S" : ["HIPRO / HIPRO-S delivers HIFU energy to SMAS layer (which is located between subcutaneous tissues and muscle) and, makes TCP (Thermal Coagulation Points) zone without damaging skin surface by 4.5mm cartridge, also by using 3.0mm and 1.5mm cartridges, the HIFU energy can stimulate the collagen to be remodeled for skin tightening.",
            "Five types of cartridge 1.5mm, 3.0mm, 4.5mm, 8.0mm (Optional) and 13.0mm (Optional).",
            "The HIFU energy can stimulate the collagen to be remodeled for skin tightening.",
          ],
          "Strengths" : ["TFDA & SFDA & KFDA approval as Lifting for Eyebrow, CE Certificated", "Five types of cartridge 1.5mm, 3.0mm, 4.5mm, 8.0mm (Optional) and 13.0mm (Optional)",
            "The shortest treatment time by continuous mode", "Reasonable price of consumables", "HIFU system is used to make the thermal coagulation to SMAS layer or deep dermis as non-invasive skin lifting and tightening treatment.",
            "Less pain than other HIFU device", "Now, HIFU system is developed to area of Body for slimming.", "HIPRO / HIPRO-S can make thermal coagulation to layer of fat and help to reduce fat by using principle of HIFU.",
            "Make over 55℃ of TCP zone on SMAS layer by delivering HIFU energy.", "By wound healing process on TCP zone of SMAS, the surface of muscle contraction, regrowth of collagen and elastin are stimulated by 1.5mm & 3.0mm cartridge.",
            "Skin lifting and tightening occurs by collagen regeneration process of dermis and the contraction of SMAS layer.",
          ],
          "Product Specifications" : [
            "Energy Type : HIFU Energy", "Energy Output : 0.1 ~ 2.0 [J]", "Input Voltage : 100-240 [VAC], 50/60 [Hz]", "Interval : 1.0 ~ 2.0 [mm]", "Length : 15mm (Half length), 30mm (Full length)",
            "Cartridge A (1.5mm) : 10,000 Shots", "Cartridge B (3.0mm) : 10,000 Shots", "Cartridge C (4.5mm) : 10,000 Shots", "Cartridge D (8.0mm, Optional) : 10,000 Shots", 
            "Cartridge E (13.0mm, Optional)	: 10,000 Shots", "Dimension :	HIPRO - 430 x 570 x 1,050 [mm], HIPRO-S - 340 x 380 x 270 [mm] (W x D x H)", "Weight : HIPRO : 40 [kg], HIPRO-S : 7 [kg]",
          ],
        },
        img: hipro,
        category: "Skin",
      },
      {
        id: 5,
        title: "Hipro - V",
        subtitle: "Focused Ultrasound Stimulator System",
        details : {
          "About Hipro V" : ["With only one Hand Piece without the additional cartridges. HIPRO-V delivers HIFU energy to SMAS layer which is located between subcutaneous tissues and muscle, or deep dermsi, or the fat layers in body. And then, makes 0.7 ~ 1.0 mm size of TCP (Thermal Coagulation Points) zone makes SMAS contraction, or resolves the fat without surgery, or skin surface damage.",
            "Medical Device Approved by ANVISA", "Non-cartridge Type Hand Piece",
            "The HIFU energy can stimulate the collagen to be remodeled for skin tightening.", "Compact & Portable size",
          ],
          "Strengths" : [
            "Dermatological Lifting, Tightening & Body slimming", "The shortest treatment time", "Reasonable price of consumables", "Less pain than other HIFU device", 
            "HIFU system is used to make the thermal coagulation to SMAS layer or deep dermis as non-invasive skin lifting and tightening treatment.", 
            "Now, HIFU system is developed to area of Body for slimming.", "Make over 55℃ of TCP zone on SMAS layer by delivering HIFU energy.",
            "By wound healing process on TCP zone of SMAS, the surface of muscle contraction, regrowth of collagen and elastin are stimulated by 3.0mm cartridge.",
            "Skin lifting and tightening occurs by collagen regeneration process of dermis and the contraction of SMAS layer.",
          ],
          "Product Specifications" : [
            "Energy Type : HIFU Energy", "Energy Output : 0.1 ~ 2.0 [J]", "Input Voltage : 100-240 [VAC], 50/60 [Hz]",
            "Dimension : 340 x 380 x 300 [mm] (W x D x H)", "Weight : 10 [kg]", "Frequency : 3.0 [MHz]", "Depth(FACE) : 1.5 ~ 4.5 [mm]", 
            "Depth(BODY) : 6.0 ~ 13.0 [mm]"
          ],
        },
        img: hiproV,
        category: "Skin",
      },
      {
        id: 6,
        title: "Hipro - Q",
        subtitle: "For Face Tightening",
        details : {
          "About Hipro Q" : "HIFU energy penetrates and makes thermal coagulation to deep dermis and subcutaneous fibrous tissue. Natural wound healing process creates new elastic collagen, hence resulting in lifting and tightening loose skin for rejuvenation over time. The HIFU energy can stimulate the collagen to be remodeled for skin tightening. The strong point of HIPRO-Q is that products' weight is only 3.5kg",
          "Treatments of HIPRO-Q for Lifting & Tightening" : ["Forehead wrinkle", "Nasolabial fold", "Wrinkle around the eyes", "Neck wrinkle"],
          "Product Specifications" : [
            "Energy Type : HIFU Energy (High Intensity Focused Ultrasonic)", "Energy Output : Max 1.5 [J]", "Repetition Rates : 7 [Hz]", "Depth for Face : 3.0 [mm]",
            "Hand Piece time : 2,000 [min]", "Input Voltage : 100-230 [VAC], 50/60 [Hz]", "Dimension : 260 x 310 x 175 [mm] (W x D x H)", "Weight : 3.5 [kg]",
          ],
        },
        img: hiproQ,
        category: "Skin",
      },
      {
        id: 7,
        title: "Hipro - L",
        subtitle: "Two type Hand Piece for Ultrasound Massage",
        details : {
          "About Hipro L" : "HIPRO-L is double-frequency ultrasound waves which mixes different frequencies up to 10 [MHz] to be sequently emitted with 1 [MHz] and 3 [MHz] waves as well as 3 [MHz] and 10 [MHz] waves. These sequent frequencies generate the body and face tissue stimulation cavitation and increased blood flow to fulfill the modern aesthetical applications for skin rejuvenation.",
          "Product Specifications" : [
            "Energy Type : Ultrasound Wave Energy", "Power : Max 2 [W/cm²]", "Frequency : Face - 3 / 10 [MHz], Body - 1 / 3 [MHz]", 
            "Input Voltage : 100-240 [VAC], 50/60 [Hz]", "Dimension : 350 x 412 x 255 [mm] (W x D x H)", "Weight : 5 [kg]",
          ],
        },
        img: hiproL,
        category: "Skin",
      },
      {
        id: 8,
        title: "Pentagon Grand",
        subtitle: "CO2 Laser for Skin Rejuvenation",
        details : {
          "About Pentagon Grand" : [
            "PENTAGON GRAND, the CO2 Fractional Laser (RF Tube) by scanner hand piece, makes the beam divide into micro-sized units and leaves normal tissues among the beams to reduce direct skin damages to shorten the down time and to allow the skin to be cured faster. PENTAGON GRAND is very much effective to improve pores, scars, deep wrinkles and rejuvenation like laser scaling.",
            "By inducing healing response of the dermis, fibroblasts are stimulated, producing substances like collagen. Thus it aims the improvement of the aging process by relieving and curing scars, reforming pores and reducing wrinkles.",
            "PENTAGON GRAND, takes into advantage the use of the traditional continuous wave controlled method. Thus, with an Ultra Pulse control method, there is less pain and almost no downtime with quick recovery through a safe and elaborate power output.",
          ],
          "Indications" : [
            "Large Pores", "Wrinkles", "Acne Scars", "Hemorrhoid", "Condyloma", "Spots", "Lentiginess", "Corn",
          ],
          "Modes" : [
            "Fraction Laser Mode : This mode is an ultra fractional laser system being used in the treatment for skin rejuvenation, scars and so on.",
            "Continues Wave Mode : It is normally used in incision for more accurate operation surgery",
            "Ultra Pulse Mode : The laser beam of 30W high peak power is divided into very short pulse length and time in this mode, thus the laser beam can be applied to the area of treatment in an accurate array. This mode is suitable for the treatment like spots, corn.",
          ],
          "Product Specifications" : [
            "Power : Max. 20/30 [W] (by RF tube)", "Fractional Laser : Pulse Energy - 3 ~ 300 [mJ], Scan Area Size - 3 x 3 ~ 20 x 20 [mm], Scan Area Shape - Square & Rectangular",
            "Continues Wave :	Spot Size(30W) - 50mm Hand Piece (1.0 [mm]) & 100mm Hand Piece (1.5 [mm]), Power - Max. 20/30 [W] (by RF tube)",
            "Ultra Pulse : Frequency - 10 ~ 1,000 [Hz], Duration - 100 ~ 2,000 [us]", `Display : 8" LCD`, "Aiming Beam : Diode Laser Beam 650nm (Light Adjustable)",
            "Laser Delivery : 7Joint Articulated Arm", "Input Voltage : 200 ~ 240 [VAC], 50/60 [Hz]", "Weight : 62 [kg]", "Dimension : 450 x 510 x 1,150 [mm] (W x D x H)",
          ],
        },
        img: pentagonGrand,
        category: "Skin",
      },
      {
        id: 9,
        title: "Pentagon Glass F",
        subtitle: "CO2 Laser for Skin Rejuvenation",
        details : {
          "About Pentagon Glass F" : [
            "PENTAGON GLASS F, the CO2 Fractional Laser (Glass Tube) by scanner type, makes the beam divide into micro-sized units and leaves normal tissues among the beams to reduce direct skin damages to shorten the down time and to allow the skin to be cured faster. PENTAGON GLASS F is very much effective to improve pores, scars, deep wrinkles and rejuvenation like laser scaling.",
            "By inducing healing response of the dermis, fibroblasts are stimulated, producing substances like collagen. Thus it aims the improvement of the aging process by relieving and curing scars, reforming pores and reducing wrinkles.",
            "PENTAGON GLASS F, takes into advantage the use of the traditional continuous wave controlled method. Thus, with an Ultra Pulse control method, there is less pain and almost no downtime with quick recovery through a safe and elaborate power output.",
          ],
          "Indications" : [
            "Large Pores", "Wrinkles", "Acne Scars", "Hemorrhoid", "Condyloma", "Spots", "Lentiginess", "Corn",
          ],
          "Modes" : [
            "Fraction Laser Mode : This mode is an ultra fractional laser system being used in the treatment for skin rejuvenation, scars and so on.",
            "Continues Wave Mode : It is normally used in incision for more accurate operation surgery",
            "Ultra Pulse Mode : The laser beam of 30W high peak power is divided into very short pulse length and time in this mode, thus the laser beam can be applied to the area of treatment in an accurate array. This mode is suitable for the treatment like spots, corn.",
          ],
          "Product Specifications" : [
            "Laser Type :	CO2 Fractional + Surgical Laser System", "Laser Source : CO2 Glass Tube", "Wavelength : 10,600 [㎛]",
            "Power : Max. 20W", "Fractional Laser : Pulse Energy - 3 ~ 300 [mJ], Scan Area Size - 3 x 3 ~ 20 x 20 [mm], Scan Area Shape - Square & Rectangular",
            "Continues Wave :	Spot Size(30W) - 50mm Hand Piece (1.0 [mm]) & 100mm Hand Piece (1.5 [mm]), Power - Max. 30 W",
            "Ultra Pulse : Frequency - 10 ~ 1,000 [Hz], Duration - 100 ~ 2,000 [us]", `Display : 8" LCD`, "Aiming Beam : Diode Laser Beam 650nm (Light Adjustable)",
            "Laser Delivery : 7Joint Articulated Arm", "Input Voltage : 220 [VAC], 50/60 [Hz]", "Weight : 52 [kg]", "Dimension : 460 x 520 x 1,320 [mm] (W x D x H)",
          ],
          "Advantages" : [
            "High Peak Power", "Fine Beam Quality", "Powerful and Rapid Treatment", "Less Pain", "Fractional Laser, Continues Wave, Ultra Pulse Mode", "Two Type Shapes in Fractional Laser",
          ],
        },
        img: pentagonGlassF,
        category: "Skin",
      },
      {
        id: 10,
        title: "Pentagon G Slim",
        subtitle: "CO2 Laser for Surgical",
        details : {
          "About Pentagon G Slim" : "PENTAGON G SLIM, the CO2 Surgical Laser (Glass Tube) Unit, makes the beam divide into micro-sized units and leaves normal tissues among the beams to reduce direct skin damages to shorten the down time and to allow the skin to be cured faster.",
          "Indications" : [
            "Hemorrhoid", "Condyloma", "Spots", "Lentiginess", "Corn",
          ],
          "Modes" : [
           "Continues Wave Mode : It is normally used in incision for more accurate operation surgery",
            "Ultra Pulse Mode : The laser beam of 30W high peak power is divided into very short pulse length and time in this mode, thus the laser beam can be applied to the area of treatment in an accurate array. This mode is suitable for the treatment like spots, corn.",
          ],
          "Product Specifications" : [
            "Laser Type : CO2 Surgical Laser Unit", "Laser Source : CO2 Glass Tube", "Wavelength : 10,600 [㎛]",
            "Power : Max. 30W", 
            "Continues Wave :	Spot Size (30W) : 50mm Hand Piece (0.6 [mm]), 100mm Hand Piece (1.0 [mm]), Power - Max. 30 W",
            "Ultra Pulse : Frequency - 10 ~ 1,000 [Hz], Duration - 100 ~ 2,000 [us]", `Display : 8" LCD`, "Aiming Beam : Diode Laser Beam 650nm (Light Adjustable)",
            "Laser Delivery : 7Joint Articulated Arm", "Input Voltage : 220 [VAC], 60 [Hz]", "Weight : 46 [kg]", "Dimension : 320 x 420 x 1,140 [mm] (W x D x H)",
          ],
          "Advantages" : [
            "High Peak Power", "Fine Beam Quality", "Less Pain", "Continues Wave, Ultra Pulse Mode", 
          ],
        },
        img: pentagonGSlim,
        category: "Skin",
      },
      {
        id: 11,
        title: "Tinea",
        subtitle: "Treatment for Onychomycrosis",
        details : {
          "About Tinea" : [
            "Dual Wavelength Laser Therapy", "Non-thermal Laser Treatment", "Low Level Laser Therapy Method", "No Pain, No Harm",
          ],
          "Product Specifications" : [
            "Laser Source	: Diode Laser", "Wavelength	: 405 [nm] / 635 [nm]", "Operation Time(C/W Mode)	: Mode 1 - Max. 12 [Min], Mode 2 - Max. 15 [Min], Mode 3 - Max. 20 [Min]",
            "Emitting Area	140 x 1.2 [mm]", "Max. Output	: 405 [nm] - 20mW, 635 [nm] - 50mW", `Display	: [Product] 7" LCD (Touchscreen), [Lift] 15" LCD`,
            "Input Voltage : 100-240 [VAC], 50/60 [Hz]", "Dimension	: [Product] 406 x 382 x 340 [mm] (W x D x H), [Lift] 600 x 680 x 1,300 [mm] (W x D x H)",
            "Weight	: [Product] 14.5 [kg], [Lift] 40 [kg]"
          ],
          "What is LLT" : [
            "Low-Level Laser Therapy (LLLT) is a treatment that promotes tissue regeneration, reduces inflammation, and relieves pain by applying low-power laser light, typically in the range of 1mW to 500mW, to the lesion.",
            "405 [nm] Wavelength : Removal the onychomycrosis by killing fungus", "635 [nm] Wavelength : Activating the blood circulation cell regeneration and immunity for delaminating germ",
          ]
        },
        img: tinea,
        category: "Skin",
      },
      {
        id: 12,
        title: "Noable Laser",
        subtitle: "Get Noble skin, Just NOABLE LASERs",
        details : {
          "About Noable Laser" : [
            "The NOABLE LASER is a laser system designed to target the acne at the root of the related problems.", "It can be effectively used to treat acne and oily skin, improve the skin of acne scarring, and rejuvenate the complexion by increasing collagen production.",
          ],
          "How does it Work" : [
            "1,450nm wavelength of NOABLE LASER works by effectively targeting sebaceous glands that cause acne while stimulating the collagen production.",
            "This alters the functionality of the sebaceous glands by damaging them and stops them from overproducing sebum."
          ],
          "Product Specifications" : [
            "Laser Type	: Laser System, Diode Laser Module", "Laser Source :	Diode Laser Module manufactured by Lumics Gmbh", "Indications :	Acne Treatment (STAMPING MODE), Skin Renewal (TONING MODE)",
            "Adjustable Spot Size	: 4mm / 6mm / 8mm / 10mm", "Wavelength :	1,450 [nm]", "Mode	: STAMPING / TONING", "Spot Size	: 4mm / 6mm / 8mm / 10mm",
            "Memory	: Available 3 Memory Space", "Max. Output	: 22W", "Input Voltage : 100-240 [VAC], 50/60 [Hz]", "Dimension	: 420 x 420 x 1,560 [mm] (W x D x H)", 
            "Weight :	36 [kg]",
          ],
          "What is DCD" : "DCD(Direct Cooling Device) is a skin cooling device that protects the skin surface from the heat that may occur due to laser energy during the treatment.",
          "Advantages" : [
            "Luxurious Design", "Spot Size Change without Changing Lens", "DCD Cooling Method", "Can be Operated by Hand piece GUI",
          ],
        },
        img: noableLaser,
        category: "Skin",
      },
    ]
  ]
};

const PREvents = [
  {
    "Title" : "Cosmorprof",
    "Location" : "Mumbai",
    "Dates" : "December 2024",
    "Image" : cosmoprofMumbai,
  },
  {
    "Title" : "Medica",
    "Location" : "Germany",
    "Dates" : "November 2024",
    "Image" : medicaGermany,
  },
  {
    "Title" : "Cosmorprof",
    "Location" : "Italy",
    "Dates" : "March 2024",
    "Image" : cosmoprofItaly,
  },
  {
    "Title" : "In-Cosmetics",
    "Location" : "France",
    "Dates" : "April 2024",
    "Image" : incosmeticsFrance,
  },
  {
    "Title" : "Cosmorprof",
    "Location" : "Hong Kong",
    "Dates" : "July 2024",
    "Image" : cosmoprofHK,
  },
  {
    "Title" : "Cosmorprof",
    "Location" : "Las Vegas",
    "Dates" : "July 2024",
    "Image" : cosmoprofLA,
  },

];

export { productTypeToPageMapping , PREvents};
