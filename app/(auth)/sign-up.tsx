import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, height, width } from "@/utlis/Contants";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const SignUp: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.upperCircle}></View>
        <View style={styles.innerContainer}>
          {/* Header Text */}
          <Text style={styles.heading}>Create account</Text>
          <Text style={styles.subHeading}>
            Create an account so you can explore all the existing jobs
          </Text>

          {/* Input Fields */}
          <View style={styles.textInputContainer}>
            <InputField placeholder="Email" onPress={() => {}} />
            <InputField placeholder="Password" onPress={() => {}} />
            <InputField placeholder="Confirm password" onPress={() => {}} />

            {/* Sign-in Button */}
            <Button
              text="Sign up"
              onPress={() => {}}
              variant="dark"
              customStyle={{ width: width * 0.8 }}
            />

            {/* Sign-up Button */}
            <View style={styles.belowButtonContainer}>
              <Text style={styles.subHeading}>
                Already have an account
                <Text
                  style={styles.belowText}
                  onPress={() => router.push("/sign-in")}
                >
                  {" "}
                  Sign in
                </Text>
              </Text>
            </View>

            {/* Social Media Sign-in */}
            <View style={styles.socialMediaContainer}>
              <Text style={styles.belowText}>Or continue with</Text>
              <View style={styles.socialMediaIcons}>
                <View style={styles.iconWrapper}>
                  <AntDesign name="google" size={24} color="black" />
                </View>
                <View style={styles.iconWrapper}>
                  <FontAwesome5 name="facebook" size={24} color="black" />
                </View>
                <View style={styles.iconWrapper}>
                  <FontAwesome name="apple" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flexGrow: 1, // Allows centering even when content is small
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  upperCircle: {
    position: "absolute",
    right: 0,
    top: 0,
    width: width * 0.5,
    height: height * 0.2,
    backgroundColor: Colors.secondary,
    borderBottomLeftRadius: 250,
    overflow: "hidden",
  },
  heading: {
    color: Colors.primary,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    width: width * 0.7,
    lineHeight: 20,
  },
  textInputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    gap: 25, // Keeps spacing consistent
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginRight: width * 0.1, // Ensures proper right alignment
  },
  belowText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  belowButtonContainer: {},

  socialMediaContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  socialMediaIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
  },
});
