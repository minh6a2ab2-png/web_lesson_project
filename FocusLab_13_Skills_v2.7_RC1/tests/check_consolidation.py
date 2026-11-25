#!/usr/bin/env python3
# RC1 active definition checker; baseline tests remain in sibling v2.5.
from pathlib import Path
import runpy
runpy.run_path(str(Path(__file__).with_name('test_rc1.py')),run_name='__main__')
