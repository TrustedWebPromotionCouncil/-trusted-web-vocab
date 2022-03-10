
const jwt = 'eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vZ2l0aHViLmNvbS9EYXRhU2lnbkluYy90cnVzdGVkLXdlYi12b2NhYi9ibG9iL2YwNzgwYjg4MDg0Y2ZiYWUzYjExOTQ3MzM2MmIyZDFlMWM4MDdhYjkvc2NoZW1hLmpzb25sZCJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiSmFwYW5DaXRpemVuc2hpcENyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiYWRkcmVzcyI6IiIsImJpcnRoRGF0ZSI6IiIsImZhbWlseU5hbWUiOiLnjovlopMiLCJnaXZlbk5hbWUiOiLlpKrpg44iLCJnZW5kZXIiOiIifX0sInN1YiI6ImRpZDppb246RWlBRVVPQjg0Y0tXTGFNel9xb2k4QXhpZXg3SmRxRTl3dEh3V1J4dFZnR3VSUTpleUprWld4MFlTSTZleUp3WVhSamFHVnpJanBiZXlKaFkzUnBiMjRpT2lKeVpYQnNZV05sSWl3aVpHOWpkVzFsYm5RaU9uc2ljSFZpYkdsalMyVjVjeUk2VzNzaWFXUWlPaUpyWlhrdE1TSXNJbkIxWW14cFkwdGxlVXAzYXlJNmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lJeU0xVk9hbG95Umxwd2VWSkpMVGhHTlRnd2FEbFFXa2w1WlZOT1lteGFaMDR3VUhZM1JuTmxjVE5uSWl3aWVTSTZJamRqWlVWRmVEaEdVRkp6VWtwWVdtbHhiSEl0U1ZoSlZsWkZOVlpaUVVOc2MzaFJMVEpTT0dSc2Jsa2lmU3dpY0hWeWNHOXpaWE1pT2xzaVlYVjBhR1Z1ZEdsallYUnBiMjRpTENKclpYbEJaM0psWlcxbGJuUWlYU3dpZEhsd1pTSTZJa1ZqWkhOaFUyVmpjREkxTm1zeFZtVnlhV1pwWTJGMGFXOXVTMlY1TWpBeE9TSjlYWDE5WFN3aWRYQmtZWFJsUTI5dGJXbDBiV1Z1ZENJNklrVnBRakpSZDJaWmJGWkJiR2hEYkdaUmFrRnlNMXBGT0RaMFVXRXRWbXhmYTBkWmVsZG1ha05uUkRKUk1WRWlmU3dpYzNWbVptbDRSR0YwWVNJNmV5SmtaV3gwWVVoaGMyZ2lPaUpGYVVSalZYQkNRWFkzTTFwV1ZteFBSa3RsZW5GZlZWZzFYMUJwWWtZM2FERjRXR05mUmtkclFYcEViVzFCSWl3aWNtVmpiM1psY25sRGIyMXRhWFJ0Wlc1MElqb2lSV2xFYzJkdGJFODBRM0Z6ZUUxTlJGcHJaQzE1V21wVWNEZFFSRkZsVDJaS1pqZFZaSFoxUVRCSlZqQmhkeUo5ZlEiLCJuYmYiOjE2NDYxMjY2NzEsImlzcyI6ImRpZDppb246RWlBRVVPQjg0Y0tXTGFNel9xb2k4QXhpZXg3SmRxRTl3dEh3V1J4dFZnR3VSUTpleUprWld4MFlTSTZleUp3WVhSamFHVnpJanBiZXlKaFkzUnBiMjRpT2lKeVpYQnNZV05sSWl3aVpHOWpkVzFsYm5RaU9uc2ljSFZpYkdsalMyVjVjeUk2VzNzaWFXUWlPaUpyWlhrdE1TSXNJbkIxWW14cFkwdGxlVXAzYXlJNmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lJeU0xVk9hbG95Umxwd2VWSkpMVGhHTlRnd2FEbFFXa2w1WlZOT1lteGFaMDR3VUhZM1JuTmxjVE5uSWl3aWVTSTZJamRqWlVWRmVEaEdVRkp6VWtwWVdtbHhiSEl0U1ZoSlZsWkZOVlpaUVVOc2MzaFJMVEpTT0dSc2Jsa2lmU3dpY0hWeWNHOXpaWE1pT2xzaVlYVjBhR1Z1ZEdsallYUnBiMjRpTENKclpYbEJaM0psWlcxbGJuUWlYU3dpZEhsd1pTSTZJa1ZqWkhOaFUyVmpjREkxTm1zeFZtVnlhV1pwWTJGMGFXOXVTMlY1TWpBeE9TSjlYWDE5WFN3aWRYQmtZWFJsUTI5dGJXbDBiV1Z1ZENJNklrVnBRakpSZDJaWmJGWkJiR2hEYkdaUmFrRnlNMXBGT0RaMFVXRXRWbXhmYTBkWmVsZG1ha05uUkRKUk1WRWlmU3dpYzNWbVptbDRSR0YwWVNJNmV5SmtaV3gwWVVoaGMyZ2lPaUpGYVVSalZYQkNRWFkzTTFwV1ZteFBSa3RsZW5GZlZWZzFYMUJwWWtZM2FERjRXR05mUmtkclFYcEViVzFCSWl3aWNtVmpiM1psY25sRGIyMXRhWFJ0Wlc1MElqb2lSV2xFYzJkdGJFODBRM0Z6ZUUxTlJGcHJaQzE1V21wVWNEZFFSRkZsVDJaS1pqZFZaSFoxUVRCSlZqQmhkeUo5ZlEifQ.vd4zCHxw44dzSe_xb-KdVuACe_K-gcrXECUonEreb3I8AAzl6J4STtIKOJp1a2dlYL2I56JB69StyjsEPPgAiw';


const jWTSplitted = {
  header: 'eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ',
  payload: 'eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vZ2l0aHViLmNvbS9EYXRhU2lnbkluYy90cnVzdGVkLXdlYi12b2NhYi9ibG9iL2YwNzgwYjg4MDg0Y2ZiYWUzYjExOTQ3MzM2MmIyZDFlMWM4MDdhYjkvc2NoZW1hLmpzb25sZCJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiSmFwYW5DaXRpemVuc2hpcENyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiYWRkcmVzcyI6IiIsImJpcnRoRGF0ZSI6IiIsImZhbWlseU5hbWUiOiLnjovlopMiLCJnaXZlbk5hbWUiOiLlpKrpg44iLCJnZW5kZXIiOiIifX0sInN1YiI6ImRpZDppb246RWlBRVVPQjg0Y0tXTGFNel9xb2k4QXhpZXg3SmRxRTl3dEh3V1J4dFZnR3VSUTpleUprWld4MFlTSTZleUp3WVhSamFHVnpJanBiZXlKaFkzUnBiMjRpT2lKeVpYQnNZV05sSWl3aVpHOWpkVzFsYm5RaU9uc2ljSFZpYkdsalMyVjVjeUk2VzNzaWFXUWlPaUpyWlhrdE1TSXNJbkIxWW14cFkwdGxlVXAzYXlJNmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lJeU0xVk9hbG95Umxwd2VWSkpMVGhHTlRnd2FEbFFXa2w1WlZOT1lteGFaMDR3VUhZM1JuTmxjVE5uSWl3aWVTSTZJamRqWlVWRmVEaEdVRkp6VWtwWVdtbHhiSEl0U1ZoSlZsWkZOVlpaUVVOc2MzaFJMVEpTT0dSc2Jsa2lmU3dpY0hWeWNHOXpaWE1pT2xzaVlYVjBhR1Z1ZEdsallYUnBiMjRpTENKclpYbEJaM0psWlcxbGJuUWlYU3dpZEhsd1pTSTZJa1ZqWkhOaFUyVmpjREkxTm1zeFZtVnlhV1pwWTJGMGFXOXVTMlY1TWpBeE9TSjlYWDE5WFN3aWRYQmtZWFJsUTI5dGJXbDBiV1Z1ZENJNklrVnBRakpSZDJaWmJGWkJiR2hEYkdaUmFrRnlNMXBGT0RaMFVXRXRWbXhmYTBkWmVsZG1ha05uUkRKUk1WRWlmU3dpYzNWbVptbDRSR0YwWVNJNmV5SmtaV3gwWVVoaGMyZ2lPaUpGYVVSalZYQkNRWFkzTTFwV1ZteFBSa3RsZW5GZlZWZzFYMUJwWWtZM2FERjRXR05mUmtkclFYcEViVzFCSWl3aWNtVmpiM1psY25sRGIyMXRhWFJ0Wlc1MElqb2lSV2xFYzJkdGJFODBRM0Z6ZUUxTlJGcHJaQzE1V21wVWNEZFFSRkZsVDJaS1pqZFZaSFoxUVRCSlZqQmhkeUo5ZlEiLCJuYmYiOjE2NDYxMjY2NzEsImlzcyI6ImRpZDppb246RWlBRVVPQjg0Y0tXTGFNel9xb2k4QXhpZXg3SmRxRTl3dEh3V1J4dFZnR3VSUTpleUprWld4MFlTSTZleUp3WVhSamFHVnpJanBiZXlKaFkzUnBiMjRpT2lKeVpYQnNZV05sSWl3aVpHOWpkVzFsYm5RaU9uc2ljSFZpYkdsalMyVjVjeUk2VzNzaWFXUWlPaUpyWlhrdE1TSXNJbkIxWW14cFkwdGxlVXAzYXlJNmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lJeU0xVk9hbG95Umxwd2VWSkpMVGhHTlRnd2FEbFFXa2w1WlZOT1lteGFaMDR3VUhZM1JuTmxjVE5uSWl3aWVTSTZJamRqWlVWRmVEaEdVRkp6VWtwWVdtbHhiSEl0U1ZoSlZsWkZOVlpaUVVOc2MzaFJMVEpTT0dSc2Jsa2lmU3dpY0hWeWNHOXpaWE1pT2xzaVlYVjBhR1Z1ZEdsallYUnBiMjRpTENKclpYbEJaM0psWlcxbGJuUWlYU3dpZEhsd1pTSTZJa1ZqWkhOaFUyVmpjREkxTm1zeFZtVnlhV1pwWTJGMGFXOXVTMlY1TWpBeE9TSjlYWDE5WFN3aWRYQmtZWFJsUTI5dGJXbDBiV1Z1ZENJNklrVnBRakpSZDJaWmJGWkJiR2hEYkdaUmFrRnlNMXBGT0RaMFVXRXRWbXhmYTBkWmVsZG1ha05uUkRKUk1WRWlmU3dpYzNWbVptbDRSR0YwWVNJNmV5SmtaV3gwWVVoaGMyZ2lPaUpGYVVSalZYQkNRWFkzTTFwV1ZteFBSa3RsZW5GZlZWZzFYMUJwWWtZM2FERjRXR05mUmtkclFYcEViVzFCSWl3aWNtVmpiM1psY25sRGIyMXRhWFJ0Wlc1MElqb2lSV2xFYzJkdGJFODBRM0Z6ZUUxTlJGcHJaQzE1V21wVWNEZFFSRkZsVDJaS1pqZFZaSFoxUVRCSlZqQmhkeUo5ZlEifQ',
  signature: 'vd4zCHxw44dzSe_xb-KdVuACe_K-gcrXECUonEreb3I8AAzl6J4STtIKOJp1a2dlYL2I56JB69StyjsEPPgAiw'
};


const decodedHeader = {
  "alg": "ES256K",
  "typ": "JWT"
}


const decodedPayload = {
  "vc": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://github.com/DataSignInc/trusted-web-vocab/blob/f0780b88084cfbae3b119473362b2d1e1c807ab9/schema.jsonld"
    ],
    "type": [
      "VerifiableCredential",
      "Japan"
    ],
    "credentialSubject": {
      "address": "",
      "birthDate": "",
      "familyName": "王墓",
      "givenName": "太郎",
      "gender": ""
    }
  },
  "sub": "did:ion:EiAEUOB84cKWLaMz_qoi8Axiex7JdqE9wtHwWRxtVgGuRQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiIyM1VOaloyRlpweVJJLThGNTgwaDlQWkl5ZVNOYmxaZ04wUHY3RnNlcTNnIiwieSI6IjdjZUVFeDhGUFJzUkpYWmlxbHItSVhJVlZFNVZZQUNsc3hRLTJSOGRsblkifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iLCJrZXlBZ3JlZW1lbnQiXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XX19XSwidXBkYXRlQ29tbWl0bWVudCI6IkVpQjJRd2ZZbFZBbGhDbGZRakFyM1pFODZ0UWEtVmxfa0dZeldmakNnRDJRMVEifSwic3VmZml4RGF0YSI6eyJkZWx0YUhhc2giOiJFaURjVXBCQXY3M1pWVmxPRktlenFfVVg1X1BpYkY3aDF4WGNfRkdrQXpEbW1BIiwicmVjb3ZlcnlDb21taXRtZW50IjoiRWlEc2dtbE80Q3FzeE1NRFprZC15WmpUcDdQRFFlT2ZKZjdVZHZ1QTBJVjBhdyJ9fQ",
  "nbf": 1646126671,
  "iss": "did:ion:EiAEUOB84cKWLaMz_qoi8Axiex7JdqE9wtHwWRxtVgGuRQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiIyM1VOaloyRlpweVJJLThGNTgwaDlQWkl5ZVNOYmxaZ04wUHY3RnNlcTNnIiwieSI6IjdjZUVFeDhGUFJzUkpYWmlxbHItSVhJVlZFNVZZQUNsc3hRLTJSOGRsblkifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iLCJrZXlBZ3JlZW1lbnQiXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XX19XSwidXBkYXRlQ29tbWl0bWVudCI6IkVpQjJRd2ZZbFZBbGhDbGZRakFyM1pFODZ0UWEtVmxfa0dZeldmakNnRDJRMVEifSwic3VmZml4RGF0YSI6eyJkZWx0YUhhc2giOiJFaURjVXBCQXY3M1pWVmxPRktlenFfVVg1X1BpYkY3aDF4WGNfRkdrQXpEbW1BIiwicmVjb3ZlcnlDb21taXRtZW50IjoiRWlEc2dtbE80Q3FzeE1NRFprZC15WmpUcDdQRFFlT2ZKZjdVZHZ1QTBJVjBhdyJ9fQ"
};