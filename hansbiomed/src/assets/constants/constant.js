import noseImplant from "../noseImplant.jpeg";
import chinImplant from "../chinImplant.jpeg";
import cheekImplant from "../cheekImplant.jpeg";
import botulinumToxinTypeA from "../botulinumToxinTypeA.jpeg";
import hyaluronicAcidFiller from "../hyaluronicAcidFiller.jpeg";
import siliconeBreastImplant from "../siliconeBreastImplant.jpeg";
import tissueExpander from "../tissueExpander.jpeg";
import siliconeBreastImplantShape from "../siliconeBreastImplantShape.jpeg";

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
        img: siliconeBreastImplant,
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
        img: tissueExpander,
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
        img: botulinumToxinTypeA,
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
        img: botulinumToxinTypeA,
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
        img: botulinumToxinTypeA,
        category: "Bone",
      }
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
};

export { productTypeToPageMapping };
