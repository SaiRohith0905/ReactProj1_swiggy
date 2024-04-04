import React from "react";
import Heading from "./Heading";
import { TOP_RES_IMG_URL } from "../Constants/Images";
import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
const RestaurentsList = (props) => {
  const { restaurants } =
    props?.resDetails?.card?.card?.gridElements?.infoWithStyle;

  const updatedRESDATA1 = [
    {
      info: {
        id: "258595",
        name: "Shyam's Bombay Halwa house",
        cloudinaryImageId: "qjyxbqoft7ysdtevzkta",
        locality: "Parrys",
        areaName: "George Town",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "258595",
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
        parentId: "16962",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 15:30:00",
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
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/shyams-bombay-halwa-house-parrys-george-town-chennai-258595",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "407244",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "zuobkwprhpluer4xqo1k",
        locality: "Kilpauk",
        areaName: "Kilpauk",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "407244",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4600,
        },
        parentId: "4961",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 4.4,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "4.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 23:59:00",
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
          subHeader: "ABOVE ₹699",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-kilpauk-chennai-407244",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "224426",
        name: "Faasos - Wraps, Rolls & Shawarma",
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
              fee: 4600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4600,
        },
        parentId: "21809",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 23:59:00",
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
          header: "15% OFF",
          subHeader: "ABOVE ₹1000",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-brickklin-road-purasaiwakkam-chennai-224426",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "16543",
        name: "A2B - Adyar Ananda Bhavan",
        cloudinaryImageId: "dsliyhlbtgtnnuxyrpsf",
        locality: "Purasai High Road",
        areaName: "Purasaiwakkam",
        costForTwo: "₹300 for two",
        cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "16543",
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
        parentId: "22",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 22:45:00",
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
                    imageId: "v1695133679/badges/Pure_Veg111.png",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-purasai-high-road-purasaiwakkam-chennai-16543",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "37067",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Kilpauk",
        areaName: "Poonamallee High Road",
        costForTwo: "₹350 for two",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "37067",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4600,
        },
        parentId: "2",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-13 05:59:00",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-kilpauk-poonamallee-high-road-chennai-37067",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "224433",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "ltclyiutcsq7twivwsii",
        locality: "Brickklin Road",
        areaName: "Purasaiwakkam",
        costForTwo: "₹200 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "224433",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4600,
        },
        parentId: "4925",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 23:59:00",
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
          subHeader: "AT ₹159",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-brickklin-road-purasaiwakkam-chennai-224433",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "201164",
        name: "The Bowl Company",
        cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
        locality: "Royapettah",
        areaName: "Gopalapuram",
        costForTwo: "₹300 for two",
        cuisines: [
          "Pan-Asian",
          "Continental",
          "North Indian",
          "Desserts",
          "American",
          "Asian",
          "Beverages",
          "Biryani",
          "Chinese",
          "European",
          "Grill",
          "Hyderabadi",
          "Indian",
          "Italian",
          "Kebabs",
          "Lucknowi",
          "Mediterranean",
          "Mexican",
          "Mughlai",
          "Oriental",
          "Pastas",
          "Punjabi",
          "Raja",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "201164",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5600,
        },
        parentId: "4317",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-13 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
          ],
        },
        isOpen: true,
        type: "C",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/the-bowl-company-royapettah-gopalapuram-chennai-201164",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "34335",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Royapettah",
        areaName: "Royapettah",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "34335",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4600,
        },
        parentId: "721",
        avgRatingString: "3.8",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 22:00:00",
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
          header: "FREE ITEM",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-royapettah-chennai-34335",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "24684",
        name: "Flower Drum",
        cloudinaryImageId: "5ec1629d92156d2661a5da51d7d24d4d",
        locality: "Pantheon Road",
        areaName: "Egmore",
        costForTwo: "₹700 for two",
        cuisines: ["Chinese", "Thai", "Asian"],
        avgRating: 4.3,
        veg: true,
        feeDetails: {
          restaurantId: "24684",
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
        parentId: "3289",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 15:20:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1669879258/GFF_logo_new_xbycg6.png",
              description: "gourmet",
            },
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
                    description: "gourmet",
                    imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/flower-drum-pantheon-road-egmore-chennai-24684",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "262948",
        name: "Perambur Sri Srinivasa (Bhavan)",
        cloudinaryImageId: "bogj3f009rjyo7b5omgx",
        locality: "Sembium",
        areaName: "Chennai",
        costForTwo: "₹300 for two",
        cuisines: ["South Indian", "North Indian"],
        avgRating: 4.4,
        veg: true,
        feeDetails: {
          restaurantId: "262948",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5600,
        },
        parentId: "5939",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 22:15:00",
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
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/perambur-sri-srinivasa-bhavan-sembium-chennai-chennai-262948",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "737090",
        name: "Millet Maagic Meal",
        cloudinaryImageId: "25019d661e9e0782409ad044b0e5ff03",
        locality: "K G Galaxy",
        areaName: "Annanagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "Healthy Food",
          "South Indian",
          "North Indian",
          "Pizzas",
          "Desserts",
          "Snacks",
        ],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "737090",
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
        parentId: "16915",
        avgRatingString: "4.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 6.2,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "6.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 22:00:00",
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
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/millet-maagic-meal-k-g-galaxy-annanagar-chennai-737090",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "15963",
        name: "New Andhra Meals Hotel-Since1962",
        cloudinaryImageId: "hthxebqq87nk4fs82nwc",
        locality: "Sir Thyagaraya Road",
        areaName: "T. Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Andhra", "South Indian"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "15963",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 8200,
        },
        parentId: "471299",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 7.3,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "7.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 23:00:00",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/new-andhra-meals-hotel-since1962-sir-thyagaraya-road-t-nagar-chennai-15963",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "668737",
        name: "Shri Gowri Krishnaa",
        cloudinaryImageId: "f3ed03cce0a6af7d47b1a936a2c68dc8",
        locality: "Avvai Shanmugam Salai",
        areaName: "Royapettah",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian", "North Indian", "Chinese"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "668737",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5600,
        },
        parentId: "16969",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 23:00:00",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/shri-gowri-krishnaa-avvai-shanmugam-salai-royapettah-chennai-668737",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "754381",
        name: "Wendy's Burgers",
        cloudinaryImageId: "a2ec5418246b622ec4baa3bd051ef6ab",
        locality: "Brickklin Road",
        areaName: "Purasaiwakkam",
        costForTwo: "₹200 for two",
        cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "754381",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4600,
        },
        parentId: "972",
        avgRatingString: "3.9",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-12 23:59:00",
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
          header: "ITEMS",
          subHeader: "AT ₹129",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/wendys-burgers-brickklin-road-purasaiwakkam-chennai-754381",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
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
        parentId: "337996",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 14,
          lastMileTravel: 0.5,
          serviceability: "SERVICEABLE",
          slaString: "14 mins",
          lastMileTravelString: "0.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-13 03:00:00",
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
        context: "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/the-bvk-biryani-bai-veetu-kalyanam-thiruvengadam-street-egmore-chennai-561677",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ];

  const updatedRESDATA2 = {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      pageOffset: {
        nextOffset: "COVCELQ4KICwmZ6y/pD5NzCnEzgC",
        widgetOffset: {
          NewListingView_Topical_Fullbleed: "",
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_PB_Theme: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "40",
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
                        id: "707186",
                        name: "California Burrito",
                        cloudinaryImageId: "6b0dbaa2b27c4803e0b1b46aedbc5d4f",
                        locality: "Express Avenue Mall",
                        areaName: "Royapettah",
                        costForTwo: "₹250 for two",
                        cuisines: [
                          "Mexican",
                          "American",
                          "Salads",
                          "Continental",
                          "Keto",
                          "Healthy Food",
                        ],
                        avgRating: 4.6,
                        feeDetails: {
                          restaurantId: "707186",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 4600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 4600,
                        },
                        parentId: "1252",
                        avgRatingString: "4.6",
                        totalRatingsString: "1K+",
                        sla: {
                          deliveryTime: 33,
                          lastMileTravel: 4.7,
                          serviceability: "SERVICEABLE",
                          slaString: "33 mins",
                          lastMileTravelString: "4.7 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:00:00",
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
                        restaurantOfferPresentationInfo: {},
                      },
                      analytics: {
                        context:
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/california-burrito-express-avenue-mall-royapettah-chennai-707186",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "726146",
                        name: "Theobroma",
                        cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
                        locality: "Purasawalkam High Road",
                        areaName: "Kellys",
                        costForTwo: "₹300 for two",
                        cuisines: ["Desserts"],
                        avgRating: 4.5,
                        feeDetails: {
                          restaurantId: "726146",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5100,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5100,
                        },
                        parentId: "1040",
                        avgRatingString: "4.5",
                        totalRatingsString: "500+",
                        sla: {
                          deliveryTime: 22,
                          lastMileTravel: 3.8,
                          serviceability: "SERVICEABLE",
                          slaString: "22 mins",
                          lastMileTravelString: "3.8 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-13 00:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                              description: "gourmet",
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
                                    description: "gourmet",
                                    imageId:
                                      "v1669879258/GFF_logo_new_xbycg6.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "10% OFF",
                          subHeader: "ABOVE ₹159",
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
                        isNewlyOnboarded: true,
                        restaurantOfferPresentationInfo: {},
                      },
                      analytics: {
                        context:
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/theobroma-purasawalkam-high-road-kellys-chennai-726146",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "201165",
                        name: "Homely",
                        cloudinaryImageId: "k77izw0xev5wnakm038g",
                        locality: "Royapettah",
                        areaName: "Gopalapuram",
                        costForTwo: "₹200 for two",
                        cuisines: [
                          "Home Food",
                          "North Indian",
                          "South Indian",
                          "Beverages",
                          "Desserts",
                          "Thalis",
                        ],
                        avgRating: 4.3,
                        feeDetails: {
                          restaurantId: "201165",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5600,
                        },
                        parentId: "4043",
                        avgRatingString: "4.3",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 33,
                          lastMileTravel: 5,
                          serviceability: "SERVICEABLE",
                          slaString: "33 mins",
                          lastMileTravelString: "5.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 16:30:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId:
                                "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                              description: "OnlyOnSwiggy",
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
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "OnlyOnSwiggy",
                                    imageId:
                                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
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
                        aggregatedDiscountInfoV3: {
                          header: "60% OFF",
                          subHeader: "UPTO ₹110",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/homely-royapettah-gopalapuram-chennai-201165",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "73720",
                        name: "Hotel Paramount",
                        cloudinaryImageId: "ina9lexdve9yzfhjq6bl",
                        locality: "Ormes Road",
                        areaName: "Kilpauk",
                        costForTwo: "₹500 for two",
                        cuisines: [
                          "North Indian",
                          "South Indian",
                          "Chinese",
                          "Seafood",
                          "Biryani",
                        ],
                        avgRating: 4.3,
                        feeDetails: {
                          restaurantId: "73720",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5100,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5100,
                        },
                        parentId: "17656",
                        avgRatingString: "4.3",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 25,
                          lastMileTravel: 3.5,
                          serviceability: "SERVICEABLE",
                          slaString: "25 mins",
                          lastMileTravelString: "3.5 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 22:45:00",
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
                          header: "₹150 OFF",
                          subHeader: "ABOVE ₹999",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/hotel-paramount-ormes-road-kilpauk-chennai-73720",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "341438",
                        name: "Babal Da Punjabi Dabha",
                        cloudinaryImageId: "nablatzu6ohc2elqgssd",
                        locality: "Purasawalkam",
                        areaName: "Egmore",
                        costForTwo: "₹500 for two",
                        cuisines: [
                          "North Indian",
                          "Punjabi",
                          "Indian",
                          "Thalis",
                          "Kebabs",
                        ],
                        avgRating: 4.3,
                        feeDetails: {
                          restaurantId: "341438",
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
                        parentId: "16844",
                        avgRatingString: "4.3",
                        totalRatingsString: "5K+",
                        sla: {
                          deliveryTime: 23,
                          lastMileTravel: 2.7,
                          serviceability: "SERVICEABLE",
                          slaString: "23 mins",
                          lastMileTravelString: "2.7 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 16:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/babal-da-punjabi-dabha-purasawalkam-egmore-chennai-341438",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "446935",
                        name: "National Lodge",
                        cloudinaryImageId: "dki2dsxundx4yu7elxo4",
                        locality: "Sowcarpet",
                        areaName: "George Town",
                        costForTwo: "₹300 for two",
                        cuisines: [
                          "South Indian",
                          "Indian",
                          "Home Food",
                          "Healthy Food",
                        ],
                        avgRating: 4.2,
                        veg: true,
                        feeDetails: {
                          restaurantId: "446935",
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
                        parentId: "269302",
                        avgRatingString: "4.2",
                        totalRatingsString: "100+",
                        sla: {
                          deliveryTime: 30,
                          lastMileTravel: 2.8,
                          serviceability: "SERVICEABLE",
                          slaString: "30 mins",
                          lastMileTravelString: "2.8 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 15:30:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/national-lodge-sowcarpet-george-town-chennai-446935",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "58416",
                        name: "Hotel Raaj Bhaavan",
                        cloudinaryImageId: "hbutuganrnurgxdiccnp",
                        locality: "Purasawakkam",
                        areaName: "Purasavakkam",
                        costForTwo: "₹300 for two",
                        cuisines: ["South Indian", "North Indian"],
                        avgRating: 4.3,
                        veg: true,
                        feeDetails: {
                          restaurantId: "58416",
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
                        parentId: "4904",
                        avgRatingString: "4.3",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 27,
                          lastMileTravel: 2.6,
                          serviceability: "SERVICEABLE",
                          slaString: "27 mins",
                          lastMileTravelString: "2.6 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 22:30:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/hotel-raaj-bhaavan-purasawakkam-purasavakkam-chennai-58416",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "49163",
                        name: "Hotel Sangam - Mount Road",
                        cloudinaryImageId: "odgnymnp4dfu0rz1lmpo",
                        locality: "Mount road",
                        areaName: "Triplicane",
                        costForTwo: "₹300 for two",
                        cuisines: ["Biryani", "North Indian", "Chinese"],
                        avgRating: 4.2,
                        feeDetails: {
                          restaurantId: "49163",
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
                        parentId: "17809",
                        avgRatingString: "4.2",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 24,
                          lastMileTravel: 2.9,
                          serviceability: "SERVICEABLE",
                          slaString: "24 mins",
                          lastMileTravelString: "2.9 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:55:00",
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
                          header: "₹100 OFF",
                          subHeader: "ABOVE ₹299",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/hotel-sangam-mount-road-mount-road-triplicane-chennai-49163",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "64704",
                        name: "Fusilli Reasons",
                        cloudinaryImageId: "vpgiwa3opu5ltygzesl3",
                        locality: "Kilpauk",
                        areaName: "Kilpauk",
                        costForTwo: "₹200 for two",
                        cuisines: ["Pastas", "Italian"],
                        avgRating: 4.5,
                        veg: true,
                        feeDetails: {
                          restaurantId: "64704",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5100,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5100,
                        },
                        parentId: "17736",
                        avgRatingString: "4.5",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 23,
                          lastMileTravel: 3.5,
                          serviceability: "SERVICEABLE",
                          slaString: "23 mins",
                          lastMileTravelString: "3.5 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 22:45:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/fusilli-reasons-kilpauk-chennai-64704",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "471278",
                        name: "Masaledaar Desi Rasoi",
                        cloudinaryImageId: "zdskdvijpkrie646e9yc",
                        locality: "Starhans Road",
                        areaName: "Vepery",
                        costForTwo: "₹450 for two",
                        cuisines: [
                          "Chinese",
                          "North Indian",
                          "Indian",
                          "Fast Food",
                          "Snacks",
                          "Beverages",
                        ],
                        avgRating: 4.2,
                        veg: true,
                        feeDetails: {
                          restaurantId: "471278",
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
                        parentId: "5929",
                        avgRatingString: "4.2",
                        totalRatingsString: "1K+",
                        sla: {
                          deliveryTime: 23,
                          lastMileTravel: 2.3,
                          serviceability: "SERVICEABLE",
                          slaString: "23 mins",
                          lastMileTravelString: "2.3 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 15:15:00",
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
                          header: "₹150 OFF",
                          subHeader: "ABOVE ₹599",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/masaledaar-desi-rasoi-starhans-road-vepery-chennai-471278",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
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
                              fee: 4600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 4600,
                        },
                        parentId: "6988",
                        avgRatingString: "4.6",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 22,
                          lastMileTravel: 3.5,
                          serviceability: "SERVICEABLE",
                          slaString: "22 mins",
                          lastMileTravelString: "3.5 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 21:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/shree-mithai-dr-tv-road-chetpet-chennai-37629",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "787442",
                        name: "Khalids Biriyani",
                        cloudinaryImageId: "7452b976e8ec152bcd49ad487d9816a7",
                        locality: "Beach Rd",
                        areaName: "George Town",
                        costForTwo: "₹500 for two",
                        cuisines: [
                          "Biryani",
                          "North Indian",
                          "Kebabs",
                          "Seafood",
                          "Beverages",
                        ],
                        avgRating: 3.6,
                        feeDetails: {
                          restaurantId: "787442",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5100,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5100,
                        },
                        parentId: "11840",
                        avgRatingString: "3.6",
                        totalRatingsString: "8",
                        sla: {
                          deliveryTime: 27,
                          lastMileTravel: 3.5,
                          serviceability: "SERVICEABLE",
                          slaString: "27 mins",
                          lastMileTravelString: "3.5 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 22:30:00",
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
                        isNewlyOnboarded: true,
                        restaurantOfferPresentationInfo: {},
                      },
                      analytics: {
                        context:
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/khalids-biriyani-beach-rd-george-town-chennai-787442",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
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
                        parentId: "164",
                        avgRatingString: "4.0",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 21,
                          lastMileTravel: 1.8,
                          serviceability: "SERVICEABLE",
                          slaString: "21 mins",
                          lastMileTravelString: "1.8 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:59:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/buhari-purasawalkam-buhari-chennai-33457",
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
                        parentId: "100979",
                        avgRatingString: "3.8",
                        totalRatingsString: "100+",
                        sla: {
                          deliveryTime: 19,
                          lastMileTravel: 2.2,
                          serviceability: "SERVICEABLE",
                          slaString: "19 mins",
                          lastMileTravelString: "2.2 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:59:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
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
                        parentId: "401",
                        avgRatingString: "4.5",
                        totalRatingsString: "1K+",
                        sla: {
                          deliveryTime: 19,
                          lastMileTravel: 1.8,
                          serviceability: "SERVICEABLE",
                          slaString: "19 mins",
                          lastMileTravelString: "1.8 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:30:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/fruit-shop-on-greams-road-opposite-commissioner-office-egmore-chennai-14044",
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
      ],
      nextFetch: 3,
    },
    tid: "638f1a34-d077-4f36-9669-bd172bc39ae5",
    sid: "az2dc968-bbe4-4362-9ac9-6fe7a0057d4c",
    deviceId: "1ab3b1d9-020a-039d-9cd2-e2514aab190f",
    csrfToken: null,
  };

  const { restaurants: updatedrestaurants2 } =
    updatedRESDATA2?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle;
  // console.log(updatedrestaurants2);
  const updatedRESDATA3 = {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      pageOffset: {
        nextOffset: "COVCELQ4KICwmZ6y/pD5NzCnEzgC",
        widgetOffset: {
          NewListingView_Topical_Fullbleed: "",
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_PB_Theme: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "55",
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
                        id: "153371",
                        name: "Hotel Pandian",
                        cloudinaryImageId: "eoofgqycfn2scaa9dr4w",
                        locality: "KENNET LANE",
                        areaName: "Egmore",
                        costForTwo: "₹400 for two",
                        cuisines: ["Indian"],
                        avgRating: 3.8,
                        feeDetails: {
                          restaurantId: "153371",
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
                        parentId: "3471",
                        avgRatingString: "3.8",
                        totalRatingsString: "20+",
                        sla: {
                          deliveryTime: 22,
                          lastMileTravel: 2,
                          serviceability: "SERVICEABLE",
                          slaString: "22 mins",
                          lastMileTravelString: "2.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 15:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/hotel-pandian-kennet-lane-egmore-chennai-153371",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "657365",
                        name: "Erode Amman Mess",
                        cloudinaryImageId: "7d93ecf49daaec4a521b5d19b59560b9",
                        locality: "Habibullah road",
                        areaName: "T Nagar",
                        costForTwo: "₹500 for two",
                        cuisines: [
                          "South Indian",
                          "Biryani",
                          "North Indian",
                          "Chinese",
                        ],
                        avgRating: 4.3,
                        feeDetails: {
                          restaurantId: "657365",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 8400,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 8400,
                        },
                        parentId: "18524",
                        avgRatingString: "4.3",
                        totalRatingsString: "1K+",
                        sla: {
                          deliveryTime: 36,
                          lastMileTravel: 7.2,
                          serviceability: "SERVICEABLE",
                          slaString: "36 mins",
                          lastMileTravelString: "7.2 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 16:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/erode-amman-mess-habibullah-road-t-nagar-chennai-657365",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "59864",
                        name: "Palm Jumeira",
                        cloudinaryImageId: "ipfokeg4k0frhor06cyh",
                        areaName: "Royapettah",
                        costForTwo: "₹400 for two",
                        cuisines: [
                          "Indian",
                          "Chinese",
                          "Arabian",
                          "Biryani",
                          "Beverages",
                          "Desserts",
                        ],
                        avgRating: 4,
                        feeDetails: {
                          restaurantId: "59864",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 4600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 4600,
                        },
                        parentId: "16917",
                        avgRatingString: "4.0",
                        totalRatingsString: "5K+",
                        sla: {
                          deliveryTime: 28,
                          lastMileTravel: 3.7,
                          serviceability: "SERVICEABLE",
                          slaString: "28 mins",
                          lastMileTravelString: "3.7 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:30:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/palm-jumeira-royapettah-chennai-59864",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "112991",
                        name: "Sarmani Veg Restaurant",
                        cloudinaryImageId: "apceofg5lsakbqyrr3wn",
                        locality: "Royapettah",
                        areaName: "Triplicane",
                        costForTwo: "₹300 for two",
                        cuisines: [
                          "South Indian",
                          "North Indian",
                          "Chinese",
                          "Tandoor",
                        ],
                        avgRating: 4.3,
                        veg: true,
                        feeDetails: {
                          restaurantId: "112991",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 4600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 4600,
                        },
                        parentId: "17494",
                        avgRatingString: "4.3",
                        totalRatingsString: "5K+",
                        sla: {
                          deliveryTime: 29,
                          lastMileTravel: 3.8,
                          serviceability: "SERVICEABLE",
                          slaString: "29 mins",
                          lastMileTravelString: "3.8 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/sarmani-veg-restaurant-royapettah-triplicane-chennai-112991",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "586034",
                        name: "Bharathi Mess",
                        cloudinaryImageId: "afd5jcvptfydzk7ygma2",
                        locality: "Cnkroad",
                        areaName: "Chepauk",
                        costForTwo: "₹300 for two",
                        cuisines: ["South Indian"],
                        avgRating: 4.6,
                        veg: true,
                        feeDetails: {
                          restaurantId: "586034",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 4600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 4600,
                        },
                        parentId: "17500",
                        avgRatingString: "4.6",
                        totalRatingsString: "1K+",
                        sla: {
                          deliveryTime: 22,
                          lastMileTravel: 3.9,
                          serviceability: "SERVICEABLE",
                          slaString: "22 mins",
                          lastMileTravelString: "3.9 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 15:30:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/bharathi-mess-cnkroad-chepauk-chennai-586034",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "50973",
                        name: "Buhari Vintage Hotel - Kilpauk",
                        cloudinaryImageId: "zv1en2ijem5ihwjilx7u",
                        locality: "Old 6-E, Harleys Road",
                        areaName: "Kilpauk",
                        costForTwo: "₹400 for two",
                        cuisines: ["Biryani", "North Indian", "Chinese"],
                        avgRating: 4.4,
                        feeDetails: {
                          restaurantId: "50973",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5300,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5300,
                        },
                        parentId: "50842",
                        avgRatingString: "4.4",
                        totalRatingsString: "5K+",
                        sla: {
                          deliveryTime: 26,
                          lastMileTravel: 4,
                          serviceability: "SERVICEABLE",
                          slaString: "26 mins",
                          lastMileTravelString: "4.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/buhari-vintage-hotel-kilpauk-old-6-e-harleys-road-kilpauk-chennai-50973",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
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
                        parentId: "1260",
                        avgRatingString: "4.4",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 21,
                          lastMileTravel: 1.7,
                          serviceability: "SERVICEABLE",
                          slaString: "21 mins",
                          lastMileTravelString: "1.7 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 22:45:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gandhi-irwin-rd-egmore-chennai-14096",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "521148",
                        name: "Istah - The Mediterranean Way",
                        cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
                        locality: "Peters Road",
                        areaName: "Royapettah",
                        costForTwo: "₹250 for two",
                        cuisines: [
                          "Mediterranean",
                          "Snacks",
                          "Biryani",
                          "Grill",
                          "Kebabs",
                          "Arabian",
                          "Lebanese",
                          "Beverages",
                          "Desserts",
                          "Italian",
                          "Turkish",
                        ],
                        avgRating: 4.3,
                        feeDetails: {
                          restaurantId: "521148",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5600,
                        },
                        parentId: "3518",
                        avgRatingString: "4.3",
                        totalRatingsString: "1K+",
                        sla: {
                          deliveryTime: 36,
                          lastMileTravel: 5,
                          serviceability: "SERVICEABLE",
                          slaString: "36 mins",
                          lastMileTravelString: "5.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-13 02:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId:
                                "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                              description: "OnlyOnSwiggy",
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
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "OnlyOnSwiggy",
                                    imageId:
                                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
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
                        aggregatedDiscountInfoV3: {
                          header: "60% OFF",
                          subHeader: "UPTO ₹110",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-peters-road-royapettah-chennai-521148",
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
                        avgRating: 4.5,
                        veg: true,
                        feeDetails: {
                          restaurantId: "24274",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5300,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5300,
                        },
                        parentId: "3108",
                        avgRatingString: "4.5",
                        totalRatingsString: "5K+",
                        sla: {
                          deliveryTime: 21,
                          lastMileTravel: 3,
                          serviceability: "SERVICEABLE",
                          slaString: "21 mins",
                          lastMileTravelString: "3.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
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
                        id: "794268",
                        name: "Tasty Kitchen",
                        cloudinaryImageId: "848250dd520697ed113b82c672a5701d",
                        locality: "Poonamallee High Road",
                        areaName: "Egmore",
                        costForTwo: "₹250 for two",
                        cuisines: ["Biryani"],
                        feeDetails: {
                          restaurantId: "794268",
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
                        parentId: "8920",
                        avgRatingString: "NEW",
                        sla: {
                          deliveryTime: 26,
                          lastMileTravel: 0.4,
                          serviceability: "SERVICEABLE",
                          slaString: "26 mins",
                          lastMileTravelString: "0.4 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:58:00",
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
                        isNewlyOnboarded: true,
                        restaurantOfferPresentationInfo: {},
                      },
                      analytics: {
                        context:
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/tasty-kitchen-poonamallee-high-road-egmore-chennai-794268",
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
                        parentId: "17529",
                        avgRatingString: "3.9",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 22,
                          lastMileTravel: 2.9,
                          serviceability: "SERVICEABLE",
                          slaString: "22 mins",
                          lastMileTravelString: "2.9 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:30:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
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
                              fee: 5100,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5100,
                        },
                        parentId: "1689",
                        avgRatingString: "4.1",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 30,
                          lastMileTravel: 3,
                          serviceability: "SERVICEABLE",
                          slaString: "30 mins",
                          lastMileTravelString: "3.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:30:00",
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
                        restaurantOfferPresentationInfo: {},
                      },
                      analytics: {
                        context:
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/palmshore-egmore-chennai-43185",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "314828",
                        name: "Copper Chimney",
                        cloudinaryImageId: "xbu3ms3qcdtqgtj0dcdi",
                        locality: "Thousand Lights West",
                        areaName: "Thousand Lights",
                        costForTwo: "₹900 for two",
                        cuisines: [
                          "North Indian",
                          "Indian",
                          "Punjabi",
                          "Biryani",
                          "Tandoor",
                          "Kebabs",
                          "Mughlai",
                          "Desserts",
                        ],
                        avgRating: 4.4,
                        feeDetails: {
                          restaurantId: "314828",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5300,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5300,
                        },
                        parentId: "65177",
                        avgRatingString: "4.4",
                        totalRatingsString: "1K+",
                        sla: {
                          deliveryTime: 34,
                          lastMileTravel: 3.5,
                          serviceability: "SERVICEABLE",
                          slaString: "34 mins",
                          lastMileTravelString: "3.5 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 16:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                              description: "gourmet",
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
                                    description: "gourmet",
                                    imageId:
                                      "v1669879258/GFF_logo_new_xbycg6.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/copper-chimney-west-thousand-lights-chennai-314828",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "125298",
                        name: "Writer's Cafe",
                        cloudinaryImageId: "qgdiqqczqxkfycytivs5",
                        locality: "Crescent Road",
                        areaName: "Egmore",
                        costForTwo: "₹400 for two",
                        cuisines: ["Desserts", "Italian", "Bakery", "Pizzas"],
                        avgRating: 4.3,
                        feeDetails: {
                          restaurantId: "125298",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 5100,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 5100,
                        },
                        parentId: "5989",
                        avgRatingString: "4.3",
                        totalRatingsString: "5K+",
                        sla: {
                          deliveryTime: 30,
                          lastMileTravel: 3,
                          serviceability: "SERVICEABLE",
                          slaString: "30 mins",
                          lastMileTravelString: "3.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 22:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/writers-cafe-crescent-road-egmore-chennai-125298",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      info: {
                        id: "176725",
                        name: "Salem RR Biriyani Unavagam",
                        cloudinaryImageId: "3daa979cd6892a3bcdf2f0ecea2b2d98",
                        locality: "Egmore",
                        areaName: "Triplicane",
                        costForTwo: "₹400 for two",
                        cuisines: [
                          "Biryani",
                          "Chettinad",
                          "Tandoor",
                          "Chinese",
                        ],
                        avgRating: 3.7,
                        feeDetails: {
                          restaurantId: "176725",
                          fees: [
                            {
                              name: "BASE_DISTANCE",
                              fee: 4600,
                            },
                            {
                              name: "BASE_TIME",
                            },
                            {
                              name: "ANCILLARY_SURGE_FEE",
                            },
                          ],
                          totalFee: 4600,
                        },
                        parentId: "176137",
                        avgRatingString: "3.7",
                        totalRatingsString: "5K+",
                        sla: {
                          deliveryTime: 22,
                          lastMileTravel: 3.9,
                          serviceability: "SERVICEABLE",
                          slaString: "22 mins",
                          lastMileTravelString: "3.9 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2023-12-12 23:00:00",
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
                          "seo-data-734779c1-54ee-4a59-92cd-74749198f89f",
                      },
                      cta: {
                        link: "https://www.swiggy.com/restaurants/salem-rr-biriyani-unavagam-egmore-triplicane-chennai-176725",
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
      ],
      nextFetch: 3,
    },
    tid: "638f1a34-d077-4f36-9669-bd172bc39ae5",
    sid: "az2dc968-bbe4-4362-9ac9-6fe7a0057d4c",
    deviceId: "1ab3b1d9-020a-039d-9cd2-e2514aab190f",
    csrfToken: null,
  };

  const { restaurants: updatedrestaurants3 } =
    updatedRESDATA3?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle;

  const allRestaurants = [
    ...restaurants,
    ...updatedRESDATA1,
    ...updatedrestaurants2,
    ...updatedrestaurants3,
  ];
  return (
    <div>
      <Heading title="Restaurants with online food delivery in Chennai" />
      <div className="flex flex-wrap overflow-auto ">
        {allRestaurants?.map((eachres) => {
          return (
            <Link to={"/restaurants/" + eachres?.info?.id}>
              <div className="border-2 border-solid border-gray-100 shadow-lg m-3 w-[270px] h-[368px] hover:scale-[1.05] hover:border-lime-100 hover:transition-transform duration-700 pb-2 rounded-xl  ">
                <div className="">
                  <img
                    className="h-[220px] w-[100%] p-1 rounded-xl"
                    src={TOP_RES_IMG_URL + eachres?.info?.cloudinaryImageId}
                    alt="toprestaurent_image"
                    key={eachres?.info?.cloudinaryImageId}
                  />
                </div>
                <h3 className="text-lg font-semibold pl-2">
                  {eachres?.info?.name}
                </h3>
                <span className="m-1 text-base font-medium pl-1 items-center">
                  <StarRoundedIcon fontSize="small" className="mr-1" />
                  {eachres?.info?.avgRating}
                </span>
                <span className="text-base font-medium m-1 pl-1">
                  <TimerRoundedIcon fontSize="small" />
                  {eachres?.info?.sla?.deliveryTime} Mins
                </span>
                <div className="text-sm font-light m-1 pl-1 w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
                  {eachres?.info?.cuisines?.join(", ")}
                </div>
                <div className="pl-2 text-sm font-light">
                  {eachres?.info?.locality}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentsList;
