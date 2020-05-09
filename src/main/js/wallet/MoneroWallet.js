/**
 * Copyright (c) 2017-2019 woodser
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Monero wallet interface and default implementations.
 * 
 * @interface
 */
class MoneroWallet {
  
  /**
   * Indicates if the wallet is watch-only, meaning it does have the private
   * spend key and can therefore only observe incoming outputs.
   * 
   * @return {bool} true if the wallet is watch-only, false otherwise
   */
  async isWatchOnly() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Set the wallet's daemon connection.
   * 
   * @param {string|MoneroRpcConnection} uriOrConnection - daemon's URI or connection (defaults to offline)
   * @param {string} username - username to authenticate with the daemon (optional)
   * @param {string} password - password to authenticate with the daemon (optional)
   */
  async setDaemonConnection(uriOrConnection, username, password) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's daemon connection.
   * 
   * @return {MoneroRpcConnection} the wallet's daemon connection
   */
  async getDaemonConnection() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Indicates if the wallet is connected to daemon.
   * 
   * @return {boolean} true if the wallet is connected to a daemon, false otherwise
   */
  async isConnected() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Gets the version of the wallet.
   * 
   * @return {MoneroVersion} the version of the wallet
   */
  async getVersion() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's path.
   * 
   * @return {string} the path the wallet can be opened with
   */
  async getPath() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's mnemonic phrase derived from the seed.
   * 
   * @return {string} the wallet's mnemonic phrase
   */
  async getMnemonic() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the language of the wallet's mnemonic phrase.
   * 
   * @return {string} the language of the wallet's mnemonic phrase
   */
  async getMnemonicLanguage() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's private view key.
   * 
   * @return {string} the wallet's private view key
   */
  async getPrivateViewKey() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's private spend key.
   * 
   * @return {string} the wallet's private spend key
   */
  async getPrivateSpendKey() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's public view key.
   * 
   * @return {string} the wallet's public view key
   */
  async getPublicViewKey() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's public spend key.
   * 
   * @return {string} the wallet's public spend key
   */
  async getPublicSpendKey() {
    throw new MoneroError("Not supported");
  }
    
  /**
   * Get the wallet's primary address.
   * 
   * @return {string} the wallet's primary address
   */
  async getPrimaryAddress() {
    return await this.getAddress(0, 0);
  }
  
  /**
   * Get the address of a specific subaddress.
   * 
   * @param {int} accountIdx - the account index of the address's subaddress
   * @param {int} subaddressIdx - the subaddress index within the account
   * @return {string} the receive address of the specified subaddress
   */
  async getAddress(accountIdx, subaddressIdx) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the account and subaddress index of the given address.
   * 
   * @param {string} address - address to get the account and subaddress index from
   * @return {MoneroSubaddress} the account and subaddress indices
   */
  async getAddressIndex(address) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get an integrated address based on this wallet's primary address and the
   * given payment ID.  Generates a random payment ID if none is given.
   * 
   * @param {string} paymentId - payment ID to generate an integrated address from (randomly generated if undefined)
   * @return {MoneroIntegratedAddress} the integrated address
   */
  async getIntegratedAddress(paymentId) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Decode an integrated address to get its standard address and payment id.
   * 
   * @param {string} integratedAddress - integrated address to decode
   * @return {MoneroIntegratedAddress} the decoded integrated address including standard address and payment id
   */
  async decodeIntegratedAddress(integratedAddress) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the height of the last block processed by the wallet (its index + 1).
   * 
   * @return {int} the height of the last block processed by the wallet
   */
  async getHeight() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the blockchain's height.
   * 
   * @return {int} the blockchain's height
   */
  async getDaemonHeight() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Synchronize the wallet with the daemon as a one-time synchronous process.
   * 
   * @param {MoneroWalletListener|number} listenerOrStartHeight - listener xor start height (defaults to no sync listener, the last synced block)
   * @param {number} startHeight - startHeight if not given in first arg (defaults to last synced block)
   */
  async sync(listenerOrStartHeight, startHeight) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Start an asynchronous thread to continuously synchronize the wallet with the daemon.
   */
  async startSyncing() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * <p>Rescan the blockchain for spent outputs.</p>
   * 
   * <p>Note: this can only be called with a trusted daemon.</p>
   * 
   * <p>Example use case: peer multisig hex is import when connected to an untrusted daemon,
   * so the wallet will not rescan spent outputs.  Then the wallet connects to a trusted
   * daemon.  This method should be manually invoked to rescan outputs.</p>
   */
  async rescanSpent() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * <p>Rescan the blockchain from scratch, losing any information which cannot be recovered from
   * the blockchain itself.</p>
   * 
   * <p>WARNING: This method discards local wallet data like destination addresses, tx secret keys,
   * tx notes, etc.</p>
   */
  async rescanBlockchain() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's balance.
   * 
   * @return {BigInteger} the wallet's balance
   */
  async getBalance() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get an account's balance.
   * 
   * @param {int} accountIdx - index of the account to get the balance of
   * @return {BigInteger} the account's balance
   */
  async getBalance(accountIdx) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get a subaddress's balance.
   * 
   * @param {int} accountIdx - index of the subaddress's account to get the balance of
   * @param {int} subaddressIdx - index of the subaddress to get the balance of
   * @return {BigInteger} the subaddress's balance
   */
  async getBalance(accountIdx, subaddressIdx) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get the wallet's unlocked balance.
   * 
   * @return {BigInteger} the wallet's unlocked balance
   */
  async getUnlockedBalance() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get an account's unlocked balance.
   * 
   * @param {int} accountIdx - index of the account to get the unlocked balance of
   * @return {BigInteger} the account's unlocked balance
   */
  async getUnlockedBalance(accountIdx) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get a subaddress's unlocked balance.
   * 
   * @param {int} accountIdx - index of the subaddress's account to get the unlocked balance of
   * @param {int} subaddressIdx - index of the subaddress to get the unlocked balance of
   * @return {BigInteger} the subaddress's balance
   */
  async getUnlockedBalance(accountIdx, subaddressIdx) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get accounts with a given tag.
   * 
   * @param {boolean} includeSubaddresses - include subaddresses if true
   * @param {string} tag - tag for filtering accounts, all accounts if undefined
   * @return {MoneroAccount[]} all accounts with the given tag
   */
  async getAccounts(includeSubaddresses, tag) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get an account.
   * 
   * @param {int} accountIdx - index of the account to get
   * @param {boolean} includeSubaddresses - include subaddresses if true
   * @return {MoneroAccount} the retrieved account
   */
  async getAccount(accountIdx, includeSubaddresses) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Create a new account with a label for the first subaddress.
   * 
   * @param {string} label - label for account's first subaddress (optional)
   * @return {MoneroAccount} the created account
   */
  async createAccount(label) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get subaddresses in an account.
   * 
   * @param {int} accountIdx - account to get subaddresses within
   * @param {int[]} subaddressIndices - indices of subaddresses to get (optional)
   * @return {MoneroSubaddress[]} the retrieved subaddresses
   */
  async getSubaddresses(accountIdx, subaddressIndices) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get a subaddress.
   * 
   * @param {int} accountIdx - index of the subaddress's account
   * @param {int} subaddressIdx - index of the subaddress within the account
   * @return {MoneroSubaddress} the retrieved subaddress
   */
  async getSubaddress(accountIdx, subaddressIdx) {
    assert(accountIdx >= 0);
    assert(subaddressIdx >= 0);
    return (await this.getSubaddresses(accountIdx, subaddressIdx))[0];
  }
  
  /**
   * Create a subaddress within an account.
   * 
   * @param {int} accountIdx - index of the account to create the subaddress within
   * @param {string} label - the label for the subaddress (optional)
   * @return {MoneroSubaddress} the created subaddress
   */
  async createSubaddress(accountIdx, label) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get a wallet transaction by hash.
   * 
   * @param {string} txHash - hash of a transaction to get
   * @return {MoneroTxWallet} the identified transactions
   */
  async getTx(txHash) {
    return (await this.getTxs([txHash]))[0];
  }
  
  /**
   * <p>Get wallet transactions.  Wallet transactions contain one or more
   * transfers that are either incoming or outgoing to the wallet.<p>
   * 
   * <p>Query results can be filtered by passing in a transaction query.
   * Transactions must meet every criteria defined in the query in order to
   * be returned.  All filtering is optional and no filtering is applied when
   * not defined.</p>
   * 
   * <p>Transactions can be fetched by a MoneroTxQuery, equivalent js object, or
   * array of tx hashes.</p>
   * 
   * @param {(MoneroTxQuery|string[]|object)} query - configures the query (optional)
   * @param {boolean} query.isConfirmed - get txs that are confirmed or not (optional)
   * @param {boolean} query.inTxPool - get txs that are in the tx pool or not (optional)
   * @param {boolean} query.isRelayed - get txs that are relayed or not (optional)
   * @param {boolean} query.isFailed - get txs that are failed or not (optional)
   * @param {boolean} query.isMinerTx - get miner txs or not (optional)
   * @param {string} query.hash - get a tx with the hash (optional)
   * @param {string} query.txHash - get a tx with the hash (alias of hash) (optional)
   * @param {string[]} query.txHashes - get txs with the hashes (optional)
   * @param {string} query.paymentId - get transactions with the payment id (optional)
   * @param {string[]} query.paymentIds - get transactions with the payment ids (optional)
   * @param {boolean} query.hasPaymentId - get transactions with a payment id or not (optional)
   * @param {int} query.minHeight - get txs with height >= the given height (optional)
   * @param {int} query.maxHeight - get txs with height <= the given height (optional)
   * @param {boolean} query.isOutgoing - get txs with an outgoing transfer or not (optional)
   * @param {boolean} query.isIncoming - get txs with an incoming transfer or not (optional)
   * @param {MoneroTransferQuery} query.transferQuery - get txs that have a transfer that meets this query (optional)
   * @param {boolean} query.includeOutputs - specifies that tx outputs should be returned with tx results (optional)
   * @return {MoneroTxWallet[]} wallet transactions per the configuration
   */
  async getTxs(query) {
    throw new MoneroError("Not supported");
  }

  /**
   * <p>Get incoming and outgoing transfers to and from this wallet.  An outgoing
   * transfer represents a total amount sent from one or more subaddresses
   * within an account to individual destination addresses, each with their
   * own amount.  An incoming transfer represents a total amount received into
   * a subaddress within an account.  Transfers belong to transactions which
   * are stored on the blockchain.</p>
   * 
   * <p>Query results can be configured or filtered by passing in a configuration.
   * Transfers must meet every criteria defined in the configuration in order
   * to be returned.  All configuration is optional and no filtering is applied
   * when not defined.</p>
   * 
   * @param {(MoneroTransferQuery|object)} query - configures the query (optional)
   * @param {boolean} query.isOutgoing - get transfers that are outgoing or not (optional)
   * @param {boolean} query.isIncoming - get transfers that are incoming or not (optional)
   * @param {string} query.address - wallet's address that a transfer either originated from (if outgoing) or is destined for (if incoming) (optional)
   * @param {int} query.accountIndex - get transfers that either originated from (if outgoing) or are destined for (if incoming) a specific account index (optional)
   * @param {int} query.subaddressIndex - get transfers that either originated from (if outgoing) or are destined for (if incoming) a specific subaddress index (optional)
   * @param {int[]} query.subaddressIndices - get transfers that either originated from (if outgoing) or are destined for (if incoming) specific subaddress indices (optional)
   * @param {BigInteger} query.amount - amount being transferred (optional)
   * @param {MoneroDestination[]} query.destinations - individual destinations of an outgoing transfer, which is local wallet data and NOT recoverable from the blockchain (optional)
   * @param {boolean} query.hasDestinations - get transfers that have destinations or not (optional)
   * @param {MoneroTxQuery} query.txQuery - get transfers whose transaction meets this query (optional)
   * @return {MoneroTransfer[]} are wallet transfers per the configuration
   */
  async getTransfers(query) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get all of the wallet's incoming transfers.
   * 
   * @param query - passed to getTransfers() with isIncoming=true
   * @return {MoneroIncomingTransfer[]} the wallet's incoming transfers
   */
  async getIncomingTransfers(query) {
    
    // copy query and set direction
    let _query;
    if (query === undefined) _query = new MoneroTransferQuery();
    else {
      if (query.isIncoming() === false) throw new MoneroError("Transfer query contradicts getting incoming transfers");
      _query = query.copy();
    }
    _query.setIsIncoming(true);
    
    // fetch and cast transfers
    let inTransfers = [];
    for (let transfer of await this.getTransfers(_query)) {
      inTransfers.push(transfer);
    }
    return inTransfers;
  }
  
  /**
   * Get all of the wallet's outgoing transfers.
   * 
   * @param query - passed to getTransfers() with isOutgoing=true
   * @return {MoneroOutgoingTransfer[]} the wallet's outgoing transfers
   */
  async getOutgoingTransfers(query) {
    
    // copy query and set direction
    let _query;
    if (query === undefined) _query = new MoneroTransferQuery();
    else {
      if (query.isOutgoing() === false) throw new MoneroError("Transfer query contradicts getting outgoing transfers");
      _query = query.copy();
    }
    _query.setIsOutgoing(true);
    
    // fetch and cast transfers
    let outTransfers = [];
    for (let transfer of await this.getTransfers(_query)) {
      outTransfers.push(transfer);
    }
    return outTransfers;
  }
  
  /**
   * <p>Get outputs created from previous transactions that belong to the wallet
   * (i.e. that the wallet can spend one time).  Outputs are part of
   * transactions which are stored in blocks on the blockchain.</p>
   * 
   * <p>Results can be configured by passing a MoneroOutputQuery.  Outputs must
   * meet every criteria defined in the query in order to be returned.  All
   * filtering is optional and no filtering is applied when not defined.</p>
   * 
   * @param {(MoneroOutputQuery|object)} query - configures the query (optional)
   * @param {int} query.accountIndex - get outputs associated with a specific account index
   * @param {int} query.subaddressIndex - get outputs associated with a specific subaddress index
   * @param {int[]} query.subaddressIndices - get outputs associated with specific subaddress indices
   * @param {BigInteger} query.amount - get outputs with a specific amount
   * @param {BigInteger} query.minAmount - get outputs greater than or equal to a minimum amount
   * @param {BigInteger} query.maxAmount - get outputs less than or equal to a maximum amount
   * @param {boolean} query.isSpent - get outputs that are spent or not
   * @param {MoneroKeyImage} query.keyImage - get outputs that match the fields defined in the given key image
   * @param {MoneroTxQuery} query.txQuery - get outputs whose transaction meets this filter (optional)
   * @return {MoneroOutputWallet[]} are queried outputs
   */
  async getOutputs(query) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Export all outputs in hex format.
   * 
   * @return {string} all outputs in hex format, undefined if no outputs
   */
  async getOutputsHex() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Import outputs in hex format.
   * 
   * @param {string} outputsHex - outputs in hex format
   * @return {int} the number of outputs imported
   */
  async importOutputsHex(outputsHex) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get all signed key images.
   * 
   * @return {MoneroKeyImage[]} the wallet's signed key images
   */
  async getKeyImages() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Import signed key images and verify their spent status.
   * 
   * @param {MoneroKeyImage[]} keyImages -  images to import and verify (requires hex and signature)
   * @return {MoneroKeyImageImportResult} results of the import
   */
  async importKeyImages(keyImages) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get new key images from the last imported outputs.
   * 
   * @return {MoneroKeyImage[]} the key images from the last imported outputs
   */
  async getNewKeyImagesFromLastImport() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Create a transaction to transfers funds from this wallet to a destination address.
   * The transaction may be relayed later.
   * 
   * @param {MoneroSendRequest|json|uint} requestOrAccountIndex - send request as an object or json or a source account index
   * @param {string} address - destination address to send funds to
   * @param {BigInteger} amount - amount being sent
   * @param {MoneroSendPriority} priority - send priority (default normal)
   * @return {MoneroTxSet} a tx set for the requested transaction if possible
   */
  async createTx(requestOrAccountIndex, address, amount, priority) {
    let request = MoneroWallet._normalizeSendRequest(requestOrAccountIndex, address, amount, priority);
    if (request.getCanSplit() !== undefined) assert.equal(request.getCanSplit(), false, "Cannot request split transactions with createTx() which prevents splitting; use createTxs() instead");
    request.setCanSplit(false);
    return await this.createTxs(request);
  }
  
  /**
   * Create one or more transactions to transfer funds from this wallet
   * according to the given request.  The transactions may later be relayed.
   *  
   * @param {MoneroSendRequest|json|uint} requestOrAccountIndex - send request as an object or json or a source account index
   * @param {string} address - destination address to send to (required iff no request given)
   * @param {BigInteger} sendAmount - amount to send (required iff no request given)
   * @return {MoneroTxSet} a tx set with the requested transactions
   */
  async createTxs(requestOrAccountIndex, address, amount, priority) {
    
    // normalize send request
    let request = MoneroWallet._normalizeSendRequest(requestOrAccountIndex, address, amount, priority);
    
    // modify request to not relay
    let requestedDoNotRelay = request.getDoNotRelay();
    request.setDoNotRelay(true);
    
    // invoke common method which doesn't relay
    let txSet = await this.sendTxs(request);
    
    // restore doNotRelay of request and txs
    request.setDoNotRelay(requestedDoNotRelay);
    if (txSet.getTxs() !== undefined) {
      for (let tx of txSet.getTxs()) tx.setDoNotRelay(requestedDoNotRelay);
    }
    
    // return results
    return txSet;
  }
  
  /**
   * Relay a previously created transaction.
   * 
   * @param {(MoneroTxWallet|string)} txOrMetadata - transaction or its metadata to relay
   * @return {string} the hash of the relayed tx
   */
  async relayTx(txOrMetadata) {
    return (await this.relayTxs([txOrMetadata]))[0];
  }
  
  /**
   * Relay previously created transactions.
   * 
   * @param {(MoneroTxWallet[]|string[])} txsOrMetadatas - transactions or their metadata to relay
   * @return {string[]} the hashes of the relayed txs
   */
  async relayTxs(txsOrMetadatas) {
    throw new MoneroError("Not supported");
  }

  /**
   * Create and relay a transaction to transfers funds from this wallet to
   * a destination address.
   *  
   * @param {MoneroSendRequest|json|uint} requestOrAccountIndex - send request as an object or json or a source account index
   * @param {string} address - destination address to send to (required iff no request given)
   * @param {BigInteger} sendAmount - amount to send (required iff no request given)
   * @return {MoneroTxSet} a tx set with the requested transactions
   */
  async sendTx(requestOrAccountIndex, address, amount, priority) {
    
    // normalize send request
    let request = MoneroWallet._normalizeSendRequest(requestOrAccountIndex, address, amount, priority);
    if (request.getCanSplit() !== undefined) assert.equal(request.getCanSplit(), false, "Cannot request split transactions with sendTx() which prevents splitting; use sendTxs() instead");
    request = request.setCanSplit(false);
    
    // call common send function
    return await this.sendTxs(request);
  }
  
  /**
   * Create and relay one or more transactions to transfer funds from this
   * wallet according to the given request.
   *  
   * @param {MoneroSendRequest|json|uint} requestOrAccountIndex - send request as an object or json or a source account index
   * @param {string} address - destination address to send to (required iff no request given)
   * @param {BigInteger} sendAmount - amount to send (required iff no request given)
   * @return {MoneroTxSet} a tx set with the requested transactions
   */
  async sendTxs(requestOrAccountIndex, address, amount, priority) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Sweep an output with a given key image.
   * 
   * @param {(MoneroSendRequest|string)} requestOrAddress - send request or destination address
   * @param {string} keyImage - key image hex of the output to sweep
   * @param {int} priority - sets a transaction priority as an integer between 0 and 3 (see) {MoneroSendPriority})
   * @return {MoneroTxSet} a tx set with the requested transaction
   */
  async sweepOutput(requestOrAddress, keyImage, priority) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Sweep a subaddress's unlocked funds to an address.
   * 
   * @param {int} accountIdx - index of the account
   * @param {int} subaddressIdx - index of the subaddress
   * @param {string} address - address to sweep the subaddress's funds to
   * @return {MoneroTxSet} a tx set with the requested transactions if possible
   */
  async sweepSubaddress(accountIdx, subaddressIdx, address) {
    let request = new MoneroSendRequest(address);
    request.setAccountIndex(accountIdx);
    request.setSubaddressIndices([subaddressIdx]);
    let txSets = await this.sweepUnlocked(request);
    return txSets[0];
  }
  
  /**
   * Sweep an acount's unlocked funds to an address.
   * 
   * @param {int} accountIdx - index of the account
   * @param {string} address - address to sweep the account's funds to
   * @return {MoneroTxSet} a tx set with the requested transactions if possible
   */
  async sweepAccount(accountIdx, address) {
    let request = new MoneroSendRequest(address);
    request.setAccountIndex(accountIdx);
    let txSets = await this.sweepUnlocked(request);
    return txSets[0]
  }
  
  /**
   * Sweep the wallet's unlocked funds to an address.
   * 
   * @param {string} address - address to sweep the wallet's funds to
   * @return {MoneroTxSet[]} the tx sets with the transactions which sweep the wallet
   */
  async sweepWallet(address) {
    return await this.sweepUnlocked(new MoneroSendRequest(address));
  }

  /**
   * Sweep all unlocked funds according to the given request.
   * 
   * @param {MoneroSendRequest} request - sweep configuration
   * @return {MoneroTxSet[]} the tx sets with the requested transactions
   */
  async sweepUnlocked(request) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Sweep all unmixable dust outputs back to the wallet to make them easier to spend and mix.
   * 
   * NOTE: Dust only exists pre RCT, so this method will throw "no dust to sweep" on new wallets.
   * 
   * @param {boolean} doNotRelay - specifies if the resulting transaction should not be relayed (defaults to false i.e. relayed)
   * @return {MoneroTxSet} a tx set with the requested transactions if possible
   */
  async sweepDust(doNotRelay) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Parse a tx set containing unsigned or multisig tx hex to a new tx set containing structured transactions.
   * 
   * @param {MoneroTxSet} txSet - a tx set containing unsigned or multisig tx hex
   * @return {MoneroTxSet} the parsed tx set containing structured transactions
   */
  async parseTxSet(txSet) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Sign unsigned transactions from a watch-only wallet.
   * 
   * @param {string} unsignedTxHex - unsigned transaction hex from when the transactions were created
   * @return {string} the signed transaction hex
   */
  async signTxs(unsignedTxHex) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Submit signed transactions from a watch-only wallet.
   * 
   * @param {string} signedTxHex - signed transaction hex from signTxs()
   * @return {string[]} the resulting transaction hashes
   */
  async submitTxs(signedTxHex) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Sign a message.
   * 
   * @param {string} msg - message to sign
   * @return {string} the signature
   */
  async signMessage(message) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Verify a signature on a message.
   * 
   * @param {string} msg - signed message
   * @param {string} address - signing address
   * @param {string} signature - signature
   * @return {boolean} true if the signature is good, false otherwise
   */
  async verifyMessage(message, address, signature) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get a transaction's secret key from its hash.
   * 
   * @param {string} txHash - transaction's hash
   * @return {string} - transaction's secret key
   */
  async getTxKey(txHash) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Check a transaction in the blockchain with its secret key.
   * 
   * @param {string} txHash - transaction to check
   * @param {string} txKey - transaction's secret key
   * @param {string} address - destination public address of the transaction
   * @return {MoneroCheckTx} the result of the check
   */
  async checkTxKey(txHash, txKey, address) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get a transaction signature to prove it.
   * 
   * @param {string} txHash - transaction to prove
   * @param {string} address - destination public address of the transaction
   * @param {string} message - message to include with the signature to further authenticate the proof (optional)
   * @return {string} the transaction signature
   */
  async getTxProof(txHash, address, message) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Prove a transaction by checking its signature.
   * 
   * @param {string} txHash - transaction to prove
   * @param {string} address - destination public address of the transaction
   * @param {string} message - message included with the signature to further authenticate the proof (optional)
   * @param {string} signature - transaction signature to confirm
   * @return {MoneroCheckTx} the result of the check
   */
  async checkTxProof(txHash, address, message, signature) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Generate a signature to prove a spend. Unlike proving a transaction, it does not require the destination public address.
   * 
   * @param {string} txHash - transaction to prove
   * @param {string} message - message to include with the signature to further authenticate the proof (optional)
   * @return {string} the transaction signature
   */
  async getSpendProof(txHash, message) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Prove a spend using a signature. Unlike proving a transaction, it does not require the destination public address.
   * 
   * @param {string} txHash - transaction to prove
   * @param {string} message - message included with the signature to further authenticate the proof (optional)
   * @param {string} signature - transaction signature to confirm
   * @return {boolean} true if the signature is good, false otherwise
   */
  async checkSpendProof(txHash, message, signature) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Generate a signature to prove the entire balance of the wallet.
   * 
   * @param message - message included with the signature to further authenticate the proof (optional)
   * @return the reserve proof signature
   */
  async getReserveProofWallet(message) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Generate a signature to prove an available amount in an account.
   * 
   * @param {int} accountIdx - account to prove ownership of the amount
   * @param {BigInteger} amount - minimum amount to prove as available in the account
   * @param {string} message - message to include with the signature to further authenticate the proof (optional)
   * @return {string} the reserve proof signature
   */
  async getReserveProofAccount(accountIdx, amount, message) {
    throw new MoneroError("Not supported");
  }

  /**
   * Proves a wallet has a disposable reserve using a signature.
   * 
   * @param {string} address - public wallet address
   * @param {string} message - message included with the signature to further authenticate the proof (optional)
   * @param {string} signature - reserve proof signature to check
   * @return {MoneroCheckReserve} the result of checking the signature proof
   */
  async checkReserveProof(address, message, signature) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get a transaction note.
   * 
   * @param {string} txHash - transaction to get the note of
   * @return {string} the tx note
   */
  async getTxNote(txHash) {
    return (await this.getTxNotes([txHash]))[0];
  }
  
  /**
   * Get notes for multiple transactions.
   * 
   * @param {string[]} txHashes - hashes of the transactions to get notes for
   * @return {string[]} notes for the transactions
   */
  async getTxNotes(txHashes) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Set a note for a specific transaction.
   * 
   * @param {string} txHash - hash of the transaction to set a note for
   * @param {string} note - the transaction note
   */
  async setTxNote(txHash, note) {
    await this.setTxNotes([txHash], [note]);
  }
  
  /**
   * Set notes for multiple transactions.
   * 
   * @param {string[]} txHashes - transactions to set notes for
   * @param {string[]} notes - notes to set for the transactions
   */
  async setTxNotes(txHashes, notes) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get address book entries.
   * 
   * @param {int[]} entryIndices - indices of the entries to get
   * @return {MoneroAddressBookEntry[]} the address book entries
   */
  async getAddressBookEntries(entryIndices) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Add an address book entry.
   * 
   * @param {string} address - entry address
   * @param {string} description - entry description (optional)
   * @return {int} the index of the added entry
   */
  async addAddressBookEntry(address, description) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Edit an address book entry.
   * 
   * @param {number} index - index of the address book entry to edit
   * @param {boolean} setAddress - specifies if the address should be updated
   * @param {string} address - updated address
   * @param {boolean} setDescription - specifies if the description should be updated
   * @param {string} description - updated description
   */
  async editAddressBookEntry(index, setAddress, address, setDescription, description) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Delete an address book entry.
   * 
   * @param {int} entryIdx - index of the entry to delete
   */
  async deleteAddressBookEntry(entryIdx) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Tag accounts.
   * 
   * @param {string} tag - tag to apply to the specified accounts
   * @param {int[]} accountIndices - indices of the accounts to tag
   */
  async tagAccounts(tag, accountIndices) {
    throw new MoneroError("Not supported");
  }

  /**
   * Untag accounts.
   * 
   * @param {int[]} accountIndices - indices of the accounts to untag
   */
  async untagAccounts(accountIndices) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Return all account tags.
   * 
   * @return {MoneroAccountTag[]} the wallet's account tags
   */
  async getAccountTags() {
    throw new MoneroError("Not supported");
  }

  /**
   * Sets a human-readable description for a tag.
   * 
   * @param {string} tag - tag to set a description for
   * @param {string} label - label to set for the tag
   */
  async setAccountTagLabel(tag, label) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Creates a payment URI from a send configuration.
   * 
   * @param {MoneroSendRequest} request - specifies configuration for a potential tx
   * @return {string} the payment uri
   */
  async createPaymentUri(request) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Parses a payment URI to a send request.
   * 
   * @param {string} uri - payment uri to parse
   * @return {MoneroSendRequest} the send configuration parsed from the uri
   */
  async parsePaymentUri(uri) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get an attribute.
   * 
   * @param {string} key - attribute to get the value of
   * @return {string} the attribute's value
   */
  async getAttribute(key) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Set an arbitrary attribute.
   * 
   * @param {string} key - attribute key
   * @param {string} val - attribute value
   */
  async setAttribute(key, val) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Start mining.
   * 
   * @param {int} numThreads - number of threads created for mining (optional)
   * @param {boolean} backgroundMining - specifies if mining should occur in the background (optional)
   * @param {boolean} ignoreBattery - specifies if the battery should be ignored for mining (optional)
   */
  async startMining(numThreads, backgroundMining, ignoreBattery) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Stop mining.
   */
  async stopMining() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Indicates if importing multisig data is needed for returning a correct balance.
   * 
   * @return {boolean} true if importing multisig data is needed for returning a correct balance, false otherwise
   */
  async isMultisigImportNeeded() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Indicates if this wallet is a multisig wallet.
   * 
   * @return {boolean} true if this is a multisig wallet, false otherwise
   */
  async isMultisig() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get multisig info about this wallet.
   * 
   * @return {MoneroMultisigInfo} multisig info about this wallet
   */
  async getMultisigInfo() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Get multisig info as hex to share with participants to begin creating a
   * multisig wallet.
   * 
   * @return {string} this wallet's multisig hex to share with participants
   */
  async prepareMultisig() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Make this wallet multisig by importing multisig hex from participants.
   * 
   * @param {String[]} multisigHexes - multisig hex from each participant
   * @param {int} threshold - number of signatures needed to sign transfers
   * @param {string} password - wallet password
   * @return {MoneroMultisigInitResult} the result which has the multisig's address xor this wallet's multisig hex to share with participants iff not N/N
   */
  async makeMultisig(multisigHexes, threshold, password) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Exchange multisig hex with participants in a M/N multisig wallet.
   * 
   * This process must be repeated with participants exactly N-M times.
   * 
   * @param {string[]} multisigHexes are multisig hex from each participant
   * @param {string} password - wallet's password // TODO monero core: redundant? wallet is created with password
   * @return {MoneroMultisigInitResult} the result which has the multisig's address xor this wallet's multisig hex to share with participants iff not done
   */
  async exchangeMultisigKeys(multisigHexes, password) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Export this wallet's multisig info as hex for other participants.
   * 
   * @return {string} this wallet's multisig info as hex for other participants
   */
  async getMultisigHex() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Import multisig info as hex from other participants.
   * 
   * @param {string[]} multisigHexes - multisig hex from each participant
   * @return {int} the number of outputs signed with the given multisig hex
   */
  async importMultisigHex(multisigHexes) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Sign multisig transactions from a multisig wallet.
   * 
   * @param {string} multisigTxHex - unsigned multisig transactions as hex
   * @return {MoneroMultisigSignResult} the result of signing the multisig transactions
   */
  async signMultisigTxHex(multisigTxHex) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Submit signed multisig transactions from a multisig wallet.
   * 
   * @param {string} signedMultisigTxHex - signed multisig hex returned from signMultisigTxHex()
   * @return {string[]} the resulting transaction hashes
   */
  async submitMultisigTxHex(signedMultisigTxHex) {
    throw new MoneroError("Not supported");
  }

  /**
   * Save the wallet at its current path.
   */
  save() {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Optionally save then close the wallet.
   *
   * @param {boolean} save - specifies if the wallet should be saved before being closed (default false)
   */
  async close(save) {
    throw new MoneroError("Not supported");
  }
  
  /**
   * Indicates if this wallet is closed or not.
   * 
   * @return {boolean} true if the wallet is closed, false otherwise
   */
  async isClosed() {
    throw new MoneroError("Not supported");
  }
  
  // -------------------------------- PRIVATE ---------------------------------
  
  static _normalizeTxQuery(query) {
    if (query instanceof MoneroTxQuery) query = query.copy();
    else if (Array.isArray(query)) query = new MoneroTxQuery().setTxHashes(query);
    else {
      query = Object.assign({}, query);
      query = new MoneroTxQuery(query);
    }
    if (query.getBlock() === undefined) query.setBlock(new MoneroBlock().setTxs([query]));
    if (query.getTransferQuery() === undefined) query.setTransferQuery(new MoneroTransferQuery());
    if (query.getOutputQuery() === undefined) query.setOutputQuery(new MoneroOutputQuery());
    return query;
  }
  
  static _normalizeTransferQuery(query) {
    if (query === undefined) query = new MoneroTransferQuery();
    else if (query instanceof MoneroTransferQuery) {
      if (query.getTxQuery() === undefined) query = query.copy();
      else {
        let txQuery = query.getTxQuery().copy();
        if (query.getTxQuery().getTransferQuery() === query) query = txQuery.getTransferQuery();
        else {
          assert.equal(query.getTxQuery().getTransferQuery(), undefined, "Transfer query's tx query must be circular reference or null");
          query = query.copy();
          query.setTxQuery(txQuery);
        }
      }
    } else {
      query = Object.assign({}, query);
      query = new MoneroTransferQuery(query).setTxQuery(new MoneroTxQuery(query));
    }
    if (query.getTxQuery() === undefined) query.setTxQuery(new MoneroTxQuery());
    query.getTxQuery().setTransferQuery(query);
    if (query.getTxQuery().getBlock() === undefined) query.getTxQuery().setBlock(new MoneroBlock().setTxs([query.getTxQuery()]));
    return query;
  }
  
  static _normalizeOutputQuery(query) {
    if (query === undefined) query = new MoneroOutputQuery();
    else if (query instanceof MoneroOutputQuery) {
      if (query.getTxQuery() === undefined) query = query.copy();
      else {
        let txQuery = query.getTxQuery().copy();
        if (query.getTxQuery().getOutputQuery() === query) query = txQuery.getOutputQuery();
        else {
          assert.equal(query.getTxQuery().getOutputQuery(), undefined, "Output query's tx query must be circular reference or null");
          query = query.copy();
          query.setTxQuery(txQuery);
        }
      }
    } else {
      query = Object.assign({}, query);
      query = new MoneroOutputQuery(query).setTxQuery(new MoneroTxQuery(query));
    }
    if (query.getTxQuery() === undefined) query.setTxQuery(new MoneroTxQuery());
    query.getTxQuery().setOutputQuery(query);
    if (query.getTxQuery().getBlock() === undefined) query.getTxQuery().setBlock(new MoneroBlock().setTxs([query.getTxQuery()]));
    return query;
  }
  
  static _normalizeSendRequest(requestOrAccountIndex, address, amount, priority) {
    if (requestOrAccountIndex === undefined) throw new MoneroError("First argument cannot be undefined");
    let request;
    if (requestOrAccountIndex instanceof MoneroSendRequest) {
      assert(address === undefined && amount === undefined && priority === undefined, "Sending requires a send request or parameters but not both");
      request = requestOrAccountIndex.copy();
    } else {
      if (requestOrAccountIndex instanceof Object) request = new MoneroSendRequest(requestOrAccountIndex);
      else request = new MoneroSendRequest(requestOrAccountIndex, address, amount, priority);
    }
    assert.notEqual(request.getDestinations(), undefined, "Must specify destinations");
    assert.equal(request.getSweepEachSubaddress(), undefined);
    assert.equal(request.getBelowAmount(), undefined);
    return request;
  }
  
  static _normalizeSweepOutputRequest(requestOrAddress, keyImage, priority) {
    let request;
    if (requestOrAddress instanceof MoneroSendRequest) {
      assert(keyImage === undefined && priority === undefined, "sweepOutput() requires a send request or parameters but not both");
      request = requestOrAddress;
    } else {
      if (requestOrAddress instanceof Object) request = new MoneroSendRequest(requestOrAddress);
      else {
        request = new MoneroSendRequest(requestOrAddress, undefined, priority);
        request.setKeyImage(keyImage);
      }
    }
    assert.equal(request.getSweepEachSubaddress(), undefined);
    assert.equal(request.getBelowAmount(), undefined);
    assert.equal(request.getCanSplit(), undefined, "Splitting is not applicable when sweeping output");
    if (request.getDestinations().length !== 1 || !request.getDestinations()[0].getAddress()) throw new MoneroError("Must provide exactly one destination address to sweep output to");
    return request;
  }
}

MoneroWallet.DEFAULT_LANGUAGE = "English";

module.exports = MoneroWallet;