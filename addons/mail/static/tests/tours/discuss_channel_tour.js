import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";

import { markup } from "@odoo/owl";

registry.category("web_tour.tours").add("discuss_channel_tour", {
    url: "/odoo/action-mail.action_discuss",
    steps: () => [
        {
            trigger: ".o-mail-DiscussSidebarCategory-channel .o-mail-DiscussSidebarCategory-add",
            content: markup(
                _t(
                    "<p>Channels make it easy to organize information across different topics and groups.</p> <p>Try to <b>create your first channel</b> (e.g. sales, marketing, product XYZ, after work party, etc).</p>"
                )
            ),
            tooltipPosition: "bottom",
            run: "click",
        },
        {
            isActive: ["auto"],
            trigger: ".o-discuss-ChannelSelector input",
            content: markup(_t("<p>Create a channel here.</p>")),
            tooltipPosition: "bottom",
            run: `edit SomeChannel_${new Date().getTime()}`,
        },
        {
            isActive: ["auto"],
            trigger: ".o-discuss-ChannelSelector-suggestion",
        },
        {
            trigger: ".o-discuss-ChannelSelector-list",
            content: markup(_t("<p>Create a public or private channel.</p>")),
            tooltipPosition: "right",
            run() {
                document.querySelector(".o-discuss-ChannelSelector-suggestion").click();
            },
        },
        {
            trigger: ".o-mail-Composer-input",
            content: markup(
                _t(
                    "<p><b>Write a message</b> to the members of the channel here.</p> <p>You can notify someone with <i>'@'</i> or link another channel with <i>'#'</i>. Start your message with <i>'/'</i> to get the list of possible commands.</p>"
                )
            ),
            tooltipPosition: "top",
            run: `edit SomeText_${new Date().getTime()}`,
        },
        {
            trigger: ".o-mail-Composer-send:enabled",
            content: _t("Post your message on the thread"),
            tooltipPosition: "top",
            run: "click",
        },
        {
            trigger: ".o-mail-Message",
            content: _t("Click on your message"),
            tooltipPosition: "top",
            run: "click",
        },
        {
            trigger: ".o-mail-Message [title='Expand']",
            content: _t("Expand options"),
            tooltipPosition: "top",
            run: "click",
        },
        {
            trigger: ".o-mail-Message [title='Mark as Todo']",
            content: markup(
                _t("Messages can be <b>starred</b> to remind you to check back later.")
            ),
            tooltipPosition: "bottom",
            run: "click",
        },
        {
            trigger: "button:contains(Starred)",
            content: _t(
                "Once a message has been starred, you can come back and review it at any time here."
            ),
            tooltipPosition: "bottom",
            run: "click",
        },
        {
            trigger: ".o-mail-DiscussSidebarCategory-chat .o-mail-DiscussSidebarCategory-add",
            content: markup(
                _t(
                    "<p><b>Chat with coworkers</b> in real-time using direct messages.</p><p><i>You might need to invite users from the Settings app first.</i></p>"
                )
            ),
            tooltipPosition: "bottom",
            run: "click",
        },
        {
            isActive: ["auto"],
            trigger: ".o-discuss-ChannelSelector",
        },
    ],
});
