import React from 'react';
import { Text, View, Button } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

// const Bookmark = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
//     <RBSheet
//       ref={(ref) => {
//         this.RBSheet = ref;
//       }}
//       height={300}
//       openDuration={250}
//       customStyles={{
//         container: {
//           justifyContent: 'center',
//           alignItems: 'center',
//         },
//       }}
//     >

//     </RBSheet>
//   </View>
// );

class Bookmark extends React.Component {
  render() {
    return (
      <View>
        <Text>Add</Text>
      </View>
    );
  }
}

export default Bookmark;
