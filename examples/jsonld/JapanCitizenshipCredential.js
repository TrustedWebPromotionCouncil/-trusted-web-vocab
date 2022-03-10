const japanCitizenshipCredentialJsonLd = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trusted-web.jp/credentials/schemas/v1"
  ],
  "id": "http://credential.go.jp/credentials/3732",
  "type": ["VerifiableCredential", "JapanCitizenshipCredential"],
  "issuer": "did:example:japan",
  "issuanceDate": "2010-01-01T00:00:00Z",
  "credentialSubject": {
    "id": "did:example:applyer",  // 応募者
    "address": "愛知県A市B町1-1",
    "birthDate": "1990-01-01T00:00:00Z",
    "familyName": "Yamada",
    "givenName": "Hanako",
    "gender": "female",
  },
  // "proof": { ... }
}