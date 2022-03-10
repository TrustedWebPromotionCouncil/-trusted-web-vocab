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

const citizenshipCredentialJsonLd = {
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


const jobCredentialJsonLd = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://trusted-web.jp/credentials/schemas/v1"
  ],
  "id": "http://yamada.com/credentials/3732",
  "type": ["VerifiableCredential", "EmployeeCredential"],
  "issuer": "did:example:previous-company",
  "issuanceDate": "2010-01-01T00:00:00Z",
  "credentialSubject": [{
    "id": "did:example:applyer",  // 応募者

    "worksFor": "did:example:previous-company",
    // 便宜上昇進などはしていないものとし、VC内に1つの部署・役職しか記載しないこととする。
    "memberOf": {
      "id": "did:example:department1",
      "type": ["Organization"],
      "name": "イノベーション事業部",
      "parentOrganization": "did:example:previous-company"
      //    
    },
    "jobTitle": "課長"
  },
  {
    "id": "did:example:previous-company",
    "type": ["Corporation"],
    "name": "山田地所",
    "address": "愛知県x市y町22-54",
    // ...
  },
  ],
  // "proof": { ... }
}
