import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import TextField from '../components/TextField';
import moment from 'moment';

export const FormScreen = () => {
  const [kodeMenu, setKodeMenu] = useState("");
  const [nomorMeja, setnomorMeja] = useState(0);
  const [harga, setHarga] = useState(0);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', borderColor: 'black', borderBottomWidth: 2 }}>
        <Text variant="displayMedium">Buat Pesanan</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <TextField
          val={nomorMeja}
          onChange={setnomorMeja}
          placeholder="Nomor Meja"
          inputMode={"numeric"}
        />
        <TextField
          val={kodeMenu}
          onChange={setKodeMenu}
          placeholder="Kode Menu"
        />
        <TextField
          val={harga}
          onChange={setHarga}
          placeholder="Harga"
          inputMode={"numeric"}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <View style={{ flex: 2 }}>
            <TextField
              val={moment(date).format('HH:mm:ss')}
              placeholder="Time"
              inputMode={"numeric"}
              editable={false}
            />
          </View>
          <View style={{ flex: 1, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={showTimepicker} title="Choose Time" />
          </View>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <View style={{ flex: 2 }}>
            <TextField
              val={moment(date).format('D MMM YYYY')}
              placeholder="Date"
              inputMode={"numeric"}
              editable={false}
            />
          </View>
          <View style={{ flex: 1, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={showDatepicker} title="Choose Date" />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text variant="bodyLarge">Nomor Meja: {nomorMeja == 0 ? '-' : nomorMeja}</Text>
        <Text variant="bodyLarge" style={{ marginTop: 5 }}>Kode Menu: {kodeMenu ? kodeMenu : '-'}</Text>
        <Text variant="bodyLarge" style={{ marginTop: 5 }}>Harga: {harga == 0 ? '-' : harga}</Text>
        <Text variant="bodyLarge" style={{ marginTop: 5 }}>Time: {moment(date).format('HH:mm:ss')}</Text>
        <Text variant="bodyLarge" style={{ marginTop: 5 }}>Date: {moment(date).format('D MMM YYYY')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
    fontSize: 30,
  }
});
