(ns nomos-web.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [nomos-web.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
