#!/usr/bin/env node
import {run} from './cli.mjs';
if(process.argv.slice(2).some(a=>a==='--region'||a.startsWith('--region=')))throw Error('지역이 고정된 CLI입니다.');
run(['--region',"제주",...process.argv.slice(2)]).then(value=>process.stdout.write(JSON.stringify(value,null,2)+'\n')).catch(error=>{process.stderr.write(error.message+'\n');process.exitCode=1;});
