import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TextField from '../components/TextField';

export const FormScreen = () => {
  const [kodeMenu, setKodeMenu] = useState("");
  const [nomorMeja, setnomorMeja] = useState(0);
  const [harga, setHarga] = useState(0);

  return (
    <View>
      <Text>Form Pesanan</Text>
      <TextField
        val={kodeMenu}
        onChange={setKodeMenu}
        placeholder="Kode Menu"
      />
      <Text>{kodeMenu}</Text>
      <TextField
        val={nomorMeja}
        onChange={setnomorMeja}
        placeholder="Nomor Meja"
        inputMode={"numeric"}
      />
      <Text>{nomorMeja}</Text>
      <TextField
        val={harga}
        onChange={setHarga}
        placeholder="Harga"
        inputMode={"numeric"}
      />
      <Text>{harga}</Text>
      <View>
        <TextField
          val={harga}
          onChange={setHarga}
          placeholder="Harga"
          inputMode={"numeric"}
        />
        <Text>Heaaaaaaaaaaaaaaaallo World</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
