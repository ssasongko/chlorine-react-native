import React from 'react'
import { FlatList, Image, View, Button as ButtonNative } from 'react-native'
import { Card, Text, Badge, Button } from 'react-native-paper';

const listMakanan = [
  {
    kode: "B01",
    jenis: "Minuman",
    nama: "Kopi Hitam",
    description: "Kopl Hitam dengan dibuat dengan teknik espresso, dimana biji kopi yang digunakan yaitu berasal dari Aceh Gayo jenis Arabika, disajkan dengan gula terpisah",
    image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1594099345/attached_image/ini-manfaat-konsumsi-kopi-hitam-dan-efek-sampingnya-untuk-kesehatan.jpg",
    harga: 10000,
  },
  {
    kode: "B02",
    jenis: "Minuman",
    nama: "Cappucino",
    description: "Paduan kopi dengan buih susu kental serta menggunakan sirup karamel, dimana biji kopi yang digunakan berasal dari Gunung Puntang Jawa Barat jenis Robusta",
    image: "https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg",
    harga: 20000,
  },
  {
    kode: "M03",
    jenis: "Minuman",
    nama: "Sparkling Tea",
    description: "Minuman Teh yang menggunakan daun teh dari pegunungan daerah Garut dengan tambahan sari melati asli dan gula merah alami",
    image: "https://itoen-ultrajaya.co.id/wp-content/uploads/2020/02/01-greentea.jpg",
    harga: 15000,
  },
  {
    kode: "F01",
    jenis: "Makanan",
    nama: "Batagor",
    description: "Baso dan Tahu Goreng dengan sajian bumbu kacang dan kecap khas Bandung",
    image: "https://asset.kompas.com/crops/AXlEeTnE0bnBHsmoByYpY3I35b0=/0x48:1000x715/750x500/data/photo/2020/09/06/5f54c3ebb1d41.jpg",
    harga: 25000,
  },
  {
    kode: "F02",
    jenis: "Makanan",
    nama: "Cireng",
    description: "Makanan ringan berupa tepung kanji goreng isi bahan dasar tempe fermentasi yang disebut oncom, disajikan dengan bumbu kacang pedas",
    image: "https://cdn1-production-images-kly.akamaized.net/4v4Ut-ilWk8xVm0Ez2jTDWjup9I=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3535886/original/062497100_1628523130-IG_resepmasakanrumah__.jpg",
    harga: 10000,
  },
  {
    kode: "F03",
    jenis: "Makanan",
    nama: "Nasi Goreng",
    description: "Nasi goreng ayam yang disajikan dengan telur mata sapi disertai satai ayam",
    image: "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
    harga: 50000,
  },
  {
    kode: "D01",
    jenis: "Dessert",
    nama: "Cheese Cake",
    description: "Kue Tart 1 slice dengan bahan utama cream cheese dengan topping buah- buahan asli seperti anggur, jeruk, kiwi",
    image: "https://sweetrip.id/wp-content/uploads/2021/12/resep-cheddar-cheese-cake.jpg",
    harga: 40000,
  },
  {
    kode: "D02",
    jenis: "Dessert",
    nama: "Black Salad",
    description: "Potongan buah-buah segar yang terdiri daril Pepaya, Jambu, melon, dan Mangga disajikan dengan bumbu rujak kacang pedas dan gula merah",
    image: "https://foolproofliving.com/wp-content/uploads/2021/07/Black-rice-salad-recipe-image.jpg",
    harga: 30000,
  },
];

const MenuScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}>
      <FlatList
        data={listMakanan}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 20 }}>
            <Image source={{ uri: `${item?.image}` }}
              style={{ width: '100%', height: 200 }}
            />
            <Card.Content style={{ padding: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>{item?.nama}</Text>
                <Badge size={25}>
                  {item?.jenis}
                </Badge>
              </View>
              <Text variant="bodyMedium" style={{ marginTop: 5 }}>Kode: {item.kode}</Text>
              <Text variant="bodyMedium" style={{ marginTop: 5 }}>{item?.description}.</Text>
              <Text variant="titleMedium" style={{ marginTop: 5 }}>Rp. {item?.harga}</Text>
            </Card.Content>
          </Card>
        )}
        keyExtractor={item => item.kode}
      />
    </View>
  )
}

export default MenuScreen