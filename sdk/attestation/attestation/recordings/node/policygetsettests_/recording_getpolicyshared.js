let nock = require('nock');

module.exports.hash = "667dd6e5b5ab24183adf7df368aef394";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fattest.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'afd4e2f0-1dfd-43d3-817e-10ce6f252400',
  'x-ms-ests-server',
  '2.1.11774.11 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AiWs8x1H8-VOg1AFk9msOO681LWYCAAAAMOGP9gOAAAA; expires=Fri, 25-Jun-2021 00:01:29 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 26 May 2021 00:01:29 GMT',
  'Content-Length',
  '1317'
]);

nock('https://shareduks.uks.attest.azure.net:443', {"encodedQueryParams":true})
  .get('/policies/SgxEnclave')
  .query(true)
  .reply(200, {"token":"eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vc2hhcmVkdWtzLnVrcy5hdHRlc3QuYXp1cmUubmV0L2NlcnRzIiwia2lkIjoiR2czNUlzOVAyYWpTS2ZDRXJjZmhqajFkbU5FMnF2Sy9XOTAvQWtwTE1LST0iLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MjE5OTA4ODksImlhdCI6MTYyMTk4NzI4OSwiaXNzIjoiaHR0cHM6Ly9zaGFyZWR1a3MudWtzLmF0dGVzdC5henVyZS5uZXQiLCJuYmYiOjE2MjE5ODcyODksIngtbXMtcG9saWN5IjoiZXlKaGJHY2lPaUp1YjI1bEluMC5leUpCZEhSbGMzUmhkR2x2YmxCdmJHbGplU0k2SW1SdFZubGpNbXgyWW1vd1owMVROSGRQTWtZeFpFZG9kbU50YkRaWldGSndZakkxZVdSWGVHeGpNM001VUdsQ2QxcFlTblJoV0ZGdlMxUjBPVTh5Ykhwak0xWm9ZbTFPYkdOdVZuTmFXRTQzV1hwd1ltUkliSGRhVkRBNVNXNW5kR0pZVFhSak1tUTBURmRzZWt4WFVteFpibFp1V2pKR2FXSkhWV2xZVTBFNVVHbENjR016VGpGYVUyZ3daVmhDYkZCVFNuQmplVEZyV2xkS01Wb3laR2haYlhoc1NXbDNaMlJ0Um5Oa1YxVTVXWGsxTWxsWGVERmFVMnMzV1hwd1ltUkliSGRhVkRBNVNXNW5kR0pZVFhSak1tUTBURmN4ZVdNeWJHNWliVlo1U1d3d1oxQlVOR2RoV0U1NlpGZFZiMlJJYkhkYVZEQnBZekprTkV4WE1YbGpNbXh1WW0xV2VVbHBkMmRrYlVaelpGZFZPVmw1TlRKWlYzZ3hXbE5yTjFsNmNHSmtTR3gzV2xRd09VbHVaM1JpV0UxMFl6SmtORXhYTVhsYVZ6VnFZa2RHTWxwVFNtUkpSREF0U1Vkc2VtTXpWbXhMU0ZJMVkwZFZPVWx1VG01bFF6RjBZMjFXZFZreWVHaGtiVlZwVEVOQ01sbFhlREZhVkRGcVRHNWFhR0pJVm14TFZIUnFUMngwTUdWWVFteFFWREJwWlVNeGRHTjVNWHBhTTJkMFkwaEtkbHBJVm1wa1F6RndXa05LWkVsRU1DMUpSMng2WXpOV2JFdElValZqUjFVNVNXNUNlV0l5VWpGWk0xRjBZVmRSYVV4RFFqSlpWM2d4V2xReGFreHVXbWhpU0Zac1MxUjBhazlzZERCbFdFSnNVRlF3YVdWRE1YUmplVEY2V2pObmRHTXpXblZKYkRCblVGUTBaMkZZVG5wa1YxVnZaRWhzZDFwVU1HbGpNMXAxU1dsM1oyUnRSbk5rVjFVNVdYazFNbGxYZURGYVUyczNXWHB3WW1SSWJIZGFWREE1U1c1bmRHSllUWFJaV0ZJd1dsaE9NRmxZVW5CaU1qUjBaRWhzZDFwVFNtUkpSREF0U1Vkc2VtTXpWbXhMU0ZJMVkwZFZPVWx1VW14YVUwbHpTVWhhYUdKSVZteFFWMDExWkcxR2MyUlhWWEJQTXpBM0luMC4ifQ.QCHr7-aa9kAJE5j8ZdchebfNep71D0gsvdm1eiMnrAe7R1LyQ5LjQqyw7az_9dGYEknZ8XNSrhGk7IsbSAPVamZvwbBWsygwCKS-Ri18i70EtotqYczvqg1S7Kvy8ytNpM12zShTgOV37KCY96UOvtqUSrfd-4ChGeQk9gzwSqbAo0rnS6qaOWp2jm6a-k0878OZfS0-Luj_ARvFXRUBnMXf_WVaH2bb3rDRiab4Nafek6R-SRoJsHZ5zt88pwcyBpmfkrQduMahxgrshZFzBG6KYDdIaKspossVcvQvf-vYaj4DyczNnh5AMKGXfJYVqT_um070AnwJLq90w_5Eng"}, [
  'Connection',
  'close',
  'Date',
  'Wed, 26 May 2021 00:01:29 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel',
  'Content-Length',
  '1948',
  'x-ms-request-id',
  '00-de7262e66be14d882bf5cc2340dd60e0-0000000000000000-00',
  'x-ms-maa-service-version',
  '1.10.01598.0001'
]);

nock('https://shareduks.uks.attest.azure.net:443', {"encodedQueryParams":true})
  .get('/certs')
  .reply(200, {"keys":[{"x5c":["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RU52Y25CdmNtRjBhVzl1TVJRd0VnWURWUVFIREF0VFlXNTBZU0JEYkdGeVlURUxNQWtHQTFVRQpDQXdDUTBFeEN6QUpCZ05WQkFZVEFsVlRNQjRYRFRJeE1EUXdOekV3TWpnd01sb1hEVEk0TURRd056RXdNamd3Ck1sb3djREVpTUNBR0ExVUVBd3daU1c1MFpXd2dVMGRZSUZCRFN5QkRaWEowYVdacFkyRjBaVEVhTUJnR0ExVUUKQ2d3UlNXNTBaV3dnUTI5eWNHOXlZWFJwYjI0eEZEQVNCZ05WQkFjTUMxTmhiblJoSUVOc1lYSmhNUXN3Q1FZRApWUVFJREFKRFFURUxNQWtHQTFVRUJoTUNWVk13V1RBVEJnY3Foa2pPUFFJQkJnZ3Foa2pPUFFNQkJ3TkNBQVNpCnRuZzVwalY5WHJjZFZYNGtjWkJVTCtvWDhCWUZXMVF5ZS9EUnh1ZmNnTEJiaks1NWxGTGRGNXRva2hITGhMWlkKVlNuWTk2ZDlQeFZoSjRaM3haTndvNElDbXpDQ0FwY3dId1lEVlIwakJCZ3dGb0FVME9pcTJuWFgrUzVKRjVnOApleFJsME5YeVdVMHdYd1lEVlIwZkJGZ3dWakJVb0ZLZ1VJWk9hSFIwY0hNNkx5OWhjR2t1ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5elozZ3ZZMlZ5ZEdsbWFXTmhkR2x2Ymk5Mk1pOXdZMnRqY213L1kyRTkKY0hKdlkyVnpjMjl5TUIwR0ExVWREZ1FXQkJTZjkxenh0aXppQUNKTzUxVEVRcTBaUjdwcG9qQU9CZ05WSFE4QgpBZjhFQkFNQ0JzQXdEQVlEVlIwVEFRSC9CQUl3QURDQ0FkUUdDU3FHU0liNFRRRU5BUVNDQWNVd2dnSEJNQjRHCkNpcUdTSWI0VFFFTkFRRUVFT1l3WlViK1NxbUdhbU5mMVNWeWk3a3dnZ0ZrQmdvcWhraUcrRTBCRFFFQ01JSUIKVkRBUUJnc3Foa2lHK0UwQkRRRUNBUUlCRVRBUUJnc3Foa2lHK0UwQkRRRUNBZ0lCRVRBUUJnc3Foa2lHK0UwQgpEUUVDQXdJQkFqQVFCZ3NxaGtpRytFMEJEUUVDQkFJQkJEQVFCZ3NxaGtpRytFMEJEUUVDQlFJQkFUQVJCZ3NxCmhraUcrRTBCRFFFQ0JnSUNBSUF3RUFZTEtvWklodmhOQVEwQkFnY0NBUVl3RUFZTEtvWklodmhOQVEwQkFnZ0MKQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ2tDQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ29DQVFBd0VBWUxLb1pJaHZoTgpBUTBCQWdzQ0FRQXdFQVlMS29aSWh2aE5BUTBCQWd3Q0FRQXdFQVlMS29aSWh2aE5BUTBCQWcwQ0FRQXdFQVlMCktvWklodmhOQVEwQkFnNENBUUF3RUFZTEtvWklodmhOQVEwQkFnOENBUUF3RUFZTEtvWklodmhOQVEwQkFoQUMKQVFBd0VBWUxLb1pJaHZoTkFRMEJBaEVDQVFvd0h3WUxLb1pJaHZoTkFRMEJBaElFRUJFUkFnUUJnQVlBQUFBQQpBQUFBQUFBd0VBWUtLb1pJaHZoTkFRMEJBd1FDQUFBd0ZBWUtLb1pJaHZoTkFRMEJCQVFHQUpCdTFRQUFNQThHCkNpcUdTSWI0VFFFTkFRVUtBUUF3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUpCTHZsN010endRcC9yR1RJUSsKbjlhVUZSeVpFZC9OREJJS2dTQkIvdFlXQWlBVDZWdWt4bWx1bUZaY3NrcVlDc2VTUEsrTFBZTEJaU3ZMS003YwppNGloWFE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDbHpDQ0FqNmdBd0lCQWdJVkFORG9xdHAxMS9rdVNSZVlQSHNVWmREVjhsbE5NQW9HQ0NxR1NNNDlCQU1DCk1HZ3hHakFZQmdOVkJBTU1FVWx1ZEdWc0lGTkhXQ0JTYjI5MElFTkJNUm93R0FZRFZRUUtEQkZKYm5SbGJDQkQKYjNKd2IzSmhkR2x2YmpFVU1CSUdBMVVFQnd3TFUyRnVkR0VnUTJ4aGNtRXhDekFKQmdOVkJBZ01Ba05CTVFzdwpDUVlEVlFRR0V3SlZVekFlRncweE9EQTFNakV4TURRMU1EaGFGdzB6TXpBMU1qRXhNRFExTURoYU1IRXhJekFoCkJnTlZCQU1NR2tsdWRHVnNJRk5IV0NCUVEwc2dVSEp2WTJWemMyOXlJRU5CTVJvd0dBWURWUVFLREJGSmJuUmwKYkNCRGIzSndiM0poZEdsdmJqRVVNQklHQTFVRUJ3d0xVMkZ1ZEdFZ1EyeGhjbUV4Q3pBSkJnTlZCQWdNQWtOQgpNUXN3Q1FZRFZRUUdFd0pWVXpCWk1CTUdCeXFHU000OUFnRUdDQ3FHU000OUF3RUhBMElBQkw5cStOTXAySU9nCnRkbDFiay91V1o1K1RHUW04YUNpOHo3OGZzK2ZLQ1EzZCt1RHpYblZUQVQyWmhEQ2lmeUl1Snd2TjN3TkJwOWkKSEJTU01KTUpyQk9qZ2Jzd2diZ3dId1lEVlIwakJCZ3dGb0FVSW1VTTFscWROSW56ZzdTVlVyOVFHemtuQnF3dwpVZ1lEVlIwZkJFc3dTVEJIb0VXZ1E0WkJhSFIwY0hNNkx5OWpaWEowYVdacFkyRjBaWE11ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5SmJuUmxiRk5IV0ZKdmIzUkRRUzVqY213d0hRWURWUjBPQkJZRUZORG8KcXRwMTEva3VTUmVZUEhzVVpkRFY4bGxOTUE0R0ExVWREd0VCL3dRRUF3SUJCakFTQmdOVkhSTUJBZjhFQ0RBRwpBUUgvQWdFQU1Bb0dDQ3FHU000OUJBTUNBMGNBTUVRQ0lDLzlqKzg0VCtIenRWTy9zT1FCV0piU2QrLzJ1ZXhLCjQrYUEwamNGQkxjcEFpQTNkaE1yRjVjRDUydDZGcU12QUlwajhYZEdteTJiZWVsakxKSytwenBjUkE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDampDQ0FqU2dBd0lCQWdJVUltVU0xbHFkTkluemc3U1ZVcjlRR3prbkJxd3dDZ1lJS29aSXpqMEVBd0l3CmFERWFNQmdHQTFVRUF3d1JTVzUwWld3Z1UwZFlJRkp2YjNRZ1EwRXhHakFZQmdOVkJBb01FVWx1ZEdWc0lFTnYKY25CdmNtRjBhVzl1TVJRd0VnWURWUVFIREF0VFlXNTBZU0JEYkdGeVlURUxNQWtHQTFVRUNBd0NRMEV4Q3pBSgpCZ05WQkFZVEFsVlRNQjRYRFRFNE1EVXlNVEV3TkRFeE1Wb1hEVE16TURVeU1URXdOREV4TUZvd2FERWFNQmdHCkExVUVBd3dSU1c1MFpXd2dVMGRZSUZKdmIzUWdRMEV4R2pBWUJnTlZCQW9NRVVsdWRHVnNJRU52Y25CdmNtRjAKYVc5dU1SUXdFZ1lEVlFRSERBdFRZVzUwWVNCRGJHRnlZVEVMTUFrR0ExVUVDQXdDUTBFeEN6QUpCZ05WQkFZVApBbFZUTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFQzZuRXdNRElZWk9qL2lQV3NDemFFS2k3CjFPaU9TTFJGaFdHamJuQlZKZlZua1k0dTNJamtEWVlMME14TzRtcXN5WWpsQmFsVFZZeEZQMnNKQks1emxLT0IKdXpDQnVEQWZCZ05WSFNNRUdEQVdnQlFpWlF6V1dwMDBpZk9EdEpWU3YxQWJPU2NHckRCU0JnTlZIUjhFU3pCSgpNRWVnUmFCRGhrRm9kSFJ3Y3pvdkwyTmxjblJwWm1sallYUmxjeTUwY25WemRHVmtjMlZ5ZG1salpYTXVhVzUwClpXd3VZMjl0TDBsdWRHVnNVMGRZVW05dmRFTkJMbU55YkRBZEJnTlZIUTRFRmdRVUltVU0xbHFkTkluemc3U1YKVXI5UUd6a25CcXd3RGdZRFZSMFBBUUgvQkFRREFnRUdNQklHQTFVZEV3RUIvd1FJTUFZQkFmOENBUUV3Q2dZSQpLb1pJemowRUF3SURTQUF3UlFJZ1FRcy8wOHJ5Y2RQYXVDRms4VVBRWENNQWxzbG9CZTdOd2FRR1RjZHBhMEVDCklRQ1V0OFNHdnhLbWpwY00vejBXUDlEdm84aDJrNWR1MWlXRGRCa0FuKzBpaUE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCgAwDQYJKoZIhvcNAQELBQADggEBADQ1I/6JyNEP9KzMrdWOgLpidZUQUKHcZJh1gU6iHkqCSr4wsncc2hpzk6WuS74Ebmx4YacfQIPiha/iRBO8r/B6Awhw8gIWfIiUVRdRNI6NCzbyUU5MQENSfQ1l4ecVea50wqnLQqdVv9COkySuuips0ldZC4h0WXvGM0+3D40A9cUE8/YXZM5b6seiav7FkLcxntkgCXh/4IyUoeou6kURt2Q6NCEjiE3ceCce/hYKcfRsmbayF7dpniwlAoF/QI0JDO2jQzxQO8U7MpPxtmFan7TtCutUYkMTu1hVPt9Zl3Ci7ukUme/eqRH0dbZ6XBANDPQEPizOKteB+G8AZt4="],"kid":"Gg35Is9P2ajSKfCErcfhjj1dmNE2qvK/W90/AkpLMKI=","kty":"RSA"},{"x5c":["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R0ExVUVBd3daU1c1MFpXd2dVMGRZSUZCRFN5QkRaWEowYVdacFkyRjBaVEVhTUJnR0ExVUUKQ2d3UlNXNTBaV3dnUTI5eWNHOXlZWFJwYjI0eEZEQVNCZ05WQkFjTUMxTmhiblJoSUVOc1lYSmhNUXN3Q1FZRApWUVFJREFKRFFURUxNQWtHQTFVRUJoTUNWVk13V1RBVEJnY3Foa2pPUFFJQkJnZ3Foa2pPUFFNQkJ3TkNBQVNpCnRuZzVwalY5WHJjZFZYNGtjWkJVTCtvWDhCWUZXMVF5ZS9EUnh1ZmNnTEJiaks1NWxGTGRGNXRva2hITGhMWlkKVlNuWTk2ZDlQeFZoSjRaM3haTndvNElDbXpDQ0FwY3dId1lEVlIwakJCZ3dGb0FVME9pcTJuWFgrUzVKRjVnOApleFJsME5YeVdVMHdYd1lEVlIwZkJGZ3dWakJVb0ZLZ1VJWk9hSFIwY0hNNkx5OWhjR2t1ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5elozZ3ZZMlZ5ZEdsbWFXTmhkR2x2Ymk5Mk1pOXdZMnRqY213L1kyRTkKY0hKdlkyVnpjMjl5TUIwR0ExVWREZ1FXQkJTZjkxenh0aXppQUNKTzUxVEVRcTBaUjdwcG9qQU9CZ05WSFE4QgpBZjhFQkFNQ0JzQXdEQVlEVlIwVEFRSC9CQUl3QURDQ0FkUUdDU3FHU0liNFRRRU5BUVNDQWNVd2dnSEJNQjRHCkNpcUdTSWI0VFFFTkFRRUVFT1l3WlViK1NxbUdhbU5mMVNWeWk3a3dnZ0ZrQmdvcWhraUcrRTBCRFFFQ01JSUIKVkRBUUJnc3Foa2lHK0UwQkRRRUNBUUlCRVRBUUJnc3Foa2lHK0UwQkRRRUNBZ0lCRVRBUUJnc3Foa2lHK0UwQgpEUUVDQXdJQkFqQVFCZ3NxaGtpRytFMEJEUUVDQkFJQkJEQVFCZ3NxaGtpRytFMEJEUUVDQlFJQkFUQVJCZ3NxCmhraUcrRTBCRFFFQ0JnSUNBSUF3RUFZTEtvWklodmhOQVEwQkFnY0NBUVl3RUFZTEtvWklodmhOQVEwQkFnZ0MKQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ2tDQVFBd0VBWUxLb1pJaHZoTkFRMEJBZ29DQVFBd0VBWUxLb1pJaHZoTgpBUTBCQWdzQ0FRQXdFQVlMS29aSWh2aE5BUTBCQWd3Q0FRQXdFQVlMS29aSWh2aE5BUTBCQWcwQ0FRQXdFQVlMCktvWklodmhOQVEwQkFnNENBUUF3RUFZTEtvWklodmhOQVEwQkFnOENBUUF3RUFZTEtvWklodmhOQVEwQkFoQUMKQVFBd0VBWUxLb1pJaHZoTkFRMEJBaEVDQVFvd0h3WUxLb1pJaHZoTkFRMEJBaElFRUJFUkFnUUJnQVlBQUFBQQpBQUFBQUFBd0VBWUtLb1pJaHZoTkFRMEJBd1FDQUFBd0ZBWUtLb1pJaHZoTkFRMEJCQVFHQUpCdTFRQUFNQThHCkNpcUdTSWI0VFFFTkFRVUtBUUF3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUpCTHZsN010endRcC9yR1RJUSsKbjlhVUZSeVpFZC9OREJJS2dTQkIvdFlXQWlBVDZWdWt4bWx1bUZaY3NrcVlDc2VTUEsrTFBZTEJaU3ZMS003YwppNGloWFE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDbHpDQ0FqNmdBd0lCQWdJVkFORG9xdHAxMS9rdVNSZVlQSHNVWmREVjhsbE5NQW9HQ0NxR1NNNDlCQU1DCk1HZ3hHakFZQmdOVkJBTU1FVWx1ZEdWc0lGTkhXQ0JTYjI5MElFTkJNUm93R0FZRFZRUUtEQkZKYm5SbGJDQkQKYjNKd2IzSmhkR2x2YmpFVU1CSUdBMVVFQnd3TFUyRnVkR0VnUTJ4aGNtRXhDekFKQmdOVkJBZ01Ba05CTVFzdwpDUVlEVlFRR0V3SlZVekFlRncweE9EQTFNakV4TURRMU1EaGFGdzB6TXpBMU1qRXhNRFExTURoYU1IRXhJekFoCkJnTlZCQU1NR2tsdWRHVnNJRk5IV0NCUVEwc2dVSEp2WTJWemMyOXlJRU5CTVJvd0dBWURWUVFLREJGSmJuUmwKYkNCRGIzSndiM0poZEdsdmJqRVVNQklHQTFVRUJ3d0xVMkZ1ZEdFZ1EyeGhjbUV4Q3pBSkJnTlZCQWdNQWtOQgpNUXN3Q1FZRFZRUUdFd0pWVXpCWk1CTUdCeXFHU000OUFnRUdDQ3FHU000OUF3RUhBMElBQkw5cStOTXAySU9nCnRkbDFiay91V1o1K1RHUW04YUNpOHo3OGZzK2ZLQ1EzZCt1RHpYblZUQVQyWmhEQ2lmeUl1Snd2TjN3TkJwOWkKSEJTU01KTUpyQk9qZ2Jzd2diZ3dId1lEVlIwakJCZ3dGb0FVSW1VTTFscWROSW56ZzdTVlVyOVFHemtuQnF3dwpVZ1lEVlIwZkJFc3dTVEJIb0VXZ1E0WkJhSFIwY0hNNkx5OWpaWEowYVdacFkyRjBaWE11ZEhKMWMzUmxaSE5sCmNuWnBZMlZ6TG1sdWRHVnNMbU52YlM5SmJuUmxiRk5IV0ZKdmIzUkRRUzVqY213d0hRWURWUjBPQkJZRUZORG8KcXRwMTEva3VTUmVZUEhzVVpkRFY4bGxOTUE0R0ExVWREd0VCL3dRRUF3SUJCakFTQmdOVkhSTUJBZjhFQ0RBRwpBUUgvQWdFQU1Bb0dDQ3FHU000OUJBTUNBMGNBTUVRQ0lDLzlqKzg0VCtIenRWTy9zT1FCV0piU2QrLzJ1ZXhLCjQrYUEwamNGQkxjcEFpQTNkaE1yRjVjRDUydDZGcU12QUlwajhYZEdteTJiZWVsakxKSytwenBjUkE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDampDQ0FqU2dBd0lCQWdJVUltVU0xbHFkTkluemc3U1ZVcjlRR3prbkJxd3dDZ1lJS29aSXpqMEVBd0l3CmFERWFNQmdHQTFVRUF3d1JTVzUwWld3Z1UwZFlJRkp2YjNRZ1EwRXhHakFZQmdOVkJBb01FVWx1ZEdWc0lFTnYKY25CdmNtRjBhVzl1TVJRd0VnWURWUVFIREF0VFlXNTBZU0JEYkdGeVlURUxNQWtHQTFVRUNBd0NRMEV4Q3pBSgpCZ05WQkFZVEFsVlRNQjRYRFRFNE1EVXlNVEV3TkRFeE1Wb1hEVE16TURVeU1URXdOREV4TUZvd2FERWFNQmdHCkExVUVBd3dSU1c1MFpXd2dVMGRZSUZKdmIzUWdRMEV4R2pBWUJnTlZCQW9NRVVsdWRHVnNJRU52Y25CdmNtRjAKYVc5dU1SUXdFZ1lEVlFRSERBdFRZVzUwWVNCRGJHRnlZVEVMTUFrR0ExVUVDQXdDUTBFeEN6QUpCZ05WQkFZVApBbFZUTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFQzZuRXdNRElZWk9qL2lQV3NDemFFS2k3CjFPaU9TTFJGaFdHamJuQlZKZlZua1k0dTNJamtEWVlMME14TzRtcXN5WWpsQmFsVFZZeEZQMnNKQks1emxLT0IKdXpDQnVEQWZCZ05WSFNNRUdEQVdnQlFpWlF6V1dwMDBpZk9EdEpWU3YxQWJPU2NHckRCU0JnTlZIUjhFU3pCSgpNRWVnUmFCRGhrRm9kSFJ3Y3pvdkwyTmxjblJwWm1sallYUmxjeTUwY25WemRHVmtjMlZ5ZG1salpYTXVhVzUwClpXd3VZMjl0TDBsdWRHVnNVMGRZVW05dmRFTkJMbU55YkRBZEJnTlZIUTRFRmdRVUltVU0xbHFkTkluemc3U1YKVXI5UUd6a25CcXd3RGdZRFZSMFBBUUgvQkFRREFnRUdNQklHQTFVZEV3RUIvd1FJTUFZQkFmOENBUUV3Q2dZSQpLb1pJemowRUF3SURTQUF3UlFJZ1FRcy8wOHJ5Y2RQYXVDRms4VVBRWENNQWxzbG9CZTdOd2FRR1RjZHBhMEVDCklRQ1V0OFNHdnhLbWpwY00vejBXUDlEdm84aDJrNWR1MWlXRGRCa0FuKzBpaUE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCgAwDQYJKoZIhvcNAQELBQADgYEAQ5pbeFW7R7jnKVeOpqw4sQv0PcK3uaLWYL9CSGAaRQLcOioYXo+k2xJEkG7AnyBE8wCluawvXkzdtRlfNTWpVPx/S24WAWzj4+nlVQBX0eTnnMYXHroCwpTo5o9/O0Rila0+ny00ocpU/ABdFKgwAjfjuDQx1KjrWKRSVv8/8nQ="],"kid":"7O0yBbj48oMPKpBcshFxYo2TZeo/naWA6HrguQEwoUM=","kty":"RSA"}]}, [
  'Connection',
  'close',
  'Date',
  'Wed, 26 May 2021 00:01:29 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel',
  'Content-Length',
  '14330',
  'x-ms-request-id',
  '00-872d9914289f980b4e521c999e94b6c9-0000000000000000-00',
  'x-ms-maa-service-version',
  '1.10.01598.0001'
]);