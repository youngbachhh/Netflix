import { View, Text } from "react-native";
import React from "react";

export default function About({ business }) {
	return (
		<View
			style={{
				padding: 20,
				backgroundColor: "#fff",
			}}
		>
			<Text
				style={{
					fontSize: 24,
					fontFamily: "kanit-bold",
				}}
			>
				About
			</Text>
			<Text
				style={{
					fontSize: 12,
					fontFamily: "kanit",
					marginTop: 10,
          lineHeight: 20
				}}
			>
				{business.about}
			</Text>
		</View>
	);
}
