import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
} from "react-native";
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSpecific } from "./store/activities/actions";
import store from "./store";
import { selectActivity } from "./store/activities/selectors";

function App() {
  const randomNum = useRef(Math.random()).current;
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  const testFunction = () => {
    const message = "Hello, Michiel, Robin & Ali";
    return setMessage(message);
    // <View>
    //   <Image
    //     source={{
    //       uri: `https://picsum.photos/500/300?random=${randomNum}`,
    //     }}
    //     style={{ width: "100%", height: 160, marginBottom: 30 }}
    //   />
    // </View>
  };

  const newActivity = useSelector(selectActivity);
  const [activity, setActivity] = useState({ activity: "No activity" });
  const [type, setType] = useState("select");
  const [participants, setParticipants] = useState("0");

  console.log("New activity is:", newActivity);

  const resActivity = newActivity.activity;
  console.log("resActivity is:", resActivity);

  function buttonClick() {
    <ActivityIndicator
      size="large"
      color="#c1262c"
      style={{ marginBottom: 30 }}
    />;
    dispatch(fetchSpecific(type, participants));
  }

  const imgUrl =
    "https://michielbrongers.nl/someimages/" + newActivity.type + ".png";

  console.log("imgUrl is", imgUrl);

  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        ! Bored
      </Text>

      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        I'm bored ...
      </Text>

      {resActivity === undefined ? (
        <View>
          {/* <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
            Loading ...
          </Text> */}
          <Button
            onPress={buttonClick}
            title="Give me an activity"
            color="#c1262c"
          />
        </View>
      ) : (
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
            {resActivity}
          </Text>

          <Image
            source={{
              uri: imgUrl,
            }}
            style={{ width: "100%", height: 160, marginBottom: 30 }}
          />

          <Button
            onPress={buttonClick}
            title="Give me another activity"
            color="#c1262c"
          />
        </View>
      )}
    </View>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
