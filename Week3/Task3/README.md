## Week 3  |  Task 3

This is the third  Task from Week 3 in the summer training at Taibah Valley.

This task is divided into two parts:
1. The first part connect Ganache to the Remix IDE
2. The second part is to deploy a smart contract with wallet provider

## Part 1: Connect Ganache to the Remix IDE

We will first with run Ganache from the `QUICKSTART` option:

![QUICKSTART ETHEREUM](./img/QUICKSTART.png)

Then the local network will be created with fake accounts and balance.

![Ganache - Accounts](./img/Ganache.png)

To connect Ganache with Remix and use these accounts, we go to the `DEPLOY & RUN TRANSACTIONS` tab, and then from the `ENVIRONMENT` menu, choose `Dev - Ganache Provider`.

![Dev - Ganache Provider](./img/Ganache-Provider.png)

We must use the same `RPC SERVER`  as Ganache:

![Ganache RPC server](./img/Ganache-RPC.png)

After that, we will get all accounts in the `ACCOUNT` list:

![Accounts list](./img/Account.png)

Now we will deploy the following [Smart Contract](./W3T3.sol) using one of the accounts in the previous list:
```
contract W3T2 {
    string private message;
    
    // Set the message
    function setmessage(string memory _message) public {
        message = _message;
    }
    
    // Get the message
    function getmessage() public view returns (string memory) {
        return message;
    }
}
```

Once the smart contract is deployed, we can send transactions to the smart contract using the previous accounts.

![Send Transaction from Accounts list](./img/Transaction-ListAccount.png)

And Ganache displays all transactions under the `TRANSACTIONS` tab.

![Transactions in Ganache](./img/Ganache-Transactions.png)

<br>

## Part 2: Deploy a smart contract with wallet provider (Metamask)

In this part we will deploy smart contract in Remix using `MetaMask` wallet.

We will first import an account from Ganache into our wallet using `private key`.

![Private Key](./img/Private-Key.png)

![Import Account](./img/Import-Account.png)
![Imported Account](./img/Imported-Account.png)

Then we change the network in Metamask to Ganache (or add it manually).

![Ganache Network](./img/Ganache-Network.png)

When successfully importing the account, we can deploy the contract with the wallet from Remix by selecting `Injected Provider - MetaMask` from the `ENVIRONMENT` menu in the `DEPLOY & RUN TRANSACTIONS` tab.

![Injected Provider - MetaMask](./img/Injected-Provider-MetaMask.png)

Now we can press the Deploy button and it will ask us to confirm the transaction from the Meta Mask wallet.

![Confirm-Deploy](./img/Confirm-Deploy.png)

Also we will need to confirm any transaction before sending it.

![Confirm-Deploy](./img/Confirm-Transaction.png)

And Our wallet allows us to perform all smart contract functions.

![Wallet Transactions](./img/Wallet-Transactions.png)

Finally we can check all the transactions in Ganache under the `TRANSACTIONS` tab.

![Ganache All Transactions](./img/Ganache-All-Transactions.png)