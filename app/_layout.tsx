import LoginScreen from "@/components/LoginScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
	throw new Error(
		"Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
	);
}

export default function RootLayout() {
	useFonts({
		kanit: require("./../assets/fonts/Kanit-Regular.ttf"),
		"kanit-medium": require("./../assets/fonts/Kanit-Medium.ttf"),
		"kanit-bold": require("./../assets/fonts/Kanit-Bold.ttf"),
	});

	return (
		<ClerkProvider publishableKey={publishableKey}>
			{/* <SignedIn> */}
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="tabs" />
				</Stack>
			{/* </SignedIn> */}
			{/* <SignedOut>
        <LoginScreen />
			</SignedOut> */}
		</ClerkProvider>
	);
}
