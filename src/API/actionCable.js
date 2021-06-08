import ActionCable from "actioncable"
import { domain } from "./env"
const cable = ActionCable.createConsumer(`ws://${domain}/cable`)
export function connectToCable() {
  cable.subscriptions.create(
    { channel: "GameChannel" },
    {
      received(data) {
        console.log("received", data)
      },
    }
  )
}
