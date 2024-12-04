import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors"
import useWarmUpBrowser from "@/hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";


export default function LoginScreen() {

	return (
		<View>
			<View
				style={{
					display: "flex",
					alignItems: "center",
					marginTop: 100,
				}}
			>
				<Image
					source={require("./../assets/images/login.png")}
					style={{
						width: 220,
						height: 450,
						borderRadius: 20,
						borderWidth: 8,
						borderColor: "#000",
					}}
				></Image>
			</View>

			<View style={styles.subContainer}>
				<Text
					style={{
						fontSize: 20,
						fontFamily: "kanit-bold",
						textAlign: "center",
					}}
				>
					Welcome to the Login Screen
					<Text
						style={{
							color: Colors.PRIMARY,
							fontSize: 24,
							padding: 10,
						}}
					>
						BachNV
					</Text>
				</Text>

				<TouchableOpacity style={styles.btn} >
					<Text
						style={{
							color: "#fff",
							textAlign: "center",
              fontFamily: "kanit",
						}}
					>
						Let's get stared
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	subContainer: {
		backgroundColor: "#fff",
		padding: -20,
	},
	btn: {
		backgroundColor: Colors.PRIMARY,
		padding: 10,
		margin: 20,
		borderRadius: 10,
		marginTop: 20,
	},
});
