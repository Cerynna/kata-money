def coinChange(coins, amount):
    # Initialisation du tableau de mémoïsation
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    # Calcul du nombre minimum de pièces pour chaque montant jusqu'à la somme demandée
    for i in range(1, amount + 1):
        for j in range(len(coins)):
            if coins[j] <= i:
                dp[i] = min(dp[i], dp[i - coins[j]] + 1)

    # Vérification si la somme est réalisable ou non
    return dp[amount] if dp[amount] != float('inf') else -1

# Exemple d'utilisation
coins = [1, 2, 5]
amount = 11
minimumCoins = coinChange(coins, amount)
print(minimumCoins)