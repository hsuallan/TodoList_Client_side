<template>
  <div class="add">
    <Button
      type="primary"
      @click="modal = true"
    >
      add item
    </Button>
    <Modal
      v-model="modal"
      title="Todoitem form"
      :loading="loading"
      @on-ok="postdata()"
    >
      <Form
        ref="itemform"
        :model="itemform"
      >
        <Form-item prop="Topcic">
          <Input
            v-model="itemform.Topic"
            placeholder="Topic"
            required
          />
        </Form-item>
        <Form-item prop="Dodate">
          <DatePicker
            v-model="itemform.Dodate"
            type="date"
            placeholder="Select date"
            style="width: 200px"
          />
        </Form-item>
        <Form-item prop="Content">
          <Input
            v-model="itemform.Content"
            type="textarea"
            autosize
            placeholder="Content"
            required
          />
        </Form-item>
        <Form-item prop="finish">
          <RadioGroup v-model="itemform.finish">
            <Radio label="finish" />
            <Radio label="unfinish" />
          </RadioGroup>
        </Form-item>
        <Form-item>
          <Button html-type="reset">
            reset
          </Button>
        </Form-item>
      </Form>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import cfg from "../config.js";
export default {
  name: "Additem",
  data() {
    return {
      itemform: {
        Topic: "",
        Content: "",
        Dodate: "",
        finish: ""
      },
      modal: false,
      loading: true
    };
  },
  methods: {
    postdata() {
      axios
        .post(`${cfg.apiAddress}/list`, {
          Topic: this.itemform.Topic,
          Content: this.itemform.Content,
          Date: this.itemform.Dodate,
          finish: this.itemform.finish
        })
        .then(response => {
          this.modal = false;
          alert(response.data.msg);
        })
        .catch(err => {
          alert(err);
        });
    },
  },
};
</script>

