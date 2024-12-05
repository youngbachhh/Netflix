import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";
import Business from "@/components/Home/Business";

export default function home() {
	return (
		<ScrollView
			style={{
				padding: 20,
        paddingTop: 0,
			}}
		>
			{/* Header */}
			<Header />
			{/* Slider */}
			<Slider />
			{/* Categories */}
			<Category />
			{/* List */}
			<Business />
		</ScrollView>
	);
}
