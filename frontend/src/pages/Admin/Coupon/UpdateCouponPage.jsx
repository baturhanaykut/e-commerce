import { Button, Form, Input, Spin, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCouponPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const params = useParams();
  const couponId = params.id;
  console.log(couponId);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Kupon başarıyla güncellendi.");
        navigate("/admin/coupons");
      } else {
        message.error("Kupon güncellenirken bir hata oluştur");
      }
    } catch (error) {
      console.log("Kupon güncelleme hatası", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleCoupon = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`);

      if (!response.ok) {
        throw new Error("Verileri getirme hatası");
      }
      const data = await response.json();
      if (data) {
        form.setFieldsValue({
          code: data.code,
          discountPercent: data.discountPercent,
        });
      }
    } catch (error) {
      console.log("Veri hatası:", error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl, couponId, form]);

  useEffect(() => {
    fetchSingleCoupon();
  }, [fetchSingleCoupon]);

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Kupon Kod"
          name="code"
          rules={[
            {
              required: true,
              message: "Lütfen Kupon adını giriniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kupon İndirim Oranı"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: "Lütfen Kupon İndirim Oranını Giriniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Güncelle
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default UpdateCouponPage;
