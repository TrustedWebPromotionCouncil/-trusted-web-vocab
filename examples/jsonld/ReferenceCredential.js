const referenceCredentialJsonLd = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trusted-web.jp/credentials/schemas/v1"
  ],
  "id": "http://credential.org/credentials/373244",
  "type": ["VerifiableCredential", "Reference"],
  "issuer": "did:example:colleague",  // レファレンス回答者
  "issuanceDate": "2010-01-01T00:00:00Z",
  "credentialSubject": {
    "id": "did:example:applyer",  // 応募者
    "reference": {
      "text": "She is awesome because ...",
      "author": "did:example:colleague"
    }
  },
  // "proof": { ... }
}