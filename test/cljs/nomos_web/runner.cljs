(ns nomos-web.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [nomos-web.core-test]))

(doo-tests 'nomos-web.core-test)
