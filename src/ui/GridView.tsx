import React, {FC} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface Props<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  col?: number;
  itemStyle?: ViewStyle; // Adiciona a capacidade de passar estilos personalizados para o item
}

const GridView: FC<Props<any>> = ({data, col = 2, renderItem, itemStyle}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={[{ width: `${100 / col}%` }, styles.itemContainer, itemStyle]}>
          {renderItem(item)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    padding: 5, // Considerando mover o padding para cá para simplificar
  },
});

export default GridView;
