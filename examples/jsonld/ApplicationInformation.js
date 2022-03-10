const applicationInformationCredentialJsonLd = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://trusted-web.jp/credentials/schemas/v1"
    ],
    "id": "http://credential.org/credentials/913222",
    "type": ["VerifiableCredential", "ApplicationInformation"],
    "issuer": "did:example:applyer",
    "issuanceDate": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "id": "did:example:applyer",
        "email": "test@example.com",
        "applicationDate": "2022-01-10T00:00:00Z"
    },
    // "proof": { ... }
};