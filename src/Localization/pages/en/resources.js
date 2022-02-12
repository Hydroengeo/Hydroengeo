const resources = {
  heading: `
  LABORATORY OF GROUNDWATER RESOURCES AND RESERVES 
  `,
  about: `The laboratory provides the following services:`,
  heading1: ` Determination of the degree of availability of fresh groundwater resources in the context of regions and districts of the Republic of Uzbekistan.`,
  heading2: ` Assessment of the current state of fresh groundwater deposits and a preliminary forecast of its change.`,
  heading3: ` Calculation of hydrogeological parameters of aquifers (preliminary estimation of parameters, estimation of RKMOP parameters, numerical-analytical methods for calculating parameters using the HydroPar software product)
`,
  heading4: `Assessment (reassessment) of operational groundwater reserves. `,
  heading5: ` Development of recommendations and methodology for the effective choice of areas of prospecting and exploration for fresh groundwater and their rational use. 
  Study of the geological and hydrogeological conditions of fresh groundwater deposits, calculation of groundwater reserves using modern modeling software products and GIS technologies. 
  Substantiation of the most effective types and schemes of water intakes (borehole, gallery).
  `,
  heading6: `The most significant achievements of the past years: `,
  heading7: `  - A methodology has been developed for assessing the predicted resources and regional operational groundwater reserves of the Republic.  `,
  heading8: `- For the first time, a preliminary assessment of the predicted resources and regional operational reserves of groundwater on the territory of the Republic was carried out, which made it possible to give a feasibility study for the prospective use of groundwater for the national economy. `,
  heading9: ` - The principles for identifying natural deposits of groundwater for the purposes of water supply, a methodology for their exploration and assessment of the predicted resources of groundwater deposits and operating reserves in its individual sections (operational deposits) have been developed.). `,
  heading10: `- Recommendations for the integrated use of surface and groundwater resources allowing their most efficient and rational use have been substantiated. `,
  heading11: `- A technique has been developed to enhance the supply of groundwater through targeted artificial replenishment of their reserves in certain areas of groundwater deposits, where the amount of natural resources and groundwater reserves is limited and significantly less than the need.  `,
  heading12: ` -
  - A technique for estimating the operational groundwater reserves based on numerical and analog mathematical models has been developed.`,
  heading13: `- Исследованы
  - The issues of manifestation of natural low water in the sources of formation groundwater deposits (GWD) resources. `,
  heading14: ` - A technique for assessing the aquifers geofiltration parameters based on the data of experimental filtration works has been developed, which is implemented in the form of a methodological manual for automation of the parameters calculation on a PC. `,
  heading15: `- Methodological requirements for the reassessment of operational groundwater reserves under the current conditions of their formation have been developed.  `,
  heading16: `-- Modern numerical models of the Modflow type were tested, which make it possible to predict the groundwater operational reserves based on the solution of hydrodynamic and migration problems.  `,
  heading17: ` All developments are introduced into production and presented in more than 20 monographs. `,
  heading18: ` Currently,`,
  heading19: `the laboratory has highly qualified personnel, modern computer equipment, and the necessary software systems (Modflow, Hydropar). This allows to successfully solve in the coming decades, first of all, the tasks aimed at preserving fresh groundwater deposits due to the growing shortage of drinking water sources for the growing population of the Republic. `,
  heading20: `This will require: 
  - assess the current state of all fresh groundwater deposits under conditions of technogenic load and changing sources of groundwater formation based on the consistent creation of models - informational, hydrogeological and mathematical (numerical), 
  `,
  heading21: `- to substantiate the reliable geofiltrational structure of the mathematical models of the GWD, which are the basis that determines its quantitative and qualitative indicators, `,
  heading22: `- to develop mathematical models of GWD that fully meet the hydrogeological one on a reliable geofiltration basis, which will allow to assess the current state of the deposit, its existing resources and groundwater reserves and will serve as the initial basis for monitoring studies and reassessment of the operational reserves of deposits. `,
  heading23: `Currently, the research of the laboratory `,
  heading24: ` solves poorly studied tasks within the framework of the above strategic direction:`,
  heading25: `- connections between geofiltration and migration parameters are clarified;`,
  heading26: `- long-term studies of the low water manifestation in the sources of groundwater deposits resources formation are being summarized; `,
  heading27: `formation are being summarized;  `,
  heading28: ` - the research methodology for groundwater monitoring and the structure of its network are being improved and developed. 


`,
  heading29: `Map of groundwater deposits of the Republic of Uzbekistan. `,
  heading30: `   The main direction of the laboratory "Resources and reserves of groundwater" is providing a solution of drinking water supply issue of the Republic in the XXI century, the maximum conservation of groundwater reserves of explored deposits on the basis of their competent highly efficient use, as well as finding new promising areas, both within the boundaries of the deposits themselves and beyond (areas of local accumulation of fresh groundwater). `,
  heading31: `A general hydrogeological concept was developed for the use and conservation of groundwater reserves of deposits in the paleoalluvium of the Syr Darya in connection with the reduction and deterioration in the quality of sources for the formation of their resources.
  A three-dimensional numerical model of fresh groundwater deposits in the paleoalluvium of the Syrdarya River was developed using the Visual ModFlow software product. 
  `,
  heading32: `The laboratory "Resources and reserves of groundwater" developed the software system "Gidropar" to assess the geofiltration parameters of aquifers according to experimental filtration work, which was successfully implemented when calculating the operational groundwater reserves of several fields. `,
  heading33: `
  The parameters of the filtration coefficient are calculated. 
  
  `,
  heading34: `Regulatory and methodological documents developed in the laboratory `,
  heading35: `Instruction for organizing and carrying out geological survey, compiling and preparing for publication the state geological map of the Republic of Uzbekistan at a scale of 1: 50000, 1: 25000 approved by the State Committee for Geology of the Republic of Uzbekistan. `,
  heading36: `Instruction for the application of the "Classification of operational reserves and forecast resources of groundwater" to deposits of drinking and industrial waters.`,
  heading37: `Instruction on the content, execution and procedure for submitting to the State Commission for Mineral Reserves under the State Committee of the Republic of Uzbekistan on Geology and Mineral Resources materials on the calculation of operational reserves of drinking and technical water.`,
  heading38: `Guidelines for geological exploration by stages (groundwater).`,
  heading39: `Classification of operational reserves and predicted groundwater resources.`,
  heading40: `Methodological manual for the automation of calculation of the parameters of aquifers according to the data of experimental filtration works on a PC.`,
  heading41: ` Methodological manual for the automation of the aquifers parameters calculation according to the data of experimental filtration works on a PC (SE “Institute GIDROINGEO).`,
  heading42: ` Guidelines for the prospecting, exploration and evaluation of reserves for gallery-type water intakes in deposits and areas of local accumulation of groundwater.`,
  heading43: `Methodological recommendations for improving the reliability of the operational groundwater reserves forecast and their assessment (SE "Institute GIDROINGEO").`,
  heading44: `  1. Nagevich P.P. Formation and assessment of aquifers filtration properties of. Tashkent, Gidroingeo, 1998. `,
  heading45: `   2. Nagevich P.P., Chebotareva O.V. Assessment of the current state of fresh groundwater deposits and reassessment of their operational reserves: approaches, requirements and justifications. Tashkent, Gidroingeo, 2009. `,
  heading46: `
  3. Nagevich P.P. Formation and distribution of filtration properties of alluvial aquifers: main factors, processes and features. Tashkent, Gidroinego, 2013.`,
  heading47: `4. Nagevich P.P., Chebotareva O.V., Miryusupov F.M. Gallery groundwater intakes: past, present, prospects for the future. Tashkent, Gidroingeo, 2017.`,
  heading48: ` 5. Nagevich P.P., Chebotareva O.V. Methods for assessing and reassessing the operational reserves of fresh groundwater deposits in Uzbekistan and their current state. Tashkent, Gidroingeo, 2021.`,

  adittion: `Monographs`,
};

export default resources;
