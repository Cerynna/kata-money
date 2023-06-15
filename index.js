function coinChange(coins, amount) {
  // Initialisation du tableau de mémoïsation
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  // Calcul du nombre minimum de pièces pour chaque montant jusqu'à la somme demandée
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  // Vérification si la somme est réalisable ou non
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Exemple d'utilisation
const coins = [1, 2, 5];
const amount = 120;
const minimumCoins = coinChange(coins, amount);
console.log(minimumCoins); // Affiche 3