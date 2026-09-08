// よくある問い合わせ FAQデータ
const faq = {
        account: "アカウントの登録や利用方法については、案内に沿って確認してください。解決しない場合は、発生した状況を添えて問い合わせてください。",
        password: "パスワードを忘れた場合は、再設定の手続きを行ってください。再設定できない場合は、表示されたメッセージを添えて問い合わせてください。",
        network: "接続状況を確認し、いったん接続を切ってから再接続してください。改善しない場合は、発生した日時と状況を添えて問い合わせてください。",
        application: "アプリケーションを再起動し、必要に応じて更新を確認してください。改善しない場合は、表示されたメッセージを添えて問い合わせてください。",
        device: "電源やケーブルの接続を確認し、機器を再起動してください。改善しない場合は、機器名と症状を添えて問い合わせてください。"
};

// HTML部品取得
const questionSelect = document.getElementById("questionSelect");
const answer = document.getElementById("answer");

// FAQ表示
if (questionSelect && answer) {
        questionSelect.addEventListener("change", function () {
                answer.textContent = faq[this.value] || "";
        });
}

// 手順書検索機能
const searchBox = document.getElementById("searchBox");

if (searchBox) {
        // 検索されたら実行
        searchBox.addEventListener("input", function () {
                // 入力文字取得
                const keyword = this.value.toLowerCase();
                // 手順書一覧取得
                const links = document.querySelectorAll("#manualList li");

                // 一件ずつ判定
                links.forEach(function (item) {
                        // 部分一致検索
                        const matches = item.textContent.toLowerCase().includes(keyword);
                        item.style.display = matches ? "" : "none";
                });
        });
}