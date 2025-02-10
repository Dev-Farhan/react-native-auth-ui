import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, height, width } from "@/utlis/Contants";
import { router } from "expo-router";
import Button from "@/components/Button";

const Onboarding: FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View>
          <Image
            source={require("../../assets/images/onBoarding.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Discover your {"\n"}Dream job here{" "}
          </Text>
          <Text style={styles.text}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => router.push("/sign-in")}
            text="Login"
            variant="dark"
            // varient="dark"
          />
          <Button
            onPress={() => router.push("/sign-up")}
            text="Register"
            variant="light"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: width * 0.7,
    height: height * 0.6,
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: Colors.primary,
    fontSize: 34,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 45,
    letterSpacing: 2,
  },
  text: {
    width: width * 0.7,
    color: "black",
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 23,
    marginVertical: 15,
    lineHeight: 20,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 9,
    justifyContent: "space-around",
    marginVertical: 30,
  },
});
