import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ToastAndroid,
	Image,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "@/constants/Colors";
// import { useUser } from "@clerk/clerk-expo";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";

export default function Reviews({ business }) {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");
	// const { user } = useUser();

	const ratingCompleted = (rating) => {
		setRating(rating);
	};

	const onSubmit = async () => {
		try {
			const docRef = doc(db, "Business", business?.id);
			await updateDoc(docRef, {
				reviews: arrayUnion({
					rating: rating,
					review: review,
					userName: "BachNV",
					userImage: "https://images5.alphacoders.com/852/852217.jpg",
				}),
			});

			ToastAndroid.show("Review submitted", ToastAndroid.BOTTOM);
			setRating(0);
			setReview("");
		} catch (error) {
			console.error("Error submitting review:", error);
			ToastAndroid.show("Error submitting review", ToastAndroid.BOTTOM);
		}
	};

	return (
		<View
			style={{
				paddingInline: 20,
				backgroundColor: "#fff",
			}}
		>
			<View>
				<Text
					style={{
						fontSize: 24,
						fontFamily: "kanit-bold",
					}}
				>
					Reviews
				</Text>
				<Rating
					onFinishRating={(rating) => ratingCompleted(rating)}
					style={{ paddingVertical: 10 }}
					imageSize={20}
					startingValue={rating}
				/>
				<TextInput
					placeholder="Write a review"
					multiline
					numberOfLines={4}
					style={{
						borderWidth: 1,
						borderColor: Colors.GRAY,
						padding: 10,
						borderRadius: 10,
						marginTop: 10,
						textAlignVertical: "top",
						minHeight: 100,
					}}
					value={review}
					onChangeText={setReview}
				/>
				<TouchableOpacity
					disabled={rating === 0 || review === ""}
					onPress={onSubmit}
					style={{
						backgroundColor: Colors.PRIMARY,
						padding: 10,
						borderRadius: 4,
						marginTop: 10,
						marginBottom: 10,
					}}
				>
					<Text
						style={{
							color: "#fff",
							textAlign: "center",
							fontFamily: "kanit-bold",
						}}
					>
						Submit
					</Text>
				</TouchableOpacity>
			</View>

			{/* Previous Review */}
			{business.reviews?.map((review, index) => (
				<View
					key={index}
					style={{
						padding: 10,
						borderWidth: 1,
						borderColor: Colors.GRAY,
						marginTop: 10,
						borderRadius: 10,
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<Image
							source={{ uri: review.userImage }}
							style={{
								width: 50,
								height: 50,
								borderRadius: 99,
							}}
						/>
						<View>
							<Text
								style={{
									fontSize: 14,
									fontFamily: "kanit-bold",
								}}
							>
								{review.userName}
							</Text>
							<Rating
								readonly
								startingValue={review.rating}
								imageSize={16}
								style={{ paddingVertical: 8 }}
							/>
							<Text
								style={{
									fontSize: 14,
									fontFamily: "kanit",
								}}
							>
								{review.review}
							</Text>
						</View>
					</View>
				</View>
			))}
		</View>
	);
}
