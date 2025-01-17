import {
  QueryStatus,
  RpcError,
  GetQueryRunResultsRpcResponse,
  ResultFormat,
  mapApiQueryStateToStatus,
} from "../../../src/types";

export function getQueryResultsResponse(
  status: string = "QUERY_STATE_READY",
  error: RpcError | null = null
): GetQueryRunResultsRpcResponse {
  let base: GetQueryRunResultsRpcResponse = {
    jsonrpc: "2.0",
    id: 1,
    error: null,
    result: null,
  };

  const defaultData = {
    columnNames: [
      "block_number",
      "block_timestamp",
      "block_hash",
      "tx_hash",
      "nonce",
      "position",
      "origin_function_signature",
      "from_address",
      "to_address",
      "eth_value",
      "tx_fee",
      "gas_price",
      "gas_limit",
      "gas_used",
      "cumulative_gas_used",
      "input_data",
      "status",
      "tx_json",
      "__row_index",
    ],
    columnTypes: [
      "number",
      "date",
      "string",
      "string",
      "number",
      "number",
      "string",
      "string",
      "string",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "string",
      "string",
      "object",
      "number",
    ],
    rows: [
      [
        15053521,
        "2022-07-01T01:03:20.000Z",
        "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
        "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
        5228,
        142,
        "0x2e95b6c8",
        "0x7303c623bc32633d4c1320ab46538f5bab0959ea",
        "0x1111111254fb6c44bac0bed2854e76f90643097d",
        0,
        0.004411543611,
        40.571141215,
        167993,
        108736,
        11289236,
        "0x2e95b6c80000000000000000000000002791bfd60d232150bff86b39b7146c0eaaa2ba81000000000000000000000000000000000000000000001d4d3c9f5487881900000000000000000000000000000000000000000000000000000fb6f5c18351004b0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000140000000000000003b6d03400bec54c89a7d9f15c4e7faa8d47adedf374462ede26b9977",
        "SUCCESS",
        {
          block_hash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
          block_number: 15053521,
          chain_id: null,
          condition: null,
          creates: null,
          from: "0x7303c623bc32633d4c1320ab46538f5bab0959ea",
          gas: 167993,
          gas_price: 40571141215,
          hash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
          input:
            "0x2e95b6c80000000000000000000000002791bfd60d232150bff86b39b7146c0eaaa2ba81000000000000000000000000000000000000000000001d4d3c9f5487881900000000000000000000000000000000000000000000000000000fb6f5c18351004b0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000140000000000000003b6d03400bec54c89a7d9f15c4e7faa8d47adedf374462ede26b9977",
          max_fee_per_gas: null,
          max_priority_fee_per_gas: null,
          nonce: "0x146c",
          public_key: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
          r: "0x31815cdb89c4d6f65f3aa3437c9c27a6cb32b6af3796f6eb0adbf5fdfc547ac5",
          receipt: {
            blockHash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
            blockNumber: "0xe5b2d1",
            contractAddress: null,
            cumulativeGasUsed: "0xac4294",
            effectiveGasPrice: "0x9723a7c5f",
            from: "0x7303c623bc32633d4c1320ab46538f5bab0959ea",
            gasUsed: "0x1a8c0",
            logs: [
              {
                address: "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81",
                blockHash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
                blockNumber: "0xe5b2d1",
                data: "0x000000000000000000000000000000000000000000001d4d3c9f548788190000",
                decoded: {
                  contractName: "ERC20",
                  eventName: "Transfer",
                  inputs: {
                    from: "0x7303c623bc32633d4c1320ab46538f5bab0959ea",
                    to: "0x0bec54c89a7d9f15c4e7faa8d47adedf374462ed",
                    value: "138373395600000000000000",
                  },
                  logKey: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc:0",
                },
                logIndex: "0x120",
                removed: false,
                topics: [
                  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                  "0x0000000000000000000000007303c623bc32633d4c1320ab46538f5bab0959ea",
                  "0x0000000000000000000000000bec54c89a7d9f15c4e7faa8d47adedf374462ed",
                ],
                transactionHash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
                transactionIndex: "0x8e",
              },
              {
                address: "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81",
                blockHash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
                blockNumber: "0xe5b2d1",
                data: "0xffffffffffffffffffffffffffffffffffffffffffff00378d1be533fbc8e7ff",
                decoded: {
                  contractName: "ERC20",
                  eventName: "Approval",
                  inputs: {
                    owner: "0x7303c623bc32633d4c1320ab46538f5bab0959ea",
                    spender: "0x1111111254fb6c44bac0bed2854e76f90643097d",
                    value: "115792089237316195423570985008687907853269984665640562831556503289933129639935",
                  },
                  logKey: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc:1",
                },
                logIndex: "0x121",
                removed: false,
                topics: [
                  "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                  "0x0000000000000000000000007303c623bc32633d4c1320ab46538f5bab0959ea",
                  "0x0000000000000000000000001111111254fb6c44bac0bed2854e76f90643097d",
                ],
                transactionHash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
                transactionIndex: "0x8e",
              },
              {
                address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                blockHash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
                blockNumber: "0xe5b2d1",
                data: "0x0000000000000000000000000000000000000000000000000fcb2d05613e1c99",
                decoded: {
                  contractName: "WETH9",
                  eventName: "Transfer",
                  inputs: {
                    from: "0x0bec54c89a7d9f15c4e7faa8d47adedf374462ed",
                    to: "0x1111111254fb6c44bac0bed2854e76f90643097d",
                    value: "1138052831970729113",
                  },
                  logKey: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc:2",
                },
                logIndex: "0x122",
                removed: false,
                topics: [
                  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                  "0x0000000000000000000000000bec54c89a7d9f15c4e7faa8d47adedf374462ed",
                  "0x0000000000000000000000001111111254fb6c44bac0bed2854e76f90643097d",
                ],
                transactionHash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
                transactionIndex: "0x8e",
              },
              {
                address: "0x0bec54c89a7d9f15c4e7faa8d47adedf374462ed",
                blockHash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
                blockNumber: "0xe5b2d1",
                data: "0x000000000000000000000000000000000000000000218db370860b0d203c608e00000000000000000000000000000000000000000000001213f31668c8cc585e",
                decoded: {
                  eventName: "Sync",
                  inputs: {
                    reserve0: "40563715796736906880639118",
                    reserve1: "333478910672134494302",
                  },
                  logKey: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc:3",
                },
                logIndex: "0x123",
                removed: false,
                topics: ["0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"],
                transactionHash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
                transactionIndex: "0x8e",
              },
              {
                address: "0x0bec54c89a7d9f15c4e7faa8d47adedf374462ed",
                blockHash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
                blockNumber: "0xe5b2d1",
                data: "0x000000000000000000000000000000000000000000001d4d3c9f548788190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fcb2d05613e1c99",
                decoded: {
                  eventName: "Swap",
                  inputs: {
                    amount0In: "138373395600000000000000",
                    amount0Out: "0",
                    amount1In: "0",
                    amount1Out: "1138052831970729113",
                    sender: "0x1111111254fb6c44bac0bed2854e76f90643097d",
                    to: "0x1111111254fb6c44bac0bed2854e76f90643097d",
                  },
                  logKey: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc:4",
                },
                logIndex: "0x124",
                removed: false,
                topics: [
                  "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
                  "0x0000000000000000000000001111111254fb6c44bac0bed2854e76f90643097d",
                  "0x0000000000000000000000001111111254fb6c44bac0bed2854e76f90643097d",
                ],
                transactionHash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
                transactionIndex: "0x8e",
              },
              {
                address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                blockHash: "0x30b559cad268f6665ae14a1cdd4f2019d8232309f1412be8c17c38ed08a10178",
                blockNumber: "0xe5b2d1",
                data: "0x0000000000000000000000000000000000000000000000000fcb2d05613e1c99",
                decoded: {
                  contractName: "WETH9",
                  eventName: "Withdrawal",
                  inputs: {
                    src: "0x1111111254fb6c44bac0bed2854e76f90643097d",
                    wad: "1138052831970729113",
                  },
                  logKey: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc:5",
                },
                logIndex: "0x125",
                removed: false,
                topics: [
                  "0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65",
                  "0x0000000000000000000000001111111254fb6c44bac0bed2854e76f90643097d",
                ],
                transactionHash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
                transactionIndex: "0x8e",
              },
            ],
            logsBloom:
              "0x00200800000000000000000080002000000400000000000000100000000000000000000000200000000000000000000002000800080000000000000000200000000000000000000000000008000000600000000000600000000000000000000000000000000000000000000000000000000000000000040000000010000000000000010000001000000000000000004000000000000000080000004000000000060400000000000000000000000000000000000000000000000000000000000001000002000000000000000800000000000000000000001000000002000000000010200000000000000000000000000000000000000000000000000000000000",
            status: "0x1",
            to: "0x1111111254fb6c44bac0bed2854e76f90643097d",
            transactionHash: "0x92a993c0901c6ee620ec31e504f0496cdbd6088d6894ffc507e56bcfd80fb0fc",
            transactionIndex: "0x8e",
            type: "0x2",
          },
          s: "0x2888a1070bac8036df23ee909da8e9547f345b3a6b07c00a4b1d44698c558b4d",
          standard_v: null,
          to: "0x1111111254fb6c44bac0bed2854e76f90643097d",
          transaction_index: 142,
          v: "0x0",
          value: 0,
        },
        0,
      ],
    ],
    page: {
      currentPageNumber: 1,
      currentPageSize: 1,
      totalRows: 34000,
      totalPages: 34000,
    },
    sql: "select * from read_parquet('/data/2023/04/05/20/clg44olzq00cbn60tasvob5l2/*') offset 0 limit 1",
    format: ResultFormat.csv,
    originalQueryRun: {
      id: "clg44olzq00cbn60tasvob5l2",
      sqlStatementId: "clg44oly200c9n60tviq17sng",
      state: status,
      path: "2023/04/05/20/clg44olzq00cbn60tasvob5l2",
      fileCount: 1,
      lastFileNumber: 1,
      fileNames: "clg44olzq00cbn60tasvob5l2-consolidated-results.parquet",
      errorName: null,
      errorMessage: null,
      errorData: null,
      dataSourceQueryId: null,
      dataSourceSessionId: "17257398387030526",
      startedAt: "2023-04-05T20:14:55.000Z",
      queryRunningEndedAt: "2023-04-05T20:15:16.000Z",
      queryStreamingEndedAt: "2023-04-05T20:17:18.000Z",
      endedAt: "2023-04-05T20:17:18.000Z",
      rowCount: 17000,
      totalSize: 24904891,
      tags: {
        sdk_package: "python",
        sdk_version: "1.0.2",
        sdk_language: "python",
      },
      dataSourceId: "clf90gwee0002jvbu63diaa8u",
      userId: "clf8qd1eb0000jv08kbuw0dy4",
      createdAt: "2023-04-05T20:14:55.000Z",
      updatedAt: "2023-04-05T20:14:55.000Z",
      archivedAt: null,
    },
    redirectedToQueryRun: null,
  };

  if (error) {
    base.error = error;
  }

  base.result = defaultData;

  return base;
}
