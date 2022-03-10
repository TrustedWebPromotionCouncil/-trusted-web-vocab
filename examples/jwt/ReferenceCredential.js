
const jwt = 'eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vZ2l0aHViLmNvbS9EYXRhU2lnbkluYy90cnVzdGVkLXdlYi12b2NhYi9ibG9iL2YwNzgwYjg4MDg0Y2ZiYWUzYjExOTQ3MzM2MmIyZDFlMWM4MDdhYjkvc2NoZW1hLmpzb25sZCJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUmVmZXJlbmNlQ3JlZGVudGlhbCJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJyZWxhdGlvbnNoaXAiOiJib3NzIiwiY29tbXVuaWNhdGlvbkFiaWxpdHkiOiLlhobmu5HjgavkvJrorbDjgpLpgLLooYzjgZfjgabjgYTjgZ_jgIIiLCJhY2hpZXZlbWVudCI6IuODl-ODreOCuOOCp-OCr-ODiOODquODvOODgOODvOOBqOOBl-OBpuODl-ODreOCuOOCp-OCr-ODiOOCkuaIkOWKn-OBq-WwjuOBhOOBn-OAgiIsImF1dGhvciI6ImRpZDppb246RWlCV21zRTNTVk1TcU5EZ29VdFJidHBPQllaZkRuZUwwR2tCeWJFMEVvM1FEUTpleUprWld4MFlTSTZleUp3WVhSamFHVnpJanBiZXlKaFkzUnBiMjRpT2lKeVpYQnNZV05sSWl3aVpHOWpkVzFsYm5RaU9uc2ljSFZpYkdsalMyVjVjeUk2VzNzaWFXUWlPaUpyWlhrdE1TSXNJbkIxWW14cFkwdGxlVXAzYXlJNmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lKT1dGaHJTVFZWY3kxalIxazNXSEJOYWxVelVXNU5UMDF1VVMxUGJXbFlRbXN4TTBSSWMydHhaQzFuSWl3aWVTSTZJbEpCTW1GRmIybFFUWFpwYkUxd05rMWhaMU5UVjFSSlEzQkNZV1IyWm1GVVJHMHhUbFYyWDBoNGVtc2lmU3dpY0hWeWNHOXpaWE1pT2xzaVlYVjBhR1Z1ZEdsallYUnBiMjRpTENKclpYbEJaM0psWlcxbGJuUWlYU3dpZEhsd1pTSTZJa1ZqWkhOaFUyVmpjREkxTm1zeFZtVnlhV1pwWTJGMGFXOXVTMlY1TWpBeE9TSjlYWDE5WFN3aWRYQmtZWFJsUTI5dGJXbDBiV1Z1ZENJNklrVnBRemQ0YW1scmFHaEhjbmh1U0c1YWFUbFFNV05ZUjBsaWVWZFBaMUZQZGxsUk1qbHBOR1IwVkdKTmMzY2lmU3dpYzNWbVptbDRSR0YwWVNJNmV5SmtaV3gwWVVoaGMyZ2lPaUpGYVVSaWRIRTFNMHRoUlVsa2EwMVVjRzUzU1hreFl6TlFWbXh2UzBsdlpVbERTSGt5WlRVM2VqbDFTbTlSSWl3aWNtVmpiM1psY25sRGIyMXRhWFJ0Wlc1MElqb2lSV2xEVjIxbU4yMU5Za3B2TURocFJ6RkJia2hoT1ZKVVNVRlJTM0YyV2xGaVUxOUVaRGxhTnprelVUQjFkeUo5ZlEiLCJhbnN3ZXJEYXRlIjoiMjAyMi0wMy0wMVQwOToyNzozNy41ODBaIn19LCJzdWIiOiJkaWQ6aW9uOkVpQldtc0UzU1ZNU3FORGdvVXRSYnRwT0JZWmZEbmVMMEdrQnliRTBFbzNRRFE6ZXlKa1pXeDBZU0k2ZXlKd1lYUmphR1Z6SWpwYmV5SmhZM1JwYjI0aU9pSnlaWEJzWVdObElpd2laRzlqZFcxbGJuUWlPbnNpY0hWaWJHbGpTMlY1Y3lJNlczc2lhV1FpT2lKclpYa3RNU0lzSW5CMVlteHBZMHRsZVVwM2F5STZleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSk9XRmhyU1RWVmN5MWpSMWszV0hCTmFsVXpVVzVOVDAxdVVTMVBiV2xZUW1zeE0wUkljMnR4WkMxbklpd2llU0k2SWxKQk1tRkZiMmxRVFhacGJFMXdOazFoWjFOVFYxUkpRM0JDWVdSMlptRlVSRzB4VGxWMlgwaDRlbXNpZlN3aWNIVnljRzl6WlhNaU9sc2lZWFYwYUdWdWRHbGpZWFJwYjI0aUxDSnJaWGxCWjNKbFpXMWxiblFpWFN3aWRIbHdaU0k2SWtWalpITmhVMlZqY0RJMU5tc3hWbVZ5YVdacFkyRjBhVzl1UzJWNU1qQXhPU0o5WFgxOVhTd2lkWEJrWVhSbFEyOXRiV2wwYldWdWRDSTZJa1ZwUXpkNGFtbHJhR2hIY25odVNHNWFhVGxRTVdOWVIwbGllVmRQWjFGUGRsbFJNamxwTkdSMFZHSk5jM2NpZlN3aWMzVm1abWw0UkdGMFlTSTZleUprWld4MFlVaGhjMmdpT2lKRmFVUmlkSEUxTTB0aFJVbGthMDFVY0c1M1NYa3hZek5RVm14dlMwbHZaVWxEU0hreVpUVTNlamwxU205Uklpd2ljbVZqYjNabGNubERiMjF0YVhSdFpXNTBJam9pUldsRFYyMW1OMjFOWWtwdk1EaHBSekZCYmtoaE9WSlVTVUZSUzNGMldsRmlVMTlFWkRsYU56a3pVVEIxZHlKOWZRIiwibmJmIjoxNjQ2MTI2ODU3LCJpc3MiOiJkaWQ6aW9uOkVpQldtc0UzU1ZNU3FORGdvVXRSYnRwT0JZWmZEbmVMMEdrQnliRTBFbzNRRFE6ZXlKa1pXeDBZU0k2ZXlKd1lYUmphR1Z6SWpwYmV5SmhZM1JwYjI0aU9pSnlaWEJzWVdObElpd2laRzlqZFcxbGJuUWlPbnNpY0hWaWJHbGpTMlY1Y3lJNlczc2lhV1FpT2lKclpYa3RNU0lzSW5CMVlteHBZMHRsZVVwM2F5STZleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSk9XRmhyU1RWVmN5MWpSMWszV0hCTmFsVXpVVzVOVDAxdVVTMVBiV2xZUW1zeE0wUkljMnR4WkMxbklpd2llU0k2SWxKQk1tRkZiMmxRVFhacGJFMXdOazFoWjFOVFYxUkpRM0JDWVdSMlptRlVSRzB4VGxWMlgwaDRlbXNpZlN3aWNIVnljRzl6WlhNaU9sc2lZWFYwYUdWdWRHbGpZWFJwYjI0aUxDSnJaWGxCWjNKbFpXMWxiblFpWFN3aWRIbHdaU0k2SWtWalpITmhVMlZqY0RJMU5tc3hWbVZ5YVdacFkyRjBhVzl1UzJWNU1qQXhPU0o5WFgxOVhTd2lkWEJrWVhSbFEyOXRiV2wwYldWdWRDSTZJa1ZwUXpkNGFtbHJhR2hIY25odVNHNWFhVGxRTVdOWVIwbGllVmRQWjFGUGRsbFJNamxwTkdSMFZHSk5jM2NpZlN3aWMzVm1abWw0UkdGMFlTSTZleUprWld4MFlVaGhjMmdpT2lKRmFVUmlkSEUxTTB0aFJVbGthMDFVY0c1M1NYa3hZek5RVm14dlMwbHZaVWxEU0hreVpUVTNlamwxU205Uklpd2ljbVZqYjNabGNubERiMjF0YVhSdFpXNTBJam9pUldsRFYyMW1OMjFOWWtwdk1EaHBSekZCYmtoaE9WSlVTVUZSUzNGMldsRmlVMTlFWkRsYU56a3pVVEIxZHlKOWZRIn0.tgYytslGCJafj2vvrhVLjNnotsaZ2OQTB1k6FsHMG45cgm7a528xz_ZHAAOk1P2FVAmOPnWAmxm3CN53l1Gv-g',


const jwtSplitted = {
  header: 'eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ',
  payload: 'eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vZ2l0aHViLmNvbS9EYXRhU2lnbkluYy90cnVzdGVkLXdlYi12b2NhYi9ibG9iL2YwNzgwYjg4MDg0Y2ZiYWUzYjExOTQ3MzM2MmIyZDFlMWM4MDdhYjkvc2NoZW1hLmpzb25sZCJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUmVmZXJlbmNlQ3JlZGVudGlhbCJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJyZWxhdGlvbnNoaXAiOiJib3NzIiwiY29tbXVuaWNhdGlvbkFiaWxpdHkiOiLlhobmu5HjgavkvJrorbDjgpLpgLLooYzjgZfjgabjgYTjgZ_jgIIiLCJhY2hpZXZlbWVudCI6IuODl-ODreOCuOOCp-OCr-ODiOODquODvOODgOODvOOBqOOBl-OBpuODl-ODreOCuOOCp-OCr-ODiOOCkuaIkOWKn-OBq-WwjuOBhOOBn-OAgiIsImF1dGhvciI6ImRpZDppb246RWlCV21zRTNTVk1TcU5EZ29VdFJidHBPQllaZkRuZUwwR2tCeWJFMEVvM1FEUTpleUprWld4MFlTSTZleUp3WVhSamFHVnpJanBiZXlKaFkzUnBiMjRpT2lKeVpYQnNZV05sSWl3aVpHOWpkVzFsYm5RaU9uc2ljSFZpYkdsalMyVjVjeUk2VzNzaWFXUWlPaUpyWlhrdE1TSXNJbkIxWW14cFkwdGxlVXAzYXlJNmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lKT1dGaHJTVFZWY3kxalIxazNXSEJOYWxVelVXNU5UMDF1VVMxUGJXbFlRbXN4TTBSSWMydHhaQzFuSWl3aWVTSTZJbEpCTW1GRmIybFFUWFpwYkUxd05rMWhaMU5UVjFSSlEzQkNZV1IyWm1GVVJHMHhUbFYyWDBoNGVtc2lmU3dpY0hWeWNHOXpaWE1pT2xzaVlYVjBhR1Z1ZEdsallYUnBiMjRpTENKclpYbEJaM0psWlcxbGJuUWlYU3dpZEhsd1pTSTZJa1ZqWkhOaFUyVmpjREkxTm1zeFZtVnlhV1pwWTJGMGFXOXVTMlY1TWpBeE9TSjlYWDE5WFN3aWRYQmtZWFJsUTI5dGJXbDBiV1Z1ZENJNklrVnBRemQ0YW1scmFHaEhjbmh1U0c1YWFUbFFNV05ZUjBsaWVWZFBaMUZQZGxsUk1qbHBOR1IwVkdKTmMzY2lmU3dpYzNWbVptbDRSR0YwWVNJNmV5SmtaV3gwWVVoaGMyZ2lPaUpGYVVSaWRIRTFNMHRoUlVsa2EwMVVjRzUzU1hreFl6TlFWbXh2UzBsdlpVbERTSGt5WlRVM2VqbDFTbTlSSWl3aWNtVmpiM1psY25sRGIyMXRhWFJ0Wlc1MElqb2lSV2xEVjIxbU4yMU5Za3B2TURocFJ6RkJia2hoT1ZKVVNVRlJTM0YyV2xGaVUxOUVaRGxhTnprelVUQjFkeUo5ZlEiLCJhbnN3ZXJEYXRlIjoiMjAyMi0wMy0wMVQwOToyNzozNy41ODBaIn19LCJzdWIiOiJkaWQ6aW9uOkVpQldtc0UzU1ZNU3FORGdvVXRSYnRwT0JZWmZEbmVMMEdrQnliRTBFbzNRRFE6ZXlKa1pXeDBZU0k2ZXlKd1lYUmphR1Z6SWpwYmV5SmhZM1JwYjI0aU9pSnlaWEJzWVdObElpd2laRzlqZFcxbGJuUWlPbnNpY0hWaWJHbGpTMlY1Y3lJNlczc2lhV1FpT2lKclpYa3RNU0lzSW5CMVlteHBZMHRsZVVwM2F5STZleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSk9XRmhyU1RWVmN5MWpSMWszV0hCTmFsVXpVVzVOVDAxdVVTMVBiV2xZUW1zeE0wUkljMnR4WkMxbklpd2llU0k2SWxKQk1tRkZiMmxRVFhacGJFMXdOazFoWjFOVFYxUkpRM0JDWVdSMlptRlVSRzB4VGxWMlgwaDRlbXNpZlN3aWNIVnljRzl6WlhNaU9sc2lZWFYwYUdWdWRHbGpZWFJwYjI0aUxDSnJaWGxCWjNKbFpXMWxiblFpWFN3aWRIbHdaU0k2SWtWalpITmhVMlZqY0RJMU5tc3hWbVZ5YVdacFkyRjBhVzl1UzJWNU1qQXhPU0o5WFgxOVhTd2lkWEJrWVhSbFEyOXRiV2wwYldWdWRDSTZJa1ZwUXpkNGFtbHJhR2hIY25odVNHNWFhVGxRTVdOWVIwbGllVmRQWjFGUGRsbFJNamxwTkdSMFZHSk5jM2NpZlN3aWMzVm1abWw0UkdGMFlTSTZleUprWld4MFlVaGhjMmdpT2lKRmFVUmlkSEUxTTB0aFJVbGthMDFVY0c1M1NYa3hZek5RVm14dlMwbHZaVWxEU0hreVpUVTNlamwxU205Uklpd2ljbVZqYjNabGNubERiMjF0YVhSdFpXNTBJam9pUldsRFYyMW1OMjFOWWtwdk1EaHBSekZCYmtoaE9WSlVTVUZSUzNGMldsRmlVMTlFWkRsYU56a3pVVEIxZHlKOWZRIiwibmJmIjoxNjQ2MTI2ODU3LCJpc3MiOiJkaWQ6aW9uOkVpQldtc0UzU1ZNU3FORGdvVXRSYnRwT0JZWmZEbmVMMEdrQnliRTBFbzNRRFE6ZXlKa1pXeDBZU0k2ZXlKd1lYUmphR1Z6SWpwYmV5SmhZM1JwYjI0aU9pSnlaWEJzWVdObElpd2laRzlqZFcxbGJuUWlPbnNpY0hWaWJHbGpTMlY1Y3lJNlczc2lhV1FpT2lKclpYa3RNU0lzSW5CMVlteHBZMHRsZVVwM2F5STZleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSk9XRmhyU1RWVmN5MWpSMWszV0hCTmFsVXpVVzVOVDAxdVVTMVBiV2xZUW1zeE0wUkljMnR4WkMxbklpd2llU0k2SWxKQk1tRkZiMmxRVFhacGJFMXdOazFoWjFOVFYxUkpRM0JDWVdSMlptRlVSRzB4VGxWMlgwaDRlbXNpZlN3aWNIVnljRzl6WlhNaU9sc2lZWFYwYUdWdWRHbGpZWFJwYjI0aUxDSnJaWGxCWjNKbFpXMWxiblFpWFN3aWRIbHdaU0k2SWtWalpITmhVMlZqY0RJMU5tc3hWbVZ5YVdacFkyRjBhVzl1UzJWNU1qQXhPU0o5WFgxOVhTd2lkWEJrWVhSbFEyOXRiV2wwYldWdWRDSTZJa1ZwUXpkNGFtbHJhR2hIY25odVNHNWFhVGxRTVdOWVIwbGllVmRQWjFGUGRsbFJNamxwTkdSMFZHSk5jM2NpZlN3aWMzVm1abWw0UkdGMFlTSTZleUprWld4MFlVaGhjMmdpT2lKRmFVUmlkSEUxTTB0aFJVbGthMDFVY0c1M1NYa3hZek5RVm14dlMwbHZaVWxEU0hreVpUVTNlamwxU205Uklpd2ljbVZqYjNabGNubERiMjF0YVhSdFpXNTBJam9pUldsRFYyMW1OMjFOWWtwdk1EaHBSekZCYmtoaE9WSlVTVUZSUzNGMldsRmlVMTlFWkRsYU56a3pVVEIxZHlKOWZRIn0',
  signature: 'tgYytslGCJafj2vvrhVLjNnotsaZ2OQTB1k6FsHMG45cgm7a528xz_ZHAAOk1P2FVAmOPnWAmxm3CN53l1Gv-g'
};

const decodedHeader = {
  "alg": "ES256K",
  "typ": "JWT"
};

const decodedPayload = {
  "vc": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://github.com/DataSignInc/trusted-web-vocab/blob/f0780b88084cfbae3b119473362b2d1e1c807ab9/schema.jsonld"
    ],
    "type": [
      "VerifiableCredential",
      "ReferenceCredential"
    ],
    "credentialSubject": {
      "relationship": "boss",
      "communicationAbility": "円滑に会議を進行していた。",
      "achievement": "プロジェクトリーダーとしてプロジェクトを成功に導いた。",
      "author": "did:ion:EiBWmsE3SVMSqNDgoUtRbtpOBYZfDneL0GkBybE0Eo3QDQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJOWFhrSTVVcy1jR1k3WHBNalUzUW5NT01uUS1PbWlYQmsxM0RIc2txZC1nIiwieSI6IlJBMmFFb2lQTXZpbE1wNk1hZ1NTV1RJQ3BCYWR2ZmFURG0xTlV2X0h4emsifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iLCJrZXlBZ3JlZW1lbnQiXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XX19XSwidXBkYXRlQ29tbWl0bWVudCI6IkVpQzd4amlraGhHcnhuSG5aaTlQMWNYR0lieVdPZ1FPdllRMjlpNGR0VGJNc3cifSwic3VmZml4RGF0YSI6eyJkZWx0YUhhc2giOiJFaURidHE1M0thRUlka01UcG53SXkxYzNQVmxvS0lvZUlDSHkyZTU3ejl1Sm9RIiwicmVjb3ZlcnlDb21taXRtZW50IjoiRWlDV21mN21NYkpvMDhpRzFBbkhhOVJUSUFRS3F2WlFiU19EZDlaNzkzUTB1dyJ9fQ",
      "answerDate": "2022-03-01T09:27:37.580Z"
    }
  },
  "sub": "did:ion:EiBWmsE3SVMSqNDgoUtRbtpOBYZfDneL0GkBybE0Eo3QDQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJOWFhrSTVVcy1jR1k3WHBNalUzUW5NT01uUS1PbWlYQmsxM0RIc2txZC1nIiwieSI6IlJBMmFFb2lQTXZpbE1wNk1hZ1NTV1RJQ3BCYWR2ZmFURG0xTlV2X0h4emsifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iLCJrZXlBZ3JlZW1lbnQiXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XX19XSwidXBkYXRlQ29tbWl0bWVudCI6IkVpQzd4amlraGhHcnhuSG5aaTlQMWNYR0lieVdPZ1FPdllRMjlpNGR0VGJNc3cifSwic3VmZml4RGF0YSI6eyJkZWx0YUhhc2giOiJFaURidHE1M0thRUlka01UcG53SXkxYzNQVmxvS0lvZUlDSHkyZTU3ejl1Sm9RIiwicmVjb3ZlcnlDb21taXRtZW50IjoiRWlDV21mN21NYkpvMDhpRzFBbkhhOVJUSUFRS3F2WlFiU19EZDlaNzkzUTB1dyJ9fQ",
  "nbf": 1646126857,
  "iss": "did:ion:EiBWmsE3SVMSqNDgoUtRbtpOBYZfDneL0GkBybE0Eo3QDQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJOWFhrSTVVcy1jR1k3WHBNalUzUW5NT01uUS1PbWlYQmsxM0RIc2txZC1nIiwieSI6IlJBMmFFb2lQTXZpbE1wNk1hZ1NTV1RJQ3BCYWR2ZmFURG0xTlV2X0h4emsifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iLCJrZXlBZ3JlZW1lbnQiXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XX19XSwidXBkYXRlQ29tbWl0bWVudCI6IkVpQzd4amlraGhHcnhuSG5aaTlQMWNYR0lieVdPZ1FPdllRMjlpNGR0VGJNc3cifSwic3VmZml4RGF0YSI6eyJkZWx0YUhhc2giOiJFaURidHE1M0thRUlka01UcG53SXkxYzNQVmxvS0lvZUlDSHkyZTU3ejl1Sm9RIiwicmVjb3ZlcnlDb21taXRtZW50IjoiRWlDV21mN21NYkpvMDhpRzFBbkhhOVJUSUFRS3F2WlFiU19EZDlaNzkzUTB1dyJ9fQ"
};