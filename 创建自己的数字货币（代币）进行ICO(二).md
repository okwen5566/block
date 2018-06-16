# 使用Truffle和infura部署以太坊合约
* ## 准备工作
* **安装HDWalletProvider**

```
npm install truffle-hdwallet-provider
```
* **注册Infura**
* https://infura.io/signup  
填写并提交表格后你就可以收到访问令牌。 相关信息将显示在屏幕上并发送到你提供的电子邮件。 需要记录下来这个访问令牌并确保它不被别人看到！

* ## 配置Truffle项目
* 在truffle.js文件的顶部添加以下代码：

```
var HDWalletProvider = require("truffle-hdwallet-provider");
```
> 在配置文件中定义HDWalletProvider对象

* 接下来，提供钱包助记词（mnemonic）来生成你的账户

```
var mnemonic = "orange apple banana ... ";
```
* 你申请的infura令牌

```
var INFURA_Access_Token = '3dfddsss';
```

> 警告 ：在此过程中，我们强烈建议将助记符存储在另一个（秘密）文件中，以降低助记符泄漏风险。 如果有人知道你的助记符，他们将拥有你所有的地址和私钥！

* 添加Ropsten网络定义

```
module.exports = { 
  networks: { 
    ropsten: { 
      provider: function() { 
        return new HDWalletProvider(mnemonic,
                "https://ropsten.infura.io/" + INFURA_Access_Token) 
        }, 
      network_id: 3 
    }
  } 
};
```
* 获取ether  
在metamask钱包的测试网络申请测试用的ether

* ## 部署合约
* 编译

```
truffle compile
```

* 部署到Ropsten网络

```
truffle migrate --network ropsten
```
* 注意 ：如果收到错误Error: Exceeds block gas limit ，你可能需要为合约手动设置油量上限（gas limit）。 有关详细信息，请参阅[Truffle配置文档](http://truffleframework.com/docs/advanced/configuration)。
* 如果一切顺利，应该可以看到合约地址

```
TutorialToken: 0xda05d7bfa5b6af7feab7bd156e812b4e564ef2b1 
```
* 检验是否部署成功
    * 如果想验证合约是否已成功部署，可以在Etherscan的Ropsten部分进行检查。 在搜索字段中，输入合约地址
    * 你应该可以看到有关交易的详细信息，包括交易受到保护的区块号。





