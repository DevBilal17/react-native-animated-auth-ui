import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
const index = () => {

    const navigation = useNavigation()
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="absolute h-full w-full"
        source={require("../assets/images/background.png")}
      />

      {/* Lights */}
      <View className="w-full absolute flex-row justify-around">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* Title And Form */}
      <View className="w-full h-full flex pt-40  justify-around">
        {/* Title */}
        <View className="flex items-center">
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white text-5xl font-bold tracking-wider">Login</Animated.Text>
        </View>
        {/* Form */}
        <View className="flex space-y-4 mx-4 items-center">
            <Animated.View entering={FadeInDown.duration(1000).springify()} className="w-full bg-black/5 p-3 rounded-2xl mb-4">
                <TextInput placeholder="Email" placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="w-full bg-black/5 p-3 rounded-2xl mb-6">
                <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor={'gray'}/>
            </Animated.View>

            {/* Button */}
            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl items-center">
                   <Text className="text-white font-bold text-center text-xl">
                      Login
                   </Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row  justify-center mt-3">
                <Text className="">
                    Don't have an account?  
                </Text>
                
                <TouchableOpacity onPress={()=> navigation.navigate("signup")}><Text className="text-sky-400 font-bold ml-1">Sign Up</Text></TouchableOpacity>
            </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default index;
