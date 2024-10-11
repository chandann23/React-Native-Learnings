import { Text, View, StyleSheet, Image } from "react-native";

type Props = {
  name: string;
  image: string;
  moves: string[];
  weakness: string[];
  type: string;
  hp: number;
}

const PokemonCard = ({ name, image, moves, weakness, type, hp }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.hpContainer}>
          <Text style={styles.hp}>{hp}</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <View style={styles.typeContainer}>
        <View style={styles.typeButton}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Moves: <Text style={styles.value}>{moves.join(', ')}</Text>
        </Text>
        <Text style={styles.label}>
          Weakness: <Text style={styles.value}>{weakness.join(', ')}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hp: {
    fontSize: 18,
    color: 'red',
    marginLeft: 4,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 150,
    height: 150,
  },
  typeContainer: {
    marginBottom: 12,
  },
  typeButton: {
    backgroundColor: '#FFCDD2',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E57373',
  },
  typeText: {
    color: '#D32F2F',
    fontWeight: '600',
  },
  infoContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
  },
  value: {
    fontWeight: 'normal',
  },
});

export default PokemonCard;
