import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
function GameOverScreen({onStartNewGame}) {
  return (
    <View>
      <Title>Game Over!</Title>
      <PrimaryButton dynamicPress={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
