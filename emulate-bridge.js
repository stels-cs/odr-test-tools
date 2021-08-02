const getRequestId = args => {
	const x = JSON.parse(args);
	return x.request_id;
};

const response = (type, data, request_id) => {
	data.request_id = request_id;
	window.dispatchEvent(new window.CustomEvent('VKWebAppEvent', {
		detail: {
			type,
			data,
			request_id,
		},
	}));
};
const beforeInit = [
	{
		"type": "VKWebAppUpdateConfig",
		"data": {
			"scheme": "space_gray",
			"app": "vkclient",
			"app_id": 2274003,
			"appearance": "dark",
			"start_time": 1627673797922,
			"device_id": "578a44f31003e77f:bf854f5c36918c6afeeabdd04950249a",
			"sak_version": "1.43"
		}
	}
]
const responseByName = {
	"VKWebAppEnableSwipeBack": {
		"type": "VKWebAppEnableSwipeBackResult",
		"data": {
			"result": true,
			"request_id": "1"
		},
		"request_id": "1"
	},
	"VKWebAppDisableSwipeBack": {
		"type": "VKWebAppDisableSwipeBackResult",
		"data": {
			"result": true,
			"request_id": "1"
		},
		"request_id": "1"
	},
	"VKWebAppInit": {
		"type": "VKWebAppInitResult",
		"data": {
			"result": true,
			"request_id": "1"
		},
		"request_id": "1"
	},
	"VKWebAppSetViewSettings": {
		"type": "VKWebAppSetViewSettingsResult",
		"data": {
			"result": true,
			"request_id": "2"
		},
		"request_id": "2"
	},
	"VKWebAppGetUserInfo": {
		"type": "VKWebAppGetUserInfoResult",
		"data": {
			"first_name": "Иван",
			"id": 19039187,
			"last_name": "Недзвецкий",
			"can_access_closed": true,
			"is_closed": false,
			"sex": 2,
			"photo_100": "https://sun9-78.userapi.com/sun9-7/s/v1/ig2/UurenQyqK95lRj151RmUnk1ahmlRKg8Y63wsTF1Mcmfw3B7eXGJjEmMdqVY7lbWW7bITfWnCkX9Re6cpTeltjvPB.jpg?size=100x0&quality=96&crop=316,341,1299,1299&ava=1",
			"bdate": "8.3.1994",
			"country": {
				"id": 1,
				"title": "Россия"
			},
			"timezone": 3,
			"photo_200": "https://sun9-78.userapi.com/sun9-7/s/v1/ig2/_bRBkcXJHxW6SJYXUgUZ0rApEQGYcUxbORMLdI6Eu_s1AjadxBu7CFNE7LX0M5F7uT16TowzJPOg_cWEwDPzZCzF.jpg?size=200x0&quality=96&crop=316,341,1299,1299&ava=1",
			"photo_max_orig": "https://sun9-78.userapi.com/sun9-7/s/v1/ig2/Hb5ZqnDOzWj4EweGs3jRrnD2Hrbbd1y4UOwTgb1TKmCvq1VC6IUjs_Olqu6NMaYyOOwyKw_iJKBcnd_B3tkPo7YH.jpg?size=400x0&quality=96&crop=0,0,1623,2160&ava=1",
			"can_invite_to_chats": false,
			"request_id": "3"
		},
		"request_id": "3"
	},
	"VKWebAppStorageSet": {
		"type": "VKWebAppStorageSetResult",
		"data": {
			"result": true,
			"request_id": "24"
		},
		"request_id": "24"
	},
	"VKWebAppGetSteps": {
		"type": "VKWebAppGetStepsResult",
		"data": {
			"steps_list": [
				{
					"steps": 7678,
					"distance": 5190,
					"date": "2021-07-30",
					"manual_steps": 0,
					"manual_distance": 0
				},
				{
					"steps": 2051,
					"distance": 1359.9999,
					"date": "2021-07-29",
					"manual_steps": 0,
					"manual_distance": 0
				}
			],
			"request_id": "12"
		},
		"request_id": "12"
	},
	"VKWebAppAddToHomeScreenInfo": {
		"type": "VKWebAppAddToHomeScreenInfoResult",
		"data": {
			"is_feature_supported": true,
			"is_added_to_home_screen": false,
			"request_id": "45"
		},
		"request_id": "45"
	},
	"VKWebAppGetClientVersion": {
		"type": "VKWebAppGetClientVersionResult",
		"data": {
			"platform": "android",
			"version": "6.46",
			"app": "vkclient",
			"is_google_services_available": true,
			"client_user_agent": "SAK_1.43(com.vkontakte.android)/6.46-8666 (Android 8.1.0; SDK 27; arm64-v8a; HUAWEI BKK-L21; ru; 1440x720)",
			"build": "8666",
			"is_new_navigation": false,
			"request_id": "14"
		},
		"request_id": "14"
	}
}
const responseByApiName = {
	"vkRun.getToggles": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": [
				"eruda",
				"challenges",
				"disable_km",
				"emoji_status"
			],
			"request_id": "7"
		},
		"request_id": "7"
	},
	"apps.getUserGroupForExperiment": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"items": [
					{
						"experiment_id": 1697,
						"group": 0
					},
					{
						"experiment_id": 1744,
						"group": 3
					}
				]
			},
			"request_id": "9"
		},
		"request_id": "9"
	},
	"status.getImage": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"status": {
					"id": 267,
					"name": "Выхожу из себя",
					"images": [
						{
							"height": 80,
							"url": "https://sun9-20.userapi.com/FJ6p0WDF6t4ig6VGVZgJZ6zpYzvN-yQjhINjDg/2nUpzcndLVY.png",
							"width": 80
						},
						{
							"height": 60,
							"url": "https://sun9-81.userapi.com/sxuUtDgE34G2xHx-b1Dmd8fmEJDllk4txcjnjw/6JNk8suR1-U.png",
							"width": 60
						},
						{
							"height": 40,
							"url": "https://sun9-79.userapi.com/0_e-KQTrX4p31YcIA66BBoIg4gNzSjUQkbbdJQ/FslGFP-v1ks.png",
							"width": 40
						},
						{
							"height": 30,
							"url": "https://sun9-59.userapi.com/i54_TBeT2GsfoWKCwpqph8axAEL3qt9SzIyu4w/p61i8Ovn1gc.png",
							"width": 30
						},
						{
							"height": 20,
							"url": "https://sun9-67.userapi.com/OGystW7Dt3GdEexfSW3nfEYzV-WluQh6RyRxRg/9Ja9DzCTSwU.png",
							"width": 20
						}
					]
				}
			},
			"request_id": "10"
		},
		"request_id": "10"
	},
	"vkRun.getDailyProgress": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"percentile": 81,
				"last_30_days_steps": 239332,
				"yesterday_steps": 8245,
				"target": 5000,
				"steps": 9142,
				"distance": 6441,
				"has_new_challenges": false,
				"has_new_achievements": true,
				"has_google_services": true,
				"strike": 4,
				"strike_record": 10,
				"emoji_status": {
					"target": 5000,
					"days_num_remained": 0,
					"is_allowed": true
				}
			},
			"request_id": "18"
		},
		"request_id": "18"
	},
	"vkRun.getLeaderboard": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"position": 31,
				"leaderboard": [
					{
						"steps": 92142,
						"distance": 110315,
						"user": {
							"id": 1053758,
							"name": "Азат Разетдинов",
							"first_name": "Азат",
							"last_name": "Разетдинов",
							"photo_50": "https://sun9-48.userapi.com/s/v1/ig2/uIwqN76DCJ2hdx9MEQDx2RnU8nQqzwpvK8mc9X995GBktO77HKGdriQK0eWp3dvT02QE25ze-es68QeaYXnUDegx.jpg?size=50x0&quality=96&crop=253,281,422,422&ava=1",
							"photo_100": "https://sun9-48.userapi.com/s/v1/ig2/lAvOsiSFwwmo_Pq-2xUFe7v88YqFT3SyxOvJAlNzv_ITro165YLVRARXResXyAcvPutUPX3nP6JnGdMHQVHkcas9.jpg?size=100x0&quality=96&crop=253,281,422,422&ava=1",
							"photo_200": "https://sun9-48.userapi.com/s/v1/ig2/MjtBnmvGEC0a4KD_Zq9lRNooT8K1kmFF8FOV_C4PS9tOe3PRGWOo6Vn56KNowCPnAk0bLGpD-nh0bLaIxeMn8YZw.jpg?size=200x0&quality=96&crop=253,281,422,422&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 89351,
						"distance": 54619,
						"user": {
							"id": 54986442,
							"name": "Иван Гусев",
							"first_name": "Иван",
							"last_name": "Гусев",
							"photo_50": "https://sun9-28.userapi.com/s/v1/ig2/mr5ztDl4E3GDUhlPV9-Xlp7iVOsTPfsz_scX91YtSBPyi5s4mTVc5sb9LkU8etTYGHr7XwoHxQ_r4jfA6ifc1Ln6.jpg?size=50x0&quality=96&crop=195,400,399,399&ava=1",
							"photo_100": "https://sun9-28.userapi.com/s/v1/ig2/Nd0OQaNSHsX-EsavZ50Cg-7ag7ARIu7dqb_G2kf-obkco0awxK9Uml-T3BpRlOhqI9_PBnvRnxrLzyTikYqxXemY.jpg?size=100x0&quality=96&crop=195,400,399,399&ava=1",
							"photo_200": "https://sun9-28.userapi.com/s/v1/ig2/H7fCNoMOd3Dwzb5WZxPgsf6bwWaltRNF_9aZhTkXT-6yz_ZD-FWMIwlzxjJtlBYi_geNYRTGSmL38Yc8F7ptPI4Y.jpg?size=200x0&quality=96&crop=195,400,399,399&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 77262,
						"distance": 57779,
						"user": {
							"id": 13706084,
							"name": "Татьяна Маркина",
							"first_name": "Татьяна",
							"last_name": "Маркина",
							"photo_50": "https://sun9-80.userapi.com/s/v1/ig2/FQPi35VC8pum48qSrhoWVQA3j2WnWpFoy1qwo-Fg3sj-czXoUu2eBngxkEmOM5NU02hj8TuNkECM7MpE6-F3_KCJ.jpg?size=50x0&quality=96&crop=286,109,1346,1346&ava=1",
							"photo_100": "https://sun9-80.userapi.com/s/v1/ig2/VsM8wxjg5LPEfmBpM8iSPSfLWmx2s0FHiaZXryPPuYlRZ0i3LTxqAJjyqsWoOqEqgqAzW0U1QTd5lussGvE7Wo8S.jpg?size=100x0&quality=96&crop=286,109,1346,1346&ava=1",
							"photo_200": "https://sun9-80.userapi.com/s/v1/ig2/e4P3qRTKINSi8uxRbLAQiKwQfz_VJK0FnxT4AhvSatIz-I13kZOHkOaY26GR5z1SXHGmJ0XXAGzB3Be3Ww4vEn7M.jpg?size=200x0&quality=96&crop=286,109,1346,1346&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 77107,
						"distance": 56876,
						"user": {
							"id": 105372886,
							"name": "Сергей Корнеев",
							"first_name": "Сергей",
							"last_name": "Корнеев",
							"photo_50": "https://sun9-26.userapi.com/s/v1/if2/TVX3xUM-0W6kW4d8KTSs_44urs1V4fczJ_9vmuf0pcHVOjhPw3VitNqVwjcchs_N3_FMh-OqbV3woaM7rIp0tWZZ.jpg?size=50x0&quality=96&crop=425,770,592,592&ava=1",
							"photo_100": "https://sun9-26.userapi.com/s/v1/if2/IZ8wPz6L9LgkSrMaAcwIu431fMA0V_IU_CsuVl9vaI-2IMOFP9zBUfn60F6OBRNmmp7_E_RHgCf-2hvBVjZ8Q4NI.jpg?size=100x0&quality=96&crop=425,770,592,592&ava=1",
							"photo_200": "https://sun9-26.userapi.com/s/v1/if2/aZSUJpFVOOio5bp86TmagTuo-b8Gx14u6M58GeRKrl8y5st_m_Af2knJaa__fj8KBimekcclTjk3lXs0nGmCnW_i.jpg?size=200x0&quality=96&crop=425,770,592,592&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 75966,
						"distance": 51708,
						"user": {
							"id": 90163178,
							"name": "Никита Вохминцев",
							"first_name": "Никита",
							"last_name": "Вохминцев",
							"photo_50": "https://sun9-74.userapi.com/s/v1/ig2/-zuOYG5gVyNPD7vSFMYNQGHyYs2jwiO2STaW_4nskrCVBjSDzow7n8NNhfA5BleanQXn0T8EJ5EgS3g6518aBsqn.jpg?size=50x0&quality=96&crop=0,0,1437,1437&ava=1",
							"photo_100": "https://sun9-74.userapi.com/s/v1/ig2/H_o825HsB6PFcCF_ZqukRWPJ4YMnQqxkKSmiFJJWlmyrrxqCaRdQcbLnVGR1NJnbo1T6EKtH2bgZRiIjdC_Ba9mx.jpg?size=100x0&quality=96&crop=0,0,1437,1437&ava=1",
							"photo_200": "https://sun9-74.userapi.com/s/v1/ig2/PT1vhkqedb73qvPWkANVKI9kTRElSJAHiMtlK2-PzuQGhl8-evSxLiLVoOvhJ883kKRPmILtoy8j3bx46hXQ5kHg.jpg?size=200x0&quality=96&crop=0,0,1437,1437&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 74216,
						"distance": 52790,
						"user": {
							"id": 17622426,
							"name": "Аня Коновалова",
							"first_name": "Аня",
							"last_name": "Коновалова",
							"photo_50": "https://sun9-13.userapi.com/s/v1/ig2/JlrMjv9YZ6HRJGVgeNsXLa2746p32NGoaBwhY7DIhckk0DNzOnAhG_4B86sslUAERd9oW2ctZUzFKmgYG8yhI67L.jpg?size=50x0&quality=96&crop=79,82,1102,1102&ava=1",
							"photo_100": "https://sun9-13.userapi.com/s/v1/ig2/tUT283RIQZIMiH1Y-buQ_5SbHvUj22xaZspJ7w4x2fmNj13J-X87RD_iGTfbYOJhIhhIWK9MD57iSKK15xnj0pgl.jpg?size=100x0&quality=96&crop=79,82,1102,1102&ava=1",
							"photo_200": "https://sun9-13.userapi.com/s/v1/ig2/3muHyLW9xYHLP8XwIDdRoLlA1FGyg3axgrNgrRFZ9hWbonvZC2e4LrmF4tbyBurfzQcy_j0zHCcAcZ4dKRGk_PwA.jpg?size=200x0&quality=96&crop=79,82,1102,1102&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 70671,
						"distance": 51852,
						"user": {
							"id": 1730782,
							"name": "Иван Карабакин",
							"first_name": "Иван",
							"last_name": "Карабакин",
							"photo_50": "https://sun9-28.userapi.com/s/v1/if1/5933Ee1mRhKKFEJXwYz16dp6JTEljjkwCN7MRuOfzK91g9VTDXeji8lTh5oRnrE57qwq4B-R.jpg?size=50x0&quality=96&crop=937,601,513,513&ava=1",
							"photo_100": "https://sun9-28.userapi.com/s/v1/if1/88rvVu-ox00Sr7bfJTf317da2yq0AG44FlSf4VPLVd6EiokIcd3-xXyZXka13cbL4202otGR.jpg?size=100x0&quality=96&crop=937,601,513,513&ava=1",
							"photo_200": "https://sun9-28.userapi.com/s/v1/if1/l2jQibCVSMzpkixIX3ENJhOndh2xkp0t-WakpPCvKiBW4SIHukFB6CyrpMmX8jurWaCx1gbB.jpg?size=200x0&quality=96&crop=937,601,513,513&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 67501,
						"distance": 50883,
						"user": {
							"id": 13915327,
							"name": "Роман Соколов",
							"first_name": "Роман",
							"last_name": "Соколов",
							"photo_50": "https://sun9-27.userapi.com/s/v1/ig2/DPwafOkLcpKQUTNcKehxTw66R4GMdjjMcxgCVLs1nkezcFQaAwewPrjplHnw6WC5ZvFM5irGDaNOB2nF_oYlVEgi.jpg?size=50x0&quality=96&crop=559,438,599,599&ava=1",
							"photo_100": "https://sun9-27.userapi.com/s/v1/ig2/rPqopQLXVhM0mlYmA9yOTKk2RrZT5JZnVUyy7pwPXkjVPlIYG0L7xYSQOX34DaAB-BBbaICSmPXBjWwdDfJswIN7.jpg?size=100x0&quality=96&crop=559,438,599,599&ava=1",
							"photo_200": "https://sun9-27.userapi.com/s/v1/ig2/oXl7W-6RkFBsTzZ2rwi32ChWsYeTEki4Tg53vQSUG7wHGUuBKZmxvWXuSW8Jr47inO2Feql-c3P8E2do9KNYFlk0.jpg?size=200x0&quality=96&crop=559,438,599,599&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 66516,
						"distance": 46987,
						"user": {
							"id": 125886778,
							"name": "Тимур Галеев",
							"first_name": "Тимур",
							"last_name": "Галеев",
							"photo_50": "https://sun9-75.userapi.com/s/v1/ig2/vE2VtOxckTFo18phg3qt6knujs2N-yF6Wpz785Rg1WTiyTZE3bUvJtLq_yPkwZmp5N2jXwZFo7VAAlbhX0Nk9_60.jpg?size=50x0&quality=96&crop=501,0,1702,1702&ava=1",
							"photo_100": "https://sun9-75.userapi.com/s/v1/ig2/HvupJ4r3_l1O_xNi-YEcBxxagzUVUNlNH9voWfTx22QqdSIwAwanb2aJrLIL0KuEGGli6YvkuDnZcWMcTD9OmxdN.jpg?size=100x0&quality=96&crop=501,0,1702,1702&ava=1",
							"photo_200": "https://sun9-75.userapi.com/s/v1/ig2/gDWPv3_E-KKemWOviehie1gR3YLa1ahthqFOst8jV2DIsGzzxTE9h34tQ0geEIhpFgnrZEG0cWPUlgU-k1OjwxaL.jpg?size=200x0&quality=96&crop=501,0,1702,1702&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 63793,
						"distance": 45825,
						"user": {
							"id": 168354935,
							"name": "Настя Литвиненко",
							"first_name": "Настя",
							"last_name": "Литвиненко",
							"photo_50": "https://sun9-19.userapi.com/s/v1/ig2/4mvw-nyvcCFnX0vDRnRwN1ASu50svgdSOXL2lJBCT8BXAjHSGeTMUWBXrvb9zFqArLxe4RUkSIq-LNMl7HJtpT3Y.jpg?size=50x0&quality=96&crop=0,17,1620,1620&ava=1",
							"photo_100": "https://sun9-19.userapi.com/s/v1/ig2/dS7GWKnPD8876v15y8rumhPuEWqN2ViZK0u6OBf1MvMjGMskugOOmP9xpVgWhpfgRjF8s_i-osG8zAe-KD3eElk_.jpg?size=100x0&quality=96&crop=0,17,1620,1620&ava=1",
							"photo_200": "https://sun9-19.userapi.com/s/v1/ig2/gl9BWiGIoCceX0rk_jrcCwzYIriYm0ytI0KKcweyLgs8sm2b8tchZwYjN5uOPjn7edHpKIx_H2hXRGBea1tgz9Fi.jpg?size=200x0&quality=96&crop=0,17,1620,1620&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 62068,
						"distance": 38186,
						"user": {
							"id": 2502516,
							"name": "Дамир Богданов",
							"first_name": "Дамир",
							"last_name": "Богданов",
							"photo_50": "https://sun9-5.userapi.com/s/v1/if1/gjgAtNVcS6ibMvfGdcJOtJgo1T5U0YjLce75fAoQvzCUkwXCWkN6TJ9jelbcSLI6wRaT2O1h.jpg?size=50x0&quality=96&crop=0,120,718,718&ava=1",
							"photo_100": "https://sun9-5.userapi.com/s/v1/if1/vkcIwzf6XkotL9rmmzW0YyzFSfa7MuRCoz6i57g7dnMhqYnR-U-x1oZiUy0RnmLPu1TWaOwN.jpg?size=100x0&quality=96&crop=0,120,718,718&ava=1",
							"photo_200": "https://sun9-5.userapi.com/s/v1/if1/ZgnqrmMlEmO-eED6FJ29WpZAE06tVveXDuhQ0sYzTyVIlNSImC6C6QfMCJ1pmckdIB_LKdzd.jpg?size=200x0&quality=96&crop=0,120,718,718&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 59720,
						"distance": 48293,
						"user": {
							"id": 18867112,
							"name": "Елена Качемирова",
							"first_name": "Елена",
							"last_name": "Качемирова",
							"photo_50": "https://sun9-11.userapi.com/s/v1/ig2/0P94_EEUqfq7OnYFFpzzMTc4tv8WQSatZcKuz6pVTuDgMi27W_X5YDGjRrp7resurV25r3-wMUKH6fV_uEVG8dCr.jpg?size=50x0&quality=96&crop=201,218,1044,1044&ava=1",
							"photo_100": "https://sun9-11.userapi.com/s/v1/ig2/7te4juUEqItHllj_8Qp-CLFSzMUXfq2mKXGFAWg7cxmtpSXGcn5gAUErBfKpyyDtxCwPqvOOdfojPHxuSNHt9_kH.jpg?size=100x0&quality=96&crop=201,218,1044,1044&ava=1",
							"photo_200": "https://sun9-11.userapi.com/s/v1/ig2/MBxKHI84aeL6KiNv7tbnyTbwP4J4PSTSCef05ch8qP0gi4O-uIXaBOJ1u0UC5Ga_3XZoht-1Pvgebt31QpKMTW3a.jpg?size=200x0&quality=96&crop=201,218,1044,1044&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 59162,
						"distance": 49667,
						"user": {
							"id": 27322270,
							"name": "Вадим Смирнов",
							"first_name": "Вадим",
							"last_name": "Смирнов",
							"photo_50": "https://sun9-57.userapi.com/s/v1/if1/19kpTLoGh4jixAU53j8ZpuAvWN2F5svpDThhZ_xI7GXBdt6HsBahd1ABTNWQRXHN5xiEYOZp.jpg?size=50x0&quality=96&crop=593,95,915,915&ava=1",
							"photo_100": "https://sun9-57.userapi.com/s/v1/if1/ce2hRVHBa1YvNvbpkRhi5DKFm_2bw2YAs8ekumicJwdKePWgw8wLPyuMncnK7ByIrtEfRdjL.jpg?size=100x0&quality=96&crop=593,95,915,915&ava=1",
							"photo_200": "https://sun9-57.userapi.com/s/v1/if1/i5rDc3iucT1Yhe7adeQpB0YnFnZUP9pPX4qPK7rthyprjPYyG6ewXzRt-XXSXrbvo2phWozM.jpg?size=200x0&quality=96&crop=593,95,915,915&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 56245,
						"distance": 34618,
						"user": {
							"id": 68728796,
							"name": "Владислав Кибенко",
							"first_name": "Владислав",
							"last_name": "Кибенко",
							"photo_50": "https://sun9-57.userapi.com/s/v1/ig2/ojg_oE3CTsDYb-Sczb472Mc58ClDaoveAHGcoc_F1PbluAJoXVU_puO_8dNnC_dpRmArGq2zXPqzvo-U8Qwo1Dfz.jpg?size=50x0&quality=96&crop=623,553,410,410&ava=1",
							"photo_100": "https://sun9-57.userapi.com/s/v1/ig2/a2koBkykxS-f79bZithOZsD4ecnyJEjTG4cJGAl59uQLYMJWRzNdLjV7PMCHRW7Jb6APnwCPftgTdDDRGeWa2NsI.jpg?size=100x0&quality=96&crop=623,553,410,410&ava=1",
							"photo_200": "https://sun9-57.userapi.com/s/v1/ig2/ODHKRBzOPTQCnh4WaB6hHSocxENnMn3_5Z7ee8RI3M3xuGgsAmWfyNpReh2gGIBHO3eHlawFzgZ9SysDHsS1KGx7.jpg?size=200x0&quality=96&crop=623,553,410,410&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 55290,
						"distance": 43799,
						"user": {
							"id": 35501089,
							"name": "Юрий Мороз",
							"first_name": "Юрий",
							"last_name": "Мороз",
							"photo_50": "https://sun9-16.userapi.com/s/v1/ig2/xXIgKJeBTXrJJ69w44TwYKgMcEVExo5Pz9M91tkGep8VB-fFuieQ1-aO4AvM-7eMnP3vJuiopmOua7gJgjhbCOQY.jpg?size=50x0&quality=95&crop=865,0,1282,1282&ava=1",
							"photo_100": "https://sun9-16.userapi.com/s/v1/ig2/-5FXW8VROgG3fMeIjk1IO3bq0_E03_BxXLnuM7DxT_Ewz9ydxRGzYxBwwmB0NmeeD3edaE1vsr-9wyBd9UP4FbVQ.jpg?size=100x0&quality=95&crop=865,0,1282,1282&ava=1",
							"photo_200": "https://sun9-16.userapi.com/s/v1/ig2/J6WWe_3UOrkGSfqT52cDKFnaWwoq-oV62SWm4rFGmkD6ou-cA4oKp2yDt4G2rrIOQLPSV9cLk58pnM0sru71k_l2.jpg?size=200x0&quality=95&crop=865,0,1282,1282&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 49770,
						"distance": 40740,
						"user": {
							"id": 140830142,
							"name": "Олег Плаксин",
							"first_name": "Олег",
							"last_name": "Плаксин",
							"photo_50": "https://sun9-16.userapi.com/s/v1/if2/OPhwQ_HSVgZZnwsv3Be8H7VGKyfJsd44VSSiOJjqnRgej-nXlWqJgOsBtTJUk7dngVgb-c7nilULnBEcV2MDw7_C.jpg?size=50x0&quality=96&crop=501,249,720,720&ava=1",
							"photo_100": "https://sun9-16.userapi.com/s/v1/if2/GdlwAR9r97a1Zj8VgoGdViqYnHCgfYsuLCO05A5JYsFMj9LFtX4RpM3q8NTj8jLbDannpEAtG7H-Jg2FK0-j5ttb.jpg?size=100x0&quality=96&crop=501,249,720,720&ava=1",
							"photo_200": "https://sun9-16.userapi.com/s/v1/if2/0eQU71RuIdR_pHLJ2eFMu7oxRrLMUUUozEjO4Hi8W257D5V6O41Xb0DTY2IxblNxgLCwPQEKVXdJoX0-4uBsK4oe.jpg?size=200x0&quality=96&crop=501,249,720,720&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 46726,
						"distance": 39004,
						"user": {
							"id": 94414851,
							"name": "Андрей Ермаков",
							"first_name": "Андрей",
							"last_name": "Ермаков",
							"photo_50": "https://sun9-26.userapi.com/s/v1/ig1/DeGkzEPut9axwYrCw3Z_kMN2BX-kC8nMhNaD-zm6Smmg3_EPB1_3fbehTvvM0eqHs-lEopiW.jpg?size=50x0&quality=96&crop=896,270,747,747&ava=1",
							"photo_100": "https://sun9-26.userapi.com/s/v1/ig1/NGHGKaf7xYOlqW6jpnbEOUXwT7dMb19M-QKkFuC36uwjI9BNHR06av6JIFlG_WWSYGaso4_y.jpg?size=100x0&quality=96&crop=896,270,747,747&ava=1",
							"photo_200": "https://sun9-26.userapi.com/s/v1/ig1/KLEvkSYtP5khQi10AYofK4cDJcQTC2gI2CIgc-gCzy7PVO_ios--jj3Q51Cwf4VBHyzJvb5b.jpg?size=200x0&quality=96&crop=896,270,747,747&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 46562,
						"distance": 38757,
						"user": {
							"id": 331639485,
							"name": "Igor Fedorov",
							"first_name": "Igor",
							"last_name": "Fedorov",
							"photo_50": "https://sun9-11.userapi.com/s/v1/ig2/-M_i5dFTwJPZ_jnKFdVndfcs2aoBoIeCIPZDRRoKxHS2xGfalw6jhUnaiBe_JH_vH6HETPvKYNKM7WyABVA5DKcP.jpg?size=50x0&quality=96&crop=436,585,824,824&ava=1",
							"photo_100": "https://sun9-11.userapi.com/s/v1/ig2/dsZLpdP_55-OI7N4eIUMnnAq6pJD0FWfBTnU9pC8ffoZv4tUBisy-UIzGf6Bh08AeGgLShjAOvFyenVQ3xpQEfnM.jpg?size=100x0&quality=96&crop=436,585,824,824&ava=1",
							"photo_200": "https://sun9-11.userapi.com/s/v1/ig2/A6e1D15xHaVG4q0Er3wl2cHnmbgAafGwNGkiylcrbD4Cs5jsaNZ3jK2j7VruTuV3nyJuhPUc8tY0ThkZzJGoL_EV.jpg?size=200x0&quality=96&crop=436,585,824,824&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 45281,
						"distance": 27425,
						"user": {
							"id": 16475657,
							"name": "Дарья Тарутина",
							"first_name": "Дарья",
							"last_name": "Тарутина",
							"photo_50": "https://sun9-45.userapi.com/s/v1/ig2/UEkneABq7_HKMCCjil4lXanak0Me2OHxFlYbHNFles7OiXtnCxMz072ppt4qRhvu-ugYNoEcc2KQSF4gxMCXNBd6.jpg?size=50x0&quality=96&crop=82,356,1310,1310&ava=1",
							"photo_100": "https://sun9-45.userapi.com/s/v1/ig2/FpqW5r6khJBNn5U17XFF69OTfjfwhvszTwfZDWkzaN3effRRYeMxEyXwwbF2ybqSIX0eIxYaUMDydXkqxIQBcLIg.jpg?size=100x0&quality=96&crop=82,356,1310,1310&ava=1",
							"photo_200": "https://sun9-45.userapi.com/s/v1/ig2/lTooFQ5wfrgH7SnDlCvCHK3X4QlKF-huibYufd8vePf9JBOwAb28YWDr76gb2JPLA6etvW8gbdKxVhELjcSh2PoF.jpg?size=200x0&quality=96&crop=82,356,1310,1310&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 45157,
						"distance": 37781,
						"user": {
							"id": 24512,
							"name": "Глеб Воронцов",
							"first_name": "Глеб",
							"last_name": "Воронцов",
							"photo_50": "https://sun9-21.userapi.com/s/v1/ig2/TNOPoLhnxn9tNLTN0ifCAqeS6-ImzIX1bmLIb8x0evikLlanG1bO0G4DlTfXVT--_1Ul3z2gFJ1muyQnHTRKZRB8.jpg?size=50x0&quality=96&crop=0,0,980,980&ava=1",
							"photo_100": "https://sun9-21.userapi.com/s/v1/ig2/eKo3QzGNLCNOiB_iYCl7akOgH096az_RWpI57toUV6s4y1DHt3JYoywZDHCP3HnJLVd3DClxm19YMySwBGDXJ2am.jpg?size=100x0&quality=96&crop=0,0,980,980&ava=1",
							"photo_200": "https://sun9-21.userapi.com/s/v1/ig2/1ijPjhOdQvbR-cz2I2GoxGTQJ4jKQFq7JbP2VOE0_eBsqBykL8hq5pM_Kk0dcp_fSQgiFMbUcFPkaAWuVsd3A4Wy.jpg?size=200x0&quality=96&crop=0,0,980,980&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 45059,
						"distance": 31675,
						"user": {
							"id": 6964760,
							"name": "Владимир Махов",
							"first_name": "Владимир",
							"last_name": "Махов",
							"photo_50": "https://sun9-10.userapi.com/s/v1/ig1/P1Wvy7KTg0AnDhlDJuNd5yFClQ1Ajz-rFbLIsgqtAnoewgmFp7zGyoHUlcMVTB8HQs39I-s1.jpg?size=50x0&quality=96&crop=21,205,786,786&ava=1",
							"photo_100": "https://sun9-10.userapi.com/s/v1/ig1/jcgnSlBYuqRgisYp0Kdw_5UDPq4mxJyFZc4armRbiq8D9iLopqqdS9dmVAeg1Btq0ClYt1ZR.jpg?size=100x0&quality=96&crop=21,205,786,786&ava=1",
							"photo_200": "https://sun9-10.userapi.com/s/v1/ig1/twZ7STdl8UnZpSHjq77tdf_yujVKhqjGCs_FvHnIcyo8O3z7e8LP915mhBc6ezn27QiUo8W3.jpg?size=200x0&quality=96&crop=21,205,786,786&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 44194,
						"distance": 37131,
						"user": {
							"id": 9637095,
							"name": "Александр Проскурин",
							"first_name": "Александр",
							"last_name": "Проскурин",
							"photo_50": "https://sun9-66.userapi.com/s/v1/ig2/zNO0xEYsv8fHm-e0AstRpgzi8XBO5EhAkHn73UCRKIFSPOMwWqfugzmwqXt_SMlbpL3zR3kVFN-zAE5qOPskamgb.jpg?size=50x0&quality=96&crop=364,582,1183,1183&ava=1",
							"photo_100": "https://sun9-66.userapi.com/s/v1/ig2/aYY18I1XJ-vCr2K40c_lYLy4s4ZEuVAKITGf6eSGaKu1tGPt7bd59KRILr1vD_anxe3RrfmfRHp7odeeqkvO1xOI.jpg?size=100x0&quality=96&crop=364,582,1183,1183&ava=1",
							"photo_200": "https://sun9-66.userapi.com/s/v1/ig2/r1uhPWH4vzE2_ju5mxB5dQ468s9sDzUz2MHunWOCJhcDFeuQC5bMOujB8h19NiAMuIUCqduIyUp1GjF3emYkUfjB.jpg?size=200x0&quality=96&crop=364,582,1183,1183&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 43104,
						"distance": 33366,
						"user": {
							"id": 179092216,
							"name": "Валерий Стенхаммар",
							"first_name": "Валерий",
							"last_name": "Стенхаммар",
							"photo_50": "https://sun9-52.userapi.com/s/v1/ig2/xIhVMyJdf_NRdQgxQGHmjakIEd_c33KZsQCi4gWMZrVdw-ZeX2sP7DdLpTNNXD2TUFmQVZuaEuWSrV9GCL6A6x-u.jpg?size=50x0&quality=96&crop=0,184,1439,1439&ava=1",
							"photo_100": "https://sun9-52.userapi.com/s/v1/ig2/yaE351nqvHJVukS6eTvzlopf27xPjxLlqCkql5WIAXcp5RL_A3nvUrKVldmM1uvk1Tyz0K6GwFBMmnyVJAiiWSYp.jpg?size=100x0&quality=96&crop=0,184,1439,1439&ava=1",
							"photo_200": "https://sun9-52.userapi.com/s/v1/ig2/RlBEEFgs2sxdskyKlcGeAySOKRVHIVzCckBM3JhKczCu5vzGxQTjv6CsaYljZkCuPhrL34DdhHlHYmKAAfLCyG1M.jpg?size=200x0&quality=96&crop=0,184,1439,1439&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 42559,
						"distance": 26763,
						"user": {
							"id": 640414,
							"name": "Давид Куваев",
							"first_name": "Давид",
							"last_name": "Куваев",
							"photo_50": "https://sun9-72.userapi.com/s/v1/ig2/Vusp72-h7rDo-fVmNFGCR0nmNr8scX-j1MHXvvbMvsHOLlO1RgLaPaToaUDqXmmQUtnh8Q97LNkJIw6rCfKALJLN.jpg?size=50x0&quality=96&crop=535,298,704,704&ava=1",
							"photo_100": "https://sun9-72.userapi.com/s/v1/ig2/qX2gOeWnsvJnC9PxzAnQfuIpj9sy0J-c6hfn-svK47BUH1vtsXKSyYIpa37R0-EzTBnScPUhbQj2gqEklk8PuEJN.jpg?size=100x0&quality=96&crop=535,298,704,704&ava=1",
							"photo_200": "https://sun9-72.userapi.com/s/v1/ig2/kD-oph2gya0tNY8lik3j28VI-dCV9gj6U8Pffm5oSbj_GoILM4qA-5WK06iqacP_2jLmZd2PUrnxCvKCFgky3C37.jpg?size=200x0&quality=96&crop=535,298,704,704&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 42469,
						"distance": 33799,
						"user": {
							"id": 7650547,
							"name": "Никита Ерунков",
							"first_name": "Никита",
							"last_name": "Ерунков",
							"photo_50": "https://sun9-18.userapi.com/s/v1/if1/sCI6rRTLFqslWrko2M6VVRjT-IQdDnrNkcedyL5YTT94y4JqOfw7GiQnH513tD79_-aCVPbG.jpg?size=50x0&quality=96&crop=95,95,768,768&ava=1",
							"photo_100": "https://sun9-18.userapi.com/s/v1/if1/MHwFNwTu9-rfjPubknRUyfezgTIx3NtJDJyV3jObKAI9NKXlAqdL-zLPRdGpHgdmnAtMJb5F.jpg?size=100x0&quality=96&crop=95,95,768,768&ava=1",
							"photo_200": "https://sun9-18.userapi.com/s/v1/if1/GNLNrUFBnMHsxQ5m1LBO2ZmR1Php9iC2iVC996wUBL7c6uEKEcgUfPwbZrg86oZKA31vqN_K.jpg?size=200x0&quality=96&crop=95,95,768,768&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 42331,
						"distance": 26638,
						"user": {
							"id": 64089888,
							"name": "Тимур Казиев",
							"first_name": "Тимур",
							"last_name": "Казиев",
							"photo_50": "https://sun9-63.userapi.com/s/v1/if1/oebCd8MF3yUG-9vGRQ6g7pDnlROUbmfDwg3qs8T4IaVMduo6w_9pQNnccSZJSv9VwtQ3skVK.jpg?size=50x0&quality=96&crop=203,0,855,855&ava=1",
							"photo_100": "https://sun9-63.userapi.com/s/v1/if1/VTSHGigW8FLE2FbdEW7sGc84R7WjnosaLhXj0tu0QgoO1sBPx205aNlaKt-aliHZ3t8ofwyp.jpg?size=100x0&quality=96&crop=203,0,855,855&ava=1",
							"photo_200": "https://sun9-63.userapi.com/s/v1/if1/glplGQJ5MOijIIlITqjIZbZed-uOPQuaI4aNSjaahx1jOgqJzvFAwqqbp28YehtSLrDGQjmc.jpg?size=200x0&quality=96&crop=203,0,855,855&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 40891,
						"distance": 34721,
						"user": {
							"id": 2062117,
							"name": "Антон Ягельницкий",
							"first_name": "Антон",
							"last_name": "Ягельницкий",
							"photo_50": "https://sun9-62.userapi.com/s/v1/ig2/ahaV-tHYHY4YSfNEUk7o5UQn956Dq8HrWI3PB_gmZPryviugWvzFsgw40dlmkF4dH1aomvKvvMwG0CYDLpC9WNUv.jpg?size=50x0&quality=96&crop=170,170,1011,1011&ava=1",
							"photo_100": "https://sun9-62.userapi.com/s/v1/ig2/QZ6FBtTf0LnB-wVgF_cfRb2nV2qYvYzLofnhOlYj6rf4EfuVzGG7zhjlCA3ls-MRBFXNwytSPtyEFWKRW-RdwE4C.jpg?size=100x0&quality=96&crop=170,170,1011,1011&ava=1",
							"photo_200": "https://sun9-62.userapi.com/s/v1/ig2/uI-G2tIoviYBcgPk5TkMop-ouKNRaWR7mjPwfkrUJFC70EMheYgKseqHgfAbps43GyLWIM9MmpYRE1qMo96O_gig.jpg?size=200x0&quality=96&crop=170,170,1011,1011&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 40415,
						"distance": 27407,
						"user": {
							"id": 25046,
							"name": "Александр Попов",
							"first_name": "Александр",
							"last_name": "Попов",
							"photo_50": "https://sun9-85.userapi.com/s/v1/if1/8wyzH_g35JH9VZStAdaKCtiwYcS5-X340lFKQdGwnOY9RA0F-CrI-1V3LfnFWdx_nVZdMq_R.jpg?size=50x0&quality=96&crop=84,455,1371,1371&ava=1",
							"photo_100": "https://sun9-85.userapi.com/s/v1/if1/pbazSIOLdOl7mTBCB5fRhM1CIl4lSPWySudRpEvUMUdaYMi9ecB3b5tq5VzR7qR--CuZ5SQ4.jpg?size=100x0&quality=96&crop=84,455,1371,1371&ava=1",
							"photo_200": "https://sun9-85.userapi.com/s/v1/if1/pJER9uRRnyFlO9WlmiRT8BMNFgoG-ctOKLxBH9HoDicTpuOgeJuFyvENN21bSG68GLxkzFHv.jpg?size=200x0&quality=96&crop=84,455,1371,1371&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 39868,
						"distance": 33234,
						"user": {
							"id": 26816434,
							"name": "Никита Баринов",
							"first_name": "Никита",
							"last_name": "Баринов",
							"photo_50": "https://sun9-21.userapi.com/s/v1/if1/gTWPyCvpK9n5QUwndkjFUrShEjl5qqxtKQw6Vche6UqnHeBsANh33aJzWRnD-wvGVTYU28QY.jpg?size=50x0&quality=96&crop=0,0,487,487&ava=1",
							"photo_100": "https://sun9-21.userapi.com/s/v1/if1/Dt3O50bp63SRovKIkVybN767byPcZqiK3kQb3ybCgwA-Q0qbuQ63eju0DSQW_oQ-prsTk5LR.jpg?size=100x0&quality=96&crop=0,0,487,487&ava=1",
							"photo_200": "https://sun9-21.userapi.com/s/v1/if1/nQf1KEdBxlO5px9h4cu7LnYuFSwreSsMJleQR-GjhAfTkfWvCevuMD7vopaFiESg23EPUzRA.jpg?size=200x0&quality=96&crop=0,0,487,487&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 39096,
						"distance": 25077,
						"user": {
							"id": 550467730,
							"name": "Ира Середа",
							"first_name": "Ира",
							"last_name": "Середа",
							"photo_50": "https://sun9-32.userapi.com/s/v1/ig2/kK2-o1E3athgaPQgkEqN4FoBuhJhF7mRDXoUZ-TCy4RLn3rHU8_4-MT57bsCEClCZ7ehQbIcDIpnl42SUvxjSSgq.jpg?size=50x0&quality=96&crop=0,0,1565,1565&ava=1",
							"photo_100": "https://sun9-32.userapi.com/s/v1/ig2/Vxhsnk_j5bHmd108y0PtbSsY90RhUAUFey65_B2UeSCK9eMX-gJuWrtv1pFZmN5OZCm0a2CBUAaY0OkURDy3NHL7.jpg?size=100x0&quality=96&crop=0,0,1565,1565&ava=1",
							"photo_200": "https://sun9-32.userapi.com/s/v1/ig2/aPC98z_BPKcy1lkzojG5yLAWUuGvyhCesaGLBkQK7LOC3g6UKFzxa3zkxWIMpWjVicCccX70M24YuR8fjUyBenHE.jpg?size=200x0&quality=96&crop=0,0,1565,1565&ava=1",
							"sex": 0
						}
					},
					{
						"steps": 35656,
						"distance": 26389,
						"user": {
							"id": 19039187,
							"name": "Иван Недзвецкий",
							"first_name": "Иван",
							"last_name": "Недзвецкий",
							"photo_50": "https://sun9-7.userapi.com/s/v1/ig2/YXC8eqHTFjx5mZiUdoWXVxQG2rI7uoEzPmtCclYHEQpAhbiRyEx7oo6-BxQwq_eKw1FNc5fpIcqrtHTI1Lw_Xslx.jpg?size=50x0&quality=96&crop=316,341,1299,1299&ava=1",
							"photo_100": "https://sun9-7.userapi.com/s/v1/ig2/UurenQyqK95lRj151RmUnk1ahmlRKg8Y63wsTF1Mcmfw3B7eXGJjEmMdqVY7lbWW7bITfWnCkX9Re6cpTeltjvPB.jpg?size=100x0&quality=96&crop=316,341,1299,1299&ava=1",
							"photo_200": "https://sun9-7.userapi.com/s/v1/ig2/_bRBkcXJHxW6SJYXUgUZ0rApEQGYcUxbORMLdI6Eu_s1AjadxBu7CFNE7LX0M5F7uT16TowzJPOg_cWEwDPzZCzF.jpg?size=200x0&quality=96&crop=316,341,1299,1299&ava=1",
							"sex": 0
						}
					}
				]
			},
			"request_id": "37"
		},
		"request_id": "37"
	},
	"execute.getStartData": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"days": [
					{
						"date": "22-07-2021",
						"steps": 7470,
						"distance": 5587,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 31
					},
					{
						"date": "23-07-2021",
						"steps": 6641,
						"distance": 5112,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 31
					},
					{
						"date": "24-07-2021",
						"steps": 10782,
						"distance": 6999,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 28
					},
					{
						"date": "25-07-2021",
						"steps": 6439,
						"distance": 4343,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 31
					},
					{
						"date": "26-07-2021",
						"steps": 2921,
						"distance": 1875,
						"target": 5000,
						"target_percent": 58,
						"is_target_reached": false,
						"position": 31
					},
					{
						"date": "27-07-2021",
						"steps": 8608,
						"distance": 6733,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 21
					},
					{
						"date": "28-07-2021",
						"steps": 6740,
						"distance": 4953,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 24
					},
					{
						"date": "29-07-2021",
						"steps": 8245,
						"distance": 6387,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 26
					},
					{
						"date": "30-07-2021",
						"steps": 9142,
						"distance": 6441,
						"target": 5000,
						"target_percent": 100,
						"is_target_reached": true,
						"position": 22
					}
				],
				"leaderboard": {
					"position": 22,
					"leaderboard": [
						{
							"steps": 27200,
							"distance": 18837,
							"user": {
								"id": 1730782,
								"name": "Иван Карабакин",
								"first_name": "Иван",
								"last_name": "Карабакин",
								"photo_50": "https://sun9-28.userapi.com/s/v1/if1/5933Ee1mRhKKFEJXwYz16dp6JTEljjkwCN7MRuOfzK91g9VTDXeji8lTh5oRnrE57qwq4B-R.jpg?size=50x0&quality=96&crop=937,601,513,513&ava=1",
								"photo_100": "https://sun9-28.userapi.com/s/v1/if1/88rvVu-ox00Sr7bfJTf317da2yq0AG44FlSf4VPLVd6EiokIcd3-xXyZXka13cbL4202otGR.jpg?size=100x0&quality=96&crop=937,601,513,513&ava=1",
								"photo_200": "https://sun9-28.userapi.com/s/v1/if1/l2jQibCVSMzpkixIX3ENJhOndh2xkp0t-WakpPCvKiBW4SIHukFB6CyrpMmX8jurWaCx1gbB.jpg?size=200x0&quality=96&crop=937,601,513,513&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 22703,
							"distance": 15620,
							"user": {
								"id": 17622426,
								"name": "Аня Коновалова",
								"first_name": "Аня",
								"last_name": "Коновалова",
								"photo_50": "https://sun9-13.userapi.com/s/v1/ig2/JlrMjv9YZ6HRJGVgeNsXLa2746p32NGoaBwhY7DIhckk0DNzOnAhG_4B86sslUAERd9oW2ctZUzFKmgYG8yhI67L.jpg?size=50x0&quality=96&crop=79,82,1102,1102&ava=1",
								"photo_100": "https://sun9-13.userapi.com/s/v1/ig2/tUT283RIQZIMiH1Y-buQ_5SbHvUj22xaZspJ7w4x2fmNj13J-X87RD_iGTfbYOJhIhhIWK9MD57iSKK15xnj0pgl.jpg?size=100x0&quality=96&crop=79,82,1102,1102&ava=1",
								"photo_200": "https://sun9-13.userapi.com/s/v1/ig2/3muHyLW9xYHLP8XwIDdRoLlA1FGyg3axgrNgrRFZ9hWbonvZC2e4LrmF4tbyBurfzQcy_j0zHCcAcZ4dKRGk_PwA.jpg?size=200x0&quality=96&crop=79,82,1102,1102&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 18735,
							"distance": 13859,
							"user": {
								"id": 105372886,
								"name": "Сергей Корнеев",
								"first_name": "Сергей",
								"last_name": "Корнеев",
								"photo_50": "https://sun9-26.userapi.com/s/v1/if2/TVX3xUM-0W6kW4d8KTSs_44urs1V4fczJ_9vmuf0pcHVOjhPw3VitNqVwjcchs_N3_FMh-OqbV3woaM7rIp0tWZZ.jpg?size=50x0&quality=96&crop=425,770,592,592&ava=1",
								"photo_100": "https://sun9-26.userapi.com/s/v1/if2/IZ8wPz6L9LgkSrMaAcwIu431fMA0V_IU_CsuVl9vaI-2IMOFP9zBUfn60F6OBRNmmp7_E_RHgCf-2hvBVjZ8Q4NI.jpg?size=100x0&quality=96&crop=425,770,592,592&ava=1",
								"photo_200": "https://sun9-26.userapi.com/s/v1/if2/aZSUJpFVOOio5bp86TmagTuo-b8Gx14u6M58GeRKrl8y5st_m_Af2knJaa__fj8KBimekcclTjk3lXs0nGmCnW_i.jpg?size=200x0&quality=96&crop=425,770,592,592&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 18459,
							"distance": 12628,
							"user": {
								"id": 13915327,
								"name": "Роман Соколов",
								"first_name": "Роман",
								"last_name": "Соколов",
								"photo_50": "https://sun9-27.userapi.com/s/v1/ig2/DPwafOkLcpKQUTNcKehxTw66R4GMdjjMcxgCVLs1nkezcFQaAwewPrjplHnw6WC5ZvFM5irGDaNOB2nF_oYlVEgi.jpg?size=50x0&quality=96&crop=559,438,599,599&ava=1",
								"photo_100": "https://sun9-27.userapi.com/s/v1/ig2/rPqopQLXVhM0mlYmA9yOTKk2RrZT5JZnVUyy7pwPXkjVPlIYG0L7xYSQOX34DaAB-BBbaICSmPXBjWwdDfJswIN7.jpg?size=100x0&quality=96&crop=559,438,599,599&ava=1",
								"photo_200": "https://sun9-27.userapi.com/s/v1/ig2/oXl7W-6RkFBsTzZ2rwi32ChWsYeTEki4Tg53vQSUG7wHGUuBKZmxvWXuSW8Jr47inO2Feql-c3P8E2do9KNYFlk0.jpg?size=200x0&quality=96&crop=559,438,599,599&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 16332,
							"distance": 11700,
							"user": {
								"id": 13706084,
								"name": "Татьяна Маркина",
								"first_name": "Татьяна",
								"last_name": "Маркина",
								"photo_50": "https://sun9-80.userapi.com/s/v1/ig2/FQPi35VC8pum48qSrhoWVQA3j2WnWpFoy1qwo-Fg3sj-czXoUu2eBngxkEmOM5NU02hj8TuNkECM7MpE6-F3_KCJ.jpg?size=50x0&quality=96&crop=286,109,1346,1346&ava=1",
								"photo_100": "https://sun9-80.userapi.com/s/v1/ig2/VsM8wxjg5LPEfmBpM8iSPSfLWmx2s0FHiaZXryPPuYlRZ0i3LTxqAJjyqsWoOqEqgqAzW0U1QTd5lussGvE7Wo8S.jpg?size=100x0&quality=96&crop=286,109,1346,1346&ava=1",
								"photo_200": "https://sun9-80.userapi.com/s/v1/ig2/e4P3qRTKINSi8uxRbLAQiKwQfz_VJK0FnxT4AhvSatIz-I13kZOHkOaY26GR5z1SXHGmJ0XXAGzB3Be3Ww4vEn7M.jpg?size=200x0&quality=96&crop=286,109,1346,1346&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 15554,
							"distance": 10570,
							"user": {
								"id": 2502516,
								"name": "Дамир Богданов",
								"first_name": "Дамир",
								"last_name": "Богданов",
								"photo_50": "https://sun9-5.userapi.com/s/v1/if1/gjgAtNVcS6ibMvfGdcJOtJgo1T5U0YjLce75fAoQvzCUkwXCWkN6TJ9jelbcSLI6wRaT2O1h.jpg?size=50x0&quality=96&crop=0,120,718,718&ava=1",
								"photo_100": "https://sun9-5.userapi.com/s/v1/if1/vkcIwzf6XkotL9rmmzW0YyzFSfa7MuRCoz6i57g7dnMhqYnR-U-x1oZiUy0RnmLPu1TWaOwN.jpg?size=100x0&quality=96&crop=0,120,718,718&ava=1",
								"photo_200": "https://sun9-5.userapi.com/s/v1/if1/ZgnqrmMlEmO-eED6FJ29WpZAE06tVveXDuhQ0sYzTyVIlNSImC6C6QfMCJ1pmckdIB_LKdzd.jpg?size=200x0&quality=96&crop=0,120,718,718&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 14965,
							"distance": 11240,
							"user": {
								"id": 90163178,
								"name": "Никита Вохминцев",
								"first_name": "Никита",
								"last_name": "Вохминцев",
								"photo_50": "https://sun9-74.userapi.com/s/v1/ig2/-zuOYG5gVyNPD7vSFMYNQGHyYs2jwiO2STaW_4nskrCVBjSDzow7n8NNhfA5BleanQXn0T8EJ5EgS3g6518aBsqn.jpg?size=50x0&quality=96&crop=0,0,1437,1437&ava=1",
								"photo_100": "https://sun9-74.userapi.com/s/v1/ig2/H_o825HsB6PFcCF_ZqukRWPJ4YMnQqxkKSmiFJJWlmyrrxqCaRdQcbLnVGR1NJnbo1T6EKtH2bgZRiIjdC_Ba9mx.jpg?size=100x0&quality=96&crop=0,0,1437,1437&ava=1",
								"photo_200": "https://sun9-74.userapi.com/s/v1/ig2/PT1vhkqedb73qvPWkANVKI9kTRElSJAHiMtlK2-PzuQGhl8-evSxLiLVoOvhJ883kKRPmILtoy8j3bx46hXQ5kHg.jpg?size=200x0&quality=96&crop=0,0,1437,1437&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 14877,
							"distance": 10016,
							"user": {
								"id": 6964760,
								"name": "Владимир Махов",
								"first_name": "Владимир",
								"last_name": "Махов",
								"photo_50": "https://sun9-10.userapi.com/s/v1/ig1/P1Wvy7KTg0AnDhlDJuNd5yFClQ1Ajz-rFbLIsgqtAnoewgmFp7zGyoHUlcMVTB8HQs39I-s1.jpg?size=50x0&quality=96&crop=21,205,786,786&ava=1",
								"photo_100": "https://sun9-10.userapi.com/s/v1/ig1/jcgnSlBYuqRgisYp0Kdw_5UDPq4mxJyFZc4armRbiq8D9iLopqqdS9dmVAeg1Btq0ClYt1ZR.jpg?size=100x0&quality=96&crop=21,205,786,786&ava=1",
								"photo_200": "https://sun9-10.userapi.com/s/v1/ig1/twZ7STdl8UnZpSHjq77tdf_yujVKhqjGCs_FvHnIcyo8O3z7e8LP915mhBc6ezn27QiUo8W3.jpg?size=200x0&quality=96&crop=21,205,786,786&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 13596,
							"distance": 8157,
							"user": {
								"id": 68728796,
								"name": "Владислав Кибенко",
								"first_name": "Владислав",
								"last_name": "Кибенко",
								"photo_50": "https://sun9-57.userapi.com/s/v1/ig2/ojg_oE3CTsDYb-Sczb472Mc58ClDaoveAHGcoc_F1PbluAJoXVU_puO_8dNnC_dpRmArGq2zXPqzvo-U8Qwo1Dfz.jpg?size=50x0&quality=96&crop=623,553,410,410&ava=1",
								"photo_100": "https://sun9-57.userapi.com/s/v1/ig2/a2koBkykxS-f79bZithOZsD4ecnyJEjTG4cJGAl59uQLYMJWRzNdLjV7PMCHRW7Jb6APnwCPftgTdDDRGeWa2NsI.jpg?size=100x0&quality=96&crop=623,553,410,410&ava=1",
								"photo_200": "https://sun9-57.userapi.com/s/v1/ig2/ODHKRBzOPTQCnh4WaB6hHSocxENnMn3_5Z7ee8RI3M3xuGgsAmWfyNpReh2gGIBHO3eHlawFzgZ9SysDHsS1KGx7.jpg?size=200x0&quality=96&crop=623,553,410,410&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 13390,
							"distance": 11759,
							"user": {
								"id": 94414851,
								"name": "Андрей Ермаков",
								"first_name": "Андрей",
								"last_name": "Ермаков",
								"photo_50": "https://sun9-26.userapi.com/s/v1/ig1/DeGkzEPut9axwYrCw3Z_kMN2BX-kC8nMhNaD-zm6Smmg3_EPB1_3fbehTvvM0eqHs-lEopiW.jpg?size=50x0&quality=96&crop=896,270,747,747&ava=1",
								"photo_100": "https://sun9-26.userapi.com/s/v1/ig1/NGHGKaf7xYOlqW6jpnbEOUXwT7dMb19M-QKkFuC36uwjI9BNHR06av6JIFlG_WWSYGaso4_y.jpg?size=100x0&quality=96&crop=896,270,747,747&ava=1",
								"photo_200": "https://sun9-26.userapi.com/s/v1/ig1/KLEvkSYtP5khQi10AYofK4cDJcQTC2gI2CIgc-gCzy7PVO_ios--jj3Q51Cwf4VBHyzJvb5b.jpg?size=200x0&quality=96&crop=896,270,747,747&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 12584,
							"distance": 9354,
							"user": {
								"id": 7337161,
								"name": "Александр Щепилов",
								"first_name": "Александр",
								"last_name": "Щепилов",
								"photo_50": "https://sun9-21.userapi.com/s/v1/ig2/nOEdG3SCzxkm-AKv41PgnDfbHxZykr_s1w4laz0R63QKecAA8zfFJm5Xmuc_5RDI24t7rV4VqpuoE-wtI_zpl_kZ.jpg?size=50x0&quality=96&crop=0,33,853,853&ava=1",
								"photo_100": "https://sun9-21.userapi.com/s/v1/ig2/mnk43u7bU3_zb2FQfQ-XdUfEsm2SLHVeALHTYDAvb5g9tWLeIVRqm9stKBreuDukKZX8VKcZESekaXv2Q96F803p.jpg?size=100x0&quality=96&crop=0,33,853,853&ava=1",
								"photo_200": "https://sun9-21.userapi.com/s/v1/ig2/L9gUQTGiD8OjKp5uixBmzmgfEnt9hPB9zvvx8II4nAAUPGC4J4nwjzy4jNosPAB9ZS0Xh2oxoDieju_SEqEgYRB8.jpg?size=200x0&quality=96&crop=0,33,853,853&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 11609,
							"distance": 7494,
							"user": {
								"id": 640414,
								"name": "Давид Куваев",
								"first_name": "Давид",
								"last_name": "Куваев",
								"photo_50": "https://sun9-72.userapi.com/s/v1/ig2/Vusp72-h7rDo-fVmNFGCR0nmNr8scX-j1MHXvvbMvsHOLlO1RgLaPaToaUDqXmmQUtnh8Q97LNkJIw6rCfKALJLN.jpg?size=50x0&quality=96&crop=535,298,704,704&ava=1",
								"photo_100": "https://sun9-72.userapi.com/s/v1/ig2/qX2gOeWnsvJnC9PxzAnQfuIpj9sy0J-c6hfn-svK47BUH1vtsXKSyYIpa37R0-EzTBnScPUhbQj2gqEklk8PuEJN.jpg?size=100x0&quality=96&crop=535,298,704,704&ava=1",
								"photo_200": "https://sun9-72.userapi.com/s/v1/ig2/kD-oph2gya0tNY8lik3j28VI-dCV9gj6U8Pffm5oSbj_GoILM4qA-5WK06iqacP_2jLmZd2PUrnxCvKCFgky3C37.jpg?size=200x0&quality=96&crop=535,298,704,704&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 11442,
							"distance": 9149,
							"user": {
								"id": 179092216,
								"name": "Валерий Стенхаммар",
								"first_name": "Валерий",
								"last_name": "Стенхаммар",
								"photo_50": "https://sun9-52.userapi.com/s/v1/ig2/xIhVMyJdf_NRdQgxQGHmjakIEd_c33KZsQCi4gWMZrVdw-ZeX2sP7DdLpTNNXD2TUFmQVZuaEuWSrV9GCL6A6x-u.jpg?size=50x0&quality=96&crop=0,184,1439,1439&ava=1",
								"photo_100": "https://sun9-52.userapi.com/s/v1/ig2/yaE351nqvHJVukS6eTvzlopf27xPjxLlqCkql5WIAXcp5RL_A3nvUrKVldmM1uvk1Tyz0K6GwFBMmnyVJAiiWSYp.jpg?size=100x0&quality=96&crop=0,184,1439,1439&ava=1",
								"photo_200": "https://sun9-52.userapi.com/s/v1/ig2/RlBEEFgs2sxdskyKlcGeAySOKRVHIVzCckBM3JhKczCu5vzGxQTjv6CsaYljZkCuPhrL34DdhHlHYmKAAfLCyG1M.jpg?size=200x0&quality=96&crop=0,184,1439,1439&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 11220,
							"distance": 8693,
							"user": {
								"id": 18867112,
								"name": "Елена Качемирова",
								"first_name": "Елена",
								"last_name": "Качемирова",
								"photo_50": "https://sun9-11.userapi.com/s/v1/ig2/0P94_EEUqfq7OnYFFpzzMTc4tv8WQSatZcKuz6pVTuDgMi27W_X5YDGjRrp7resurV25r3-wMUKH6fV_uEVG8dCr.jpg?size=50x0&quality=96&crop=201,218,1044,1044&ava=1",
								"photo_100": "https://sun9-11.userapi.com/s/v1/ig2/7te4juUEqItHllj_8Qp-CLFSzMUXfq2mKXGFAWg7cxmtpSXGcn5gAUErBfKpyyDtxCwPqvOOdfojPHxuSNHt9_kH.jpg?size=100x0&quality=96&crop=201,218,1044,1044&ava=1",
								"photo_200": "https://sun9-11.userapi.com/s/v1/ig2/MBxKHI84aeL6KiNv7tbnyTbwP4J4PSTSCef05ch8qP0gi4O-uIXaBOJ1u0UC5Ga_3XZoht-1Pvgebt31QpKMTW3a.jpg?size=200x0&quality=96&crop=201,218,1044,1044&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 10371,
							"distance": 6960,
							"user": {
								"id": 550467730,
								"name": "Ира Середа",
								"first_name": "Ира",
								"last_name": "Середа",
								"photo_50": "https://sun9-32.userapi.com/s/v1/ig2/kK2-o1E3athgaPQgkEqN4FoBuhJhF7mRDXoUZ-TCy4RLn3rHU8_4-MT57bsCEClCZ7ehQbIcDIpnl42SUvxjSSgq.jpg?size=50x0&quality=96&crop=0,0,1565,1565&ava=1",
								"photo_100": "https://sun9-32.userapi.com/s/v1/ig2/Vxhsnk_j5bHmd108y0PtbSsY90RhUAUFey65_B2UeSCK9eMX-gJuWrtv1pFZmN5OZCm0a2CBUAaY0OkURDy3NHL7.jpg?size=100x0&quality=96&crop=0,0,1565,1565&ava=1",
								"photo_200": "https://sun9-32.userapi.com/s/v1/ig2/aPC98z_BPKcy1lkzojG5yLAWUuGvyhCesaGLBkQK7LOC3g6UKFzxa3zkxWIMpWjVicCccX70M24YuR8fjUyBenHE.jpg?size=200x0&quality=96&crop=0,0,1565,1565&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 10272,
							"distance": 8530,
							"user": {
								"id": 26816434,
								"name": "Никита Баринов",
								"first_name": "Никита",
								"last_name": "Баринов",
								"photo_50": "https://sun9-21.userapi.com/s/v1/if1/gTWPyCvpK9n5QUwndkjFUrShEjl5qqxtKQw6Vche6UqnHeBsANh33aJzWRnD-wvGVTYU28QY.jpg?size=50x0&quality=96&crop=0,0,487,487&ava=1",
								"photo_100": "https://sun9-21.userapi.com/s/v1/if1/Dt3O50bp63SRovKIkVybN767byPcZqiK3kQb3ybCgwA-Q0qbuQ63eju0DSQW_oQ-prsTk5LR.jpg?size=100x0&quality=96&crop=0,0,487,487&ava=1",
								"photo_200": "https://sun9-21.userapi.com/s/v1/if1/nQf1KEdBxlO5px9h4cu7LnYuFSwreSsMJleQR-GjhAfTkfWvCevuMD7vopaFiESg23EPUzRA.jpg?size=200x0&quality=96&crop=0,0,487,487&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 10212,
							"distance": 5578,
							"user": {
								"id": 16475657,
								"name": "Дарья Тарутина",
								"first_name": "Дарья",
								"last_name": "Тарутина",
								"photo_50": "https://sun9-45.userapi.com/s/v1/ig2/UEkneABq7_HKMCCjil4lXanak0Me2OHxFlYbHNFles7OiXtnCxMz072ppt4qRhvu-ugYNoEcc2KQSF4gxMCXNBd6.jpg?size=50x0&quality=96&crop=82,356,1310,1310&ava=1",
								"photo_100": "https://sun9-45.userapi.com/s/v1/ig2/FpqW5r6khJBNn5U17XFF69OTfjfwhvszTwfZDWkzaN3effRRYeMxEyXwwbF2ybqSIX0eIxYaUMDydXkqxIQBcLIg.jpg?size=100x0&quality=96&crop=82,356,1310,1310&ava=1",
								"photo_200": "https://sun9-45.userapi.com/s/v1/ig2/lTooFQ5wfrgH7SnDlCvCHK3X4QlKF-huibYufd8vePf9JBOwAb28YWDr76gb2JPLA6etvW8gbdKxVhELjcSh2PoF.jpg?size=200x0&quality=96&crop=82,356,1310,1310&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 9697,
							"distance": 6531,
							"user": {
								"id": 274123,
								"name": "Илья Пеняев",
								"first_name": "Илья",
								"last_name": "Пеняев",
								"photo_50": "https://sun9-54.userapi.com/s/v1/if1/2yQGZtxJsdggszTmSu6DGDzafApWYbOGSc-Fb7FFIUQoiloe23H9yBMjEhFqlgIaM5oKNlN6.jpg?size=50x0&quality=96&crop=324,324,1299,1299&ava=1",
								"photo_100": "https://sun9-54.userapi.com/s/v1/if1/FEJPyB4sweqKDwm4Qp2zNCZF49bXi4Qt1sSLcGiTT1g2GdTrNNwE4kWkgiiOYGGqUWkUnnp9.jpg?size=100x0&quality=96&crop=324,324,1299,1299&ava=1",
								"photo_200": "https://sun9-54.userapi.com/s/v1/if1/v6rYd-DtZFnudSJ4XwxMiLBc9u7wBlIjnrwUbC37iSwKEEExMVAVp30G7D2pHWfcepaHsk_h.jpg?size=200x0&quality=96&crop=324,324,1299,1299&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 9674,
							"distance": 7604,
							"user": {
								"id": 140830142,
								"name": "Олег Плаксин",
								"first_name": "Олег",
								"last_name": "Плаксин",
								"photo_50": "https://sun9-16.userapi.com/s/v1/if2/OPhwQ_HSVgZZnwsv3Be8H7VGKyfJsd44VSSiOJjqnRgej-nXlWqJgOsBtTJUk7dngVgb-c7nilULnBEcV2MDw7_C.jpg?size=50x0&quality=96&crop=501,249,720,720&ava=1",
								"photo_100": "https://sun9-16.userapi.com/s/v1/if2/GdlwAR9r97a1Zj8VgoGdViqYnHCgfYsuLCO05A5JYsFMj9LFtX4RpM3q8NTj8jLbDannpEAtG7H-Jg2FK0-j5ttb.jpg?size=100x0&quality=96&crop=501,249,720,720&ava=1",
								"photo_200": "https://sun9-16.userapi.com/s/v1/if2/0eQU71RuIdR_pHLJ2eFMu7oxRrLMUUUozEjO4Hi8W257D5V6O41Xb0DTY2IxblNxgLCwPQEKVXdJoX0-4uBsK4oe.jpg?size=200x0&quality=96&crop=501,249,720,720&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 9334,
							"distance": 4729,
							"user": {
								"id": 54986442,
								"name": "Иван Гусев",
								"first_name": "Иван",
								"last_name": "Гусев",
								"photo_50": "https://sun9-28.userapi.com/s/v1/ig2/mr5ztDl4E3GDUhlPV9-Xlp7iVOsTPfsz_scX91YtSBPyi5s4mTVc5sb9LkU8etTYGHr7XwoHxQ_r4jfA6ifc1Ln6.jpg?size=50x0&quality=96&crop=195,400,399,399&ava=1",
								"photo_100": "https://sun9-28.userapi.com/s/v1/ig2/Nd0OQaNSHsX-EsavZ50Cg-7ag7ARIu7dqb_G2kf-obkco0awxK9Uml-T3BpRlOhqI9_PBnvRnxrLzyTikYqxXemY.jpg?size=100x0&quality=96&crop=195,400,399,399&ava=1",
								"photo_200": "https://sun9-28.userapi.com/s/v1/ig2/H7fCNoMOd3Dwzb5WZxPgsf6bwWaltRNF_9aZhTkXT-6yz_ZD-FWMIwlzxjJtlBYi_geNYRTGSmL38Yc8F7ptPI4Y.jpg?size=200x0&quality=96&crop=195,400,399,399&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 9195,
							"distance": 6883,
							"user": {
								"id": 9637095,
								"name": "Александр Проскурин",
								"first_name": "Александр",
								"last_name": "Проскурин",
								"photo_50": "https://sun9-66.userapi.com/s/v1/ig2/zNO0xEYsv8fHm-e0AstRpgzi8XBO5EhAkHn73UCRKIFSPOMwWqfugzmwqXt_SMlbpL3zR3kVFN-zAE5qOPskamgb.jpg?size=50x0&quality=96&crop=364,582,1183,1183&ava=1",
								"photo_100": "https://sun9-66.userapi.com/s/v1/ig2/aYY18I1XJ-vCr2K40c_lYLy4s4ZEuVAKITGf6eSGaKu1tGPt7bd59KRILr1vD_anxe3RrfmfRHp7odeeqkvO1xOI.jpg?size=100x0&quality=96&crop=364,582,1183,1183&ava=1",
								"photo_200": "https://sun9-66.userapi.com/s/v1/ig2/r1uhPWH4vzE2_ju5mxB5dQ468s9sDzUz2MHunWOCJhcDFeuQC5bMOujB8h19NiAMuIUCqduIyUp1GjF3emYkUfjB.jpg?size=200x0&quality=96&crop=364,582,1183,1183&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 9142,
							"distance": 6441,
							"user": {
								"id": 19039187,
								"name": "Иван Недзвецкий",
								"first_name": "Иван",
								"last_name": "Недзвецкий",
								"photo_50": "https://sun9-7.userapi.com/s/v1/ig2/YXC8eqHTFjx5mZiUdoWXVxQG2rI7uoEzPmtCclYHEQpAhbiRyEx7oo6-BxQwq_eKw1FNc5fpIcqrtHTI1Lw_Xslx.jpg?size=50x0&quality=96&crop=316,341,1299,1299&ava=1",
								"photo_100": "https://sun9-7.userapi.com/s/v1/ig2/UurenQyqK95lRj151RmUnk1ahmlRKg8Y63wsTF1Mcmfw3B7eXGJjEmMdqVY7lbWW7bITfWnCkX9Re6cpTeltjvPB.jpg?size=100x0&quality=96&crop=316,341,1299,1299&ava=1",
								"photo_200": "https://sun9-7.userapi.com/s/v1/ig2/_bRBkcXJHxW6SJYXUgUZ0rApEQGYcUxbORMLdI6Eu_s1AjadxBu7CFNE7LX0M5F7uT16TowzJPOg_cWEwDPzZCzF.jpg?size=200x0&quality=96&crop=316,341,1299,1299&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 9067,
							"distance": 7538,
							"user": {
								"id": 331639485,
								"name": "Igor Fedorov",
								"first_name": "Igor",
								"last_name": "Fedorov",
								"photo_50": "https://sun9-11.userapi.com/s/v1/ig2/-M_i5dFTwJPZ_jnKFdVndfcs2aoBoIeCIPZDRRoKxHS2xGfalw6jhUnaiBe_JH_vH6HETPvKYNKM7WyABVA5DKcP.jpg?size=50x0&quality=96&crop=436,585,824,824&ava=1",
								"photo_100": "https://sun9-11.userapi.com/s/v1/ig2/dsZLpdP_55-OI7N4eIUMnnAq6pJD0FWfBTnU9pC8ffoZv4tUBisy-UIzGf6Bh08AeGgLShjAOvFyenVQ3xpQEfnM.jpg?size=100x0&quality=96&crop=436,585,824,824&ava=1",
								"photo_200": "https://sun9-11.userapi.com/s/v1/ig2/A6e1D15xHaVG4q0Er3wl2cHnmbgAafGwNGkiylcrbD4Cs5jsaNZ3jK2j7VruTuV3nyJuhPUc8tY0ThkZzJGoL_EV.jpg?size=200x0&quality=96&crop=436,585,824,824&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 8993,
							"distance": 6400,
							"user": {
								"id": 25046,
								"name": "Александр Попов",
								"first_name": "Александр",
								"last_name": "Попов",
								"photo_50": "https://sun9-85.userapi.com/s/v1/if1/8wyzH_g35JH9VZStAdaKCtiwYcS5-X340lFKQdGwnOY9RA0F-CrI-1V3LfnFWdx_nVZdMq_R.jpg?size=50x0&quality=96&crop=84,455,1371,1371&ava=1",
								"photo_100": "https://sun9-85.userapi.com/s/v1/if1/pbazSIOLdOl7mTBCB5fRhM1CIl4lSPWySudRpEvUMUdaYMi9ecB3b5tq5VzR7qR--CuZ5SQ4.jpg?size=100x0&quality=96&crop=84,455,1371,1371&ava=1",
								"photo_200": "https://sun9-85.userapi.com/s/v1/if1/pJER9uRRnyFlO9WlmiRT8BMNFgoG-ctOKLxBH9HoDicTpuOgeJuFyvENN21bSG68GLxkzFHv.jpg?size=200x0&quality=96&crop=84,455,1371,1371&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 8840,
							"distance": 6213,
							"user": {
								"id": 168354935,
								"name": "Настя Литвиненко",
								"first_name": "Настя",
								"last_name": "Литвиненко",
								"photo_50": "https://sun9-19.userapi.com/s/v1/ig2/4mvw-nyvcCFnX0vDRnRwN1ASu50svgdSOXL2lJBCT8BXAjHSGeTMUWBXrvb9zFqArLxe4RUkSIq-LNMl7HJtpT3Y.jpg?size=50x0&quality=96&crop=0,17,1620,1620&ava=1",
								"photo_100": "https://sun9-19.userapi.com/s/v1/ig2/dS7GWKnPD8876v15y8rumhPuEWqN2ViZK0u6OBf1MvMjGMskugOOmP9xpVgWhpfgRjF8s_i-osG8zAe-KD3eElk_.jpg?size=100x0&quality=96&crop=0,17,1620,1620&ava=1",
								"photo_200": "https://sun9-19.userapi.com/s/v1/ig2/gl9BWiGIoCceX0rk_jrcCwzYIriYm0ytI0KKcweyLgs8sm2b8tchZwYjN5uOPjn7edHpKIx_H2hXRGBea1tgz9Fi.jpg?size=200x0&quality=96&crop=0,17,1620,1620&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 8627,
							"distance": 6738,
							"user": {
								"id": 168850,
								"name": "Юля Брук",
								"first_name": "Юля",
								"last_name": "Брук",
								"photo_50": "https://sun9-42.userapi.com/s/v1/if1/_JvjrZ6fPRyM5Ygc0M2bEfEUkcPYOi7SFqHtu8JqeDHYtu4LPCcdVeJ3SQIpjqea6KRMbOjJ.jpg?size=50x0&quality=96&crop=185,93,598,598&ava=1",
								"photo_100": "https://sun9-42.userapi.com/s/v1/if1/9MfrKk1c10mzCaVV5rKYBnaTgDUf1_qK4vdUkjz0w6IeuaXpRF6Md-HgoTtPxx3HdeFKJvmr.jpg?size=100x0&quality=96&crop=185,93,598,598&ava=1",
								"photo_200": "https://sun9-42.userapi.com/s/v1/if1/4_UTlaJo_rPlsFs2KWc3pzerElUa1WMwmGWu4lUUJRKCPcKAZMlpUtWmkK7QfCU_ouQexWuh.jpg?size=200x0&quality=96&crop=185,93,598,598&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 8549,
							"distance": 5549,
							"user": {
								"id": 64089888,
								"name": "Тимур Казиев",
								"first_name": "Тимур",
								"last_name": "Казиев",
								"photo_50": "https://sun9-63.userapi.com/s/v1/if1/oebCd8MF3yUG-9vGRQ6g7pDnlROUbmfDwg3qs8T4IaVMduo6w_9pQNnccSZJSv9VwtQ3skVK.jpg?size=50x0&quality=96&crop=203,0,855,855&ava=1",
								"photo_100": "https://sun9-63.userapi.com/s/v1/if1/VTSHGigW8FLE2FbdEW7sGc84R7WjnosaLhXj0tu0QgoO1sBPx205aNlaKt-aliHZ3t8ofwyp.jpg?size=100x0&quality=96&crop=203,0,855,855&ava=1",
								"photo_200": "https://sun9-63.userapi.com/s/v1/if1/glplGQJ5MOijIIlITqjIZbZed-uOPQuaI4aNSjaahx1jOgqJzvFAwqqbp28YehtSLrDGQjmc.jpg?size=200x0&quality=96&crop=203,0,855,855&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 7898,
							"distance": 5746,
							"user": {
								"id": 125886778,
								"name": "Тимур Галеев",
								"first_name": "Тимур",
								"last_name": "Галеев",
								"photo_50": "https://sun9-75.userapi.com/s/v1/ig2/vE2VtOxckTFo18phg3qt6knujs2N-yF6Wpz785Rg1WTiyTZE3bUvJtLq_yPkwZmp5N2jXwZFo7VAAlbhX0Nk9_60.jpg?size=50x0&quality=96&crop=501,0,1702,1702&ava=1",
								"photo_100": "https://sun9-75.userapi.com/s/v1/ig2/HvupJ4r3_l1O_xNi-YEcBxxagzUVUNlNH9voWfTx22QqdSIwAwanb2aJrLIL0KuEGGli6YvkuDnZcWMcTD9OmxdN.jpg?size=100x0&quality=96&crop=501,0,1702,1702&ava=1",
								"photo_200": "https://sun9-75.userapi.com/s/v1/ig2/gDWPv3_E-KKemWOviehie1gR3YLa1ahthqFOst8jV2DIsGzzxTE9h34tQ0geEIhpFgnrZEG0cWPUlgU-k1OjwxaL.jpg?size=200x0&quality=96&crop=501,0,1702,1702&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 7878,
							"distance": 6936,
							"user": {
								"id": 27322270,
								"name": "Вадим Смирнов",
								"first_name": "Вадим",
								"last_name": "Смирнов",
								"photo_50": "https://sun9-57.userapi.com/s/v1/if1/19kpTLoGh4jixAU53j8ZpuAvWN2F5svpDThhZ_xI7GXBdt6HsBahd1ABTNWQRXHN5xiEYOZp.jpg?size=50x0&quality=96&crop=593,95,915,915&ava=1",
								"photo_100": "https://sun9-57.userapi.com/s/v1/if1/ce2hRVHBa1YvNvbpkRhi5DKFm_2bw2YAs8ekumicJwdKePWgw8wLPyuMncnK7ByIrtEfRdjL.jpg?size=100x0&quality=96&crop=593,95,915,915&ava=1",
								"photo_200": "https://sun9-57.userapi.com/s/v1/if1/i5rDc3iucT1Yhe7adeQpB0YnFnZUP9pPX4qPK7rthyprjPYyG6ewXzRt-XXSXrbvo2phWozM.jpg?size=200x0&quality=96&crop=593,95,915,915&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 7786,
							"distance": 5489,
							"user": {
								"id": 71135622,
								"name": "Данил Кайгородов",
								"first_name": "Данил",
								"last_name": "Кайгородов",
								"photo_50": "https://sun9-28.userapi.com/s/v1/if1/nJpk4G3deMmu-f3sFcE0ggLx8MOZGbhENyU13Dj1OvW5D-mrzo5SV0O7wTjbNIVXIoq2dKSU.jpg?size=50x0&quality=96&crop=255,75,612,612&ava=1",
								"photo_100": "https://sun9-28.userapi.com/s/v1/if1/8YTZR4CJe6OukIb3UibQut358baAwWRqDBd2jxbGdrr4I6BuabNtW-pzeG6pBnrArelGH1_d.jpg?size=100x0&quality=96&crop=255,75,612,612&ava=1",
								"photo_200": "https://sun9-28.userapi.com/s/v1/if1/9Dj_l97pDZuGnjMQOZ63lF2NywDMYM5fE6tUDAX-_Gi9dKJeofLI0DwChvXeQkQAGiNQfSN7.jpg?size=200x0&quality=96&crop=255,75,612,612&ava=1",
								"sex": 0
							}
						},
						{
							"steps": 7477,
							"distance": 4180,
							"user": {
								"id": 715441,
								"name": "Юлия Кингсеп",
								"first_name": "Юлия",
								"last_name": "Кингсеп",
								"photo_50": "https://sun9-28.userapi.com/s/v1/ig1/bgjgAdNCX83WYsaY4azZ9HFox9CAXMFdeXQBNT-uqr7scLYvPzmv5nUT6Qp9UmTtSdOMLRdc.jpg?size=50x0&quality=96&crop=14,14,937,937&ava=1",
								"photo_100": "https://sun9-28.userapi.com/s/v1/ig1/V6fmAPdrZ9MmYfmKAkI76rd72rE3EOF1L9EqSecgXgm-Twro_U6eVrWPATXD7WzkWtW7-g9e.jpg?size=100x0&quality=96&crop=14,14,937,937&ava=1",
								"photo_200": "https://sun9-28.userapi.com/s/v1/ig1/D-p-4yYMheBdbEpz7wWAjdBLzUqJ6f2Zlyuxdo2R-gyURpO65hdUookyUinXorkeSnqTpy5Y.jpg?size=200x0&quality=96&crop=14,14,937,937&ava=1",
								"sex": 0
							}
						}
					]
				},
				"friends": {
					"items": []
				},
				"preferredFriends": []
			},
			"request_id": "17"
		},
		"request_id": "17"
	},
	"statEvents.addMiniApps": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": 1,
			"request_id": "53"
		},
		"request_id": "53"
	},
	"vkRun.getChallenges": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"invites_from_users": [],
				"self_created_by_user": [],
				"participation_in_progress": [],
				"available_to_participate_from_sponsors": [
					{
						"id": "AAAAAAAAAAAAAUZKAAAAAAAAAA",
						"is_user_challenge": false,
						"is_participated": false,
						"can_accept": true,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": false,
						"are_notifications_enabled": false,
						"is_in_progress": true,
						"metrics_type": "steps",
						"challenge_type": "floating_whole_range_days_goal",
						"title": "Счастливое число",
						"goal_value": 7777,
						"description": "Вызов для тех, кто загадывает желание, когда на часах 11:11. Пройдите за день 7 777 шагов.",
						"logo": {
							"image_1x": "https://sun9-79.userapi.com/zwjL9iKD1fQFuGs6mpuJVwDoYF_6bOHyIVTshw/yHxSn62uGuc.png",
							"image_2x": "https://sun9-2.userapi.com/4_tXqWLUcpBArNI_JK7dE_OOoAOrUDJdk9wXlw/dibK6Wo0KuY.png",
							"image_3x": "https://sun9-12.userapi.com/txIgfx3VqUC0CUFnWkdjEmgVQKkiM8cHMd3_9g/r-BPey5NSeo.png",
							"image_4x": "https://sun9-13.userapi.com/d1dMFogM5QF5yiPpztTcCKm5lgIlq0AtYyN__Q/Vlp7ml2mIoE.png"
						},
						"period": {
							"from": "30-07-2021",
							"to": "30-07-2021",
							"days_total": 1
						},
						"participants_total": 462103,
						"user_progress": {
							"status": "not_found"
						},
						"random_friends": {
							"total": 27,
							"users": [
								{
									"id": 168354935,
									"name": "Настя Литвиненко",
									"first_name": "Настя",
									"last_name": "Литвиненко",
									"photo_50": "https://sun9-19.userapi.com/s/v1/ig2/4mvw-nyvcCFnX0vDRnRwN1ASu50svgdSOXL2lJBCT8BXAjHSGeTMUWBXrvb9zFqArLxe4RUkSIq-LNMl7HJtpT3Y.jpg?size=50x0&quality=96&crop=0,17,1620,1620&ava=1",
									"photo_100": "https://sun9-19.userapi.com/s/v1/ig2/dS7GWKnPD8876v15y8rumhPuEWqN2ViZK0u6OBf1MvMjGMskugOOmP9xpVgWhpfgRjF8s_i-osG8zAe-KD3eElk_.jpg?size=100x0&quality=96&crop=0,17,1620,1620&ava=1",
									"photo_200": "https://sun9-19.userapi.com/s/v1/ig2/gl9BWiGIoCceX0rk_jrcCwzYIriYm0ytI0KKcweyLgs8sm2b8tchZwYjN5uOPjn7edHpKIx_H2hXRGBea1tgz9Fi.jpg?size=200x0&quality=96&crop=0,17,1620,1620&ava=1",
									"sex": 1
								},
								{
									"id": 11027752,
									"name": "Евгения Зибарева",
									"first_name": "Евгения",
									"last_name": "Зибарева",
									"photo_50": "https://sun9-60.userapi.com/s/v1/if1/tgaCR_SSZW2qkOaE82l-RGveSXxsEm1f-ldHFwyJkiKazc1PqiWuIcw3_poGbtBpXwnDPi2h.jpg?size=50x0&quality=96&crop=827,107,975,975&ava=1",
									"photo_100": "https://sun9-60.userapi.com/s/v1/if1/svlRzsBKYa9-MWneIVMv3q5dDBcGG54deOXExwmbKQIkdKRl9UtCweHun3_dNkw6vPdv1sPM.jpg?size=100x0&quality=96&crop=827,107,975,975&ava=1",
									"photo_200": "https://sun9-60.userapi.com/s/v1/if1/k96ssADVUWwT33sirevg-zI8WiDKztv9zSOheamXyl9HLuwZN_SwzY3qTwvx3PM7paqHvafQ.jpg?size=200x0&quality=96&crop=827,107,975,975&ava=1",
									"sex": 1
								},
								{
									"id": 13706084,
									"name": "Татьяна Маркина",
									"first_name": "Татьяна",
									"last_name": "Маркина",
									"photo_50": "https://sun9-80.userapi.com/s/v1/ig2/FQPi35VC8pum48qSrhoWVQA3j2WnWpFoy1qwo-Fg3sj-czXoUu2eBngxkEmOM5NU02hj8TuNkECM7MpE6-F3_KCJ.jpg?size=50x0&quality=96&crop=286,109,1346,1346&ava=1",
									"photo_100": "https://sun9-80.userapi.com/s/v1/ig2/VsM8wxjg5LPEfmBpM8iSPSfLWmx2s0FHiaZXryPPuYlRZ0i3LTxqAJjyqsWoOqEqgqAzW0U1QTd5lussGvE7Wo8S.jpg?size=100x0&quality=96&crop=286,109,1346,1346&ava=1",
									"photo_200": "https://sun9-80.userapi.com/s/v1/ig2/e4P3qRTKINSi8uxRbLAQiKwQfz_VJK0FnxT4AhvSatIz-I13kZOHkOaY26GR5z1SXHGmJ0XXAGzB3Be3Ww4vEn7M.jpg?size=200x0&quality=96&crop=286,109,1346,1346&ava=1",
									"sex": 1
								}
							]
						}
					},
					{
						"id": "AAAAAAAAAAAAAVBKAAAAAAAAAA",
						"is_user_challenge": false,
						"is_participated": false,
						"can_accept": true,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": false,
						"are_notifications_enabled": false,
						"is_in_progress": true,
						"metrics_type": "steps",
						"challenge_type": "floating_whole_range_days_goal",
						"title": "Вокруг Эльбруса",
						"goal_value": 85714,
						"description": "Соскучились по приключениям? За 10 дней повторите в родной местности горный маршрут протяжённостью 85 714 шагов.",
						"logo": {
							"image_1x": "https://sun9-82.userapi.com/gtQ5ith82sXYu9ySNz2ikf1EOqgVHIGU-CI5RA/Iw1bqIx6IC8.png",
							"image_2x": "https://sun9-43.userapi.com/L8QLXJa0jzRiCNtWTN6anz6fIzIGFZ0mMv8hgg/6WNxf0VcY4s.png",
							"image_3x": "https://sun9-49.userapi.com/JVGEhpms4LSl9owdj_Npk576MONct9vhu1qd7g/YrZqw1-WOMk.png",
							"image_4x": "https://sun9-11.userapi.com/iPRpz2-sDUKS0mqniZ5MFqoOA00PSPC8NYML_g/7vha4HkUWgU.png"
						},
						"period": {
							"from": "30-07-2021",
							"to": "08-08-2021",
							"days_total": 10
						},
						"participants_total": 397078,
						"user_progress": {
							"status": "not_found"
						},
						"random_friends": {
							"total": 23,
							"users": [
								{
									"id": 168354935,
									"name": "Настя Литвиненко",
									"first_name": "Настя",
									"last_name": "Литвиненко",
									"photo_50": "https://sun9-19.userapi.com/s/v1/ig2/4mvw-nyvcCFnX0vDRnRwN1ASu50svgdSOXL2lJBCT8BXAjHSGeTMUWBXrvb9zFqArLxe4RUkSIq-LNMl7HJtpT3Y.jpg?size=50x0&quality=96&crop=0,17,1620,1620&ava=1",
									"photo_100": "https://sun9-19.userapi.com/s/v1/ig2/dS7GWKnPD8876v15y8rumhPuEWqN2ViZK0u6OBf1MvMjGMskugOOmP9xpVgWhpfgRjF8s_i-osG8zAe-KD3eElk_.jpg?size=100x0&quality=96&crop=0,17,1620,1620&ava=1",
									"photo_200": "https://sun9-19.userapi.com/s/v1/ig2/gl9BWiGIoCceX0rk_jrcCwzYIriYm0ytI0KKcweyLgs8sm2b8tchZwYjN5uOPjn7edHpKIx_H2hXRGBea1tgz9Fi.jpg?size=200x0&quality=96&crop=0,17,1620,1620&ava=1",
									"sex": 1
								},
								{
									"id": 13706084,
									"name": "Татьяна Маркина",
									"first_name": "Татьяна",
									"last_name": "Маркина",
									"photo_50": "https://sun9-80.userapi.com/s/v1/ig2/FQPi35VC8pum48qSrhoWVQA3j2WnWpFoy1qwo-Fg3sj-czXoUu2eBngxkEmOM5NU02hj8TuNkECM7MpE6-F3_KCJ.jpg?size=50x0&quality=96&crop=286,109,1346,1346&ava=1",
									"photo_100": "https://sun9-80.userapi.com/s/v1/ig2/VsM8wxjg5LPEfmBpM8iSPSfLWmx2s0FHiaZXryPPuYlRZ0i3LTxqAJjyqsWoOqEqgqAzW0U1QTd5lussGvE7Wo8S.jpg?size=100x0&quality=96&crop=286,109,1346,1346&ava=1",
									"photo_200": "https://sun9-80.userapi.com/s/v1/ig2/e4P3qRTKINSi8uxRbLAQiKwQfz_VJK0FnxT4AhvSatIz-I13kZOHkOaY26GR5z1SXHGmJ0XXAGzB3Be3Ww4vEn7M.jpg?size=200x0&quality=96&crop=286,109,1346,1346&ava=1",
									"sex": 1
								},
								{
									"id": 225818028,
									"name": "Олег Зуев",
									"first_name": "Олег",
									"last_name": "Зуев",
									"photo_50": "https://sun9-4.userapi.com/s/v1/if1/F3xBLfZvABO65-Qu2o_uAYm5ULx7oiw8GftGvx0uQoxbdkwK5ibjhKwZkP6rdwcEhuuBQihe.jpg?size=50x0&quality=96&crop=139,0,939,939&ava=1",
									"photo_100": "https://sun9-4.userapi.com/s/v1/if1/FN0_Ec2th2ZOowhhnDb675vR4yd-2oLsVy0pSdzHqCH9DMKmoCHPiCQHTmMJMi9XJq0QLv7F.jpg?size=100x0&quality=96&crop=139,0,939,939&ava=1",
									"photo_200": "https://sun9-4.userapi.com/s/v1/if1/b8qzkxqhk49Le94A9Or9LEGQjbjIv2p2h3iQXvTb1Kr0cLvhBwO4FqkwfpZ7cr0qBjTmOJ8A.jpg?size=200x0&quality=96&crop=139,0,939,939&ava=1",
									"sex": 2
								}
							]
						}
					}
				],
				"finished": [
					{
						"id": "AAAAAAAAAAAAAXRMAAAAAAAAAA",
						"is_user_challenge": false,
						"is_participated": true,
						"can_accept": false,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": false,
						"are_notifications_enabled": true,
						"is_in_progress": false,
						"metrics_type": "steps",
						"challenge_type": "whole_range_days_goal",
						"title": "Перегони курьера в Санкт-Петербурге",
						"goal_value": 100000,
						"description": "Курьеры много ходят — такая у них работа. Сможете ли вы пройти больше? Участвуйте в вызове, перегоните курьеров и получите шанс выиграть призы\nот «Самоката»!",
						"team": "default",
						"logo": {
							"image_1x": "https://sun9-84.userapi.com/G0O-JxuURF_1RzVmbHnOFNSZ7y9h5_xMQdnFDQ/BlCSOJRmYNc.png",
							"image_2x": "https://sun9-88.userapi.com/Hc1MnJY35dIzfWMaJx6vpAE54zClVKoXmvYEbw/iuCsVNq6x3w.png",
							"image_3x": "https://sun9-34.userapi.com/45oh8q9dBTsyAPA5P4-_R7YIBUkRj2KRakpC-Q/X0t2a7xkzZo.png",
							"image_4x": "https://sun9-79.userapi.com/NhwSntW0UxEYJkF6Ww6yeGq_vldhmZYgU3vBEQ/Xfe_5h2oyP4.png"
						},
						"period": {
							"from": "08-06-2021",
							"to": "21-06-2021",
							"days_total": 14
						},
						"participants_total": 39122,
						"user_progress": {
							"status": "passed",
							"progress_value": 105621,
							"accepted_at": "08-06-2021",
							"finished_at": "20-06-2021"
						},
						"extra_params": []
					},
					{
						"id": "VS2XKDIAAAAAB6QPAAAAAAAAAA",
						"is_user_challenge": true,
						"is_participated": true,
						"can_accept": false,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": true,
						"are_notifications_enabled": true,
						"is_in_progress": false,
						"metrics_type": "steps",
						"challenge_type": "every_day_goal",
						"title": "Тест трон",
						"goal_value": 10000,
						"owner": {
							"id": 225818028,
							"name": "Олег Зуев",
							"first_name": "Олег",
							"last_name": "Зуев",
							"photo_50": "https://sun9-4.userapi.com/s/v1/if1/F3xBLfZvABO65-Qu2o_uAYm5ULx7oiw8GftGvx0uQoxbdkwK5ibjhKwZkP6rdwcEhuuBQihe.jpg?size=50x0&quality=96&crop=139,0,939,939&ava=1",
							"photo_100": "https://sun9-4.userapi.com/s/v1/if1/FN0_Ec2th2ZOowhhnDb675vR4yd-2oLsVy0pSdzHqCH9DMKmoCHPiCQHTmMJMi9XJq0QLv7F.jpg?size=100x0&quality=96&crop=139,0,939,939&ava=1",
							"photo_200": "https://sun9-4.userapi.com/s/v1/if1/b8qzkxqhk49Le94A9Or9LEGQjbjIv2p2h3iQXvTb1Kr0cLvhBwO4FqkwfpZ7cr0qBjTmOJ8A.jpg?size=200x0&quality=96&crop=139,0,939,939&ava=1",
							"sex": 2
						},
						"description": "",
						"logo": {
							"image_1x": "https://sun9-38.userapi.com/rw6AHrkel3kEp0MmcBCqnZb7_MIoDMUZa7ULKw/xps1eekqAA8.png",
							"image_2x": "https://sun9-75.userapi.com/6_HPA8jXwR6KSo30NvNSqb2UhqOIRcHGXJtHLA/YawXgQtR6K8.png",
							"image_3x": "https://sun9-53.userapi.com/0d_TDQW2C037pmZSziBr-9Fz0wIU4l-RyTr1ug/OrvsoTsZ2AY.png",
							"image_4x": "https://sun9-11.userapi.com/T1Xz2-93mo-wjBLC3fbCFX7VELf3KFksP4A9HQ/wO-oj3Voxms.png"
						},
						"period": {
							"from": "16-03-2021",
							"to": "17-03-2021",
							"days_total": 2
						},
						"user_progress": {
							"status": "failed",
							"accepted_at": "16-03-2021",
							"finished_at": "16-03-2021",
							"days_passed": 0
						},
						"extra_params": []
					},
					{
						"id": "VS2XKDIAAAAAB6IPAAAAAAAAAA",
						"is_user_challenge": true,
						"is_participated": true,
						"can_accept": false,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": true,
						"are_notifications_enabled": true,
						"is_in_progress": false,
						"metrics_type": "steps",
						"challenge_type": "every_day_goal",
						"title": "Тест бутсы",
						"goal_value": 10000,
						"owner": {
							"id": 225818028,
							"name": "Олег Зуев",
							"first_name": "Олег",
							"last_name": "Зуев",
							"photo_50": "https://sun9-4.userapi.com/s/v1/if1/F3xBLfZvABO65-Qu2o_uAYm5ULx7oiw8GftGvx0uQoxbdkwK5ibjhKwZkP6rdwcEhuuBQihe.jpg?size=50x0&quality=96&crop=139,0,939,939&ava=1",
							"photo_100": "https://sun9-4.userapi.com/s/v1/if1/FN0_Ec2th2ZOowhhnDb675vR4yd-2oLsVy0pSdzHqCH9DMKmoCHPiCQHTmMJMi9XJq0QLv7F.jpg?size=100x0&quality=96&crop=139,0,939,939&ava=1",
							"photo_200": "https://sun9-4.userapi.com/s/v1/if1/b8qzkxqhk49Le94A9Or9LEGQjbjIv2p2h3iQXvTb1Kr0cLvhBwO4FqkwfpZ7cr0qBjTmOJ8A.jpg?size=200x0&quality=96&crop=139,0,939,939&ava=1",
							"sex": 2
						},
						"description": "",
						"logo": {
							"image_1x": "https://sun9-57.userapi.com/UlIkwFyDT5ScG4xcqYd_CZQkwcuDaNtJBw7-fA/pA3TAUtNwL4.png",
							"image_2x": "https://sun9-85.userapi.com/ZysOkZC2_MxMqHtbKS4PzNG-MGBjUyJar4Hqsg/wu-eq_O5VyM.png",
							"image_3x": "https://sun9-56.userapi.com/jzViRROdLIBMhoZYJzpsVdpPwWTYnwUsYr0dAA/B8WbJ7Vrxno.png",
							"image_4x": "https://sun9-29.userapi.com/gDnY1KxNP3JeGRd0hmqIq8EFyMgb4WmdVvRBNA/VllPUwRDOog.png"
						},
						"period": {
							"from": "16-03-2021",
							"to": "17-03-2021",
							"days_total": 2
						},
						"user_progress": {
							"status": "failed",
							"accepted_at": "16-03-2021",
							"finished_at": "16-03-2021",
							"days_passed": 0
						},
						"extra_params": []
					},
					{
						"id": "2OBSEAIAAAAAAAIAAAAAAAAAAA",
						"is_user_challenge": true,
						"is_participated": true,
						"can_accept": false,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": true,
						"are_notifications_enabled": true,
						"is_in_progress": false,
						"metrics_type": "steps",
						"challenge_type": "every_day_goal",
						"title": "Принимай если не зассал",
						"goal_value": 10000,
						"owner": {
							"id": 19039187,
							"name": "Иван Недзвецкий",
							"first_name": "Иван",
							"last_name": "Недзвецкий",
							"photo_50": "https://sun9-7.userapi.com/s/v1/ig2/YXC8eqHTFjx5mZiUdoWXVxQG2rI7uoEzPmtCclYHEQpAhbiRyEx7oo6-BxQwq_eKw1FNc5fpIcqrtHTI1Lw_Xslx.jpg?size=50x0&quality=96&crop=316,341,1299,1299&ava=1",
							"photo_100": "https://sun9-7.userapi.com/s/v1/ig2/UurenQyqK95lRj151RmUnk1ahmlRKg8Y63wsTF1Mcmfw3B7eXGJjEmMdqVY7lbWW7bITfWnCkX9Re6cpTeltjvPB.jpg?size=100x0&quality=96&crop=316,341,1299,1299&ava=1",
							"photo_200": "https://sun9-7.userapi.com/s/v1/ig2/_bRBkcXJHxW6SJYXUgUZ0rApEQGYcUxbORMLdI6Eu_s1AjadxBu7CFNE7LX0M5F7uT16TowzJPOg_cWEwDPzZCzF.jpg?size=200x0&quality=96&crop=316,341,1299,1299&ava=1",
							"sex": 2
						},
						"description": "",
						"logo": {
							"image_1x": "https://sun9-70.userapi.com/J2A97_S-kAETMjhvOswCZkm0D6-J7gPACWLL8A/ux5kilPO6n4.png",
							"image_2x": "https://sun9-18.userapi.com/QaxdkhiqcGrvlygUZ-YA90eViqaLoAYUWbUgvg/CgIXGtMil28.png",
							"image_3x": "https://sun9-85.userapi.com/2nFHT9k24GshjSGwyRoqHGDJiLSE7J9LC852BA/xt1izFgAZQA.png",
							"image_4x": "https://sun9-26.userapi.com/jvklWnbsvYMrTaZKim5_mFHgHRmol3fNgB5cLg/7TryK5rKKpE.png"
						},
						"period": {
							"from": "02-03-2021",
							"to": "03-03-2021",
							"days_total": 2
						},
						"user_progress": {
							"status": "failed",
							"accepted_at": "02-03-2021",
							"finished_at": "02-03-2021",
							"days_passed": 0
						},
						"extra_params": []
					},
					{
						"id": "AAAAAAAAAAAAAFIAAAAAAAAAAA",
						"is_user_challenge": false,
						"is_participated": true,
						"can_accept": false,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": false,
						"are_notifications_enabled": true,
						"is_in_progress": false,
						"metrics_type": "steps",
						"challenge_type": "whole_range_days_goal",
						"title": "Антивызов: дома хорошо",
						"goal_value": 1,
						"description": "Сделайте хотя бы один шаг со 2 по 16 марта и примите участие в розыгрыше пяти телевизоров Samsung",
						"logo": {
							"image_1x": "https://sun9-68.userapi.com/LKtK5TRijP-nq4pKDV7GWlZ0nejXfJIBR2ktug/T1r0jdFtXd4.png",
							"image_2x": "https://sun9-83.userapi.com/nNf5seUKUxYgyM1K6rjiY7Sg53m-8-0OMSqG0g/Bpgf6ouSNf4.png",
							"image_3x": "https://sun9-4.userapi.com/RAq1I8fQJ2-bLP_0reL7e8QoEDPd7vK8qgqpLw/thvy570P7MA.png",
							"image_4x": "https://sun9-50.userapi.com/LN7wGVTm3PyBhF7aTvQqqeKu7id31dPBlaf4NA/tgmzw06MV3M.png"
						},
						"period": {
							"from": "02-03-2021",
							"to": "16-03-2021",
							"days_total": 15
						},
						"participants_total": 376617,
						"user_progress": {
							"status": "passed",
							"progress_value": 47581,
							"accepted_at": "02-03-2021",
							"finished_at": "02-03-2021"
						},
						"extra_params": []
					},
					{
						"id": "LQMQAAAAAAAAAAIAAAAAAAAAAA",
						"is_user_challenge": true,
						"is_participated": true,
						"can_accept": false,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": false,
						"are_notifications_enabled": true,
						"is_in_progress": false,
						"metrics_type": "steps",
						"challenge_type": "whole_range_days_goal",
						"title": "ВКонтакте, ваш выход",
						"goal_value": 100000,
						"owner": {
							"id": 6492,
							"name": "Андрей Рогозов",
							"first_name": "Андрей",
							"last_name": "Рогозов",
							"photo_50": "https://sun9-58.userapi.com/s/v1/if1/BxvIekQb32_tjm96iB70Dn58onFgjCZms_G9milvOHR0z9y0GHw4_cVEHfhPE5OfkMGIhZX5.jpg?size=50x0&quality=96&crop=331,0,843,843&ava=1",
							"photo_100": "https://sun9-58.userapi.com/s/v1/if1/RjoNQ_0_AvxEqb_wMHnoWrUthbFKh5ATAJjBwv9gVQlUztiArJcsfccOzlszFVyALlc6-DmW.jpg?size=100x0&quality=96&crop=331,0,843,843&ava=1",
							"photo_200": "https://sun9-58.userapi.com/s/v1/if1/in-6EIZmkMZtSYdxxUXPW8ikNXs2bcBoq00cFbHTE602HOBxzXAe76Yqku5rR3FINlpKxE8j.jpg?size=200x0&quality=96&crop=331,0,843,843&ava=1",
							"sex": 2
						},
						"leader": {
							"id": 2783717,
							"name": "Михаил Верховых",
							"first_name": "Михаил",
							"last_name": "Верховых",
							"photo_50": "https://sun9-10.userapi.com/s/v1/if1/4U6IMIYyR_gJLUI0IYoxfZTu4MAXvLON6d0BKHa9ttCeMNfyN_M8tDHM43BG-W9r6upbJmzG.jpg?size=50x0&quality=96&crop=172,28,1149,1149&ava=1",
							"photo_100": "https://sun9-10.userapi.com/s/v1/if1/lMC8KruFCrT-TzGxBu2LnrZOB1v2_NAEarmFYlqOy7__Ixf_J47BEmt0mo8y1ivfRjRNU19d.jpg?size=100x0&quality=96&crop=172,28,1149,1149&ava=1",
							"photo_200": "https://sun9-10.userapi.com/s/v1/if1/1w5w15NUYn2KyNmjPcDmwK-BtCrtgduTJru4X_FGzyaxl9g_u11Zrheteu_3t70JtiwanD_9.jpg?size=200x0&quality=96&crop=172,28,1149,1149&ava=1",
							"sex": 2
						},
						"description": "Я в вас верю! 100 000 шагов за 7 дней. Кто справится, участвует в розыгрыше призов.",
						"logo": {
							"image_1x": "https://sun9-38.userapi.com/rw6AHrkel3kEp0MmcBCqnZb7_MIoDMUZa7ULKw/xps1eekqAA8.png",
							"image_2x": "https://sun9-75.userapi.com/6_HPA8jXwR6KSo30NvNSqb2UhqOIRcHGXJtHLA/YawXgQtR6K8.png",
							"image_3x": "https://sun9-53.userapi.com/0d_TDQW2C037pmZSziBr-9Fz0wIU4l-RyTr1ug/OrvsoTsZ2AY.png",
							"image_4x": "https://sun9-11.userapi.com/T1Xz2-93mo-wjBLC3fbCFX7VELf3KFksP4A9HQ/wO-oj3Voxms.png"
						},
						"period": {
							"from": "22-12-2020",
							"to": "28-12-2020",
							"days_total": 7
						},
						"user_progress": {
							"status": "failed",
							"progress_value": 27217,
							"accepted_at": "22-12-2020",
							"finished_at": "29-12-2020"
						},
						"extra_params": []
					},
					{
						"id": "AAAAAAAAAAAAAAIAAAAAAAAAAA",
						"is_user_challenge": false,
						"is_participated": true,
						"can_accept": false,
						"can_leave": false,
						"can_finish": false,
						"can_invite_friends": false,
						"can_share_by_link": true,
						"can_ban_users": false,
						"are_invitations_allowed": false,
						"are_notifications_enabled": false,
						"is_in_progress": false,
						"metrics_type": "steps",
						"challenge_type": "every_day_goal",
						"title": "Засиделись что-то",
						"goal_value": 5000,
						"description": "Вы там не засиделись на удалёнке? Предлагаем размяться — 7 дней по 5000 шагов каждый день. Кто справится, участвует в розыгрыше призов.",
						"logo": {
							"image_1x": "https://sun9-34.userapi.com/aiQrpQZN1hSLuWhaSvX_8FbyCvFlz7dk9c75JQ/G8Bx6Cg7lys.png",
							"image_2x": "https://sun9-21.userapi.com/-sXosYoOl5ZW9KE6gI2Ci_1cOIsbQ4kslYEoEw/XMwzqRNWGoM.png",
							"image_3x": "https://sun9-63.userapi.com/j2u7BygbEcJgthiAmxtE_IYeprCfFzReVYWbLg/5sVFl1qFlZc.png",
							"image_4x": "https://sun9-87.userapi.com/ktZ1eBrWu38GU6u-FAzIO9YTViS1UgcQDsCPQw/R7Y88qrIPFQ.png"
						},
						"period": {
							"from": "22-12-2020",
							"to": "28-12-2020",
							"days_total": 7
						},
						"participants_total": 8016,
						"user_progress": {
							"status": "failed",
							"accepted_at": "22-12-2020",
							"finished_at": "22-12-2020",
							"days_passed": 0
						},
						"extra_params": []
					}
				]
			},
			"request_id": "25"
		},
		"request_id": "25"
	},
	"vkRun.getChallenge": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"id": "AAAAAAAAAAAAAGZVAAAAAAAAAA",
				"is_user_challenge": false,
				"is_participated": true,
				"can_accept": true,
				"can_leave": false,
				"can_finish": false,
				"can_invite_friends": false,
				"can_share_by_link": false,
				"can_ban_users": false,
				"are_invitations_allowed": false,
				"are_notifications_enabled": true,
				"is_in_progress": false,
				"metrics_type": "steps",
				"challenge_type": "floating_whole_range_days_goal",
				"title": "42 000 шагов за 5 дней",
				"goal_value": 42000,
				"stats": [
					{
						"date": "2021-06-28",
						"steps": 7172,
						"distance": 6321
					},
					{
						"date": "2021-06-29",
						"steps": 10272,
						"distance": 7683
					},
					{
						"date": "2021-06-30",
						"steps": 8790,
						"distance": 7028
					},
					{
						"date": "2021-07-01",
						"steps": 6291,
						"distance": 5071
					},
					{
						"date": "2021-07-02",
						"steps": 8398,
						"distance": 6766
					}
				],
				"description": "Чтобы выполнить задание на платформе «Другое дело», нужно пройти 42 000 шагов за 5 дней",
				"logo": {
					"image_1x": "https://sun9-57.userapi.com/UlIkwFyDT5ScG4xcqYd_CZQkwcuDaNtJBw7-fA/pA3TAUtNwL4.png",
					"image_2x": "https://sun9-85.userapi.com/ZysOkZC2_MxMqHtbKS4PzNG-MGBjUyJar4Hqsg/wu-eq_O5VyM.png",
					"image_3x": "https://sun9-56.userapi.com/jzViRROdLIBMhoZYJzpsVdpPwWTYnwUsYr0dAA/B8WbJ7Vrxno.png",
					"image_4x": "https://sun9-29.userapi.com/gDnY1KxNP3JeGRd0hmqIq8EFyMgb4WmdVvRBNA/VllPUwRDOog.png"
				},
				"cover": {
					"image_1x": "https://sun9-50.userapi.com/uHcXIe21GEugYwei5jGZzakaX0K6yI6m_2-CcQ/mUfNtcbQjlU.png",
					"image_2x": "https://sun9-87.userapi.com/4885bTKMF48cN4BQBy6EOzyjuYJtU04sXWdGtQ/tyDC260Bwbs.png",
					"image_3x": "https://sun9-19.userapi.com/bvzIjx5TF6oWk9yeHPw9al6it3wJGaFDFZ_rQg/EsxgkbaVVIM.png",
					"image_4x": "https://sun9-28.userapi.com/yhpidJGNHY5TS2_VUutGTsSy2wSYUNXSef8dmw/aFXgXoV1IMc.png"
				},
				"period": {
					"from": "28-06-2021",
					"to": "02-07-2021",
					"days_total": 5
				},
				"prize": {
					"id": "test_prize",
					"title": "test prize",
					"description": "test prize description",
					"logo": {
						"image_1x": "https://sun9-62.userapi.com/aJJsV-tgFLSNwXXMnLAdnLFMtLgwIwL6X84pug/l1Zm0yV13LY.png",
						"image_2x": "https://sun9-44.userapi.com/7Ab8gVTXVnYKWbcipbHhddcJ7XcLMaZw2EDgbw/8_sWwKeV8pA.png",
						"image_3x": "https://sun9-57.userapi.com/VjGNAhUxxoLd25bsxO9Rg8sZ-bOuaK6VZ1wMYw/q-WldCQ-Yec.png",
						"image_4x": "https://sun9-80.userapi.com/xCEBH3E2YHr1nONnfb0x5saVxso-x9FOROsJSQ/qE11ce7nTQ0.png"
					}
				},
				"sponsor": {
					"id": "test_sponsor",
					"title": "Команда ВКонтакте",
					"vk_group_id": -197864572,
					"logo": {
						"image_1x": "https://sun9-62.userapi.com/aJJsV-tgFLSNwXXMnLAdnLFMtLgwIwL6X84pug/l1Zm0yV13LY.png",
						"image_2x": "https://sun9-44.userapi.com/7Ab8gVTXVnYKWbcipbHhddcJ7XcLMaZw2EDgbw/8_sWwKeV8pA.png",
						"image_3x": "https://sun9-57.userapi.com/VjGNAhUxxoLd25bsxO9Rg8sZ-bOuaK6VZ1wMYw/q-WldCQ-Yec.png",
						"image_4x": "https://sun9-80.userapi.com/xCEBH3E2YHr1nONnfb0x5saVxso-x9FOROsJSQ/qE11ce7nTQ0.png"
					}
				},
				"participants_total": 839,
				"user_progress": {
					"status": "failed",
					"progress_value": 40923,
					"accepted_at": "28-06-2021",
					"finished_at": "02-07-2021"
				},
				"random_friends": {
					"total": 6,
					"users": [
						{
							"id": 6526540,
							"name": "Аниса Моисеева",
							"first_name": "Аниса",
							"last_name": "Моисеева",
							"photo_50": "https://sun9-80.userapi.com/s/v1/if1/044bIeWXxwZxSLcqgbXIWs70Q5NB_FbCPPckFmtWJatpgbH7m54XHz1PmTrXEoOkvHQKvvbY.jpg?size=50x0&quality=96&crop=140,0,1535,1535&ava=1",
							"photo_100": "https://sun9-80.userapi.com/s/v1/if1/6Fbj8ZMrWY3_VqmjcCZr5xSiwpSN-i6LD8lofAWJimK_YNYrY-sBwzEHXCs9wO61k44HVM3W.jpg?size=100x0&quality=96&crop=140,0,1535,1535&ava=1",
							"photo_200": "https://sun9-80.userapi.com/s/v1/if1/m1tDdtb4EL6-a5635XLVn7BrohvhFH-h_BL8AQzTuBB8uPb4W8jdWZMJHdp0V-VmgDcjRO-2.jpg?size=200x0&quality=96&crop=140,0,1535,1535&ava=1",
							"sex": 1
						},
						{
							"id": 24512,
							"name": "Глеб Воронцов",
							"first_name": "Глеб",
							"last_name": "Воронцов",
							"photo_50": "https://sun9-21.userapi.com/s/v1/ig2/TNOPoLhnxn9tNLTN0ifCAqeS6-ImzIX1bmLIb8x0evikLlanG1bO0G4DlTfXVT--_1Ul3z2gFJ1muyQnHTRKZRB8.jpg?size=50x0&quality=96&crop=0,0,980,980&ava=1",
							"photo_100": "https://sun9-21.userapi.com/s/v1/ig2/eKo3QzGNLCNOiB_iYCl7akOgH096az_RWpI57toUV6s4y1DHt3JYoywZDHCP3HnJLVd3DClxm19YMySwBGDXJ2am.jpg?size=100x0&quality=96&crop=0,0,980,980&ava=1",
							"photo_200": "https://sun9-21.userapi.com/s/v1/ig2/1ijPjhOdQvbR-cz2I2GoxGTQJ4jKQFq7JbP2VOE0_eBsqBykL8hq5pM_Kk0dcp_fSQgiFMbUcFPkaAWuVsd3A4Wy.jpg?size=200x0&quality=96&crop=0,0,980,980&ava=1",
							"sex": 2
						},
						{
							"id": 26816434,
							"name": "Никита Баринов",
							"first_name": "Никита",
							"last_name": "Баринов",
							"photo_50": "https://sun9-21.userapi.com/s/v1/if1/gTWPyCvpK9n5QUwndkjFUrShEjl5qqxtKQw6Vche6UqnHeBsANh33aJzWRnD-wvGVTYU28QY.jpg?size=50x0&quality=96&crop=0,0,487,487&ava=1",
							"photo_100": "https://sun9-21.userapi.com/s/v1/if1/Dt3O50bp63SRovKIkVybN767byPcZqiK3kQb3ybCgwA-Q0qbuQ63eju0DSQW_oQ-prsTk5LR.jpg?size=100x0&quality=96&crop=0,0,487,487&ava=1",
							"photo_200": "https://sun9-21.userapi.com/s/v1/if1/nQf1KEdBxlO5px9h4cu7LnYuFSwreSsMJleQR-GjhAfTkfWvCevuMD7vopaFiESg23EPUzRA.jpg?size=200x0&quality=96&crop=0,0,487,487&ava=1",
							"sex": 2
						}
					]
				}
			},
			"request_id": "27"
		},
		"request_id": "27"
	},
	"vkRun.getAchievements": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"record": [
					{
						"id": "daily_steps_record",
						"is_collectable": true,
						"is_new": true,
						"is_reached": true,
						"icon": {
							"image_1x": "https://sun9-39.userapi.com/M7ZgwYzo4iNWLeyJUQrVY-rnAkzngEdmOKj_FA/v1l59xNjwnc.png",
							"image_2x": "https://sun9-15.userapi.com/wq1xocqnRrtW7HGLGNP6dXiCz9Ou7khl30qwNw/SE6T7yQ-GiE.png",
							"image_3x": "https://sun9-11.userapi.com/6LA7prJ5pfkwD9s4Omz4dbJqi5xU3lzOsXMC8w/3rnod6vP3og.png",
							"image_4x": "https://sun9-9.userapi.com/xLP8u3nabqrHTva_MDu9t9zkjJ7aiVJSjrY5hg/RfS9fEZ935A.png"
						},
						"short_title": "15 914 шагов пройдено",
						"title": "Рекорд 19 июня: 15 914 шагов",
						"amount": 8,
						"achieved_at": [
							"2021-06-19"
						],
						"background_color": "#FFFFFF"
					},
					{
						"id": "daily_distance_record",
						"is_collectable": true,
						"is_new": false,
						"is_reached": true,
						"icon": {
							"image_1x": "https://sun9-72.userapi.com/ug2zSokLS3s82s1yNSctp1kg0sa83k2c87mdaQ/ywQxi8_ZbFE.png",
							"image_2x": "https://sun9-32.userapi.com/XJZBOqd2EkgGSdmvQJOtvDYiNbbSdkg3wH5rhg/Eq3a0KUKOKE.png",
							"image_3x": "https://sun9-52.userapi.com/L1qbgiyQujhdBDBGY6LW5CBtdSYbZWlYz8CoFA/eno_olIYZFs.png",
							"image_4x": "https://sun9-33.userapi.com/YmdVA-jO5lZdnMG3Ea77DPMep2NV0S3ktRIDoA/q0V5slLwsHk.png"
						},
						"short_title": "11 238 метров пройдено",
						"title": "Рекорд 7 июля: 11 238 метров",
						"amount": 8,
						"achieved_at": [
							"2021-07-07"
						],
						"background_color": "#FFFFFF"
					},
					{
						"id": "challenges_completed",
						"is_collectable": true,
						"is_new": true,
						"is_reached": true,
						"icon": {
							"image_1x": "https://sun9-76.userapi.com/MO9xrUd_WKyW9tSKCZyPQFL4-8iOdGO_puigPw/m-8eEie9CBo.png",
							"image_2x": "https://sun9-61.userapi.com/c8ojcwxdyLlJ2jPBlSEKBRm-hymN-yuLqiPH4A/TwuVGlQ_XYo.png",
							"image_3x": "https://sun9-38.userapi.com/zeJ1PwbF85UTUg8G92Zyyhruau9u2OwWVhshGw/rcyhSC31BNw.png",
							"image_4x": "https://sun9-21.userapi.com/an7YmZpgaonV7mWA2P0AyPSgo4ECNdKr6RZRiA/Nm97j01Q1PA.png"
						},
						"short_title": "2 вызова завершено",
						"title": "Вы даже вызовам можете бросить вызов",
						"amount": 2,
						"achieved_at": [
							"2021-06-20"
						],
						"background_color": "#FFFFFF"
					},
					{
						"id": "strike_value_record",
						"is_collectable": false,
						"is_new": true,
						"is_reached": true,
						"icon": {
							"image_1x": "https://sun9-36.userapi.com/3YOg7AytOE6CK4xQQetil0mM1qRLEE5P_AZbew/5fjxJVOkXuM.png",
							"image_2x": "https://sun9-31.userapi.com/BMHdXM9gFUA9p4r29jqVu3wzl0Bw00JDoUaMYg/okkKpsILL1M.png",
							"image_3x": "https://sun9-87.userapi.com/MHwbvcy2EayNnJcez7ETPd_-PilU_rzkkzBmPg/t_n_XdlHhSQ.png",
							"image_4x": "https://sun9-34.userapi.com/JcJPtHF6lep-bg5PhGdT58nejv9GbfpXSDw4vw/yut8PfpdKPQ.png"
						},
						"short_title": "10 дней подряд у цели",
						"title": "Вы у цели 10 дней подряд",
						"achieved_at": [
							"2021-06-13"
						],
						"background_color": "#FFFFFF"
					}
				],
				"goal": [
					{
						"id": "steps_at_month_150",
						"is_collectable": true,
						"is_new": true,
						"is_reached": true,
						"icon": {
							"image_1x": "https://sun9-49.userapi.com/WYsmEn-a4VPpERjqF4vw8SNIN9Pb43SbYjZ--w/hLPiU2HZqvE.png",
							"image_2x": "https://sun9-43.userapi.com/C33uKHwuJ1-6GZi6lsOSAP_4slWSUUNFfqigbw/XfWeqZdxaN4.png",
							"image_3x": "https://sun9-75.userapi.com/SMV8OJVhO64IYg5biYrcwP8J_23R1ofRTMFdRg/8dGr1Yulzms.png",
							"image_4x": "https://sun9-50.userapi.com/61w1e-qTyUQf0wiN9FrfpfrHr_YJRFKAzjIP8Q/mulQyeXnmZY.png"
						},
						"short_title": "150 000 шагов за месяц",
						"title": "Рекордный июль: 150 000 шагов за месяц",
						"amount": 5,
						"achieved_at": [
							"2021-07-01"
						],
						"background_color": "#FFFFFF"
					},
					{
						"id": "steps_at_month_300",
						"is_collectable": true,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-75.userapi.com/k4VIIBpefmabN9unwT2fdyT_s7NFPUDIIguTNg/AubbuRA1zZA.png",
							"image_2x": "https://sun9-8.userapi.com/Fe9WqLoudXT1ltk2ZOGY_Fh9knI2-zPk1TmoNQ/qRD3KtZw7kM.png",
							"image_3x": "https://sun9-87.userapi.com/IcTE2tEIL2qC_b1GLSXk01dAbKqbFNd3TaXf5A/SPgwphqZM7s.png",
							"image_4x": "https://sun9-38.userapi.com/L4KsPef5-bXv982QYvzZFFNC9jXWeBsGqnyX0Q/iaKVh4amYF0.png"
						},
						"short_title": "Опытный пешеход",
						"title": "Сделайте первый шаг",
						"user_progress": {
							"current": 230542,
							"target": 300000,
							"is_achieved": false
						},
						"amount": 0,
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "steps_at_month_400",
						"is_collectable": true,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-19.userapi.com/5tozJNqnP-kUuldodTPcBpe-OEBLhRx6zULZgA/pTzxgOeEvHc.png",
							"image_2x": "https://sun9-19.userapi.com/3P9_-Q6TA_l2SE3r-aN2we6-bQ8SNvDYT0Yabw/vBgbjtVUZ_0.png",
							"image_3x": "https://sun9-38.userapi.com/-HRTMfapJF9J70IwwWJJSgrObKB50-ZrbbZagw/0PyrUNuTans.png",
							"image_4x": "https://sun9-35.userapi.com/lrw-wGOm1KS9R5uTvEYYbv_58CiCYWE3AReeAg/MLBR4Rzwopc.png"
						},
						"short_title": "Признанный мастер",
						"title": "Сделайте первый шаг",
						"user_progress": {
							"current": 230542,
							"target": 400000,
							"is_achieved": false
						},
						"amount": 0,
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "steps_at_month_600",
						"is_collectable": true,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-53.userapi.com/fwMaU8OibKHW5dzAKvSn6E3012FPZJgvdvm6qg/B-7GDUBke4s.png",
							"image_2x": "https://sun9-27.userapi.com/1fmfFHhRDqYqKu8NCOsd4RMi1LKixqOxcIJ0pA/xWoARm08kWo.png",
							"image_3x": "https://sun9-62.userapi.com/z1e8WAqCfwsRgf7HOyAiewI9ti4jOJbEcDa57w/BXHuG7U6l7g.png",
							"image_4x": "https://sun9-3.userapi.com/giIC5U4kwFYDAQzFT9Mwq4QU9_fl62S4DOsgQA/v5vsmi9LfPg.png"
						},
						"short_title": "Равнение на вас",
						"title": "Сделайте первый шаг",
						"user_progress": {
							"current": 230542,
							"target": 600000,
							"is_achieved": false
						},
						"amount": 0,
						"achieved_at": [],
						"background_color": "#FFFFFF"
					}
				],
				"special": [
					{
						"id": "special_home_bird",
						"is_collectable": false,
						"is_new": false,
						"is_reached": true,
						"icon": {
							"image_1x": "https://sun9-50.userapi.com/UozAQgTOQxtbb_agJ5RWkcv7Zbrpag5dPOAfBg/kHX52M2pEAs.png",
							"image_2x": "https://sun9-41.userapi.com/YnZ-hUqzDbQhhUZHaf7lykjzcMFRo0T0lyAqAg/L6fLHTpbQMc.png",
							"image_3x": "https://sun9-34.userapi.com/vie_eEM9OllpCgwAWwATw3rbTZ1korBZ7D-srg/XQPihW8UXSk.png",
							"image_4x": "https://sun9-66.userapi.com/N-a9hoU4DZlotNzyK5gs9WEgN_LtINXfCMLfTg/ihjvcYGPtuY.png"
						},
						"short_title": "Домосед, который смог",
						"title": "Антивызов: дома хорошо",
						"achieved_at": [
							"2021-03-02"
						],
						"background_color": "#FF0000"
					},
					{
						"id": "special_samokat_spb",
						"is_collectable": false,
						"is_new": true,
						"is_reached": true,
						"icon": {
							"image_1x": "https://sun9-80.userapi.com/ubs3TM3QdgzPWOsV1lHtq_0wyX8N1WCvTlD9dw/xyi5kZetmlQ.png",
							"image_2x": "https://sun9-7.userapi.com/KgqvnW8StxWza0dPxJCnrrGLehRTYbe_00XPUw/Ow2xYLDu_nw.png",
							"image_3x": "https://sun9-88.userapi.com/w_5A6-Q4UBjwcFwEMlOkOZPmrGZlvsC7bCNUAg/cHGS0iw162g.png",
							"image_4x": "https://sun9-9.userapi.com/wAs_p9wuJm_VOZdSVGS7v5o4YEXiXqIgpowycg/WOpycCZlaZw.png"
						},
						"short_title": "Перегони курьера",
						"title": "Вы перегнали курьера",
						"achieved_at": [
							"2021-06-20"
						],
						"background_color": "#FF0000"
					},
					{
						"id": "special_challenge_russia_open",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-61.userapi.com/PcDXCg849sbwuuaIrTi5YdD7oNij5VXT5GXLvg/ENqDI3kL47c.png",
							"image_2x": "https://sun9-59.userapi.com/P1WjozhlSW9mVXccgNDF6LstYiNEP1Aj5uZFjg/3Bgu4pcv_NQ.png",
							"image_3x": "https://sun9-57.userapi.com/f4lPs4bc9WlUpn5KGHLgZWNjPXnjpX3r3F_x_Q/E5uP86r1nAE.png",
							"image_4x": "https://sun9-46.userapi.com/gGml0hiCNgbE0sp0ULsY3VILeoCMOrl9ewbOCA/36OMltcZ2Rs.png"
						},
						"short_title": "Открываем Россию",
						"title": "Открываем Россию",
						"user_progress": {
							"current": 773305,
							"target": 10512857,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FF0000"
					},
					{
						"id": "special_challenge_the_way_of_lomonosov",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-40.userapi.com/BY0glHMYb1WuyjDUUBNB0lCdy1BB2_tjzYSuyw/vjH0OwYxF7s.png",
							"image_2x": "https://sun9-43.userapi.com/xJOEQDlYq5oHAOf9zR6vnV7wMGA-SZTBprN6uw/JmdhWjBX51Q.png",
							"image_3x": "https://sun9-73.userapi.com/PEotxnu_xFTdOKfvemfSskMWFZ5rdxSHbbWR4A/fdHnTT29rLE.png",
							"image_4x": "https://sun9-84.userapi.com/PhRQQu6gQyv3yTdlLtPJZPzzhgR2aotsM-3HwA/ukm5r_p6p8U.png"
						},
						"short_title": "Ломоносов вами доволен",
						"title": "Путь Ломоносова",
						"user_progress": {
							"current": 773305,
							"target": 1668571,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FF0000"
					},
					{
						"id": "special_challenge_semi_marathon",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-23.userapi.com/ZV5NuilJQrIvorDpA5PhkdtnNkR3UCCqBfqzVw/QUgfxMUxYWY.png",
							"image_2x": "https://sun9-87.userapi.com/38moICrybqSkRKI8uUfQTr-3tTYB4sHK52XoVQ/7RLX1IfTyFw.png",
							"image_3x": "https://sun9-64.userapi.com/9r1E3FS0f_6Huh9U--4Qy03mbQALrzku07bs4A/M9hDKQz8kEQ.png",
							"image_4x": "https://sun9-47.userapi.com/N1dR7cA4zpnoB9rP-ep8FVG_ET2937Ue6rFjNA/n5jOH_B4MUc.png"
						},
						"short_title": "Полумарафон",
						"title": "Полумарафон",
						"user_progress": {
							"current": 9142,
							"target": 30000,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FF0000"
					},
					{
						"id": "special_challenge_marathon",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-45.userapi.com/KwrmsBl_1LnbKKG4OSYY4D9NoieKnk0q5yMneg/yjcd8DC3p08.png",
							"image_2x": "https://sun9-57.userapi.com/B18C-tHtoTRhLAwXmobdUdCqkR_R15vsAvL8FQ/DjQIJVgjgl0.png",
							"image_3x": "https://sun9-14.userapi.com/LHEte6sDZv_7yKht4M0VgHcxT1sI20ImUspcUg/LqFhLmjXFYw.png",
							"image_4x": "https://sun9-72.userapi.com/QHtWo77KLtxsMC2OMKdKUTP2dW7FX90kmC7irA/x2DN8NcER0k.png"
						},
						"short_title": "Марафон",
						"title": "Марафон",
						"user_progress": {
							"current": 9142,
							"target": 60000,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FF0000"
					},
					{
						"id": "special_lucky_number",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-33.userapi.com/1sJ2AQkpMY92dD1zLhR4vcbGFFrDl2v2ARZ5HA/HsjJhIpTLGI.png",
							"image_2x": "https://sun9-86.userapi.com/cmUzAbwrvEXdWLDBNMwG8m4bm732n180xIK66g/rL82CIw7hn8.png",
							"image_3x": "https://sun9-78.userapi.com/Y5uxJNuR1GYOJ5ja67-34r5NZl8g0Wz9rpunyg/h9PRgasrysY.png",
							"image_4x": "https://sun9-59.userapi.com/0o1YeNX1-HejLPQz49Lsm61KM_R9gXxrE5642g/MjdZYCXWz2k.png"
						},
						"short_title": "Счастливое число",
						"title": "Счастливое число",
						"user_progress": {
							"current": 9142,
							"target": 7777,
							"is_achieved": true
						},
						"achieved_at": [],
						"background_color": "#FF0000"
					},
					{
						"id": "special_around_elbrus",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-47.userapi.com/-lJAnb_WdcMtTrufcmcSzpPZa0qUhkfC6uHXBA/xBToVsHrGnM.png",
							"image_2x": "https://sun9-74.userapi.com/tsuMFIJ2u4ZO4UsBl9QV0TxAeg9OCycnpya9Eg/8-hWoNuaYNk.png",
							"image_3x": "https://sun9-21.userapi.com/2XoE_GIwJEv6Q3tt5fEg0dpPtuGD8jzYw6jIOA/YKUPhMPX-XU.png",
							"image_4x": "https://sun9-69.userapi.com/-eSwe2B7qs4qj_2O_d9lhg5Ykv-rTneuTpzuLw/q0XH7cJFzm8.png"
						},
						"short_title": "Вокруг Эльбруса",
						"title": "Вокруг Эльбруса",
						"user_progress": {
							"current": 9142,
							"target": 85714,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FF0000"
					}
				],
				"medal": [
					{
						"id": "user_challenges_created_medal_3",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-5.userapi.com/Yc-Tan7VtpSQ4I4Zw9kK0TAn55euNfmImd0ktA/rNXQvJMjPO4.png",
							"image_2x": "https://sun9-52.userapi.com/NlCgpRCiC5ylPWwdmSqkzLTTmxlzDlVe1K-waw/mBpMceCjqqE.png",
							"image_3x": "https://sun9-81.userapi.com/id4tWXul_G6WsgnfUdcA8lwen_Mv1PT6uFAemw/FvQl3WealBQ.png",
							"image_4x": "https://sun9-23.userapi.com/mpmIp4Fnc8cfWoxmUwteh5WkoVlNZYzn8vfEWQ/2DxyGsn_Zeg.png"
						},
						"short_title": "Метатель вызовов",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 3,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "user_challenges_created_medal_10",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-85.userapi.com/RJV9BmplpDjufuA7tSSN5mQDeXoQ3TqL8o1JrQ/p0z9bDEApps.png",
							"image_2x": "https://sun9-25.userapi.com/yVMzVrr47bdiOsD5tHu6YuPh4sJnqaHte1ftKQ/8MVJnqZdPkw.png",
							"image_3x": "https://sun9-75.userapi.com/gwOGAMVWNFIvPsglamRhi6A2J6f5a_YIyt5uaQ/vEOaP3dg-dE.png",
							"image_4x": "https://sun9-88.userapi.com/KNt0K4P1qWUZgw9Hf7X52euVAdINnETI0UcsJA/ytpJGevT68s.png"
						},
						"short_title": "Метатель вызовов",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 10,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "user_challenges_created_medal_50",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-50.userapi.com/4b8IIRhockyu607ik45ZJ0R8MDiamD1Ag6AoaQ/VtYcKZEwVaY.png",
							"image_2x": "https://sun9-27.userapi.com/CHHnbbw1zipNFnw_3-wme3dmCOVHeksWyNhZRA/6pWBZOTvDd4.png",
							"image_3x": "https://sun9-36.userapi.com/Noz3TuHeawFu5Rvnm9G1H8bqI415IbWAttuxOA/DYvKtxUifVY.png",
							"image_4x": "https://sun9-30.userapi.com/HISCmS6CCxj291kY0dR2dGOi8ijd6NcJOWMmcg/zRGRHq2B8Sw.png"
						},
						"short_title": "Метатель вызовов",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 50,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "user_challenges_created_medal_100",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-59.userapi.com/YxOL7iOJngQKgtqO0qhIXWFLd2Js7M6IgeL3iA/hofYMsUNkew.png",
							"image_2x": "https://sun9-22.userapi.com/08BB6mcaK3dB2KKHB3Rm8JVSXzLQ3fTATMs0gg/Mq8QI79fQBc.png",
							"image_3x": "https://sun9-72.userapi.com/M2FzDqnBz9CL8rAvK7MkYMrx8xvCO-4EOEvKpg/QKMFJvl_fVo.png",
							"image_4x": "https://sun9-66.userapi.com/EM1iv4O48aXxY9ZiD0lLQamLudIi28GDYkcwhg/frC36pm5iww.png"
						},
						"short_title": "Метатель вызовов",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 100,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "sponsor_challenges_succeed_medal_3",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-64.userapi.com/ySVg2hcWAH6xqGVCyCQbLO3dlnenZ7ASC8MFfw/aVGT9JY5C1U.png",
							"image_2x": "https://sun9-88.userapi.com/2frfkuoUVNpSuR_RMwNRNh7dhxhLlnzdWs0lJA/E4hRquDFO10.png",
							"image_3x": "https://sun9-72.userapi.com/KQoV2JFDX_I-VI8OoaSC1FgTnWRnDboGPin7wA/2ZS6PjHIq4U.png",
							"image_4x": "https://sun9-72.userapi.com/6HhT64XLKlGtgCTcIudkcFZyis_1ZsZIS30iqQ/LdwEZSzjLDo.png"
						},
						"short_title": "Уникальные вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 3,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "sponsor_challenges_succeed_medal_10",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-10.userapi.com/rpC2LtBV9rKYdkRD6Xv7DZL_KuTXKCtxGw908Q/vvRV3lCdD9g.png",
							"image_2x": "https://sun9-4.userapi.com/y34iIngRZRu4xUlK3wqSXg730z-e0HFit_gKWw/01v7ZARpaMc.png",
							"image_3x": "https://sun9-84.userapi.com/r5fgNTYHD5AWCPCcY9FSefYRVVJwWmfB8t33SQ/MHhX5wy52xY.png",
							"image_4x": "https://sun9-67.userapi.com/_DK1bGBaPppu-XYtTAVFj09V7ZqfcgC_Jj00-w/cwAFSiz7q5s.png"
						},
						"short_title": "Уникальные вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 10,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "sponsor_challenges_succeed_medal_50",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-35.userapi.com/jgJVV4d-UlTmL_r8AX-kki65fN751SUqv_pnHg/63HUBwxLoqg.png",
							"image_2x": "https://sun9-14.userapi.com/DSti1X80LjCMaQYnqZV_dWGZgWEipLdltNpO1g/mCVlDRNTlMo.png",
							"image_3x": "https://sun9-2.userapi.com/riYfTIowv_9EN1lG_2R2Sko7eHp0AMLLE655bg/LZ6yxmR1Tyw.png",
							"image_4x": "https://sun9-55.userapi.com/OqWm5EZR6OzJ6K8za_nXuTZnoprnoWTqMr_weA/gI8I0Fl1lAU.png"
						},
						"short_title": "Уникальные вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 50,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "sponsor_challenges_succeed_medal_100",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-80.userapi.com/jhe2fN0Cd8bTyZOYywifr5lDFGxROm0ywoG-7A/tQv8_nG11CU.png",
							"image_2x": "https://sun9-29.userapi.com/-d62rudgFTu6uG-ILsVmbsmk9XqVN1Gp7KYXpw/Zz38zGLL3Do.png",
							"image_3x": "https://sun9-37.userapi.com/LIRKH1O6afrz2A8DKptlz50C95IBJiaE_8mn6g/Z6lxjcEev_k.png",
							"image_4x": "https://sun9-66.userapi.com/VS56f7fZZLY_yZnvBab1y9Gd9hBCpy6QTL308A/5VX_SICvqQ4.png"
						},
						"short_title": "Уникальные вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 2,
							"target": 100,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "user_challenges_succeed_medal_3",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-66.userapi.com/ZZFLJOKqTkyBcFngN4qtqgD48jSxjCMGQ0eb4w/eglJBLpqdGE.png",
							"image_2x": "https://sun9-25.userapi.com/-LeXc7Bs0PftLb5pyYSNTL4yNDKvZcNhBYp9xQ/YTq2sCdbpJI.png",
							"image_3x": "https://sun9-51.userapi.com/0IwXC33Bdf1Agifz-9mIrs3UM7JrKhKgLpTVow/hbMjUYWTHXY.png",
							"image_4x": "https://sun9-48.userapi.com/iekZY6YD79mAmh_xODECmKiP2Gj4jmRk6Jf_Ww/R13bQ_1SZfo.png"
						},
						"short_title": "Дружеские вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 0,
							"target": 3,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "user_challenges_succeed_medal_10",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-32.userapi.com/n_hl076by9eQZI3p4aWf5ZzS1SikuH1LQHYaog/RX6gcBK_iqU.png",
							"image_2x": "https://sun9-9.userapi.com/XGI0uljxTAsCfN9Er5JteI4jjh5AFivPXtqdvQ/jopN2AgCJK0.png",
							"image_3x": "https://sun9-37.userapi.com/oTjmrE3o8CzCpJsQQevYqveeg139ck3uZsTQCg/KalZk_Fflbo.png",
							"image_4x": "https://sun9-22.userapi.com/GO5nq2fLTlzJGrVlxLLH1CbQbjzI-na0NbVsSA/kC2r8F6kDT0.png"
						},
						"short_title": "Дружеские вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 0,
							"target": 10,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "user_challenges_succeed_medal_50",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-38.userapi.com/RvmhSBvG5SLWbeygnat66pHu5a3NDdD6nxkezA/9eRXdXr-O5s.png",
							"image_2x": "https://sun9-53.userapi.com/O2yK0vxFK1y02HEfNJeNpQeM7auArMRQS2Bg6Q/Ei9Q0t8xag0.png",
							"image_3x": "https://sun9-67.userapi.com/I95SMXmdXF2mykVPuYg7VDHUxWyJPP0vEXWy-A/tZ8HWsf_pxc.png",
							"image_4x": "https://sun9-24.userapi.com/wetEtaEfv3Q9-mt5-2XqMRoGqmvrNORxrW00ZA/efT_H-G7B8A.png"
						},
						"short_title": "Дружеские вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 0,
							"target": 50,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					},
					{
						"id": "user_challenges_succeed_medal_100",
						"is_collectable": false,
						"is_new": false,
						"is_reached": false,
						"icon": {
							"image_1x": "https://sun9-14.userapi.com/mkcTjQsN8VMRzjVamIpX12v2-41j3WSgXhhIyw/ZNVkGUXxNDc.png",
							"image_2x": "https://sun9-14.userapi.com/f8gCico82Jzjyvg2z4zr220ljoCMySOA95S_Sw/0M8SazVXt0A.png",
							"image_3x": "https://sun9-70.userapi.com/vRKOpMuJu9I-PzOvVyGqIAxlZD63iHwSlQAUWQ/lBoe4h4ayH0.png",
							"image_4x": "https://sun9-72.userapi.com/yEnRBlALYrKQbsSlZFQf11WXDj853Lxb3Y3mbA/fe1sTtGhhLA.png"
						},
						"short_title": "Дружеские вызовы",
						"title": "Шаг за шагом, вызов за вызовом",
						"user_progress": {
							"current": 0,
							"target": 100,
							"is_achieved": false
						},
						"achieved_at": [],
						"background_color": "#FFFFFF"
					}
				]
			},
			"request_id": "32"
		},
		"request_id": "32"
	},
	"vkRun.getAchievement": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"id": "daily_distance_record",
				"is_collectable": true,
				"is_new": false,
				"is_reached": true,
				"icon": {
					"image_1x": "https://sun9-72.userapi.com/ug2zSokLS3s82s1yNSctp1kg0sa83k2c87mdaQ/ywQxi8_ZbFE.png",
					"image_2x": "https://sun9-32.userapi.com/XJZBOqd2EkgGSdmvQJOtvDYiNbbSdkg3wH5rhg/Eq3a0KUKOKE.png",
					"image_3x": "https://sun9-52.userapi.com/L1qbgiyQujhdBDBGY6LW5CBtdSYbZWlYz8CoFA/eno_olIYZFs.png",
					"image_4x": "https://sun9-33.userapi.com/YmdVA-jO5lZdnMG3Ea77DPMep2NV0S3ktRIDoA/q0V5slLwsHk.png"
				},
				"title": "Рекорд 7 июля: 11 238 метров",
				"description": "Хорошая выдалась прогулка! Принимайте награду и делитесь новостью с друзьями.",
				"amount": 8,
				"achieved_at": [
					"2021-07-07"
				],
				"background_color": "#FFFFFF",
				"users": {
					"total": 4820165,
					"friends": [
						{
							"id": 24512,
							"name": "Глеб Воронцов",
							"first_name": "Глеб",
							"last_name": "Воронцов",
							"photo_50": "https://sun9-21.userapi.com/s/v1/ig2/TNOPoLhnxn9tNLTN0ifCAqeS6-ImzIX1bmLIb8x0evikLlanG1bO0G4DlTfXVT--_1Ul3z2gFJ1muyQnHTRKZRB8.jpg?size=50x0&quality=96&crop=0,0,980,980&ava=1",
							"photo_100": "https://sun9-21.userapi.com/s/v1/ig2/eKo3QzGNLCNOiB_iYCl7akOgH096az_RWpI57toUV6s4y1DHt3JYoywZDHCP3HnJLVd3DClxm19YMySwBGDXJ2am.jpg?size=100x0&quality=96&crop=0,0,980,980&ava=1",
							"photo_200": "https://sun9-21.userapi.com/s/v1/ig2/1ijPjhOdQvbR-cz2I2GoxGTQJ4jKQFq7JbP2VOE0_eBsqBykL8hq5pM_Kk0dcp_fSQgiFMbUcFPkaAWuVsd3A4Wy.jpg?size=200x0&quality=96&crop=0,0,980,980&ava=1",
							"sex": 2
						},
						{
							"id": 519904,
							"name": "Ярослав Степанов",
							"first_name": "Ярослав",
							"last_name": "Степанов",
							"photo_50": "https://sun9-16.userapi.com/s/v1/if1/SVpjdIqMSbGK958nuPyiloqx9c8wP5hEdEUcEqCjvBeWkaLOG0bdr6HmmjILQWKQCG6W11PE.jpg?size=50x0&quality=96&crop=0,302,1440,1440&ava=1",
							"photo_100": "https://sun9-16.userapi.com/s/v1/if1/0Hsk2XT6wKYgy8A8v_l8e8M2rX5PgK2j-z5zdRJE1Z8zs6b2W_9TMOxtgM_-fkRfuHVDr8C8.jpg?size=100x0&quality=96&crop=0,302,1440,1440&ava=1",
							"photo_200": "https://sun9-16.userapi.com/s/v1/if1/pfGpwvRlmXNaGkknRrDJB8qE3ptBIsq1WSngfBmqI-E1Kixm8qSbVHYNMQJdW_wGWCOINQzR.jpg?size=200x0&quality=96&crop=0,302,1440,1440&ava=1",
							"sex": 2
						},
						{
							"id": 64089888,
							"name": "Тимур Казиев",
							"first_name": "Тимур",
							"last_name": "Казиев",
							"photo_50": "https://sun9-63.userapi.com/s/v1/if1/oebCd8MF3yUG-9vGRQ6g7pDnlROUbmfDwg3qs8T4IaVMduo6w_9pQNnccSZJSv9VwtQ3skVK.jpg?size=50x0&quality=96&crop=203,0,855,855&ava=1",
							"photo_100": "https://sun9-63.userapi.com/s/v1/if1/VTSHGigW8FLE2FbdEW7sGc84R7WjnosaLhXj0tu0QgoO1sBPx205aNlaKt-aliHZ3t8ofwyp.jpg?size=100x0&quality=96&crop=203,0,855,855&ava=1",
							"photo_200": "https://sun9-63.userapi.com/s/v1/if1/glplGQJ5MOijIIlITqjIZbZed-uOPQuaI4aNSjaahx1jOgqJzvFAwqqbp28YehtSLrDGQjmc.jpg?size=200x0&quality=96&crop=203,0,855,855&ava=1",
							"sex": 2
						}
					]
				},
				"can_start_challenge": false,
				"can_share": true
			},
			"request_id": "31"
		},
		"request_id": "31"
	},
	"vkRun.getStats": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": [
				{
					"date": "01-05-2021",
					"steps": 15793,
					"distance": 10228,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "02-05-2021",
					"steps": 13405,
					"distance": 9428,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "03-05-2021",
					"steps": 5172,
					"distance": 3907,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "04-05-2021",
					"steps": 3861,
					"distance": 2825,
					"target": 5000,
					"target_percent": 77,
					"is_target_reached": false
				},
				{
					"date": "05-05-2021",
					"steps": 5374,
					"distance": 4214,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "06-05-2021",
					"steps": 3228,
					"distance": 2471,
					"target": 5000,
					"target_percent": 65,
					"is_target_reached": false
				},
				{
					"date": "07-05-2021",
					"steps": 4025,
					"distance": 3059,
					"target": 5000,
					"target_percent": 81,
					"is_target_reached": false
				},
				{
					"date": "08-05-2021",
					"steps": 4813,
					"distance": 3614,
					"target": 5000,
					"target_percent": 96,
					"is_target_reached": false
				},
				{
					"date": "10-05-2021",
					"steps": 8844,
					"distance": 6803,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "11-05-2021",
					"steps": 4608,
					"distance": 3095,
					"target": 5000,
					"target_percent": 92,
					"is_target_reached": false
				},
				{
					"date": "12-05-2021",
					"steps": 2834,
					"distance": 1888,
					"target": 5000,
					"target_percent": 57,
					"is_target_reached": false
				},
				{
					"date": "13-05-2021",
					"steps": 2325,
					"distance": 1826,
					"target": 5000,
					"target_percent": 47,
					"is_target_reached": false
				},
				{
					"date": "14-05-2021",
					"steps": 90,
					"distance": 61,
					"target": 5000,
					"target_percent": 2,
					"is_target_reached": false
				},
				{
					"date": "15-05-2021",
					"steps": 5156,
					"distance": 3438,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "16-05-2021",
					"steps": 2255,
					"distance": 1646,
					"target": 5000,
					"target_percent": 45,
					"is_target_reached": false
				},
				{
					"date": "17-05-2021",
					"steps": 9613,
					"distance": 7015,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "18-05-2021",
					"steps": 10222,
					"distance": 6772,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "19-05-2021",
					"steps": 6139,
					"distance": 4419,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "20-05-2021",
					"steps": 4822,
					"distance": 4015,
					"target": 5000,
					"target_percent": 96,
					"is_target_reached": false
				},
				{
					"date": "21-05-2021",
					"steps": 6667,
					"distance": 4530,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "23-05-2021",
					"steps": 3888,
					"distance": 2513,
					"target": 5000,
					"target_percent": 78,
					"is_target_reached": false
				},
				{
					"date": "24-05-2021",
					"steps": 6571,
					"distance": 5108,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "25-05-2021",
					"steps": 5739,
					"distance": 4050,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "26-05-2021",
					"steps": 7656,
					"distance": 5777,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "27-05-2021",
					"steps": 2421,
					"distance": 1725,
					"target": 5000,
					"target_percent": 48,
					"is_target_reached": false
				},
				{
					"date": "28-05-2021",
					"steps": 6884,
					"distance": 4660,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "30-05-2021",
					"steps": 3707,
					"distance": 2496,
					"target": 5000,
					"target_percent": 74,
					"is_target_reached": false
				},
				{
					"date": "31-05-2021",
					"steps": 8640,
					"distance": 6316,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "01-06-2021",
					"steps": 9067,
					"distance": 6000,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "02-06-2021",
					"steps": 5170,
					"distance": 3967,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "03-06-2021",
					"steps": 4907,
					"distance": 3702,
					"target": 5000,
					"target_percent": 98,
					"is_target_reached": false
				},
				{
					"date": "04-06-2021",
					"steps": 6905,
					"distance": 4675,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "05-06-2021",
					"steps": 6701,
					"distance": 4754,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "06-06-2021",
					"steps": 7306,
					"distance": 4861,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "07-06-2021",
					"steps": 8255,
					"distance": 5774,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "08-06-2021",
					"steps": 5522,
					"distance": 4412,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 31
				},
				{
					"date": "09-06-2021",
					"steps": 6437,
					"distance": 4771,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "10-06-2021",
					"steps": 5543,
					"distance": 4232,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "11-06-2021",
					"steps": 6900,
					"distance": 5039,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "12-06-2021",
					"steps": 9023,
					"distance": 5816,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "13-06-2021",
					"steps": 7738,
					"distance": 5209,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "14-06-2021",
					"steps": 4475,
					"distance": 2930,
					"target": 5000,
					"target_percent": 90,
					"is_target_reached": false
				},
				{
					"date": "15-06-2021",
					"steps": 6121,
					"distance": 4733,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "16-06-2021",
					"steps": 1831,
					"distance": 1206,
					"target": 5000,
					"target_percent": 37,
					"is_target_reached": false
				},
				{
					"date": "17-06-2021",
					"steps": 6616,
					"distance": 4671,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "18-06-2021",
					"steps": 12730,
					"distance": 9324,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "19-06-2021",
					"steps": 15914,
					"distance": 10981,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "20-06-2021",
					"steps": 11961,
					"distance": 8222,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "21-06-2021",
					"steps": 4810,
					"distance": 3371,
					"target": 5000,
					"target_percent": 96,
					"is_target_reached": false
				},
				{
					"date": "22-06-2021",
					"steps": 10245,
					"distance": 8007,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 26
				},
				{
					"date": "23-06-2021",
					"steps": 8199,
					"distance": 6384,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 29
				},
				{
					"date": "24-06-2021",
					"steps": 7526,
					"distance": 6359,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "25-06-2021",
					"steps": 1103,
					"distance": 810,
					"target": 5000,
					"target_percent": 22,
					"is_target_reached": false
				},
				{
					"date": "26-06-2021",
					"steps": 4193,
					"distance": 2887,
					"target": 5000,
					"target_percent": 84,
					"is_target_reached": false
				},
				{
					"date": "27-06-2021",
					"steps": 6639,
					"distance": 4257,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "28-06-2021",
					"steps": 7172,
					"distance": 6321,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true
				},
				{
					"date": "29-06-2021",
					"steps": 10272,
					"distance": 7683,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 18
				},
				{
					"date": "30-06-2021",
					"steps": 8790,
					"distance": 7028,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 22
				},
				{
					"date": "01-07-2021",
					"steps": 6291,
					"distance": 5071,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 31
				},
				{
					"date": "02-07-2021",
					"steps": 8398,
					"distance": 6766,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 31
				},
				{
					"date": "03-07-2021",
					"steps": 11244,
					"distance": 7440,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 29
				},
				{
					"date": "04-07-2021",
					"steps": 3006,
					"distance": 2045,
					"target": 5000,
					"target_percent": 60,
					"is_target_reached": false,
					"position": 31
				},
				{
					"date": "05-07-2021",
					"steps": 9193,
					"distance": 7476,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 27
				},
				{
					"date": "06-07-2021",
					"steps": 5750,
					"distance": 4587,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 22
				},
				{
					"date": "07-07-2021",
					"steps": 13895,
					"distance": 11238,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 6
				},
				{
					"date": "08-07-2021",
					"steps": 9294,
					"distance": 7121,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 18
				},
				{
					"date": "09-07-2021",
					"steps": 7754,
					"distance": 6034,
					"target": 5000,
					"target_percent": 100,
					"is_target_reached": true,
					"position": 31
				}
			],
			"request_id": "40"
		},
		"request_id": "40"
	},
	"apps.isNotificationsAllowed": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"is_allowed": true
			},
			"request_id": "46"
		},
		"request_id": "46"
	},
	"vkRun.getNotifySettings": {
		"type": "VKWebAppCallAPIMethodResult",
		"data": {
			"response": {
				"is_achievements_enabled": true,
				"is_challenges_enabled": true,
				"is_goal_enabled": true,
				"is_activity_enabled": true,
				"is_novelties_enabled": true
			},
			"request_id": "47"
		},
		"request_id": "47"
	}
}




var handler = {
	get: function(target, name){
		return (args) => {
			const params = JSON.parse(args);
			console.log(`Call ${name}`, params);
			if (name === "VKWebAppInit") {
				beforeInit.forEach( ({type,data}) => {
					response(type, data)
				} )
				setTimeout(() => {
					response('VKWebAppInitResult', {}, getRequestId(args));
				}, 1);
			} else if (name === "VKWebAppGetAuthToken")  {
				response('VKWebAppGetAuthTokenResult', { access_token: "HELLO", scope: params.scope }, getRequestId(args));
			} else if (name === "VKWebAppCallAPIMethod") {
				const method = params.method;
				if (responseByApiName[method]) {
					const {type, data}  = responseByApiName[method];
					response(type, data, getRequestId(args));
				} else {
					console.error("Unknown method call", method);
				}
			} else if (name === "VKWebAppStorageGet") {
				response("VKWebAppStorageGetResult", {
					keys: params.keys.map(k => ({
						key:k,
						value:"",
					}))
				}, getRequestId(args));
			} else {
				if (responseByName[name]) {
					const {type, data}  = responseByName[name];
					response(type, data, getRequestId(args));
				} else {
					console.error("Unknown method call", name);
				}
			}



		}
	}
};

var p = new Proxy({}, handler);
window.AndroidBridge = p;
