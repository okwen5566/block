### 学习目标：
* 使用OpenZeppelin的StandardToken来创建自己的TutorialToken  
* truffle编译和部署智能合约

### 说明
* Truffle：是以太坊的开发环境、测试框架和资产通道。换句话说，它可以帮助你开发、发布和测试智能合约等等。你可以阅读有关 Truffle 套件的文档，了解更多信息。

* Ganache：以前叫作 TestRPC，如果你读过几个月前的教程的话，有可能他们在使用 TestRPC 的情境下配合使用了 Truffle，它在 TestRPC 和 Truffle 的集成后被重新命名为 Ganache。Ganache 的工作很简单：创建一个虚拟的以太坊区块链，并生成一些我们将在开发过程中用到的虚拟账号。
* Mist：Mist 是一个分布式网络 apps 的浏览器，相当于是只针对 Dapps 的 Chrome 或 Firefox。目前来说，它仍然是不安全的，所以你还不能在不受信任的 dapp 中使用它。  

* 以太坊钱包：它是 Mist 的一个版本，但只启动一个 dapp ——以太坊钱包。Mist 和以太坊钱包只是 UI（用户界面）前端，我们还需要一个将我们连接到以太坊区块链的核心程序（它可以是一个真正的以太坊区块链，也可以是一个测试版的）。

* Geth：Geth 是把你连接到区块链的核心应用程序，它也可以启动一个新的区块链（在我们这个示例中，我们将创建一个本地测试网区块链），创建合约，挖掘以太币等。
### 初始化环境
* Truffle要升级到最新版  
 ```sudo npm i -g truffle```
* truffle初始化  
```turffle init```
* 生成package.json  
```npm init -y```
* 集成OpenZeppelin  
```npm install -E openzeppelin-solidity```
* 安装ganache
```
npm install -g ganache-cli
```

### 目录结构说明
* contracts目录中包含Solidity合约代码，其中Migrations.sol是必须的，其他就是你自己写的合约代码了。

*  migrations目录中包含合约部署脚本，其中1_initial_migration.js就是用来部署Migrations.sol的，其他的脚本会按照顺序依次执行。

* test目录中就是测试代码了。

### 编写智能合约
* 创建TutorialToken.sol
* 引入OpenZeppelin的ERC20StarandToken
* 继承StandardToken合约 
* 合约内只要进行初始化就行，代码如下：
```
pragma solidity ^0.4.24;
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
contract TutorialToken is StandardToken {
    string public name = 'TutorialToken';
    string public symbol = 'TT';
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 1200000;

    function TutorialToken () {
      totalSupply_ = INITIAL_SUPPLY;
      balances[msg.sender] = INITIAL_SUPPLY;
    }
}
```

### 编译，部署
* 在/migrations目录下，用下述内容创建文件2_deploy_contracts.js：
```
var TutorialToken = artifacts.require("./TutorialToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TutorialToken);
};
```
> TutorialToken合约内的import语句会由编译器进行自动处理，它会自动导入StandardToken内的相关引用包。  
### 使用Ganache

修改truffle.js：
```
module.exports = {  
    networks: {  
        development: {  
            host: 'localhost',  
            port: '7545',  
            network_id: '*' // Match any network id  
        }  
    }  
};  
```
> 基本上是说，当使用开发网络时，使用端口7545，连接到127.0.0.1（localhost）的主机。

* 启动一个新的命令行，并输入以下命令:

```
ganache-cli -p 7545
```
> 它所做的，就是告诉ganache-cli从端口7545启动。
* 运行后：
> Ganache会为我们生成测试账户，默认情况下，每个账户都有未锁定的100个以太币并，所以我们可以自由地从那里发送以太币。

* 现在，回到我们的第一个命令行界面，执行两个命令：
```
truffle compile
truffle migrate --network development
```
> Compile 将把我们的 Solidity 代码编译成字节码（以太坊虚拟机 (EVM) 能理解的代码），在我们的例子中，Ganache 模拟了 EVM。  
Migrate（迁移） 会把代码部署到区块链，我们之前在 “truffle.js” 文件中设置了 “development” 网络，我们可以在那里找到区块链。

* 成功执行后，我们可以从cli看到有一行是合约地址：
> TutorialToken:0x3f68ee2a29feb2072d284867d4d0a7e407b66f94

* 现在输入以下命令启动 Truffle 控制台，这会帮助我们与ganache的区块链进行交互。
```
truffle console --network development
```
* 定义两个变量，用于方便使用账户
```
account0 = web3.eth.accounts[0]
account1 = web3.eth.accounts[1]
```
> 它会把第一个帐户的地址分配给变量 account0，第二个帐户分配给变量 account1。Web3 是一个 JavaScript API，它将 RPC 调用包装起来以方便我们与区块链进行交互。

### 获取合约对象
* 在truffle的cli下，定义一个变量myCoin，合约文件TutorialToken调用deployed进行合约实例化 
```
truffle(develop)> let myCoin;  
undefined  
truffle(develop)> TutorialToken.deployed().then(inst => myCoin = inst)  
```
* 调用合约中定义的方法
* 查询账户余额
```
truffle(develop)> myCoin.balanceOf(account0)
BigNumber { s: 1, e: 6, c: [ 1200000 ] }
truffle(develop)>
```
* 向一个账户进行转帐
```
truffle(develop)> myCoin.transfer(account1,199)
```
* 查询合约账户以及接收了转款账户的余额情况
```
truffle(develop)> myCoin.balanceOf(account0)
BigNumber { s: 1, e: 6, c: [ 1199801 ] }
truffle(develop)> myCoin.balanceOf(account1)
BigNumber { s: 1, e: 2, c: [ 199 ] }
```

### 使用Ganache客户端直观观看运行情况
* 安装  
[Ganache客户端下载](https://github.com/trufflesuite/ganache/releases)  
* Ganache默认运行在7545端口，可以在界面右上方的“设置”里进行更改。  
* 运行后默认创建10个账号，每个账号里有100ETH的余额。
要部署到链上，需要把IP、端口、网络ID告诉truffle。修改truffle.js的文件与之对应。

参考：
> [链接](https://github.com/devzl/ethereum-walkthrough-2)
