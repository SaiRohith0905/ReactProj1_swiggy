import React, { useState, useEffect, useRef } from "react";
import BestOffersforYou from "./BestOffersforYou";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestaurentsInLocation from "./TopRestaurentsInLocation.js";
import RestaurentsList from "./RestaurentsList.js";
import { RESDATA } from "../Constants/Constants.js";

const Body = () => {
  const [firstOffsetRequest, setFirstOffsetRequest] = useState(true);
  const [nextOffSetToken, setNextOffSetToken] = useState("");
  const [bestOfferCard, setBestOfferCard] = useState({
    card: {
      card: {
        imageGridCards: { info: [] },
      },
    },
  });

  const [whatsOnYourMind, setWhatsOnYourMind] = useState({
    card: {
      card: {
        imageGridCards: { info: [] },
      },
    },
  });

  const [topRestaurents, setTopRestaurents] = useState({
    card: {
      card: {
        gridElements: {
          infoWithStyle: {
            restaurants: [],
          },
        },
      },
    },
  });

  const [restaurents, setRestaurents] = useState({
    card: {
      card: {
        gridElements: {
          infoWithStyle: {
            restaurants: [],
          },
        },
      },
    },
  });

  const mindTitle = useRef("");

  async function fetchAllDetails() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9296796&lng=80.2348196&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    jsonResponse = {
      statusCode: 0,
      data: {
        statusMessage: "done successfully",
        pageOffset: {
          nextOffset: "COVCELQ4KICo1MHbrNiUETCnEzgD",
          widgetOffset: {
            NewListingView_Topical_Fullbleed: "",
            NewListingView_category_bar_chicletranking_TwoRows: "",
            NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
            Restaurant_Group_WebView_PB_Theme: "",
            Restaurant_Group_WebView_SEO_PB_Theme: "",
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
            inlineFacetFilter: "",
            restaurantCountWidget: "",
          },
        },
        cards: [
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                header: {
                  headerStyling: {
                    padding: {
                      left: 16,
                      top: 14,
                      bottom: 2,
                    },
                  },
                },
                layout: {
                  rows: 1,
                  columns: 3,
                  horizontalScrollEnabled: true,
                  shouldSnap: true,
                  itemSpacing: 10,
                  widgetPadding: {},
                  containerStyle: {
                    containerPadding: {
                      left: 16,
                      top: 12,
                      right: 16,
                      bottom: 12,
                    },
                  },
                  scrollBar: {
                    scrollThumbColor: "#E46D47",
                    scrollTrackColor: "#E4E4E4",
                    width: 54,
                    height: 4,
                    scrollStyling: {
                      padding: {
                        top: 6,
                        bottom: 12,
                      },
                    },
                  },
                  autoScrollConfig: {
                    isScrollEnabled: true,
                    autoScrollDuration: 4,
                    autoScrollResetDuration: 4,
                  },
                  dotScrollBar: {
                    activeColor: "#36393E",
                    inactiveColor: "#66686E",
                    activeSize: 16,
                    inactiveMediumSize: 7,
                    inactiveSmallSize: 4,
                    dotSpacing: 8,
                    windowSize: 5,
                    showCount: true,
                    textColor: "#FFFFFF",
                    scrollStyling: {
                      padding: {
                        top: 6,
                        bottom: 12,
                      },
                    },
                  },
                },
                imageGridCards: {
                  info: [
                    {
                      id: "1200052",
                      imageId:
                        "rng/md/carousel/production/3967580c0329555334072b18ba3c889c",
                      action: {
                        link: "https://www.swiggy.com/collections/92870?collection_id=92870&tags=layout_ux4&type=rcv2",
                        text: "All new super",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "GET 50% OFF ON FIRST ORDER",
                        altTextCta: "ORDER NOW",
                      },
                      entityId: "92870",
                      frequencyCapping: {},
                    },
                    {
                      id: "1539072",
                      imageId:
                        "rng/md/carousel/production/fd426b942f60921eb65afb229d274574",
                      action: {
                        link: "https://www.swiggy.com/collections/99945?collection_id=99945&type=rcv2",
                        text: "Gourmet LN/DN",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "GOURMET Snacks",
                        altTextCta: "Order now",
                      },
                      entityId: "swiggy://collectionV2?collection_id=99945",
                      frequencyCapping: {},
                    },
                    {
                      id: "1544106",
                      imageId:
                        "rng/md/carousel/production/3057f3335c3ed7c84370f98fa3c34220",
                      action: {
                        link: "https://www.swiggy.com/menu/16543",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "Brands with Offers",
                        altTextCta: "open",
                      },
                      entityId: "16543",
                      frequencyCapping: {},
                      isManualAds: true,
                    },
                  ],
                  style: {
                    width: {
                      type: "TYPE_RELATIVE",
                      value: 0.95238,
                      reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                    },
                    height: {
                      type: "TYPE_RELATIVE",
                      value: 0.59685,
                      reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                    },
                  },
                },
                id: "topical_banner",
                gridElements: {
                  infoWithStyle: {
                    "@type":
                      "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                    info: [
                      {
                        id: "1200052",
                        imageId:
                          "rng/md/carousel/production/3967580c0329555334072b18ba3c889c",
                        action: {
                          link: "https://www.swiggy.com/collections/92870?collection_id=92870&tags=layout_ux4&type=rcv2",
                          text: "All new super",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "GET 50% OFF ON FIRST ORDER",
                          altTextCta: "ORDER NOW",
                        },
                        entityId: "92870",
                        frequencyCapping: {},
                      },
                      {
                        id: "1539072",
                        imageId:
                          "rng/md/carousel/production/fd426b942f60921eb65afb229d274574",
                        action: {
                          link: "https://www.swiggy.com/collections/99945?collection_id=99945&type=rcv2",
                          text: "Gourmet LN/DN",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "GOURMET Snacks",
                          altTextCta: "Order now",
                        },
                        entityId: "swiggy://collectionV2?collection_id=99945",
                        frequencyCapping: {},
                      },
                      {
                        id: "1544106",
                        imageId:
                          "rng/md/carousel/production/3057f3335c3ed7c84370f98fa3c34220",
                        action: {
                          link: "https://www.swiggy.com/menu/16543",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "Brands with Offers",
                          altTextCta: "open",
                        },
                        entityId: "16543",
                        frequencyCapping: {},
                        isManualAds: true,
                      },
                    ],
                    style: {
                      width: {
                        type: "TYPE_RELATIVE",
                        value: 0.95238,
                        reference:
                          "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                      },
                      height: {
                        type: "TYPE_RELATIVE",
                        value: 0.59685,
                        reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                      },
                    },
                  },
                },
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                header: {
                  title: "What's on your mind?",
                  headerStyling: {
                    padding: {
                      left: 16,
                      top: 16,
                      bottom: 4,
                    },
                  },
                },
                layout: {
                  rows: 1,
                  columns: 10,
                  horizontalScrollEnabled: true,
                  itemSpacing: 24,
                  widgetPadding: {},
                  containerStyle: {
                    containerPadding: {
                      left: 8,
                      top: 8,
                      right: 12,
                      bottom: 4,
                    },
                  },
                  scrollBar: {},
                  widgetTheme: {
                    defaultMode: {
                      backgroundColour: "#FFFFFF",
                      theme: "THEME_TYPE_LIGHT",
                    },
                    darkMode: {
                      theme: "THEME_TYPE_DARK",
                    },
                  },
                },
                imageGridCards: {
                  info: [
                    {
                      id: "750580",
                      imageId:
                        "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                        text: "pizzas",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for pizza",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                      frequencyCapping: {},
                    },
                    {
                      id: "762797",
                      imageId:
                        "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                        text: "Burgers",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for burger",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                      frequencyCapping: {},
                    },
                    {
                      id: "750592",
                      imageId:
                        "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                        text: "Biryani",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for biryani",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                      frequencyCapping: {},
                    },
                    {
                      id: "750223",
                      imageId:
                        "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                        text: "Rolls",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for roll",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                      frequencyCapping: {},
                    },
                    {
                      id: "750235",
                      imageId:
                        "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                        text: "Sandwich",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for sandwich",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                      frequencyCapping: {},
                    },
                    {
                      id: "750644",
                      imageId:
                        "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                        text: "Idli",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for idly",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                      frequencyCapping: {},
                    },
                    {
                      id: "750230",
                      imageId:
                        "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                        text: "Samosa",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for samosa",
                        altTextCta: "open",
                      },
                      entityId: "80397",
                      frequencyCapping: {},
                    },
                    {
                      id: "750209",
                      imageId:
                        "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                        text: "Pastry",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for Pastry",
                        altTextCta: "open",
                      },
                      entityId: "80358",
                      frequencyCapping: {},
                    },
                    {
                      id: "750572",
                      imageId:
                        "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                        text: "Pure Veg",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for veg",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                      frequencyCapping: {},
                    },
                    {
                      id: "749769",
                      imageId:
                        "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                        text: "Momos",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for momos",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                      frequencyCapping: {},
                    },
                    {
                      id: "750217",
                      imageId:
                        "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                        text: "Pav Bhaji",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for pav bhaji",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                      frequencyCapping: {},
                    },
                    {
                      id: "750207",
                      imageId:
                        "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                        text: "Pasta",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for pasta",
                        altTextCta: "open",
                      },
                      entityId: "80480",
                      frequencyCapping: {},
                    },
                    {
                      id: "750205",
                      imageId:
                        "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                        text: "Parotta",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for parotta",
                        altTextCta: "open",
                      },
                      entityId: "80478",
                      frequencyCapping: {},
                    },
                    {
                      id: "750605",
                      imageId:
                        "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                      action: {
                        link: "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                        text: "Tea",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for tea",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                      frequencyCapping: {},
                    },
                    {
                      id: "749874",
                      imageId:
                        "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                        text: "Cakes",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for cakes",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                      frequencyCapping: {},
                    },
                    {
                      id: "750249",
                      imageId:
                        "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                        text: "Shawarma",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for shawarma",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                      frequencyCapping: {},
                    },
                    {
                      id: "750239",
                      imageId:
                        "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                        text: "Shake",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for shakes",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                      frequencyCapping: {},
                    },
                    {
                      id: "750584",
                      imageId:
                        "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                        text: "South Indian",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for south indian",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                      frequencyCapping: {},
                    },
                    {
                      id: "750588",
                      imageId:
                        "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                        text: "Chinese",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for chinese",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                      frequencyCapping: {},
                    },
                    {
                      id: "750562",
                      imageId:
                        "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                        text: "Vada",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for vada",
                        altTextCta: "open",
                      },
                      entityId: "80427",
                      frequencyCapping: {},
                    },
                  ],
                  style: {
                    width: {
                      type: "TYPE_RELATIVE",
                      value: 0.2941,
                      reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                    },
                    height: {
                      type: "TYPE_RELATIVE",
                      value: 1.2444,
                      reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                    },
                  },
                },
                id: "whats_on_your_mind",
                gridElements: {
                  infoWithStyle: {
                    "@type":
                      "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                    info: [
                      {
                        id: "750580",
                        imageId:
                          "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                          text: "pizzas",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for pizza",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                        frequencyCapping: {},
                      },
                      {
                        id: "762797",
                        imageId:
                          "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                          text: "Burgers",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for burger",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                        frequencyCapping: {},
                      },
                      {
                        id: "750592",
                        imageId:
                          "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                          text: "Biryani",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for biryani",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                        frequencyCapping: {},
                      },
                      {
                        id: "750223",
                        imageId:
                          "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                          text: "Rolls",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for roll",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                        frequencyCapping: {},
                      },
                      {
                        id: "750235",
                        imageId:
                          "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                          text: "Sandwich",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for sandwich",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                        frequencyCapping: {},
                      },
                      {
                        id: "750644",
                        imageId:
                          "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                          text: "Idli",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for idly",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                        frequencyCapping: {},
                      },
                      {
                        id: "750230",
                        imageId:
                          "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                          text: "Samosa",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for samosa",
                          altTextCta: "open",
                        },
                        entityId: "80397",
                        frequencyCapping: {},
                      },
                      {
                        id: "750209",
                        imageId:
                          "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                          text: "Pastry",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for Pastry",
                          altTextCta: "open",
                        },
                        entityId: "80358",
                        frequencyCapping: {},
                      },
                      {
                        id: "750572",
                        imageId:
                          "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                          text: "Pure Veg",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for veg",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                        frequencyCapping: {},
                      },
                      {
                        id: "749769",
                        imageId:
                          "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                          text: "Momos",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for momos",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                        frequencyCapping: {},
                      },
                      {
                        id: "750217",
                        imageId:
                          "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                          text: "Pav Bhaji",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for pav bhaji",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                        frequencyCapping: {},
                      },
                      {
                        id: "750207",
                        imageId:
                          "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                          text: "Pasta",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for pasta",
                          altTextCta: "open",
                        },
                        entityId: "80480",
                        frequencyCapping: {},
                      },
                      {
                        id: "750205",
                        imageId:
                          "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                          text: "Parotta",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for parotta",
                          altTextCta: "open",
                        },
                        entityId: "80478",
                        frequencyCapping: {},
                      },
                      {
                        id: "750605",
                        imageId:
                          "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                        action: {
                          link: "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                          text: "Tea",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for tea",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                        frequencyCapping: {},
                      },
                      {
                        id: "749874",
                        imageId:
                          "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                          text: "Cakes",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for cakes",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                        frequencyCapping: {},
                      },
                      {
                        id: "750249",
                        imageId:
                          "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                          text: "Shawarma",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for shawarma",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                        frequencyCapping: {},
                      },
                      {
                        id: "750239",
                        imageId:
                          "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                          text: "Shake",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for shakes",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                        frequencyCapping: {},
                      },
                      {
                        id: "750584",
                        imageId:
                          "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                          text: "South Indian",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for south indian",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                        frequencyCapping: {},
                      },
                      {
                        id: "750588",
                        imageId:
                          "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                        action: {
                          link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                          text: "Chinese",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurant curated for chinese",
                          altTextCta: "open",
                        },
                        entityId:
                          "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                        frequencyCapping: {},
                      },
                      {
                        id: "750562",
                        imageId:
                          "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
                        action: {
                          link: "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                          text: "Vada",
                          type: "WEBLINK",
                        },
                        entityType: "BANNER",
                        accessibility: {
                          altText: "restaurants curated for vada",
                          altTextCta: "open",
                        },
                        entityId: "80427",
                        frequencyCapping: {},
                      },
                    ],
                    style: {
                      width: {
                        type: "TYPE_RELATIVE",
                        value: 0.2941,
                        reference:
                          "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                      },
                      height: {
                        type: "TYPE_RELATIVE",
                        value: 1.2444,
                        reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                      },
                    },
                  },
                },
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                header: {
                  title: "Top restaurant chains in Chennai",
                  action: {},
                  headerStyling: {
                    padding: {
                      left: 16,
                      top: 28,
                      bottom: 18,
                    },
                  },
                },
                layout: {
                  rows: 1,
                  columns: 20,
                  horizontalScrollEnabled: true,
                  itemSpacing: 32,
                  widgetPadding: {},
                  containerStyle: {
                    containerPadding: {
                      left: 16,
                      right: 12,
                      bottom: 12,
                    },
                  },
                  scrollBar: {
                    scrollThumbColor: "#E46D47",
                    scrollTrackColor: "#02060C",
                    width: 54,
                    height: 4,
                    scrollStyling: {
                      padding: {
                        top: 6,
                        bottom: 24,
                      },
                    },
                  },
                  widgetTheme: {
                    defaultMode: {
                      backgroundColour: "#1B3028",
                      theme: "THEME_TYPE_DARK",
                    },
                    darkMode: {
                      backgroundColour: "#1B3028",
                      theme: "THEME_TYPE_DARK",
                    },
                  },
                },
                id: "top_brands_for_you",
                gridElements: {
                  infoWithStyle: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                    restaurants: [
                      {
                        info: {
                          id: "257162",
                          name: "The Brooklyn Creamery - Healthy Ice Cream",
                          cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
                          locality: "Mahaveer Colony",
                          areaName: "Vepery",
                          costForTwo: "₹200 for two",
                          cuisines: ["Healthy Food", "Desserts", "Ice Cream"],
                          avgRating: 4.6,
                          veg: true,
                          feeDetails: {
                            restaurantId: "257162",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "236673",
                          avgRatingString: "4.6",
                          totalRatingsString: "500+",
                          sla: {
                            deliveryTime: 30,
                            lastMileTravel: 1.5,
                            serviceability: "SERVICEABLE",
                            slaString: "30 mins",
                            lastMileTravelString: "1.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-12-01 02:00:00",
                            opened: true,
                          },
                          badges: {
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "brand",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "brand",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "50% OFF",
                            subHeader: "UPTO ₹100",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-mahaveer-colony-vepery-chennai-257162",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "14044",
                          name: "Fruit Shop on Greams Road",
                          cloudinaryImageId: "ufryw0c5fuxraq1zx1pq",
                          locality: "Opposite Commissioner Office",
                          areaName: "Egmore",
                          costForTwo: "₹150 for two",
                          cuisines: ["Juices", "Beverages", "Desserts"],
                          avgRating: 4.5,
                          veg: true,
                          feeDetails: {
                            restaurantId: "14044",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "401",
                          avgRatingString: "4.5",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 36,
                            lastMileTravel: 2.3,
                            serviceability: "SERVICEABLE",
                            slaString: "36 mins",
                            lastMileTravelString: "2.3 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:30:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "options available",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/fruit-shop-on-greams-road-opposite-commissioner-office-egmore-chennai-14044",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "224428",
                          name: "Oven Story Pizza - Standout Toppings",
                          cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
                          locality: "Brickklin Road",
                          areaName: "Purasaiwakkam",
                          costForTwo: "₹400 for two",
                          cuisines: [
                            "Pizzas",
                            "Pastas",
                            "Italian",
                            "Desserts",
                            "Beverages",
                          ],
                          avgRating: 4.1,
                          feeDetails: {
                            restaurantId: "224428",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 4400,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 4400,
                          },
                          parentId: "3534",
                          avgRatingString: "4.1",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 32,
                            lastMileTravel: 3,
                            serviceability: "SERVICEABLE",
                            slaString: "27-37 mins",
                            lastMileTravelString: "3.0 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:59:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "60% OFF",
                            subHeader: "UPTO ₹120",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-brickklin-road-purasaiwakkam-chennai-224428",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "16543",
                          name: "A2B - Adyar Ananda Bhavan",
                          cloudinaryImageId: "dsliyhlbtgtnnuxyrpsf",
                          locality: "Purasai High Road",
                          areaName: "Purasaiwakkam",
                          costForTwo: "₹300 for two",
                          cuisines: [
                            "South Indian",
                            "North Indian",
                            "Sweets",
                            "Chinese",
                          ],
                          avgRating: 4.5,
                          veg: true,
                          feeDetails: {
                            restaurantId: "16543",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "22",
                          avgRatingString: "4.5",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 34,
                            lastMileTravel: 2.6,
                            serviceability: "SERVICEABLE",
                            slaString: "34 mins",
                            lastMileTravelString: "2.6 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 22:45:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "20% OFF",
                            subHeader: "UPTO ₹50",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-purasai-high-road-purasaiwakkam-chennai-16543",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "37972",
                          name: "McDonald's",
                          cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
                          locality: "Spencer",
                          areaName: "Anna Salai",
                          costForTwo: "₹400 for two",
                          cuisines: [
                            "Burgers",
                            "Beverages",
                            "Cafe",
                            "Desserts",
                          ],
                          avgRating: 4.2,
                          feeDetails: {
                            restaurantId: "37972",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3700,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3700,
                          },
                          parentId: "630",
                          avgRatingString: "4.2",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 55,
                            lastMileTravel: 3.5,
                            serviceability: "SERVICEABLE",
                            slaString: "55 mins",
                            lastMileTravelString: "3.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 22:45:00",
                            opened: true,
                          },
                          badges: {
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "options available",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "10% OFF",
                            subHeader: "ABOVE ₹1000",
                            discountTag: "FLAT DEAL",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/mcdonalds-spencer-anna-salai-chennai-37972",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "357912",
                          name: "KFC",
                          cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
                          locality: "Royapuram Kalmandapam",
                          areaName: "Old Washermanpet",
                          costForTwo: "₹400 for two",
                          cuisines: [
                            "Burgers",
                            "Biryani",
                            "American",
                            "Snacks",
                            "Fast Food",
                          ],
                          avgRating: 4,
                          feeDetails: {
                            restaurantId: "357912",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 6300,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 6300,
                          },
                          parentId: "547",
                          avgRatingString: "4.0",
                          totalRatingsString: "5K+",
                          sla: {
                            deliveryTime: 50,
                            lastMileTravel: 5.8,
                            serviceability: "SERVICEABLE",
                            slaString: "50 mins",
                            lastMileTravelString: "5.8 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-12-01 00:00:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "20% OFF",
                            subHeader: "UPTO ₹50",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/kfc-royapuram-kalmandapam-old-washermanpet-chennai-357912",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "16617",
                          name: "Ganga Sweets",
                          cloudinaryImageId: "zjifcm3pckhqx907crfv",
                          locality: "Purasavakkam",
                          areaName: "Purasavakkam",
                          costForTwo: "₹250 for two",
                          cuisines: ["North Indian", "South Indian", "Sweets"],
                          avgRating: 4.6,
                          veg: true,
                          feeDetails: {
                            restaurantId: "16617",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3600,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3600,
                          },
                          parentId: "405",
                          avgRatingString: "4.6",
                          totalRatingsString: "5K+",
                          sla: {
                            deliveryTime: 28,
                            lastMileTravel: 2.5,
                            serviceability: "SERVICEABLE",
                            slaString: "28 mins",
                            lastMileTravelString: "2.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 22:00:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                          },
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/ganga-sweets-purasavakkam-chennai-16617",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "53934",
                          name: "Ibaco",
                          cloudinaryImageId: "kujznwgh3g3tdqqrmlhu",
                          locality: "Purasaiwalkam",
                          areaName: "Vepery",
                          costForTwo: "₹800 for two",
                          cuisines: ["Ice Cream", "Desserts"],
                          avgRating: 4.6,
                          veg: true,
                          feeDetails: {
                            restaurantId: "53934",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3800,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3800,
                          },
                          parentId: "3481",
                          avgRatingString: "4.6",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 32,
                            lastMileTravel: 2.3,
                            serviceability: "SERVICEABLE",
                            slaString: "32 mins",
                            lastMileTravelString: "2.3 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:00:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "newg.png",
                                description: "Gourmet",
                              },
                            ],
                          },
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "Gourmet",
                                      imageId: "newg.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/ibaco-purasaiwalkam-vepery-chennai-53934",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "377176",
                          name: "Wow! Momo",
                          cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
                          locality: "Sydenhams Road",
                          areaName: "Nehru Stadium",
                          costForTwo: "₹300 for two",
                          cuisines: [
                            "Tibetan",
                            "Healthy Food",
                            "Asian",
                            "Chinese",
                            "Snacks",
                            "Continental",
                            "Desserts",
                            "Beverages",
                          ],
                          avgRating: 4.1,
                          feeDetails: {
                            restaurantId: "377176",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "1776",
                          avgRatingString: "4.1",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 37,
                            lastMileTravel: 0.9,
                            serviceability: "SERVICEABLE",
                            slaString: "37 mins",
                            lastMileTravelString: "0.9 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-12-01 00:00:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/wow-momo-sydenhams-road-nehru-stadium-chennai-377176",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "37629",
                          name: "Shree Mithai",
                          cloudinaryImageId: "cxmaeqlyleysefcdx9nk",
                          locality: "Dr Tv Road",
                          areaName: "Chetpet",
                          costForTwo: "₹250 for two",
                          cuisines: ["Desserts", "Street Food", "Chaat"],
                          avgRating: 4.6,
                          veg: true,
                          feeDetails: {
                            restaurantId: "37629",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3700,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3700,
                          },
                          parentId: "6988",
                          avgRatingString: "4.6",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 44,
                            lastMileTravel: 3.5,
                            serviceability: "SERVICEABLE",
                            slaString: "44 mins",
                            lastMileTravelString: "3.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 21:00:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "20% OFF",
                            subHeader: "UPTO ₹50",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/shree-mithai-dr-tv-road-chetpet-chennai-37629",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "224426",
                          name: "Faasos - Wraps & Rolls",
                          cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
                          locality: "Brickklin Road",
                          areaName: "Purasaiwakkam",
                          costForTwo: "₹200 for two",
                          cuisines: [
                            "Kebabs",
                            "Fast Food",
                            "Snacks",
                            "North Indian",
                            "American",
                            "Healthy Food",
                            "Desserts",
                            "Beverages",
                          ],
                          avgRating: 4.3,
                          feeDetails: {
                            restaurantId: "224426",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3700,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3700,
                          },
                          parentId: "21809",
                          avgRatingString: "4.3",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 47,
                            lastMileTravel: 3,
                            serviceability: "SERVICEABLE",
                            slaString: "47 mins",
                            lastMileTravelString: "3.0 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:59:00",
                            opened: true,
                          },
                          badges: {
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "options available",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "ITEMS",
                            subHeader: "AT ₹99",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-brickklin-road-purasaiwakkam-chennai-224426",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "43185",
                          name: "Palmshore",
                          cloudinaryImageId: "9ae730c95d13d6e26bf0bc9d69119a38",
                          locality: "Egmore",
                          areaName: "Egmore",
                          costForTwo: "₹400 for two",
                          cuisines: ["Arabian"],
                          avgRating: 4.1,
                          feeDetails: {
                            restaurantId: "43185",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 4200,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 4200,
                          },
                          parentId: "1689",
                          avgRatingString: "4.1",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 48,
                            lastMileTravel: 3,
                            serviceability: "SERVICEABLE",
                            slaString: "48 mins",
                            lastMileTravelString: "3.0 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:30:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "20% OFF",
                            subHeader: "UPTO ₹50",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/palmshore-egmore-chennai-43185",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "33457",
                          name: "Buhari",
                          cloudinaryImageId: "hwbeetykbqbudvijg6yd",
                          locality: "Purasawalkam - Buhari",
                          areaName: "Purasawalkam Buhari",
                          costForTwo: "₹600 for two",
                          cuisines: [
                            "Biryani",
                            "North Indian",
                            "Chinese",
                            "South Indian",
                            "Arabian",
                          ],
                          avgRating: 4,
                          feeDetails: {
                            restaurantId: "33457",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "164",
                          avgRatingString: "4.0",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 39,
                            lastMileTravel: 1.8,
                            serviceability: "SERVICEABLE",
                            slaString: "39 mins",
                            lastMileTravelString: "1.8 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:59:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "50% OFF",
                            subHeader: "UPTO ₹100",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/buhari-purasawalkam-buhari-chennai-33457",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "391590",
                          name: "The Belgian Waffle Co.",
                          cloudinaryImageId: "846dab8cca3c56a482d7cbcda0dd0eb9",
                          locality: "Sowcarpet",
                          areaName: "George Town",
                          costForTwo: "₹200 for two",
                          cuisines: [
                            "Waffle",
                            "Desserts",
                            "Ice Cream",
                            "Beverages",
                          ],
                          avgRating: 4.4,
                          veg: true,
                          feeDetails: {
                            restaurantId: "391590",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3700,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3700,
                          },
                          parentId: "2233",
                          avgRatingString: "4.4",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 56,
                            lastMileTravel: 3.5,
                            serviceability: "SERVICEABLE",
                            slaString: "56 mins",
                            lastMileTravelString: "3.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:00:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-sowcarpet-george-town-chennai-391590",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "337893",
                          name: "Chai Waale",
                          cloudinaryImageId: "agw4if2ynssp6xrc2lak",
                          locality: "Meeran Sahib Street",
                          areaName: "Anna Salai",
                          costForTwo: "₹200 for two",
                          cuisines: ["Beverages", "Snacks"],
                          avgRating: 4.4,
                          veg: true,
                          feeDetails: {
                            restaurantId: "337893",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3700,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3700,
                          },
                          parentId: "7228",
                          avgRatingString: "4.4",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 45,
                            lastMileTravel: 3,
                            serviceability: "SERVICEABLE",
                            slaString: "45 mins",
                            lastMileTravelString: "3.0 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 22:30:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "40% OFF",
                            subHeader: "UPTO ₹80",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/chai-waale-meeran-sahib-street-anna-salai-chennai-337893",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "159913",
                          name: "Chai Kings",
                          cloudinaryImageId: "bziqpg7jodn2gh5wwstz",
                          locality: "Kilpauk Medical College",
                          areaName: "Kilpauk",
                          costForTwo: "₹150 for two",
                          cuisines: ["Beverages", "Snacks", "Bakery"],
                          avgRating: 4.5,
                          feeDetails: {
                            restaurantId: "159913",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3700,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3700,
                          },
                          parentId: "2627",
                          avgRatingString: "4.5",
                          totalRatingsString: "5K+",
                          sla: {
                            deliveryTime: 45,
                            lastMileTravel: 3,
                            serviceability: "SERVICEABLE",
                            slaString: "45 mins",
                            lastMileTravelString: "3.0 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:59:00",
                            opened: true,
                          },
                          badges: {
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "options available",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/chai-kings-medical-college-kilpauk-chennai-159913",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "312965",
                          name: "Havmor Havfunn Ice Cream",
                          cloudinaryImageId: "49845b494b1e637209b7bd1c7ca184ad",
                          locality: "Comander In Chief Road",
                          areaName: "Egmore",
                          costForTwo: "₹400 for two",
                          cuisines: [
                            "Ice Cream",
                            "Ice Cream Cakes",
                            "Desserts",
                            "Beverages",
                          ],
                          avgRating: 4.6,
                          veg: true,
                          feeDetails: {
                            restaurantId: "312965",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 4400,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 4400,
                          },
                          parentId: "94570",
                          avgRatingString: "4.6",
                          totalRatingsString: "100+",
                          sla: {
                            deliveryTime: 37,
                            lastMileTravel: 3.6,
                            serviceability: "SERVICEABLE",
                            slaString: "37 mins",
                            lastMileTravelString: "3.6 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:30:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-comander-in-chief-road-egmore-chennai-312965",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "24656",
                          name: "Grill House",
                          cloudinaryImageId: "opqi0he3eokqxqw5xi6c",
                          locality: "Nungambakkam",
                          areaName: "Nungambakkam",
                          costForTwo: "₹300 for two",
                          cuisines: [
                            "North Indian",
                            "Biryani",
                            "Kebabs",
                            "Indian",
                            "Grill",
                            "Juices",
                            "Seafood",
                            "Tandoor",
                          ],
                          avgRating: 4.1,
                          feeDetails: {
                            restaurantId: "24656",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 6900,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 6900,
                          },
                          parentId: "2820",
                          avgRatingString: "4.1",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 62,
                            lastMileTravel: 6.1,
                            serviceability: "SERVICEABLE",
                            slaString: "62 mins",
                            lastMileTravelString: "6.1 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-12-01 00:00:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "₹125 OFF",
                            subHeader: "ABOVE ₹249",
                            discountTag: "FLAT DEAL",
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/grill-house-nungambakkam-chennai-24656",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "14096",
                          name: "Sangeetha Veg Restaurant",
                          cloudinaryImageId: "oodghmivnc6bxnbrvzzw",
                          locality: "Gandhi Irwin Rd",
                          areaName: "Egmore",
                          costForTwo: "₹150 for two",
                          cuisines: ["North Indian", "Chinese", "South Indian"],
                          avgRating: 4.4,
                          veg: true,
                          feeDetails: {
                            restaurantId: "14096",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "1260",
                          avgRatingString: "4.4",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 42,
                            lastMileTravel: 1.6,
                            serviceability: "SERVICEABLE",
                            slaString: "42 mins",
                            lastMileTravelString: "1.6 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 22:45:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                          },
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gandhi-irwin-rd-egmore-chennai-14096",
                          type: "WEBLINK",
                        },
                      },
                      {
                        info: {
                          id: "561677",
                          name: "The BVK Biryani (Bai Veetu Kalyanam)",
                          cloudinaryImageId: "f75bed5b83ac0a8d50acc4b478f2f062",
                          locality: "Thiruvengadam Street",
                          areaName: "Egmore",
                          costForTwo: "₹550 for two",
                          cuisines: ["Biryani", "South Indian"],
                          avgRating: 4,
                          feeDetails: {
                            restaurantId: "561677",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3800,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3800,
                          },
                          parentId: "337996",
                          avgRatingString: "4.0",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 26,
                            lastMileTravel: 0.5,
                            serviceability: "SERVICEABLE",
                            slaString: "26 mins",
                            lastMileTravelString: "0.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-12-01 03:00:00",
                            opened: true,
                          },
                          badges: {
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "options available",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {},
                        cta: {
                          link: "https://www.swiggy.com/restaurants/the-bvk-biryani-bai-veetu-kalyanam-thiruvengadam-street-egmore-chennai-561677",
                          type: "WEBLINK",
                        },
                      },
                    ],
                    theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                    widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                    style: {
                      width: {
                        type: "TYPE_RELATIVE",
                        value: 0.41111112,
                        reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                      },
                      height: {
                        type: "TYPE_RELATIVE",
                        value: 0.7027027,
                        reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                      },
                      layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                    },
                    collectionId: "84124",
                  },
                },
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
                title: "Restaurants with online food delivery in Chennai",
                id: "popular_restaurants_title",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                sortConfigs: [
                  {
                    key: "relevance",
                    title: "Relevance (Default)",
                    selected: true,
                    defaultSelection: true,
                  },
                  {
                    key: "deliveryTimeAsc",
                    title: "Delivery Time",
                  },
                  {
                    key: "modelBasedRatingDesc",
                    title: "Rating",
                  },
                  {
                    key: "costForTwoAsc",
                    title: "Cost: Low to High",
                  },
                  {
                    key: "costForTwoDesc",
                    title: "Cost: High to Low",
                  },
                ],
                restaurantCount: 1432,
                facetList: [
                  {
                    label: "Delivery Time",
                    id: "deliveryTime",
                    selection: "SELECT_TYPE_MULTISELECT",
                    facetInfo: [
                      {
                        label: "Fast Delivery",
                        id: "deliveryTimefacetquery1",
                        analytics: {},
                        openFilter: true,
                      },
                    ],
                    viewType: "VIEW_TYPE_HALF_CARD",
                    subLabel: "Filter by",
                  },
                  {
                    label: "Cuisines",
                    id: "catalog_cuisines",
                    selection: "SELECT_TYPE_MULTISELECT",
                    facetInfo: [
                      {
                        label: "Afghani",
                        id: "query_afghani",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "African",
                        id: "query_african",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "American",
                        id: "query_american",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Andhra",
                        id: "query_andhra",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Arabian",
                        id: "query_arabian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Asian",
                        id: "query_asian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Awadhi",
                        id: "query_awadhi",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Bakery",
                        id: "query_bakery",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Barbecue",
                        id: "query_barbecue",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Bengali",
                        id: "query_bengali",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Beverages",
                        id: "query_beverages",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Biryani",
                        id: "query_biryani",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Buffalo meat",
                        id: "query_buffalo_meat",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Burgers",
                        id: "query_burgers",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Burmese",
                        id: "query_burmese",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Cafe",
                        id: "query_cafe",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Cakes and Pastries",
                        id: "query_cakes_and_pastries",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Chaat",
                        id: "query_chaat",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Chettinad",
                        id: "query_chettinad",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Chinese",
                        id: "query_chinese",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Combo",
                        id: "query_combo",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Continental",
                        id: "query_continental",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Desserts",
                        id: "query_desserts",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "European",
                        id: "query_european",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Fast Food",
                        id: "query_fast_food",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Grill",
                        id: "query_grill",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Gujarati",
                        id: "query_gujarati",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Healthy Food",
                        id: "query_healthy_food",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Home Food",
                        id: "query_home_food",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Hyderabadi",
                        id: "query_hyderabadi",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Ice Cream",
                        id: "query_ice_cream",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Ice Cream Cakes",
                        id: "query_ice_cream_cakes",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Indian",
                        id: "query_indian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Italian",
                        id: "query_italian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Italian-American",
                        id: "query_italian-american",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Jain",
                        id: "query_jain",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Japanese",
                        id: "query_japanese",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Juices",
                        id: "query_juices",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Kebabs",
                        id: "query_kebabs",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Kerala",
                        id: "query_kerala",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Keto",
                        id: "query_keto",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Korean",
                        id: "query_korean",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Lebanese",
                        id: "query_lebanese",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Lucknowi",
                        id: "query_lucknowi",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Maharashtrian",
                        id: "query_maharashtrian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Malaysian",
                        id: "query_malaysian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Mangalorean",
                        id: "query_mangalorean",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Meat",
                        id: "query_meat",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Mediterranean",
                        id: "query_mediterranean",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Mexica",
                        id: "query_mexica",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Mexican",
                        id: "query_mexican",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Middle Eastern",
                        id: "query_middle_eastern",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Mughlai",
                        id: "query_mughlai",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Naga",
                        id: "query_naga",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "North Eastern",
                        id: "query_north_eastern",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "North Indian",
                        id: "query_north_indian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Oriental",
                        id: "query_oriental",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Paan",
                        id: "query_paan",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Pan-Asian",
                        id: "query_pan-asian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Pastas",
                        id: "query_pastas",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Pizzas",
                        id: "query_pizzas",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Punjabi",
                        id: "query_punjabi",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Raja",
                        id: "query_raja",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Rajasthani",
                        id: "query_rajasthani",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Rolls & Wraps",
                        id: "query_rolls_&_wraps",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Salads",
                        id: "query_salads",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Seafood",
                        id: "query_seafood",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Snacks",
                        id: "query_snacks",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "South Indian",
                        id: "query_south_indian",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Street Food",
                        id: "query_street_food",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Sushi",
                        id: "query_sushi",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Sweets",
                        id: "query_sweets",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Tandoor",
                        id: "query_tandoor",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Thai",
                        id: "query_thai",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Thalis",
                        id: "query_thalis",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Tibetan",
                        id: "query_tibetan",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Turkish",
                        id: "query_turkish",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Waffle",
                        id: "query_waffle",
                        analytics: {},
                        openFilter: true,
                      },
                    ],
                    viewType: "VIEW_TYPE_HALF_CARD",
                    canSearch: true,
                    subLabel: "Filter by cuisine",
                    openFilter: true,
                  },
                  {
                    label: "Explore",
                    id: "explore",
                    selection: "SELECT_TYPE_MULTISELECT",
                    facetInfo: [
                      {
                        label: "New on Swiggy",
                        id: "newfacetquery1",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Swiggy Exclusives",
                        id: "isExclusivefacetquery1",
                        analytics: {},
                      },
                    ],
                    viewType: "VIEW_TYPE_HALF_CARD",
                  },
                  {
                    label: "Ratings",
                    id: "rating",
                    selection: "SELECT_TYPE_MULTISELECT",
                    facetInfo: [
                      {
                        label: "Ratings 4.5+",
                        id: "ratingfacetquery3",
                        analytics: {},
                      },
                      {
                        label: "Ratings 4.0+",
                        id: "ratingfacetquery4",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Ratings 3.5+",
                        id: "ratingfacetquery5",
                        analytics: {},
                      },
                    ],
                    viewType: "VIEW_TYPE_HALF_CARD",
                    subLabel: "Filter by",
                  },
                  {
                    label: "Veg/Non-Veg",
                    id: "isVeg",
                    selection: "SELECT_TYPE_SINGLESELECT",
                    facetInfo: [
                      {
                        label: "Pure Veg",
                        id: "isVegfacetquery2",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Non Veg",
                        id: "isVegfacetquery3",
                        analytics: {},
                      },
                    ],
                    viewType: "VIEW_TYPE_FLATTENED",
                    subLabel: "Filter by",
                  },
                  {
                    label: "Offers",
                    id: "restaurantOfferMultiTd",
                    selection: "SELECT_TYPE_SINGLESELECT",
                    facetInfo: [
                      {
                        label: "Offers",
                        id: "restaurantOfferMultiTdfacetquery3",
                        analytics: {},
                        openFilter: true,
                      },
                    ],
                    viewType: "VIEW_TYPE_FLATTENED",
                    subLabel: "Restaurants with",
                  },
                  {
                    label: "Cost for two",
                    id: "costForTwo",
                    selection: "SELECT_TYPE_MULTISELECT",
                    facetInfo: [
                      {
                        label: "Rs. 300-Rs. 600",
                        id: "costForTwofacetquery3",
                        analytics: {},
                        openFilter: true,
                      },
                      {
                        label: "Greater than Rs. 600",
                        id: "costForTwofacetquery4",
                        analytics: {},
                      },
                      {
                        label: "Less than Rs. 300",
                        id: "costForTwofacetquery5",
                        analytics: {},
                        openFilter: true,
                      },
                    ],
                    viewType: "VIEW_TYPE_HALF_CARD",
                    subLabel: "Filter by",
                  },
                ],
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                layout: {
                  columns: 4,
                },
                id: "restaurant_grid_listing",
                gridElements: {
                  infoWithStyle: {
                    "@type":
                      "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                    restaurants: [
                      {
                        info: {
                          id: "708880",
                          name: "KFC",
                          cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
                          locality: "Sydenhams Road",
                          areaName: "Periyampet",
                          costForTwo: "₹400 for two",
                          cuisines: [
                            "Burgers",
                            "Biryani",
                            "American",
                            "Snacks",
                            "Fast Food",
                          ],
                          avgRating: 4,
                          feeDetails: {
                            restaurantId: "708880",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3800,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3800,
                          },
                          parentId: "547",
                          avgRatingString: "4.0",
                          totalRatingsString: "500+",
                          sla: {
                            deliveryTime: 32,
                            lastMileTravel: 0.6,
                            serviceability: "SERVICEABLE",
                            slaString: "32 mins",
                            lastMileTravelString: "0.6 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:00:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "20% OFF",
                            subHeader: "UPTO ₹50",
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          isNewlyOnboarded: true,
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/kfc-sydenhams-road-periyampet-chennai-708880",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "644303",
                          name: "A2B Veg",
                          cloudinaryImageId: "262ca7b195a5e7084e175600667f53a5",
                          locality: "Periyamet",
                          areaName: "Egmore",
                          costForTwo: "₹300 for two",
                          cuisines: [
                            "South Indian",
                            "North Indian",
                            "Sweets",
                            "Chinese",
                          ],
                          avgRating: 4.2,
                          veg: true,
                          feeDetails: {
                            restaurantId: "644303",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "439487",
                          avgRatingString: "4.2",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 33,
                            lastMileTravel: 0.6,
                            serviceability: "SERVICEABLE",
                            slaString: "33 mins",
                            lastMileTravelString: "0.6 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 22:45:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "20% OFF",
                            subHeader: "UPTO ₹50",
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/a2b-veg-periyamet-egmore-chennai-644303",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "24274",
                          name: "The Creams",
                          cloudinaryImageId: "mzandbj8yrxfqsfmkvw8",
                          locality: "Ormes Road",
                          areaName: "Kilpauk",
                          costForTwo: "₹200 for two",
                          cuisines: ["Bakery", "Ice Cream", "Desserts"],
                          avgRating: 4.4,
                          veg: true,
                          feeDetails: {
                            restaurantId: "24274",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 4400,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 4400,
                          },
                          parentId: "3108",
                          avgRatingString: "4.4",
                          totalRatingsString: "5K+",
                          sla: {
                            deliveryTime: 35,
                            lastMileTravel: 3,
                            serviceability: "SERVICEABLE",
                            slaString: "35 mins",
                            lastMileTravelString: "3.0 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:00:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "₹125 OFF",
                            subHeader: "ABOVE ₹249",
                            discountTag: "FLAT DEAL",
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/the-creams-ormes-road-kilpauk-chennai-24274",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "634169",
                          name: "Hotel Paradise",
                          cloudinaryImageId: "zwr5ipz8zhtylyc6hudx",
                          locality: "High road",
                          areaName: "Purasawalkam",
                          costForTwo: "₹400 for two",
                          cuisines: [
                            "Biryani",
                            "Indian",
                            "Chinese",
                            "Tandoor",
                            "Snacks",
                          ],
                          avgRating: 3.8,
                          feeDetails: {
                            restaurantId: "634169",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "100979",
                          avgRatingString: "3.8",
                          totalRatingsString: "100+",
                          sla: {
                            deliveryTime: 29,
                            lastMileTravel: 2.2,
                            serviceability: "SERVICEABLE",
                            slaString: "29 mins",
                            lastMileTravelString: "2.2 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:59:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/hotel-paradise-high-road-purasawalkam-chennai-634169",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "101631",
                          name: "Zam Zam Fast Food",
                          cloudinaryImageId: "jk1nao7hohp8lreel9vh",
                          locality: "Narayanan street",
                          areaName: "Egmore",
                          costForTwo: "₹300 for two",
                          cuisines: ["Indian", "Chinese"],
                          avgRating: 3.9,
                          feeDetails: {
                            restaurantId: "101631",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "17529",
                          avgRatingString: "3.9",
                          totalRatingsString: "10K+",
                          sla: {
                            deliveryTime: 35,
                            lastMileTravel: 2.9,
                            serviceability: "SERVICEABLE",
                            slaString: "35 mins",
                            lastMileTravelString: "2.9 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:30:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "30% OFF",
                            discountTag: "FLAT DEAL",
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/zam-zam-fast-food-narayanan-street-egmore-chennai-101631",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "257162",
                          name: "The Brooklyn Creamery - Healthy Ice Cream",
                          cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
                          locality: "Mahaveer Colony",
                          areaName: "Vepery",
                          costForTwo: "₹200 for two",
                          cuisines: ["Healthy Food", "Desserts", "Ice Cream"],
                          avgRating: 4.6,
                          veg: true,
                          feeDetails: {
                            restaurantId: "257162",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "236673",
                          avgRatingString: "4.6",
                          totalRatingsString: "500+",
                          sla: {
                            deliveryTime: 30,
                            lastMileTravel: 1.5,
                            serviceability: "SERVICEABLE",
                            slaString: "30 mins",
                            lastMileTravelString: "1.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-12-01 02:00:00",
                            opened: true,
                          },
                          badges: {
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "brand",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "brand",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "50% OFF",
                            subHeader: "UPTO ₹100",
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-mahaveer-colony-vepery-chennai-257162",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "14044",
                          name: "Fruit Shop on Greams Road",
                          cloudinaryImageId: "ufryw0c5fuxraq1zx1pq",
                          locality: "Opposite Commissioner Office",
                          areaName: "Egmore",
                          costForTwo: "₹150 for two",
                          cuisines: ["Juices", "Beverages", "Desserts"],
                          avgRating: 4.5,
                          veg: true,
                          feeDetails: {
                            restaurantId: "14044",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "401",
                          avgRatingString: "4.5",
                          totalRatingsString: "1K+",
                          sla: {
                            deliveryTime: 36,
                            lastMileTravel: 2.3,
                            serviceability: "SERVICEABLE",
                            slaString: "36 mins",
                            lastMileTravelString: "2.3 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 23:30:00",
                            opened: true,
                          },
                          badges: {
                            imageBadges: [
                              {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg",
                              },
                            ],
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "pureveg",
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                    },
                                  },
                                ],
                              },
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "options available",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/fruit-shop-on-greams-road-opposite-commissioner-office-egmore-chennai-14044",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "50236",
                          name: "Bombay Kulfi",
                          cloudinaryImageId: "vkwhjcvx2sgnm0ehtvzv",
                          locality: "Vepery",
                          areaName: "Periyamet",
                          costForTwo: "₹150 for two",
                          cuisines: ["Ice Cream", "Desserts"],
                          avgRating: 4.5,
                          veg: true,
                          feeDetails: {
                            restaurantId: "50236",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "4900",
                          avgRatingString: "4.5",
                          totalRatingsString: "5K+",
                          sla: {
                            deliveryTime: 28,
                            lastMileTravel: 1.5,
                            serviceability: "SERVICEABLE",
                            slaString: "28 mins",
                            lastMileTravelString: "1.5 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-12-01 02:00:00",
                            opened: true,
                          },
                          badges: {
                            textExtendedBadges: [
                              {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C",
                              },
                            ],
                          },
                          isOpen: true,
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {
                                badgeObject: [
                                  {
                                    attributes: {
                                      description: "",
                                      fontColor: "#7E808C",
                                      iconId: "guiltfree/GF_Logo_android_3x",
                                      shortDescription: "options available",
                                    },
                                  },
                                ],
                              },
                            },
                          },
                          aggregatedDiscountInfoV3: {
                            header: "40% OFF",
                            subHeader: "UPTO ₹80",
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/bombay-kulfi-vepery-periyamet-chennai-50236",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                      {
                        info: {
                          id: "211185",
                          name: "Mcrennett",
                          cloudinaryImageId: "jp0xrwglcj4pljrwp9cm",
                          locality: "Purasawalkam",
                          areaName: "Periyamet",
                          costForTwo: "₹350 for two",
                          cuisines: ["Bakery"],
                          avgRating: 4.4,
                          feeDetails: {
                            restaurantId: "211185",
                            fees: [
                              {
                                name: "BASE_DISTANCE",
                                fee: 3100,
                              },
                              {
                                name: "BASE_TIME",
                              },
                              {
                                name: "ANCILLARY_SURGE_FEE",
                              },
                            ],
                            totalFee: 3100,
                          },
                          parentId: "8833",
                          avgRatingString: "4.4",
                          totalRatingsString: "100+",
                          sla: {
                            deliveryTime: 28,
                            lastMileTravel: 2.3,
                            serviceability: "SERVICEABLE",
                            slaString: "28 mins",
                            lastMileTravelString: "2.3 km",
                            iconType: "ICON_TYPE_EMPTY",
                          },
                          availability: {
                            nextCloseTime: "2023-11-30 21:30:00",
                            opened: true,
                          },
                          badges: {},
                          isOpen: true,
                          aggregatedDiscountInfoV2: {},
                          type: "F",
                          badgesV2: {
                            entityBadges: {
                              imageBased: {},
                              textBased: {},
                              textExtendedBadges: {},
                            },
                          },
                          orderabilityCommunication: {
                            title: {},
                            subTitle: {},
                            message: {},
                            customIcon: {},
                          },
                          differentiatedUi: {
                            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            differentiatedUiMediaDetails: {
                              mediaType: "ADS_MEDIA_ENUM_IMAGE",
                              lottie: {},
                              video: {},
                            },
                          },
                          reviewsSummary: {},
                          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          restaurantOfferPresentationInfo: {},
                        },
                        analytics: {
                          context:
                            "seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb",
                        },
                        cta: {
                          link: "https://www.swiggy.com/restaurants/mcrennett-purasawalkam-periyamet-chennai-211185",
                          text: "RESTAURANT_MENU",
                          type: "WEBLINK",
                        },
                        widgetId:
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                      },
                    ],
                    theme: "SeoRestaurantListingGridWidget",
                  },
                },
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
                message: "Show More",
                id: "show_more_button",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                title: "Best Places to Eat Across Cities",
                brands: [
                  {
                    text: "Best Restaurants in Bangalore",
                    link: "https://www.swiggy.com/city/bangalore/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Pune",
                    link: "https://www.swiggy.com/city/pune/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Mumbai",
                    link: "https://www.swiggy.com/city/mumbai/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Delhi",
                    link: "https://www.swiggy.com/city/delhi/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Hyderabad",
                    link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Kolkata",
                    link: "https://www.swiggy.com/city/kolkata/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Chennai",
                    link: "https://www.swiggy.com/city/chennai/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Chandigarh",
                    link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Ahmedabad",
                    link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Jaipur",
                    link: "https://www.swiggy.com/city/jaipur/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Nagpur",
                    link: "https://www.swiggy.com/city/nagpur/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Bhubaneswar",
                    link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Kochi",
                    link: "https://www.swiggy.com/city/kochi/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Surat",
                    link: "https://www.swiggy.com/city/surat/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Dehradun",
                    link: "https://www.swiggy.com/city/dehradun/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Ludhiana",
                    link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Patna",
                    link: "https://www.swiggy.com/city/patna/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Mangaluru",
                    link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Bhopal",
                    link: "https://www.swiggy.com/city/bhopal/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Gurgaon",
                    link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Coimbatore",
                    link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Agra",
                    link: "https://www.swiggy.com/city/agra/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Noida",
                    link: "https://www.swiggy.com/city/noida/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Vijayawada",
                    link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Guwahati",
                    link: "https://www.swiggy.com/city/guwahati/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Mysore",
                    link: "https://www.swiggy.com/city/mysore/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Pondicherry",
                    link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Thiruvananthapuram",
                    link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Ranchi",
                    link: "https://www.swiggy.com/city/ranchi/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Vizag",
                    link: "https://www.swiggy.com/city/vizag/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Udaipur",
                    link: "https://www.swiggy.com/city/udaipur/best-restaurants",
                  },
                  {
                    text: "Best Restaurants in Vadodara",
                    link: "https://www.swiggy.com/city/vadodara/best-restaurants",
                  },
                ],
                id: "restaurant_near_me_links",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                title: "Best Cuisines Near Me",
                brands: [
                  {
                    text: "Chinese Restaurant Near Me",
                    link: "https://www.swiggy.com/chinese-restaurants-near-me",
                  },
                  {
                    text: "South Indian Restaurant Near Me",
                    link: "https://www.swiggy.com/south-indian-restaurants-near-me",
                  },
                  {
                    text: "Indian Restaurant Near Me",
                    link: "https://www.swiggy.com/indian-restaurants-near-me",
                  },
                  {
                    text: "Kerala Restaurant Near Me",
                    link: "https://www.swiggy.com/kerala-restaurants-near-me",
                  },
                  {
                    text: "Korean Restaurant Near Me",
                    link: "https://www.swiggy.com/korean-restaurants-near-me",
                  },
                  {
                    text: "North Indian Restaurant Near Me",
                    link: "https://www.swiggy.com/north-indian-restaurants-near-me",
                  },
                  {
                    text: "Seafood Restaurant Near Me",
                    link: "https://www.swiggy.com/seafood-restaurants-near-me",
                  },
                  {
                    text: "Bengali Restaurant Near Me",
                    link: "https://www.swiggy.com/bengali-restaurants-near-me",
                  },
                  {
                    text: "Punjabi Restaurant Near Me",
                    link: "https://www.swiggy.com/punjabi-restaurants-near-me",
                  },
                  {
                    text: "Italian Restaurant Near Me",
                    link: "https://www.swiggy.com/italian-restaurants-near-me",
                  },
                  {
                    text: "Andhra Restaurant Near Me",
                    link: "https://www.swiggy.com/andhra-restaurants-near-me",
                  },
                  {
                    text: "Biryani Restaurant Near Me",
                    link: "https://www.swiggy.com/biryani-restaurants-near-me",
                  },
                  {
                    text: "Japanese Restaurant Near Me",
                    link: "https://www.swiggy.com/japanese-restaurants-near-me",
                  },
                  {
                    text: "Arabian Restaurant Near Me",
                    link: "https://www.swiggy.com/arabian-restaurants-near-me",
                  },
                  {
                    text: "Fast Food Restaurant Near Me",
                    link: "https://www.swiggy.com/fast-food-restaurants-near-me",
                  },
                  {
                    text: "Jain Restaurant Near Me",
                    link: "https://www.swiggy.com/jain-restaurants-near-me",
                  },
                  {
                    text: "Gujarati Restaurant Near Me",
                    link: "https://www.swiggy.com/gujarati-restaurants-near-me",
                  },
                  {
                    text: "Thai Restaurant Near Me",
                    link: "https://www.swiggy.com/thai-restaurants-near-me",
                  },
                  {
                    text: "Pizzas Restaurant Near Me",
                    link: "https://www.swiggy.com/pizzas-restaurants-near-me",
                  },
                  {
                    text: "Asian Restaurant Near Me",
                    link: "https://www.swiggy.com/asian-restaurants-near-me",
                  },
                  {
                    text: "Cafe Restaurant Near Me",
                    link: "https://www.swiggy.com/cafe-restaurants-near-me",
                  },
                  {
                    text: "Continental Restaurant Near Me",
                    link: "https://www.swiggy.com/continental-restaurants-near-me",
                  },
                  {
                    text: "Mexican Restaurant Near Me",
                    link: "https://www.swiggy.com/mexican-restaurants-near-me",
                  },
                  {
                    text: "Mughlai Restaurant Near Me",
                    link: "https://www.swiggy.com/mughlai-restaurants-near-me",
                  },
                  {
                    text: "Sushi Restaurant Near Me",
                    link: "https://www.swiggy.com/sushi-restaurants-near-me",
                  },
                  {
                    text: "Mangalorean Restaurant Near Me",
                    link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
                  },
                  {
                    text: "Tibetan Restaurant Near Me",
                    link: "https://www.swiggy.com/tibetan-restaurants-near-me",
                  },
                  {
                    text: "Barbecue Restaurant Near Me",
                    link: "https://www.swiggy.com/barbecue-restaurants-near-me",
                  },
                  {
                    text: "Maharashtrian Restaurant Near Me",
                    link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
                  },
                  {
                    text: "Nepalese Restaurant Near Me",
                    link: "https://www.swiggy.com/nepalese-restaurants-near-me",
                  },
                  {
                    text: "Rajasthani Restaurant Near Me",
                    link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
                  },
                  {
                    text: "Turkish Restaurant Near Me",
                    link: "https://www.swiggy.com/turkish-restaurants-near-me",
                  },
                ],
                id: "restaurant_near_me_links",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                title: "Explore Every Restaurants Near Me",
                brands: [
                  {
                    text: "Explore Restaurants Near Me",
                    link: "https://www.swiggy.com/restaurants-near-me",
                  },
                  {
                    text: "Explore Top Rated Restaurants Near Me",
                    link: "https://www.swiggy.com/best-restaurants-near-me",
                  },
                ],
                id: "restaurant_near_me_links",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
                title: "For better experience,download the Swiggy app now",
                androidAppImage: "portal/m/play_store.png",
                androidAppLink:
                  "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
                iosAppImage: "portal/m/app_store.png",
                iosAppLink:
                  "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
                id: "app_install_links",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
                cities: [
                  {
                    text: "Bangalore",
                    link: "https://www.swiggy.com/city/bangalore",
                  },
                  {
                    text: "Gurgaon",
                    link: "https://www.swiggy.com/city/gurgaon",
                  },
                  {
                    text: "Hyderabad",
                    link: "https://www.swiggy.com/city/hyderabad",
                  },
                  {
                    text: "Delhi",
                    link: "https://www.swiggy.com/city/delhi",
                  },
                  {
                    text: "Mumbai",
                    link: "https://www.swiggy.com/city/mumbai",
                  },
                  {
                    text: "Pune",
                    link: "https://www.swiggy.com/city/pune",
                  },
                  {
                    text: "Kolkata",
                    link: "https://www.swiggy.com/city/kolkata",
                  },
                  {
                    text: "Chennai",
                    link: "https://www.swiggy.com/city/chennai",
                  },
                  {
                    text: "Ahmedabad",
                    link: "https://www.swiggy.com/city/ahmedabad",
                  },
                  {
                    text: "Chandigarh",
                    link: "https://www.swiggy.com/city/chandigarh",
                  },
                  {
                    text: "Jaipur",
                    link: "https://www.swiggy.com/city/jaipur",
                  },
                  {
                    text: "Kochi",
                    link: "https://www.swiggy.com/city/kochi",
                  },
                  {
                    text: "Coimbatore",
                    link: "https://www.swiggy.com/city/coimbatore",
                  },
                  {
                    text: "Lucknow",
                    link: "https://www.swiggy.com/city/lucknow",
                  },
                  {
                    text: "Nagpur",
                    link: "https://www.swiggy.com/city/nagpur",
                  },
                  {
                    text: "Vadodara",
                    link: "https://www.swiggy.com/city/vadodara",
                  },
                  {
                    text: "Indore",
                    link: "https://www.swiggy.com/city/indore",
                  },
                  {
                    text: "Guwahati",
                    link: "https://www.swiggy.com/city/guwahati",
                  },
                  {
                    text: "Vizag",
                    link: "https://www.swiggy.com/city/vizag",
                  },
                  {
                    text: "Surat",
                    link: "https://www.swiggy.com/city/surat",
                  },
                  {
                    text: "Dehradun",
                    link: "https://www.swiggy.com/city/dehradun",
                  },
                  {
                    text: "Noida",
                    link: "https://www.swiggy.com/city/noida",
                  },
                  {
                    text: "Ludhiana",
                    link: "https://www.swiggy.com/city/ludhiana",
                  },
                  {
                    text: "Trichy",
                    link: "https://www.swiggy.com/city/trichy",
                  },
                  {
                    text: "Vijayawada",
                    link: "https://www.swiggy.com/city/vijayawada",
                  },
                  {
                    text: "Kanpur",
                    link: "https://www.swiggy.com/city/kanpur",
                  },
                  {
                    text: "Mysore",
                    link: "https://www.swiggy.com/city/mysore",
                  },
                  {
                    text: "Nashik",
                    link: "https://www.swiggy.com/city/nashik",
                  },
                  {
                    text: "Udaipur",
                    link: "https://www.swiggy.com/city/udaipur",
                  },
                  {
                    text: "Pondicherry",
                    link: "https://www.swiggy.com/city/pondicherry",
                  },
                  {
                    text: "Agra",
                    link: "https://www.swiggy.com/city/agra",
                  },
                  {
                    text: "Aurangabad",
                    link: "https://www.swiggy.com/city/aurangabad",
                  },
                  {
                    text: "Jalandhar",
                    link: "https://www.swiggy.com/city/jalandhar",
                  },
                  {
                    text: "Kota",
                    link: "https://www.swiggy.com/city/kota",
                  },
                  {
                    text: "Madurai",
                    link: "https://www.swiggy.com/city/madurai",
                  },
                  {
                    text: "Allahabad",
                    link: "https://www.swiggy.com/city/allahabad",
                  },
                  {
                    text: "Manipal",
                    link: "https://www.swiggy.com/city/manipal",
                  },
                  {
                    text: "Amritsar",
                    link: "https://www.swiggy.com/city/amritsar",
                  },
                  {
                    text: "Bareilly",
                    link: "https://www.swiggy.com/city/bareilly",
                  },
                  {
                    text: "Meerut",
                    link: "https://www.swiggy.com/city/meerut",
                  },
                  {
                    text: "Bhopal",
                    link: "https://www.swiggy.com/city/bhopal",
                  },
                  {
                    text: "Ooty",
                    link: "https://www.swiggy.com/city/ooty",
                  },
                  {
                    text: "Bhubaneswar",
                    link: "https://www.swiggy.com/city/bhubaneswar",
                  },
                  {
                    text: "Raipur",
                    link: "https://www.swiggy.com/city/raipur",
                  },
                  {
                    text: "Bikaner",
                    link: "https://www.swiggy.com/city/bikaner",
                  },
                  {
                    text: "Rajkot",
                    link: "https://www.swiggy.com/city/rajkot",
                  },
                  {
                    text: "Kozhikode",
                    link: "https://www.swiggy.com/city/kozhikode",
                  },
                  {
                    text: "Central Goa",
                    link: "https://www.swiggy.com/city/central-goa",
                  },
                  {
                    text: "Sirsa",
                    link: "https://www.swiggy.com/city/sirsa",
                  },
                  {
                    text: "Gwalior",
                    link: "https://www.swiggy.com/city/gwalior",
                  },
                  {
                    text: "Thrissur",
                    link: "https://www.swiggy.com/city/thrissur",
                  },
                  {
                    text: "Kharagpur",
                    link: "https://www.swiggy.com/city/kharagpur",
                  },
                  {
                    text: "Tirupati",
                    link: "https://www.swiggy.com/city/tirupati",
                  },
                  {
                    text: "Tirupur",
                    link: "https://www.swiggy.com/city/tirupur",
                  },
                  {
                    text: "Vellore",
                    link: "https://www.swiggy.com/city/vellore",
                  },
                  {
                    text: "Thiruvananthapuram",
                    link: "https://www.swiggy.com/city/thiruvananthapuram",
                  },
                  {
                    text: "Warangal",
                    link: "https://www.swiggy.com/city/warangal",
                  },
                  {
                    text: "Varanasi",
                    link: "https://www.swiggy.com/city/varanasi",
                  },
                  {
                    text: "Mangaluru",
                    link: "https://www.swiggy.com/city/mangaluru",
                  },
                  {
                    text: "Patna",
                    link: "https://www.swiggy.com/city/patna",
                  },
                  {
                    text: "Ranchi",
                    link: "https://www.swiggy.com/city/ranchi",
                  },
                  {
                    text: "Faridabad",
                    link: "https://www.swiggy.com/city/faridabad",
                  },
                  {
                    text: "Guntur",
                    link: "https://www.swiggy.com/city/guntur",
                  },
                  {
                    text: "Ujjain",
                    link: "https://www.swiggy.com/city/ujjain",
                  },
                  {
                    text: "Patiala",
                    link: "https://www.swiggy.com/city/patiala",
                  },
                  {
                    text: "Karnal",
                    link: "https://www.swiggy.com/city/karnal",
                  },
                  {
                    text: "Kakinada",
                    link: "https://www.swiggy.com/city/kakinada",
                  },
                  {
                    text: "Rajahmundry",
                    link: "https://www.swiggy.com/city/rajahmundry",
                  },
                  {
                    text: "Bilaspur",
                    link: "https://www.swiggy.com/city/bilaspur",
                  },
                  {
                    text: "Bhilai",
                    link: "https://www.swiggy.com/city/bhilai",
                  },
                  {
                    text: "Anand",
                    link: "https://www.swiggy.com/city/anand",
                  },
                  {
                    text: "Bhavnagar",
                    link: "https://www.swiggy.com/city/bhavnagar",
                  },
                  {
                    text: "Jammu",
                    link: "https://www.swiggy.com/city/jammu",
                  },
                  {
                    text: "Muktsar",
                    link: "https://www.swiggy.com/city/muktsar",
                  },
                  {
                    text: "Panipat",
                    link: "https://www.swiggy.com/city/panipat",
                  },
                  {
                    text: "Dhanbad",
                    link: "https://www.swiggy.com/city/dhanbad",
                  },
                  {
                    text: "Hubli",
                    link: "https://www.swiggy.com/city/hubli",
                  },
                  {
                    text: "Belgaum",
                    link: "https://www.swiggy.com/city/belgaum",
                  },
                  {
                    text: "Jabalpur",
                    link: "https://www.swiggy.com/city/jabalpur",
                  },
                  {
                    text: "Kolhapur",
                    link: "https://www.swiggy.com/city/kolhapur",
                  },
                  {
                    text: "Solapur",
                    link: "https://www.swiggy.com/city/solapur",
                  },
                  {
                    text: "Shillong",
                    link: "https://www.swiggy.com/city/shillong",
                  },
                  {
                    text: "Cuttack",
                    link: "https://www.swiggy.com/city/cuttack",
                  },
                  {
                    text: "Aligarh",
                    link: "https://www.swiggy.com/city/aligarh",
                  },
                  {
                    text: "Salem",
                    link: "https://www.swiggy.com/city/salem",
                  },
                  {
                    text: "Jodhpur",
                    link: "https://www.swiggy.com/city/jodhpur",
                  },
                  {
                    text: "Ajmer",
                    link: "https://www.swiggy.com/city/ajmer",
                  },
                  {
                    text: "Jhansi",
                    link: "https://www.swiggy.com/city/jhansi",
                  },
                  {
                    text: "Gorakhpur",
                    link: "https://www.swiggy.com/city/gorakhpur",
                  },
                  {
                    text: "Thanjavur",
                    link: "https://www.swiggy.com/city/thanjavur",
                  },
                  {
                    text: "Erode",
                    link: "https://www.swiggy.com/city/erode",
                  },
                  {
                    text: "Nellore",
                    link: "https://www.swiggy.com/city/nellore",
                  },
                  {
                    text: "Rourkela",
                    link: "https://www.swiggy.com/city/rourkela",
                  },
                  {
                    text: "Anantapur",
                    link: "https://www.swiggy.com/city/anantapur",
                  },
                  {
                    text: "Kurnool",
                    link: "https://www.swiggy.com/city/kurnool",
                  },
                  {
                    text: "Ahmednagar",
                    link: "https://www.swiggy.com/city/ahmednagar",
                  },
                  {
                    text: "Phagwara",
                    link: "https://www.swiggy.com/city/phagwara",
                  },
                  {
                    text: "Ambala",
                    link: "https://www.swiggy.com/city/ambala",
                  },
                  {
                    text: "Ballari",
                    link: "https://www.swiggy.com/city/ballari",
                  },
                  {
                    text: "Saharanpur",
                    link: "https://www.swiggy.com/city/saharanpur",
                  },
                  {
                    text: "Tirunelveli",
                    link: "https://www.swiggy.com/city/tirunelveli",
                  },
                  {
                    text: "Bathinda",
                    link: "https://www.swiggy.com/city/bathinda",
                  },
                  {
                    text: "Mathura",
                    link: "https://www.swiggy.com/city/mathura",
                  },
                  {
                    text: "Haridwar",
                    link: "https://www.swiggy.com/city/haridwar",
                  },
                  {
                    text: "Ratnagiri",
                    link: "https://www.swiggy.com/city/ratnagiri",
                  },
                  {
                    text: "Sangli",
                    link: "https://www.swiggy.com/city/sangli",
                  },
                  {
                    text: "Amravati",
                    link: "https://www.swiggy.com/city/amravati",
                  },
                  {
                    text: "Rishikesh",
                    link: "https://www.swiggy.com/city/rishikesh",
                  },
                  {
                    text: "Nagercoil",
                    link: "https://www.swiggy.com/city/nagercoil",
                  },
                  {
                    text: "KanyaKumari",
                    link: "https://www.swiggy.com/city/kanyakumari",
                  },
                  {
                    text: "Kadapa",
                    link: "https://www.swiggy.com/city/kadapa",
                  },
                  {
                    text: "Nizamabad",
                    link: "https://www.swiggy.com/city/nizamabad",
                  },
                  {
                    text: "Shivamogga",
                    link: "https://www.swiggy.com/city/shivamogga",
                  },
                  {
                    text: "Davanagere",
                    link: "https://www.swiggy.com/city/davanagere",
                  },
                  {
                    text: "Roorkee",
                    link: "https://www.swiggy.com/city/roorkee",
                  },
                  {
                    text: "Nanded",
                    link: "https://www.swiggy.com/city/nanded",
                  },
                  {
                    text: "Rewa",
                    link: "https://www.swiggy.com/city/rewa",
                  },
                  {
                    text: "Satna",
                    link: "https://www.swiggy.com/city/satna",
                  },
                  {
                    text: "Muzaffarpur",
                    link: "https://www.swiggy.com/city/muzaffarpur",
                  },
                  {
                    text: "Valsad",
                    link: "https://www.swiggy.com/city/valsad",
                  },
                  {
                    text: "Vapi",
                    link: "https://www.swiggy.com/city/vapi",
                  },
                  {
                    text: "Chhapra",
                    link: "https://www.swiggy.com/city/chhapra",
                  },
                  {
                    text: "Dharamshala",
                    link: "https://www.swiggy.com/city/dharamshala",
                  },
                  {
                    text: "Kollam",
                    link: "https://www.swiggy.com/city/kollam",
                  },
                  {
                    text: "Silchar",
                    link: "https://www.swiggy.com/city/silchar",
                  },
                  {
                    text: "Alappuzha",
                    link: "https://www.swiggy.com/city/alappuzha",
                  },
                  {
                    text: "Sonipat",
                    link: "https://www.swiggy.com/city/sonipat",
                  },
                  {
                    text: "Rohtak",
                    link: "https://www.swiggy.com/city/rohtak",
                  },
                  {
                    text: "Mehsana",
                    link: "https://www.swiggy.com/city/mehsana",
                  },
                  {
                    text: "Kullu",
                    link: "https://www.swiggy.com/city/kullu",
                  },
                  {
                    text: "Dhule",
                    link: "https://www.swiggy.com/city/dhule",
                  },
                  {
                    text: "Dharwad",
                    link: "https://www.swiggy.com/city/dharwad",
                  },
                  {
                    text: "Latur",
                    link: "https://www.swiggy.com/city/latur",
                  },
                  {
                    text: "Vizianagaram",
                    link: "https://www.swiggy.com/city/vizianagaram",
                  },
                  {
                    text: "Khammam",
                    link: "https://www.swiggy.com/city/khammam",
                  },
                  {
                    text: "Hampi",
                    link: "https://www.swiggy.com/city/hampi",
                  },
                  {
                    text: "Nainital",
                    link: "https://www.swiggy.com/city/nainital",
                  },
                  {
                    text: "Akola",
                    link: "https://www.swiggy.com/city/akola",
                  },
                  {
                    text: "Kalaburagi",
                    link: "https://www.swiggy.com/city/kalaburagi",
                  },
                  {
                    text: "Gaya",
                    link: "https://www.swiggy.com/city/gaya",
                  },
                  {
                    text: "Muzaffarnagar",
                    link: "https://www.swiggy.com/city/muzaffarnagar",
                  },
                  {
                    text: "Dewas",
                    link: "https://www.swiggy.com/city/dewas",
                  },
                  {
                    text: "Korba",
                    link: "https://www.swiggy.com/city/korba",
                  },
                  {
                    text: "Mussoorie",
                    link: "https://www.swiggy.com/city/mussoorie",
                  },
                  {
                    text: "Jalgaon",
                    link: "https://www.swiggy.com/city/jalgaon",
                  },
                  {
                    text: "Yamuna Nagar",
                    link: "https://www.swiggy.com/city/yamuna-nagar",
                  },
                  {
                    text: "Bhagalpur",
                    link: "https://www.swiggy.com/city/bhagalpur",
                  },
                  {
                    text: "Hapur",
                    link: "https://www.swiggy.com/city/hapur",
                  },
                  {
                    text: "Morena",
                    link: "https://www.swiggy.com/city/morena",
                  },
                  {
                    text: "Hassan",
                    link: "https://www.swiggy.com/city/hassan",
                  },
                  {
                    text: "Hisar",
                    link: "https://www.swiggy.com/city/hisar",
                  },
                  {
                    text: "Godhra",
                    link: "https://www.swiggy.com/city/godhra",
                  },
                  {
                    text: "Kolar ",
                    link: "https://www.swiggy.com/city/kolar",
                  },
                  {
                    text: "Rampur",
                    link: "https://www.swiggy.com/city/rampur",
                  },
                  {
                    text: "Sitapur",
                    link: "https://www.swiggy.com/city/sitapur",
                  },
                  {
                    text: "Etawah",
                    link: "https://www.swiggy.com/city/etawah",
                  },
                  {
                    text: "Porbandar",
                    link: "https://www.swiggy.com/city/porbandar",
                  },
                  {
                    text: "Nadiad",
                    link: "https://www.swiggy.com/city/nadiad",
                  },
                  {
                    text: "Sagar",
                    link: "https://www.swiggy.com/city/sagar",
                  },
                  {
                    text: "Morbi",
                    link: "https://www.swiggy.com/city/morbi",
                  },
                  {
                    text: "Chhindwara",
                    link: "https://www.swiggy.com/city/chhindwara",
                  },
                  {
                    text: "Tumakuru",
                    link: "https://www.swiggy.com/city/tumakuru",
                  },
                  {
                    text: "Singrauli",
                    link: "https://www.swiggy.com/city/singrauli",
                  },
                  {
                    text: "Thoothukudi",
                    link: "https://www.swiggy.com/city/thoothukudi",
                  },
                  {
                    text: "Katni",
                    link: "https://www.swiggy.com/city/katni",
                  },
                  {
                    text: "Khandwa",
                    link: "https://www.swiggy.com/city/khandwa",
                  },
                  {
                    text: "Eluru",
                    link: "https://www.swiggy.com/city/eluru",
                  },
                  {
                    text: "Malappuram",
                    link: "https://www.swiggy.com/city/malappuram",
                  },
                  {
                    text: "Dibrugarh",
                    link: "https://www.swiggy.com/city/dibrugarh",
                  },
                  {
                    text: "Deoghar",
                    link: "https://www.swiggy.com/city/deoghar",
                  },
                  {
                    text: "Khanna",
                    link: "https://www.swiggy.com/city/khanna",
                  },
                  {
                    text: "Bidar",
                    link: "https://www.swiggy.com/city/bidar",
                  },
                  {
                    text: "Madikeri",
                    link: "https://www.swiggy.com/city/madikeri",
                  },
                  {
                    text: "Haldwani",
                    link: "https://www.swiggy.com/city/haldwani",
                  },
                  {
                    text: "Farrukhabad",
                    link: "https://www.swiggy.com/city/farrukhabad",
                  },
                  {
                    text: "Malegaon",
                    link: "https://www.swiggy.com/city/malegaon",
                  },
                  {
                    text: "Dindigul",
                    link: "https://www.swiggy.com/city/dindigul",
                  },
                  {
                    text: "Shahjahanpur",
                    link: "https://www.swiggy.com/city/shahjahanpur",
                  },
                  {
                    text: "Beed",
                    link: "https://www.swiggy.com/city/beed",
                  },
                  {
                    text: "Junagadh",
                    link: "https://www.swiggy.com/city/junagadh",
                  },
                  {
                    text: "Asansol",
                    link: "https://www.swiggy.com/city/asansol",
                  },
                  {
                    text: "Beawar",
                    link: "https://www.swiggy.com/city/beawar",
                  },
                  {
                    text: "Kishangarh",
                    link: "https://www.swiggy.com/city/kishangarh",
                  },
                  {
                    text: "Parbhani",
                    link: "https://www.swiggy.com/city/parbhani",
                  },
                  {
                    text: "Gondia",
                    link: "https://www.swiggy.com/city/gondia",
                  },
                  {
                    text: "Ichalkaranji",
                    link: "https://www.swiggy.com/city/ichalkaranji",
                  },
                  {
                    text: "Jalna",
                    link: "https://www.swiggy.com/city/jalna",
                  },
                  {
                    text: "Yavatmal",
                    link: "https://www.swiggy.com/city/yavatmal",
                  },
                  {
                    text: "Shivpuri",
                    link: "https://www.swiggy.com/city/shivpuri",
                  },
                  {
                    text: "Moga",
                    link: "https://www.swiggy.com/city/moga",
                  },
                  {
                    text: "Abohar",
                    link: "https://www.swiggy.com/city/abohar",
                  },
                  {
                    text: "Adoni",
                    link: "https://www.swiggy.com/city/adoni",
                  },
                  {
                    text: "Madanapalle",
                    link: "https://www.swiggy.com/city/madanapalle",
                  },
                  {
                    text: "Tiruvannamalai",
                    link: "https://www.swiggy.com/city/tiruvannamalai",
                  },
                  {
                    text: "Satara",
                    link: "https://www.swiggy.com/city/satara",
                  },
                  {
                    text: "Ambur",
                    link: "https://www.swiggy.com/city/ambur",
                  },
                  {
                    text: "Karimnagar",
                    link: "https://www.swiggy.com/city/karimnagar",
                  },
                  {
                    text: "Ratlam",
                    link: "https://www.swiggy.com/city/ratlam",
                  },
                  {
                    text: "Moradabad",
                    link: "https://www.swiggy.com/city/moradabad",
                  },
                  {
                    text: "Machilipatnam",
                    link: "https://www.swiggy.com/city/machilipatnam",
                  },
                  {
                    text: "Ongole",
                    link: "https://www.swiggy.com/city/ongole",
                  },
                  {
                    text: "Kottayam",
                    link: "https://www.swiggy.com/city/kottayam",
                  },
                  {
                    text: "Darbhanga",
                    link: "https://www.swiggy.com/city/darbhanga",
                  },
                  {
                    text: "Kurukshetra",
                    link: "https://www.swiggy.com/city/kurukshetra",
                  },
                  {
                    text: "Unnao",
                    link: "https://www.swiggy.com/city/unnao",
                  },
                  {
                    text: "Bulandshahr",
                    link: "https://www.swiggy.com/city/bulandshahr",
                  },
                  {
                    text: "Durgapur",
                    link: "https://www.swiggy.com/city/durgapur",
                  },
                  {
                    text: "Siliguri",
                    link: "https://www.swiggy.com/city/siliguri",
                  },
                  {
                    text: "Pali",
                    link: "https://www.swiggy.com/city/pali",
                  },
                  {
                    text: "Tadepalligudem",
                    link: "https://www.swiggy.com/city/tadepalligudem",
                  },
                  {
                    text: "Ramagundam",
                    link: "https://www.swiggy.com/city/ramagundam",
                  },
                  {
                    text: "Mahbubnagar",
                    link: "https://www.swiggy.com/city/mahbubnagar",
                  },
                  {
                    text: "Bhiwani",
                    link: "https://www.swiggy.com/city/bhiwani",
                  },
                  {
                    text: "Cuddalore",
                    link: "https://www.swiggy.com/city/cuddalore",
                  },
                  {
                    text: "Kaithal",
                    link: "https://www.swiggy.com/city/kaithal",
                  },
                  {
                    text: "Jagtial",
                    link: "https://www.swiggy.com/city/jagtial",
                  },
                  {
                    text: "Palakkad",
                    link: "https://www.swiggy.com/city/palakkad",
                  },
                  {
                    text: "Guna",
                    link: "https://www.swiggy.com/city/guna",
                  },
                  {
                    text: "Kumbakonam",
                    link: "https://www.swiggy.com/city/kumbakonam",
                  },
                  {
                    text: "Maunath Bhanjan",
                    link: "https://www.swiggy.com/city/maunath-bhanjan",
                  },
                  {
                    text: "Baripada",
                    link: "https://www.swiggy.com/city/baripada",
                  },
                  {
                    text: "Orai",
                    link: "https://www.swiggy.com/city/orai",
                  },
                  {
                    text: "Bhadrak",
                    link: "https://www.swiggy.com/city/bhadrak",
                  },
                  {
                    text: "Batala",
                    link: "https://www.swiggy.com/city/batala",
                  },
                  {
                    text: "Firozpur",
                    link: "https://www.swiggy.com/city/firozpur",
                  },
                  {
                    text: "Barnala",
                    link: "https://www.swiggy.com/city/barnala",
                  },
                  {
                    text: "Raigarh",
                    link: "https://www.swiggy.com/city/raigarh",
                  },
                  {
                    text: "Nagaon",
                    link: "https://www.swiggy.com/city/nagaon",
                  },
                  {
                    text: "Mainpuri",
                    link: "https://www.swiggy.com/city/mainpuri",
                  },
                  {
                    text: "Balurghat",
                    link: "https://www.swiggy.com/city/balurghat",
                  },
                  {
                    text: "Giridih",
                    link: "https://www.swiggy.com/city/giridih",
                  },
                  {
                    text: "Ghazipur",
                    link: "https://www.swiggy.com/city/ghazipur",
                  },
                  {
                    text: "Jagdalpur",
                    link: "https://www.swiggy.com/city/jagdalpur",
                  },
                  {
                    text: "Vidisha",
                    link: "https://www.swiggy.com/city/vidisha",
                  },
                  {
                    text: "Dimapur",
                    link: "https://www.swiggy.com/city/dimapur",
                  },
                  {
                    text: "Shikohabad",
                    link: "https://www.swiggy.com/city/shikohabad",
                  },
                  {
                    text: "Imphal",
                    link: "https://www.swiggy.com/city/imphal",
                  },
                  {
                    text: "Lakhimpur",
                    link: "https://www.swiggy.com/city/lakhimpur",
                  },
                  {
                    text: "Rudrapur",
                    link: "https://www.swiggy.com/city/rudrapur",
                  },
                  {
                    text: "Ambikapur",
                    link: "https://www.swiggy.com/city/ambikapur",
                  },
                  {
                    text: "Rae Bareli",
                    link: "https://www.swiggy.com/city/rae-bareli",
                  },
                  {
                    text: "Tinsukia",
                    link: "https://www.swiggy.com/city/tinsukia",
                  },
                  {
                    text: "Rajapalayam",
                    link: "https://www.swiggy.com/city/rajapalayam",
                  },
                  {
                    text: "Rajnandgaon",
                    link: "https://www.swiggy.com/city/rajnandgaon",
                  },
                  {
                    text: "Kashipur",
                    link: "https://www.swiggy.com/city/kashipur",
                  },
                  {
                    text: "Ranibennur",
                    link: "https://www.swiggy.com/city/ranibennur",
                  },
                  {
                    text: "Burhanpur",
                    link: "https://www.swiggy.com/city/burhanpur",
                  },
                  {
                    text: "Bhadravati",
                    link: "https://www.swiggy.com/city/bhadravati",
                  },
                  {
                    text: "Chittoor",
                    link: "https://www.swiggy.com/city/chittoor",
                  },
                  {
                    text: "Pudukkottai",
                    link: "https://www.swiggy.com/city/pudukkottai",
                  },
                  {
                    text: "Hardoi",
                    link: "https://www.swiggy.com/city/hardoi",
                  },
                  {
                    text: "Basti",
                    link: "https://www.swiggy.com/city/basti",
                  },
                  {
                    text: "Karaikkudi",
                    link: "https://www.swiggy.com/city/karaikkudi",
                  },
                  {
                    text: "Lalitpur",
                    link: "https://www.swiggy.com/city/lalitpur",
                  },
                  {
                    text: "Hospet",
                    link: "https://www.swiggy.com/city/hospet",
                  },
                  {
                    text: "Budaun",
                    link: "https://www.swiggy.com/city/budaun",
                  },
                  {
                    text: "Neemuch",
                    link: "https://www.swiggy.com/city/neemuch",
                  },
                  {
                    text: "Pilibhit",
                    link: "https://www.swiggy.com/city/pilibhit",
                  },
                  {
                    text: "Barshi",
                    link: "https://www.swiggy.com/city/barshi",
                  },
                  {
                    text: "Sri Ganganagar",
                    link: "https://www.swiggy.com/city/sri-ganganagar",
                  },
                  {
                    text: "Wardha",
                    link: "https://www.swiggy.com/city/wardha",
                  },
                  {
                    text: "Sehore",
                    link: "https://www.swiggy.com/city/sehore",
                  },
                  {
                    text: "Bhimavaram",
                    link: "https://www.swiggy.com/city/bhimavaram",
                  },
                  {
                    text: "Hanumangarh",
                    link: "https://www.swiggy.com/city/hanumangarh",
                  },
                  {
                    text: "Pathankot",
                    link: "https://www.swiggy.com/city/pathankot",
                  },
                  {
                    text: "Puri",
                    link: "https://www.swiggy.com/city/puri",
                  },
                  {
                    text: "Fatehpur",
                    link: "https://www.swiggy.com/city/fatehpur",
                  },
                  {
                    text: "Surendranagar Dudhrej",
                    link: "https://www.swiggy.com/city/surendranagar-dudhrej",
                  },
                  {
                    text: "Jamnagar",
                    link: "https://www.swiggy.com/city/jamnagar",
                  },
                  {
                    text: "Bhuj",
                    link: "https://www.swiggy.com/city/bhuj",
                  },
                  {
                    text: "Gandhidham",
                    link: "https://www.swiggy.com/city/gandhidham",
                  },
                  {
                    text: "Bharuch",
                    link: "https://www.swiggy.com/city/bharuch",
                  },
                  {
                    text: "Navsari",
                    link: "https://www.swiggy.com/city/navsari",
                  },
                  {
                    text: "Amreli",
                    link: "https://www.swiggy.com/city/amreli",
                  },
                  {
                    text: "Palanpur",
                    link: "https://www.swiggy.com/city/palanpur",
                  },
                  {
                    text: "Bhilwara",
                    link: "https://www.swiggy.com/city/bhilwara",
                  },
                  {
                    text: "Suratgarh",
                    link: "https://www.swiggy.com/city/suratgarh",
                  },
                  {
                    text: "Sikar",
                    link: "https://www.swiggy.com/city/sikar",
                  },
                  {
                    text: "Churu",
                    link: "https://www.swiggy.com/city/churu",
                  },
                  {
                    text: "Alwar",
                    link: "https://www.swiggy.com/city/alwar",
                  },
                  {
                    text: "Bhiwadi",
                    link: "https://www.swiggy.com/city/bhiwadi",
                  },
                  {
                    text: "Bharatpur",
                    link: "https://www.swiggy.com/city/bharatpur",
                  },
                  {
                    text: "Mount Abu",
                    link: "https://www.swiggy.com/city/mount-abu",
                  },
                  {
                    text: "Bundi",
                    link: "https://www.swiggy.com/city/bundi",
                  },
                  {
                    text: "Sawai Madhopur",
                    link: "https://www.swiggy.com/city/sawai-madhopur",
                  },
                  {
                    text: "Purulia",
                    link: "https://www.swiggy.com/city/purulia",
                  },
                  {
                    text: "Bardhaman",
                    link: "https://www.swiggy.com/city/bardhaman",
                  },
                  {
                    text: "Raniganj",
                    link: "https://www.swiggy.com/city/raniganj",
                  },
                  {
                    text: "Darjeeling",
                    link: "https://www.swiggy.com/city/darjeeling",
                  },
                  {
                    text: "Jalpaiguri",
                    link: "https://www.swiggy.com/city/jalpaiguri",
                  },
                  {
                    text: "Chittorgarh",
                    link: "https://www.swiggy.com/city/chittorgarh",
                  },
                  {
                    text: "Dholpur",
                    link: "https://www.swiggy.com/city/dholpur",
                  },
                  {
                    text: "Uluberia",
                    link: "https://www.swiggy.com/city/uluberia",
                  },
                  {
                    text: "Nabadwip",
                    link: "https://www.swiggy.com/city/nabadwip",
                  },
                  {
                    text: "Bongaon",
                    link: "https://www.swiggy.com/city/bongaon",
                  },
                  {
                    text: "Kanchrapara",
                    link: "https://www.swiggy.com/city/kanchrapara",
                  },
                  {
                    text: "Habra",
                    link: "https://www.swiggy.com/city/habra",
                  },
                  {
                    text: "Firozabad",
                    link: "https://www.swiggy.com/city/firozabad",
                  },
                  {
                    text: "Nalgonda",
                    link: "https://www.swiggy.com/city/nalgonda",
                  },
                  {
                    text: "Chandrapur",
                    link: "https://www.swiggy.com/city/chandrapur",
                  },
                  {
                    text: "Bijapur",
                    link: "https://www.swiggy.com/city/bijapur",
                  },
                  {
                    text: "Bhusawal",
                    link: "https://www.swiggy.com/city/bhusawal",
                  },
                  {
                    text: "Raichur",
                    link: "https://www.swiggy.com/city/raichur",
                  },
                  {
                    text: "Bahraich",
                    link: "https://www.swiggy.com/city/bahraich",
                  },
                  {
                    text: "Azamgarh",
                    link: "https://www.swiggy.com/city/azamgarh",
                  },
                  {
                    text: "Bahadurgarh",
                    link: "https://www.swiggy.com/city/bahadurgarh",
                  },
                  {
                    text: "Jind",
                    link: "https://www.swiggy.com/city/jind",
                  },
                  {
                    text: "Rewari",
                    link: "https://www.swiggy.com/city/rewari",
                  },
                  {
                    text: "Palwal",
                    link: "https://www.swiggy.com/city/palwal",
                  },
                  {
                    text: "Hathras",
                    link: "https://www.swiggy.com/city/hathras",
                  },
                  {
                    text: "Sambalpur",
                    link: "https://www.swiggy.com/city/sambalpur",
                  },
                  {
                    text: "Banda",
                    link: "https://www.swiggy.com/city/banda",
                  },
                  {
                    text: "Hoshiarpur",
                    link: "https://www.swiggy.com/city/hoshiarpur",
                  },
                  {
                    text: "Faridkot",
                    link: "https://www.swiggy.com/city/faridkot",
                  },
                  {
                    text: "Mandsaur",
                    link: "https://www.swiggy.com/city/mandsaur",
                  },
                  {
                    text: "Suryapet",
                    link: "https://www.swiggy.com/city/suryapet",
                  },
                  {
                    text: "Adilabad",
                    link: "https://www.swiggy.com/city/adilabad",
                  },
                  {
                    text: "Narasaraopet",
                    link: "https://www.swiggy.com/city/narasaraopet",
                  },
                  {
                    text: "Faizabad",
                    link: "https://www.swiggy.com/city/faizabad",
                  },
                  {
                    text: "Tadpatri",
                    link: "https://www.swiggy.com/city/tadpatri",
                  },
                  {
                    text: "Gonda",
                    link: "https://www.swiggy.com/city/gonda",
                  },
                  {
                    text: "Mughalsarai",
                    link: "https://www.swiggy.com/city/mughalsarai",
                  },
                  {
                    text: "Medinipur",
                    link: "https://www.swiggy.com/city/medinipur",
                  },
                  {
                    text: "Nagda",
                    link: "https://www.swiggy.com/city/nagda",
                  },
                  {
                    text: "Raiganj",
                    link: "https://www.swiggy.com/city/raiganj",
                  },
                  {
                    text: "Deoria City",
                    link: "https://www.swiggy.com/city/deoria-city",
                  },
                  {
                    text: "Sultanpur",
                    link: "https://www.swiggy.com/city/sultanpur",
                  },
                  {
                    text: "Shamli",
                    link: "https://www.swiggy.com/city/shamli",
                  },
                  {
                    text: "Krishnanagar",
                    link: "https://www.swiggy.com/city/krishnanagar",
                  },
                  {
                    text: "Ballia",
                    link: "https://www.swiggy.com/city/ballia",
                  },
                  {
                    text: "Guntakal",
                    link: "https://www.swiggy.com/city/guntakal",
                  },
                  {
                    text: "Miryalaguda",
                    link: "https://www.swiggy.com/city/miryalaguda",
                  },
                  {
                    text: "Etah",
                    link: "https://www.swiggy.com/city/etah",
                  },
                  {
                    text: "Berhampore",
                    link: "https://www.swiggy.com/city/berhampore",
                  },
                  {
                    text: "Gudivada",
                    link: "https://www.swiggy.com/city/gudivada",
                  },
                  {
                    text: "Haldia",
                    link: "https://www.swiggy.com/city/haldia",
                  },
                  {
                    text: "Santipur",
                    link: "https://www.swiggy.com/city/santipur",
                  },
                  {
                    text: "Basirhat",
                    link: "https://www.swiggy.com/city/basirhat",
                  },
                  {
                    text: "Udgir",
                    link: "https://www.swiggy.com/city/udgir",
                  },
                  {
                    text: "Proddatur",
                    link: "https://www.swiggy.com/city/proddatur",
                  },
                  {
                    text: "Nagapattinam",
                    link: "https://www.swiggy.com/city/nagapattinam",
                  },
                  {
                    text: "Chikmagalur",
                    link: "https://www.swiggy.com/city/chikmagalur",
                  },
                  {
                    text: "Chandausi",
                    link: "https://www.swiggy.com/city/chandausi",
                  },
                  {
                    text: "Bhind",
                    link: "https://www.swiggy.com/city/bhind",
                  },
                  {
                    text: "Mandya",
                    link: "https://www.swiggy.com/city/mandya",
                  },
                  {
                    text: "Bagalkot",
                    link: "https://www.swiggy.com/city/bagalkot",
                  },
                  {
                    text: "Nandurbar",
                    link: "https://www.swiggy.com/city/nandurbar",
                  },
                  {
                    text: "Chitradurga",
                    link: "https://www.swiggy.com/city/chitradurga",
                  },
                  {
                    text: "Osmanabad",
                    link: "https://www.swiggy.com/city/osmanabad",
                  },
                  {
                    text: "Modinagar",
                    link: "https://www.swiggy.com/city/modinagar",
                  },
                  {
                    text: "Gadag-Betigeri",
                    link: "https://www.swiggy.com/city/gadag-betigeri",
                  },
                  {
                    text: "Hoshangabad",
                    link: "https://www.swiggy.com/city/hoshangabad",
                  },
                  {
                    text: "Jaunpur",
                    link: "https://www.swiggy.com/city/jaunpur",
                  },
                  {
                    text: "Port Blair",
                    link: "https://www.swiggy.com/city/port-blair",
                  },
                  {
                    text: "Jorhat",
                    link: "https://www.swiggy.com/city/jorhat",
                  },
                  {
                    text: "Nandyal",
                    link: "https://www.swiggy.com/city/nandyal",
                  },
                  {
                    text: "Biharsharif",
                    link: "https://www.swiggy.com/city/biharsharif",
                  },
                  {
                    text: "Buxar",
                    link: "https://www.swiggy.com/city/buxar",
                  },
                  {
                    text: "Siwan",
                    link: "https://www.swiggy.com/city/siwan",
                  },
                  {
                    text: "Dehri",
                    link: "https://www.swiggy.com/city/dehri",
                  },
                  {
                    text: "Bettiah",
                    link: "https://www.swiggy.com/city/bettiah",
                  },
                  {
                    text: "Kishanganj",
                    link: "https://www.swiggy.com/city/kishanganj",
                  },
                  {
                    text: "Saharsa",
                    link: "https://www.swiggy.com/city/saharsa",
                  },
                  {
                    text: "Hajipur",
                    link: "https://www.swiggy.com/city/hajipur",
                  },
                  {
                    text: "Motihari",
                    link: "https://www.swiggy.com/city/motihari",
                  },
                  {
                    text: "Sasaram",
                    link: "https://www.swiggy.com/city/sasaram",
                  },
                  {
                    text: "Munger",
                    link: "https://www.swiggy.com/city/munger",
                  },
                  {
                    text: "Katihar",
                    link: "https://www.swiggy.com/city/katihar",
                  },
                  {
                    text: "Arrah",
                    link: "https://www.swiggy.com/city/arrah",
                  },
                  {
                    text: "Srikakulam",
                    link: "https://www.swiggy.com/city/srikakulam",
                  },
                  {
                    text: "Begusarai",
                    link: "https://www.swiggy.com/city/begusarai",
                  },
                  {
                    text: "Neyveli",
                    link: "https://www.swiggy.com/city/neyveli",
                  },
                  {
                    text: "Waidhan",
                    link: "https://www.swiggy.com/city/waidhan",
                  },
                  {
                    text: "Markapur",
                    link: "https://www.swiggy.com/city/markapur",
                  },
                  {
                    text: "Chikkaballapur",
                    link: "https://www.swiggy.com/city/chikkaballapur",
                  },
                  {
                    text: "Bhatkal",
                    link: "https://www.swiggy.com/city/bhatkal",
                  },
                  {
                    text: "Gokak",
                    link: "https://www.swiggy.com/city/gokak",
                  },
                  {
                    text: "Itarsi",
                    link: "https://www.swiggy.com/city/itarsi",
                  },
                  {
                    text: "Dhar",
                    link: "https://www.swiggy.com/city/dhar",
                  },
                  {
                    text: "Chalisgaon",
                    link: "https://www.swiggy.com/city/chalisgaon",
                  },
                  {
                    text: "Thiruvallur",
                    link: "https://www.swiggy.com/city/thiruvallur",
                  },
                  {
                    text: "Namakkal",
                    link: "https://www.swiggy.com/city/namakkal",
                  },
                  {
                    text: "Dharmapuri",
                    link: "https://www.swiggy.com/city/dharmapuri",
                  },
                  {
                    text: "Bhandara",
                    link: "https://www.swiggy.com/city/bhandara",
                  },
                  {
                    text: "Virudhunagar",
                    link: "https://www.swiggy.com/city/virudhunagar",
                  },
                  {
                    text: "Siddipet",
                    link: "https://www.swiggy.com/city/siddipet",
                  },
                  {
                    text: "Gadwal",
                    link: "https://www.swiggy.com/city/gadwal",
                  },
                  {
                    text: "Bodhan-Rural",
                    link: "https://www.swiggy.com/city/bodhan-rural",
                  },
                  {
                    text: "Kamareddy",
                    link: "https://www.swiggy.com/city/kamareddy",
                  },
                  {
                    text: "Jhunjhunu",
                    link: "https://www.swiggy.com/city/jhunjhunu",
                  },
                  {
                    text: "Kapurthala",
                    link: "https://www.swiggy.com/city/kapurthala",
                  },
                  {
                    text: "Sangrur",
                    link: "https://www.swiggy.com/city/sangrur",
                  },
                  {
                    text: "Gurdaspur",
                    link: "https://www.swiggy.com/city/gurdaspur",
                  },
                  {
                    text: "Ramgarh",
                    link: "https://www.swiggy.com/city/ramgarh",
                  },
                  {
                    text: "Bantwal",
                    link: "https://www.swiggy.com/city/bantwal",
                  },
                  {
                    text: "Doddaballapura",
                    link: "https://www.swiggy.com/city/doddaballapura",
                  },
                  {
                    text: "Buldana",
                    link: "https://www.swiggy.com/city/buldana",
                  },
                  {
                    text: "Karad",
                    link: "https://www.swiggy.com/city/karad",
                  },
                  {
                    text: "Krishnagiri",
                    link: "https://www.swiggy.com/city/krishnagiri",
                  },
                  {
                    text: "Tiptur",
                    link: "https://www.swiggy.com/city/tiptur",
                  },
                  {
                    text: "Bhadrachalam",
                    link: "https://www.swiggy.com/city/bhadrachalam",
                  },
                  {
                    text: "Mancherial",
                    link: "https://www.swiggy.com/city/mancherial",
                  },
                  {
                    text: "Balrampur",
                    link: "https://www.swiggy.com/city/balrampur",
                  },
                  {
                    text: "Bharabanki",
                    link: "https://www.swiggy.com/city/bharabanki",
                  },
                  {
                    text: "Malout",
                    link: "https://www.swiggy.com/city/malout",
                  },
                  {
                    text: "Fatehgarh Sahib",
                    link: "https://www.swiggy.com/city/fatehgarh-sahib",
                  },
                  {
                    text: "Ropar",
                    link: "https://www.swiggy.com/city/ropar",
                  },
                  {
                    text: "Nangal",
                    link: "https://www.swiggy.com/city/nangal",
                  },
                  {
                    text: "Narnaul",
                    link: "https://www.swiggy.com/city/narnaul",
                  },
                  {
                    text: "Naraingarh",
                    link: "https://www.swiggy.com/city/naraingarh",
                  },
                  {
                    text: "Himmatnagar",
                    link: "https://www.swiggy.com/city/himmatnagar",
                  },
                  {
                    text: "Dausa",
                    link: "https://www.swiggy.com/city/dausa",
                  },
                  {
                    text: "Jahanabad",
                    link: "https://www.swiggy.com/city/jahanabad",
                  },
                  {
                    text: "Samastipur",
                    link: "https://www.swiggy.com/city/samastipur",
                  },
                  {
                    text: "Purnea",
                    link: "https://www.swiggy.com/city/purnea",
                  },
                  {
                    text: "Berhampur",
                    link: "https://www.swiggy.com/city/berhampur",
                  },
                  {
                    text: "Malda",
                    link: "https://www.swiggy.com/city/malda",
                  },
                  {
                    text: "Tuni",
                    link: "https://www.swiggy.com/city/tuni",
                  },
                  {
                    text: "Puttur",
                    link: "https://www.swiggy.com/city/puttur",
                  },
                  {
                    text: "Rayachoty",
                    link: "https://www.swiggy.com/city/rayachoty",
                  },
                  {
                    text: "Nirmal",
                    link: "https://www.swiggy.com/city/nirmal",
                  },
                  {
                    text: "Mirzapur",
                    link: "https://www.swiggy.com/city/mirzapur",
                  },
                  {
                    text: "Tanuku",
                    link: "https://www.swiggy.com/city/tanuku",
                  },
                  {
                    text: "Dahod",
                    link: "https://www.swiggy.com/city/dahod",
                  },
                  {
                    text: "Barmer",
                    link: "https://www.swiggy.com/city/barmer",
                  },
                  {
                    text: "Gangapur City",
                    link: "https://www.swiggy.com/city/gangapur-city",
                  },
                  {
                    text: "Mandi Gobindgarh",
                    link: "https://www.swiggy.com/city/mandi-gobindgarh",
                  },
                  {
                    text: "Tarn Taran Sahib",
                    link: "https://www.swiggy.com/city/tarn-taran-sahib",
                  },
                  {
                    text: "Nakodar",
                    link: "https://www.swiggy.com/city/nakodar",
                  },
                  {
                    text: "Ankleshwar",
                    link: "https://www.swiggy.com/city/ankleshwar",
                  },
                  {
                    text: "Vyara",
                    link: "https://www.swiggy.com/city/vyara",
                  },
                  {
                    text: "Bardoli",
                    link: "https://www.swiggy.com/city/bardoli",
                  },
                  {
                    text: "Halol",
                    link: "https://www.swiggy.com/city/halol",
                  },
                  {
                    text: "Bijnor",
                    link: "https://www.swiggy.com/city/bijnor",
                  },
                  {
                    text: "Sangamner",
                    link: "https://www.swiggy.com/city/sangamner",
                  },
                  {
                    text: "Baramati",
                    link: "https://www.swiggy.com/city/baramati",
                  },
                  {
                    text: "Betul",
                    link: "https://www.swiggy.com/city/betul",
                  },
                  {
                    text: "Chhatarpur",
                    link: "https://www.swiggy.com/city/chhatarpur",
                  },
                  {
                    text: "Balaghat",
                    link: "https://www.swiggy.com/city/balaghat",
                  },
                  {
                    text: "Sivakasi",
                    link: "https://www.swiggy.com/city/sivakasi",
                  },
                  {
                    text: "Viluppuram",
                    link: "https://www.swiggy.com/city/viluppuram",
                  },
                  {
                    text: "Ramanathapuram",
                    link: "https://www.swiggy.com/city/ramanathapuram",
                  },
                  {
                    text: "Sirsi",
                    link: "https://www.swiggy.com/city/sirsi",
                  },
                  {
                    text: "Theni",
                    link: "https://www.swiggy.com/city/theni",
                  },
                  {
                    text: "Karur",
                    link: "https://www.swiggy.com/city/karur",
                  },
                  {
                    text: "Karwar",
                    link: "https://www.swiggy.com/city/karwar",
                  },
                  {
                    text: "Sindhanur",
                    link: "https://www.swiggy.com/city/sindhanur",
                  },
                  {
                    text: "Kannur",
                    link: "https://www.swiggy.com/city/kannur",
                  },
                  {
                    text: "Noida 1",
                    link: "https://www.swiggy.com/city/noida-1",
                  },
                  {
                    text: "Thiruvalla",
                    link: "https://www.swiggy.com/city/thiruvalla",
                  },
                  {
                    text: "Thodupuzha",
                    link: "https://www.swiggy.com/city/thodupuzha",
                  },
                  {
                    text: "Kadiri",
                    link: "https://www.swiggy.com/city/kadiri",
                  },
                  {
                    text: "Kavali",
                    link: "https://www.swiggy.com/city/kavali",
                  },
                  {
                    text: "Tezpur",
                    link: "https://www.swiggy.com/city/tezpur",
                  },
                  {
                    text: "Kayamkulam",
                    link: "https://www.swiggy.com/city/kayamkulam",
                  },
                  {
                    text: "Kottarakkara",
                    link: "https://www.swiggy.com/city/kottarakkara",
                  },
                  {
                    text: "Mandi Dabwali",
                    link: "https://www.swiggy.com/city/mandi-dabwali",
                  },
                  {
                    text: "Fatehabad",
                    link: "https://www.swiggy.com/city/fatehabad",
                  },
                  {
                    text: "Jagraon",
                    link: "https://www.swiggy.com/city/jagraon",
                  },
                  {
                    text: "Mansa",
                    link: "https://www.swiggy.com/city/mansa",
                  },
                  {
                    text: "Pinjore City",
                    link: "https://www.swiggy.com/city/pinjore-city",
                  },
                  {
                    text: "Fazilka",
                    link: "https://www.swiggy.com/city/fazilka",
                  },
                  {
                    text: "Baddi",
                    link: "https://www.swiggy.com/city/baddi",
                  },
                  {
                    text: "Solan",
                    link: "https://www.swiggy.com/city/solan",
                  },
                  {
                    text: "Daltonganj",
                    link: "https://www.swiggy.com/city/daltonganj",
                  },
                  {
                    text: "Balangir",
                    link: "https://www.swiggy.com/city/balangir",
                  },
                  {
                    text: "Kothagudem",
                    link: "https://www.swiggy.com/city/kothagudem",
                  },
                  {
                    text: "Hansi",
                    link: "https://www.swiggy.com/city/hansi",
                  },
                  {
                    text: "Aurangabad_Bihar",
                    link: "https://www.swiggy.com/city/aurangabadbihar",
                  },
                  {
                    text: "Gopalganj",
                    link: "https://www.swiggy.com/city/gopalganj",
                  },
                  {
                    text: "Jharsuguda",
                    link: "https://www.swiggy.com/city/jharsuguda",
                  },
                  {
                    text: "Tohana",
                    link: "https://www.swiggy.com/city/tohana",
                  },
                  {
                    text: "Jhalawar",
                    link: "https://www.swiggy.com/city/jhalawar",
                  },
                  {
                    text: "Sivasagar",
                    link: "https://www.swiggy.com/city/sivasagar",
                  },
                  {
                    text: "Bagdogra",
                    link: "https://www.swiggy.com/city/bagdogra",
                  },
                  {
                    text: "Kendrapada",
                    link: "https://www.swiggy.com/city/kendrapada",
                  },
                  {
                    text: "Mallapuram (Do not Use)",
                    link: "https://www.swiggy.com/city/mallapuram-do-not-use",
                  },
                  {
                    text: "Veraval",
                    link: "https://www.swiggy.com/city/veraval",
                  },
                  {
                    text: "Daman",
                    link: "https://www.swiggy.com/city/daman",
                  },
                  {
                    text: "Chiplun",
                    link: "https://www.swiggy.com/city/chiplun",
                  },
                  {
                    text: "Silvassa",
                    link: "https://www.swiggy.com/city/silvassa",
                  },
                  {
                    text: "Lonavla",
                    link: "https://www.swiggy.com/city/lonavla",
                  },
                  {
                    text: "Bongaigaon",
                    link: "https://www.swiggy.com/city/bongaigaon",
                  },
                  {
                    text: "Golaghat",
                    link: "https://www.swiggy.com/city/golaghat",
                  },
                  {
                    text: "Duliajan",
                    link: "https://www.swiggy.com/city/duliajan",
                  },
                  {
                    text: "Bolpur",
                    link: "https://www.swiggy.com/city/bolpur",
                  },
                  {
                    text: "Madhubani",
                    link: "https://www.swiggy.com/city/madhubani",
                  },
                  {
                    text: "Balasore",
                    link: "https://www.swiggy.com/city/balasore",
                  },
                  {
                    text: "Palampur",
                    link: "https://www.swiggy.com/city/palampur",
                  },
                  {
                    text: "Kotdwar",
                    link: "https://www.swiggy.com/city/kotdwar",
                  },
                  {
                    text: "Koppal",
                    link: "https://www.swiggy.com/city/koppal",
                  },
                  {
                    text: "Chikhli",
                    link: "https://www.swiggy.com/city/chikhli",
                  },
                  {
                    text: "Dahanu",
                    link: "https://www.swiggy.com/city/dahanu",
                  },
                  {
                    text: "Itanagar",
                    link: "https://www.swiggy.com/city/itanagar",
                  },
                  {
                    text: "Rangpo",
                    link: "https://www.swiggy.com/city/rangpo",
                  },
                  {
                    text: "Aizawl",
                    link: "https://www.swiggy.com/city/aizawl",
                  },
                  {
                    text: "Gangtok",
                    link: "https://www.swiggy.com/city/gangtok",
                  },
                  {
                    text: "Mayiladuthurai",
                    link: "https://www.swiggy.com/city/mayiladuthurai",
                  },
                  {
                    text: "Kannauj",
                    link: "https://www.swiggy.com/city/kannauj",
                  },
                  {
                    text: "Cooch Behar",
                    link: "https://www.swiggy.com/city/cooch-behar",
                  },
                  {
                    text: "Palani",
                    link: "https://www.swiggy.com/city/palani",
                  },
                  {
                    text: "Bilimora",
                    link: "https://www.swiggy.com/city/bilimora",
                  },
                  {
                    text: "Boisar",
                    link: "https://www.swiggy.com/city/boisar",
                  },
                  {
                    text: "Kohima",
                    link: "https://www.swiggy.com/city/kohima",
                  },
                  {
                    text: "Naharlagun",
                    link: "https://www.swiggy.com/city/naharlagun",
                  },
                  {
                    text: "Dumka",
                    link: "https://www.swiggy.com/city/dumka",
                  },
                  {
                    text: "Rajsamand",
                    link: "https://www.swiggy.com/city/rajsamand",
                  },
                  {
                    text: "Gauriganj",
                    link: "https://www.swiggy.com/city/gauriganj",
                  },
                  {
                    text: "Bodinayakanur",
                    link: "https://www.swiggy.com/city/bodinayakanur",
                  },
                  {
                    text: "Bhawanipatna",
                    link: "https://www.swiggy.com/city/bhawanipatna",
                  },
                  {
                    text: "Baran",
                    link: "https://www.swiggy.com/city/baran",
                  },
                  {
                    text: "Narsinghpur",
                    link: "https://www.swiggy.com/city/narsinghpur",
                  },
                  {
                    text: "Kovilpatti",
                    link: "https://www.swiggy.com/city/kovilpatti",
                  },
                  {
                    text: "Pusad",
                    link: "https://www.swiggy.com/city/pusad",
                  },
                  {
                    text: "Kendujhar",
                    link: "https://www.swiggy.com/city/kendujhar",
                  },
                  {
                    text: "Manali",
                    link: "https://www.swiggy.com/city/manali",
                  },
                  {
                    text: "Diu",
                    link: "https://www.swiggy.com/city/diu",
                  },
                  {
                    text: "Khamgaon",
                    link: "https://www.swiggy.com/city/khamgaon",
                  },
                  {
                    text: "Ramanagara",
                    link: "https://www.swiggy.com/city/ramanagara",
                  },
                  {
                    text: "Alipurduar",
                    link: "https://www.swiggy.com/city/alipurduar",
                  },
                  {
                    text: "Almora",
                    link: "https://www.swiggy.com/city/almora",
                  },
                  {
                    text: "Jhargram",
                    link: "https://www.swiggy.com/city/jhargram",
                  },
                  {
                    text: "Arambagh",
                    link: "https://www.swiggy.com/city/arambagh",
                  },
                  {
                    text: "Bhadohi",
                    link: "https://www.swiggy.com/city/bhadohi",
                  },
                  {
                    text: "Tenkasi",
                    link: "https://www.swiggy.com/city/tenkasi",
                  },
                  {
                    text: "Srivilliputhur",
                    link: "https://www.swiggy.com/city/srivilliputhur",
                  },
                  {
                    text: "Chidambaram",
                    link: "https://www.swiggy.com/city/chidambaram",
                  },
                  {
                    text: "Rajgarh",
                    link: "https://www.swiggy.com/city/rajgarh",
                  },
                  {
                    text: "Pratapgarh",
                    link: "https://www.swiggy.com/city/pratapgarh",
                  },
                  {
                    text: "Washim",
                    link: "https://www.swiggy.com/city/washim",
                  },
                  {
                    text: "Raghunathpur",
                    link: "https://www.swiggy.com/city/raghunathpur",
                  },
                  {
                    text: "Suri",
                    link: "https://www.swiggy.com/city/suri",
                  },
                  {
                    text: "Kadayanallur",
                    link: "https://www.swiggy.com/city/kadayanallur",
                  },
                  {
                    text: "Thiruvarur",
                    link: "https://www.swiggy.com/city/thiruvarur",
                  },
                  {
                    text: "Ranaghat-WB",
                    link: "https://www.swiggy.com/city/ranaghat-wb",
                  },
                  {
                    text: "Wayanad",
                    link: "https://www.swiggy.com/city/wayanad",
                  },
                  {
                    text: "Perambalur",
                    link: "https://www.swiggy.com/city/perambalur",
                  },
                  {
                    text: "Paramakudi",
                    link: "https://www.swiggy.com/city/paramakudi",
                  },
                  {
                    text: "Bela Pratapgarh",
                    link: "https://www.swiggy.com/city/bela-pratapgarh",
                  },
                  {
                    text: "Mahoba",
                    link: "https://www.swiggy.com/city/mahoba",
                  },
                  {
                    text: "Sitamarhi",
                    link: "https://www.swiggy.com/city/sitamarhi",
                  },
                  {
                    text: "Chakdaha",
                    link: "https://www.swiggy.com/city/chakdaha",
                  },
                  {
                    text: "Khalilabad",
                    link: "https://www.swiggy.com/city/khalilabad",
                  },
                  {
                    text: "Pattukkottai",
                    link: "https://www.swiggy.com/city/pattukkottai",
                  },
                  {
                    text: "Tindivanam",
                    link: "https://www.swiggy.com/city/tindivanam",
                  },
                  {
                    text: "Tiruttani",
                    link: "https://www.swiggy.com/city/tiruttani",
                  },
                  {
                    text: "Gangarampur",
                    link: "https://www.swiggy.com/city/gangarampur",
                  },
                  {
                    text: "Dharapuram",
                    link: "https://www.swiggy.com/city/dharapuram",
                  },
                  {
                    text: "Arakkonam",
                    link: "https://www.swiggy.com/city/arakkonam",
                  },
                  {
                    text: "Sirkali",
                    link: "https://www.swiggy.com/city/sirkali",
                  },
                  {
                    text: "Mettupalayam",
                    link: "https://www.swiggy.com/city/mettupalayam",
                  },
                  {
                    text: "Digboi",
                    link: "https://www.swiggy.com/city/digboi",
                  },
                  {
                    text: "Biswanath Chariali",
                    link: "https://www.swiggy.com/city/biswanath-chariali",
                  },
                  {
                    text: "Nalbari",
                    link: "https://www.swiggy.com/city/nalbari",
                  },
                  {
                    text: "Shirdi city",
                    link: "https://www.swiggy.com/city/shirdi-city",
                  },
                  {
                    text: "Mukerian",
                    link: "https://www.swiggy.com/city/mukerian",
                  },
                  {
                    text: "Hosur",
                    link: "https://www.swiggy.com/city/hosur",
                  },
                  {
                    text: "Palakollu",
                    link: "https://www.swiggy.com/city/palakollu",
                  },
                  {
                    text: "Ravulapalem",
                    link: "https://www.swiggy.com/city/ravulapalem",
                  },
                  {
                    text: "Barh",
                    link: "https://www.swiggy.com/city/barh",
                  },
                  {
                    text: "Palghar",
                    link: "https://www.swiggy.com/city/palghar",
                  },
                  {
                    text: "Kushalnagar",
                    link: "https://www.swiggy.com/city/kushalnagar",
                  },
                  {
                    text: "Dungarpur",
                    link: "https://www.swiggy.com/city/dungarpur",
                  },
                  {
                    text: "Chaibasa",
                    link: "https://www.swiggy.com/city/chaibasa",
                  },
                  {
                    text: "Haveri",
                    link: "https://www.swiggy.com/city/haveri",
                  },
                  {
                    text: "Karaikal",
                    link: "https://www.swiggy.com/city/karaikal",
                  },
                  {
                    text: "Jjajjar",
                    link: "https://www.swiggy.com/city/jjajjar",
                  },
                  {
                    text: "Kokrajhar",
                    link: "https://www.swiggy.com/city/kokrajhar",
                  },
                  {
                    text: "Rangia",
                    link: "https://www.swiggy.com/city/rangia",
                  },
                  {
                    text: "Hamirpur",
                    link: "https://www.swiggy.com/city/hamirpur",
                  },
                  {
                    text: "Una",
                    link: "https://www.swiggy.com/city/una",
                  },
                  {
                    text: "Sulthan Bathery",
                    link: "https://www.swiggy.com/city/sulthan-bathery",
                  },
                  {
                    text: "Rayagada",
                    link: "https://www.swiggy.com/city/rayagada",
                  },
                  {
                    text: "Paradeep",
                    link: "https://www.swiggy.com/city/paradeep",
                  },
                  {
                    text: "Mandapeta",
                    link: "https://www.swiggy.com/city/mandapeta",
                  },
                  {
                    text: "Jamui",
                    link: "https://www.swiggy.com/city/jamui",
                  },
                  {
                    text: "Pilkhuwa",
                    link: "https://www.swiggy.com/city/pilkhuwa",
                  },
                  {
                    text: "Parvathipuram",
                    link: "https://www.swiggy.com/city/parvathipuram",
                  },
                  {
                    text: "Ambajogai",
                    link: "https://www.swiggy.com/city/ambajogai",
                  },
                  {
                    text: "Araria",
                    link: "https://www.swiggy.com/city/araria",
                  },
                  {
                    text: "North Lakhimpur",
                    link: "https://www.swiggy.com/city/north-lakhimpur",
                  },
                  {
                    text: "Rajampet",
                    link: "https://www.swiggy.com/city/rajampet",
                  },
                  {
                    text: "Udumalaipettai",
                    link: "https://www.swiggy.com/city/udumalaipettai",
                  },
                  {
                    text: "Tirupattur",
                    link: "https://www.swiggy.com/city/tirupattur",
                  },
                  {
                    text: "Hojai",
                    link: "https://www.swiggy.com/city/hojai",
                  },
                  {
                    text: "Khagaria",
                    link: "https://www.swiggy.com/city/khagaria",
                  },
                  {
                    text: "Dasuya",
                    link: "https://www.swiggy.com/city/dasuya",
                  },
                  {
                    text: "Gudur",
                    link: "https://www.swiggy.com/city/gudur",
                  },
                  {
                    text: "Sullurpeta",
                    link: "https://www.swiggy.com/city/sullurpeta",
                  },
                  {
                    text: "Piler",
                    link: "https://www.swiggy.com/city/piler",
                  },
                  {
                    text: "SankaranKoil",
                    link: "https://www.swiggy.com/city/sankarankoil",
                  },
                  {
                    text: "Nabha",
                    link: "https://www.swiggy.com/city/nabha",
                  },
                  {
                    text: "LPU - Phagwara",
                    link: "https://www.swiggy.com/city/lpu-phagwara",
                  },
                  {
                    text: "Jangipur",
                    link: "https://www.swiggy.com/city/jangipur",
                  },
                  {
                    text: "Roha",
                    link: "https://www.swiggy.com/city/roha",
                  },
                ],
                id: "footer_content",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
                citySlug: "chennai",
                lat: "13.0826802",
                lng: "80.2707184",
                userAgent:
                  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                gandalfRequest:
                  '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-4245e525-9d08-4dd7-9f90-bde49581efeb","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
                id: "meta_data",
                metaInfo: {
                  pageType: "FOOD_HOME_PAGE",
                  pageTitle: "Food home delivery | Swiggy",
                },
                screenType: "filteredCollection",
                seoParams: {
                  apiName: "FoodHomePage",
                  seoUrl: "www.swiggy.com",
                  pageType: "FOOD_HOME_PAGE",
                },
              },
            },
          },
        ],
        firstOffsetRequest: true,
        cacheExpiryTime: 240,
        nextFetch: 1,
      },
      tid: "2eacd3c3-24d9-4d07-af8b-deb27a5af32f",
      sid: "ar5fad21-2a13-4a8d-b8da-e40b5b94a740",
      deviceId: "d05e13b3-c3dc-42ad-a9cc-34f5c65fe81b",
      csrfToken: "LMIiGKhopW3o-OY_qNy6pVP4T002bGVN_erngWuo",
    };
    const configDrivenData = jsonResponse?.data?.cards;
    // console.log(mindTitle);
    setFirstOffsetRequest(jsonResponse?.data?.firstOffsetRequest);
    setNextOffSetToken(jsonResponse?.data?.pageOffset?.nextOffset);
    setBestOfferCard(configDrivenData[0]);
    setWhatsOnYourMind(configDrivenData[1]);
    const { title } = whatsOnYourMind;
    mindTitle.current = title;

    setTopRestaurents(configDrivenData[2]);
    setRestaurents(configDrivenData[5]);
  }

  useEffect(() => {
    if (firstOffsetRequest) {
      fetchAllDetails();
      setFirstOffsetRequest(!firstOffsetRequest);
    }
  }, []);

  return (
    <div className="ml-[120px] mr-[120px] relative top-[120px]">
      <BestOffersforYou offerDetails={bestOfferCard} />
      <WhatsOnYourMind onMind={whatsOnYourMind} requiredtitle={mindTitle} />
      <TopRestaurentsInLocation topResDetails={topRestaurents} />
      <RestaurentsList resDetails={restaurents} />
    </div>
  );
};

export default Body;
