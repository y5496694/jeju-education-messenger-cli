# 제주특별자치도교육청 메신저 CLI

제주 지역 전용 CLI와 에이전트 스킬입니다. 설치된 원본 프로그램의 해시와 실제 스키마를 검증한 로컬 SQLite 캐시 조회를 지원합니다. REA 근거는 `ANALYSIS.md`, `drivers/profiles.json`, `research/`에 있습니다.

서버 로그인·서버 검색·전송·첨부 다운로드는 실제 계정으로 검증하지 않았습니다. 원본 프로그램·설치 파일·개인 캐시는 포함하지 않습니다. 원본 프로그램은 교육청 공식 경로에서 설치하세요.

```powershell
node narae.mjs status
node narae.mjs accounts --help
```

표준 사용법은 [공통 CLI 안내](COMMON-CLI.md), 에이전트 절차는 [스킬](skills/jeju-education-messenger-cli/SKILL.md)을 참조하세요. Node.js 22.19 이상, MIT 라이선스입니다.
