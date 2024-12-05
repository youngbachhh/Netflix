import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function BusinessCard({ business }) {
	return (
		<View
			style={{
				padding: 12,
				marginRight: 12,
				backgroundColor: "#fff",
				borderRadius: 15,
			}}
		>
			<Image
				source={{ uri: business?.imageUrl }}
				style={{
					width: 200,
					height: 130,
					borderRadius: 15,
				}}
			/>
			<View>
				<Text
					style={{
						fontFamily: "kanit-bold",
						fontSize: 17,
						paddingTop: 10,
					}}
				>
					{business.name}
				</Text>
				<Text
					style={{
						fontFamily: "kanit",
						fontSize: 13,
						color: Colors.GRAY,
					}}
				>
					{business.address}
				</Text>

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							paddingTop: 8,
						}}
					>
						<Image
							source={require("./../../assets/images/star.png")}
							style={{
								width: 15,
								height: 15,
								// tintColor: Colors.PRIMARY,
							}}
						/>
						<Text
							style={{
								fontFamily: "kanit-medium",
								fontSize: 13,
								color: Colors.PRIMARY,
								marginLeft: 8,
							}}
						>
							4.5
						</Text>
					</View>
					<View
						style={{
							backgroundColor: Colors.PRIMARY,
							fontFamily: "kanit",
							paddingInline: 10,
							fontSize: 10,
							borderRadius: 5,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Text style={{ color: "#fff" }}>
							{business.category}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
