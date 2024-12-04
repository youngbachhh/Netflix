import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function CategoryItem({ category }) {
	return (
		<View style={{marginRight: 15}}>
			<View
				style={{
					padding: 12,
					backgroundColor: Colors.ICON_BG,
					borderRadius: 99,
				}}
			>
				<Image
					source={{ uri: category.icon }}
					style={{ width: 40, height: 40 }}
				/>
			</View>

			<Text
				style={{
					fontSize: 12,
					textAlign: "center",
					fontFamily: "kanit-medium",
					marginTop: 5,
				}}
			>
				{category.name}
			</Text>
		</View>
	);
}
