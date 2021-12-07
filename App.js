import React, { useRef, useState } from "react";
import { Text, View, ActivityIndicator, Image, Button } from "react-native";
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSpecific } from "./store/activities/actions";
import store from "./store";
import { selectActivity } from "./store/activities/selectors";
import { selectAppLoading } from "./store/appState/selectors";

function App() {
  const randomNum = useRef(Math.random()).current;
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  const newActivity = useSelector(selectActivity);
  const [activity, setActivity] = useState({ activity: "No activity" });
  const [type, setType] = useState("select");
  const [participants, setParticipants] = useState("0");

  const appLoading = useSelector(selectAppLoading); // we expect it true or false

  // console.log("appLoading is:", appLoading);

  console.log("New activity is:", newActivity);

  const resActivity = newActivity.activity;
  console.log("resActivity is:", resActivity);

  function buttonClick() {
    if (appLoading) return loading;

    dispatch(fetchSpecific(type, participants));
  }

  const imgUrl =
    "https://michielbrongers.nl/someimages/" + newActivity.type + ".png";

  // console.log("imgUrl is", imgUrl);

  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 50,
          color: "darkred",
          marginBottom: 30,
          fontStyle: "italic",
        }}
      >
        ! Bored
      </Text>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 30,
          marginTop: 70,
        }}
      >
        I'm bored ...
      </Text>
      {appLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginBottom: 30 }}
        />
      )}
      {!resActivity ? (
        <View>
          <Button
            onPress={buttonClick}
            title="Give me an activity"
            color="#c1262c"
          />
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "red",
              fontSize: 24,
              marginBottom: 30,
              marginTop: 50,
              textAlign: "center",
            }}
          >
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
