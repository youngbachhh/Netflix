import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	Linking,
	Share,
} from "react-native";
import React from "react";

export default function ActionButton({ business }) {
	const actionButtonMenu = [
		{
			id: 1,
			name: "Call",
			icon: require("./../../assets/images/call.png"),
			url: "tel:" + business?.contact,
		},
		{
			id: 2,
			name: "Location",
			icon: require("./../../assets/images/pin.png"),
			url:
				"https:://www.google.com/maps/search/?api=1&query=" +
				business?.address,
		},
		{
			id: 3,
			name: "Web",
			icon: require("./../../assets/images/web.png"),
			url: business?.website,
		},
		{
			id: 4,
			name: "Share",
			icon: require("./../../assets/images/share.png"),
			url: business?.website,
		},
	];

	const handleActionButton = (item) => {
		if (item.name == "Share") {
			Share.share({
				message:
					business?.name +
					"\n Address:" +
					business?.address +
					"\n Website:" +
					business?.website,
			});
			return;
		}
		Linking.openURL(item.url);
	};

	return (
		<View
			style={{
				paddingInline: 20,
				backgroundColor: "#fff",
			}}
		>
			<FlatList
				data={actionButtonMenu}
				numColumns={4}
				columnWrapperStyle={{ justifyContent: "space-between" }}
				renderItem={({ item, index }) => {
					return (
						<TouchableOpacity
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: 10,
								borderBottomWidth: 1,
								borderBottomColor: "#f2f2f2",
							}}
							key={index}
							onPress={() => handleActionButton(item)}
						>
							<Image
								source={item?.icon}
								style={{
									width: 40,
									height: 40,
								}}
							/>
							<Text
								style={{
									fontSize: 14,
									fontFamily: "kanit-medium",
								}}
							>
								{item?.name}
							</Text>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}
